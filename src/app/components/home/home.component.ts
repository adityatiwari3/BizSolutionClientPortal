import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor( private router : Router,

    private clientService : ClientService
  ) {};

  panId:any;

  ngOnInit(): void {
    this.panId = this.clientService.getPanId();
    this.clientService.getCustomerDetails(this.panId).subscribe(
      (data)=>{
        console.log("this is data ",data);
      },(error)=>{
        console.log("this is error ",error);
      }
    )



    this.clientData.forEach((unit, i) => {
      this.showPassword[i] = [];
      unit.customerList.forEach((customer, j) => {
        this.showPassword[i][j] = {
          tracesPassword: false,
          incomeTaxPassword: false
        };
      });
    });
  }


clientData = [
  {
    "propertyId": 11,
    "propertyName": "Prestige Green Gables",
    "unitNo": "20780",
    "companyName": "Prestige",
    "companyLogo": null,
    "customerList": [
      {
        "customerID": 18257,
        "name": "Anand Kishore P R Vachani",
        "pan": "AANPV2131N",
        "tracesPassword": "Anan&123",
        "customerOptingOutDate": '',
        "incomeTaxPassword": "KA05mt6220@",
        "isPrimaryOwner": true
      },
      {
        "customerID": 18257,
        "name": "Anand Kishore's Mother",
        "pan": "AANPV2131N",
        "tracesPassword": "Anan&123",
        "customerOptingOutDate": '',
        "incomeTaxPassword": "KA05mt6220@",
        "isPrimaryOwner": false
      }
    ]
  },
  {
    "propertyId": 11,
    "propertyName": "Prestige Green Gables",
    "unitNo": "10950",
    "companyName": "Pretige",
    "companyLogo": true,
    "customerList": [
      {
        "customerID": 18257,
        "name": "Anand Kishore P R Vachani",
        "pan": "AANPV2131N",
        "tracesPassword": "Anan&123",
        "customerOptingOutDate": '',
        "incomeTaxPassword": "KA05mt6220@",
        "isPrimaryOwner": false
      }
    ]
  },
  {
    "propertyId": 22,
    "propertyName": "Prestige Lavender Fields",
    "unitNo": "12095",
    "companyName": "Prestige",
    "companyLogo": null,
    "customerList": [
      {
        "customerID": 18257,
        "name": "Anand Kishore P R Vachani",
        "pan": "AANPV2131N",
        "tracesPassword": "Anan&123",
        "customerOptingOutDate": '22/07/2023',
        "incomeTaxPassword": "KA05mt6220@",
        "isPrimaryOwner": false
      }
    ]
  },
  {
    "propertyId": 11,
    "propertyName": "Prestige Green Gables",
    "unitNo": "1095",
    "companyName": "Prestige",
    "companyLogo": null,
    "customerList": [
      {
        "customerID": 18257,
        "name": "Anand Kishore P R Vachani",
        "pan": "AANPV2131N",
        "tracesPassword": "Anan&123",
        "customerOptingOutDate": '',
        "incomeTaxPassword": "KA05mt6220@",
        "isPrimaryOwner": true
      }
    ]
  },
  {
    "propertyId": 64,
    "propertyName": "Prestige Park Grove",
    "unitNo": "90304",
    "companyName": "Prstige",
    "companyLogo": null,
    "customerList": [
      {
        "customerID": 18257,
        "name": "Anand Kishore P R Vachani",
        "pan": "AANPV2131N",
        "tracesPassword": "Anan&123",
        "customerOptingOutDate": '22/09/2024',
        "incomeTaxPassword": "KA05mt6220@",
        "isPrimaryOwner": false
      }
    ]
  },
  {
    "propertyId": 11,
    "propertyName": "Prestige Green Gables",
    "unitNo": "2078",
    "companyName": "Prestige",
    "companyLogo": null,
    "customerList": [
      {
        "customerID": 18257,
        "name": "Anand Kishore P R Vachani",
        "pan": "AANPV2131N",
        "tracesPassword": "Anan&123",
        "customerOptingOutDate": '',
        "incomeTaxPassword": "KA05mt6220@",
        "isPrimaryOwner": false
      }
    ]
  }
];

bizLogo = 'assets/biz-logo.png'
reproLogo = 'assets/repro-logo.png'

getCustomerName(): string {
  if (this.clientData.length > 0) {
    return this.clientData[0].customerList[0].name;
  }
  return '';
}
showPassword: any[][] = [];

logout(){
  this.router.navigate(["/login"]);
}


togglePassword(unitIndex: number, customerIndex: number, passwordType: string) {
  this.showPassword[unitIndex][customerIndex][passwordType] = !this.showPassword[unitIndex][customerIndex][passwordType];
}
getNumberOfUnits(): number {
  return this.clientData.length;
}
getCompanyImage(companyName: string): string {
  if (companyName.toLowerCase() === 'prestige' || companyName.toLowerCase() === 'repro') {
    return this.bizLogo;
  } else {
    return this.reproLogo;
  }
}
}
