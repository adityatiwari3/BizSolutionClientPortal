import { CommonModule } from '@angular/common';
import { Component,HostListener } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { panValidator } from '../../utils/validators/pan-validator';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // username: string = '';
  
  userName = new FormControl("",[
    Validators.required,
    panValidator()
  ])
  // password: string = '';
  password = new FormControl("",[
    Validators.required
  ])

  loginForm = new FormGroup({
    userName : this.userName,
    password : this.password
  })
  // isPANValid: boolean = false;
  message: string = '';
  messageClass: string = 'text-danger';

  isMediumScreen!:boolean;
  constructor(private router: Router) {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMediumScreen = window.innerWidth < 992; // Bootstrap 'sm' breakpoint is 576px
  }

  validatePAN(pan:Event) {
    const panValue = (pan.target as HTMLInputElement).value;
    this.userName.setValue(panValue.toUpperCase());
    if (panValue && !this.userName.valid) {
      this.message = 'Please enter a valid PAN';
      // console.log()
    } else {
      this.message = '';
    }
  }

  forgotPassword(event : Event) {
    event.preventDefault();
    if (!this.userName.valid) {
      this.message = 'Please enter a valid PAN';
      return;
    }

    // Simulate sending an email
    this.message = `Please check your email sent to 'XXXXXX' to reset password`;
    this.messageClass = 'text-success'
    // window.alert("design for this is not available ")

    // Additional logic for sending email can be added here
  }

  onSubmit() {
    if(!this.loginForm.valid){
      this.message = 'Please Ensure User ID(PAN) and Password Fields are Correctly Entered';
    }
    else{
      console.log(this.loginForm.value)
    this.router.navigate(["/"]);
    }
  }

  openFAQs() {
    // Open the FAQs page (you can navigate to a new route or open a modal)
    this.router.navigate(['/faqs']);
  }
}
