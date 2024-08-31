import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,HeaderComponent,HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'biz-services-client-portal';
  constructor(public clientService: ClientService,private router:Router){}
  isLogedIn = false;
  
  showLogoutButton = false;
  ngOnInit(): void {
      this.isLogedIn = this.clientService.isLogedIn();

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          // Check if the current route is the login page
          this.showLogoutButton = event.url !== '/login' && this.isLogedIn;
        }
      });

      this.clientService.loginStatusSubject.asObservable().subscribe(
        (data)=>{
          
          this.isLogedIn = this.clientService.isLogedIn();
          console.log("we are in login update ", this.isLogedIn);
        }
      )
  }

  logout(){
    this.clientService.logout();
    this.router.navigate(["/login"]);
  }
  
}
