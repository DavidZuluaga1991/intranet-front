import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private readonly MEMBER_EMAIL_REGEX = /\w*@codesociety.dev\b/;
  private readonly unsubscribe$ = new Subject<void>();

  public isBlocked: boolean = false;
  public showPassword: boolean = false;
  public loginInProgress: boolean = false;
  public submitText: string = 'Iniciar sesión';

  public loginForm = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.pattern(this.EMAIL_REGEX), Validators.pattern(this.MEMBER_EMAIL_REGEX)],
    ],
    password: ['', Validators.required],
  });

  get username(): AbstractControl | null {
    return this.loginForm.get('username');
  }
  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.blockedCountDown();

    this.authService
      .getRemainingAttempts$()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        const remainingAttempts = <number>res;
        if (remainingAttempts === 0) {
          this.isBlocked = true;
          window.localStorage.setItem('cs-block', (Date.now() + 2 * 60000).toString());
          this.blockedCountDown();
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private blockedCountDown(): void {
    const existsBlockedDate = !!parseInt(window.localStorage.getItem('cs-block') || '');
    if (existsBlockedDate) {
      this.isBlocked = true;
      const countDownDate = new Date(parseInt(window.localStorage.getItem('cs-block') || '')).getTime();

      const countDownInterval = setInterval(() => {
        const now = new Date().getTime();

        const distance = countDownDate - now;
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        this.submitText = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        if (distance < 0) {
          clearInterval(countDownInterval);
          this.isBlocked = false;
          this.submitText = 'Iniciar sesión';
          this.authService.resetRemainingAttempts();
          window.localStorage.removeItem('cs-block');
        }
      }, 1000);
    }
  }

  public togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  public async onSubmit(): Promise<void> {
    if (this.loginForm.valid && !this.isBlocked) {
      this.loginInProgress = true;
      this.submitText = 'Procesando';
      const data = {
        username: this.username?.value,
        password: this.password?.value,
      };

      const response = await this.authService.login(data);

      const severity = response.ok ? 'success' : 'error';
      const summary = severity[0].toUpperCase() + severity.slice(1).toLowerCase();
      const detail = response.message;

      this.messageService.add({ severity, summary, detail });
      this.loginInProgress = false;
      this.submitText = 'Iniciar sesión';
    }
  }
}
