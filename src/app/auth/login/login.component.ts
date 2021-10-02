import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent {
  private readonly EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private readonly MEMBER_EMAIL_REGEX = /\w*@codesociety.dev\b/;

  public showPassword: boolean = false;
  public loginInProgress: boolean = false;

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

  public togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  public async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      this.loginInProgress = true;
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
    }
  }
}
