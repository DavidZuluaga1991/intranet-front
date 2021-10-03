import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private readonly failedAttempts = new BehaviorSubject<number>(5);

  constructor() {}

  public login(data: { username: string; password: string }): Promise<{ ok: boolean; message: string }> {
    const isUndefined = data.username.startsWith('undefined');
    const defer = isUndefined ? 3000 : 1500;

    return new Promise(resolve => {
      setTimeout(() => {
        if (isUndefined) {
          this.failedAttempts.next(<number>this.failedAttempts.getValue() - 1);
          resolve({ ok: false, message: 'Credenciales incorrectas' });
        } else resolve({ ok: true, message: '¡Bienvenido!' });
      }, defer);
    });
  }

  public getRemainingAttempts$(): Observable<number> {
    return this.failedAttempts.asObservable();
  }
}
