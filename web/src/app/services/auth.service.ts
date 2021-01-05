import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserId(): string{
    return 'TELESALE1';
  }

  getSecretKey(): string{
    return 'C5C631CF945CCAA931C6F03F0F800B37';
  }
}
