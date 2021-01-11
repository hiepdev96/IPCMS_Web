import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../common/model/generic-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  keyUserId = '123_123_123_123_123_123_123';
  keySecretKey = '123_abcccccccccccccccc';
  keyUser = '123_123_123_123_123_123_123_123_abcccccccccccccccc';
  constructor(
    private router: Router
  ) { }

  getUserId(): string {
    return localStorage.getItem(this.keyUserId);
  }

  getSecretKey(): string {
    return localStorage.getItem(this.keySecretKey);
  }

  setUserIDAndSecretKey(user_id: string, secret_key: string): void {
    localStorage.setItem(this.keyUserId, user_id);
    localStorage.setItem(this.keySecretKey, secret_key);
  }
  removeUserIdAndSecretkey(): void {
    localStorage.removeItem(this.keyUserId);
    localStorage.removeItem(this.keyUserId);
  }
  logout(): void {
    this.removeUserIdAndSecretkey();
    this.removeUser();
    this.router.navigateByUrl('/dashboard');
  }
  alreadyLogin(): boolean {
    return this.getUserId() != null && this.getSecretKey() != null;
  }
  setUser(user: User): void {
    localStorage.setItem(this.keyUser, JSON.stringify(user));
  }
  removeUser(): void {
    localStorage.removeItem(this.keyUser);
  }
  getUser(): User {
    const res = localStorage.getItem(this.keyUser);
    if (res) {
      return User.fromJS(JSON.parse(res));
    }
    return null;
  }
  getRole(): string {
    const res = this.getUser();
    if (res) {
      return res.role;
    }
    return null;
  }
}
