import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message : string) {}
}


@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http : HttpClient) { }

  executeHelloWorldBeanService(){
   return this.http.get<HelloWorldBean>("http://localhost:8080/helloWorldBean");
  }

  executeHelloWorldServiceWithPathVariable(name){
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    //  let headers = new HttpHeaders({
    //       Authorization : basicAuthHeaderString
    //  });
     
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloWorldBean/${name}`,
    //{headers}
    );
   } 
   
    // createBasicAuthenticationHttpHeader(){
    //    let username = 'Saurabh'
    //    let password = 'saurabh24'
    //    let basicAuthHeaderString = 'Basic '+ window.btoa(username + ":" + password)
    //    return basicAuthHeaderString;
    //  }
}
