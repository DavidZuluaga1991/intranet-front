import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}

  public login(data: { username: string; password: string }): Promise<{ ok: boolean; message: string }> {
    const isUndefined = data.username.startsWith('undefined');
    const defer = isUndefined ? 3000 : 1500;

    return new Promise(resolve => {
      setTimeout(() => {
        if (isUndefined) resolve({ ok: false, message: 'Credenciales incorrectas' });
        else resolve({ ok: true, message: '¡Bienvenido!' });
      }, defer);
    });
  }
}
