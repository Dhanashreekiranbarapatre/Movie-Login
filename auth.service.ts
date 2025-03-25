import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  signUp(user:{username:string, email:string, password:string})
  {
    localStorage.setItem('user',JSON.stringify(user));
  }
  getUserName()
  {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    return user.username || '';
  }

  login(username:string,password:string):boolean
  {
   const user = JSON.parse(localStorage.getItem('user') || '{username}')
   if(user.username === username && user.password === password)
   {
    localStorage.setItem('isAuthenticated','true')
    return true;
   }
   else{
    return false;
   }
  }
  logout()
  {
    localStorage.removeItem('isAthenticated');
    this.router.navigate(['/']);
  }

  isAthenticated()
  {
    return localStorage.getItem('isAthenticated') === 'true';
  }
}
