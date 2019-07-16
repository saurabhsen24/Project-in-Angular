import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    if(username === 'Saurabh' && password === 'saurabh24'){
         sessionStorage.setItem('authenticateUser',username);     
         return true;
    }     
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  loggedOut(){
    sessionStorage.removeItem('authenticateUser');
  }
}
