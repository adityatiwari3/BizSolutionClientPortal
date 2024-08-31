import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicTableComponent } from '../commons/dynamic-table/dynamic-table.component';
import { Route, Router } from '@angular/router';
import { UnitListComponent } from '../commons/unit-list/unit-list.component';

@Component({
  selector: 'app-form-16-b',
  standalone: true,
  imports: [CommonModule,FormsModule,DynamicTableComponent,UnitListComponent],
  templateUrl: './form-16-b.component.html',
  styleUrl: './form-16-b.component.css'
})
export class Form16BComponent {

  pageName = "Form 16B Certificate";

  constructor(private router:Router){

  }
  units = [
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
          "customerOptingOutDate": null,
          "incomeTaxPassword": "KA05mt6220@",
          "isPrimaryOwner": true
        },
        {
          "customerID": 18257,
          "name": "Anand Kishore's Mother",
          "pan": "AANPV2131N",
          "tracesPassword": "Anan&123",
          "customerOptingOutDate": null,
          "incomeTaxPassword": "KA05mt6220@",
          "isPrimaryOwner": false
        }
      ]
    },
    {
      "propertyId": 11,
      "propertyName": "Prestige Green Gables",
      "unitNo": "10950",
      "companyName": "Prebggtige",
      "companyLogo": true,
      "customerList": [
        {
          "customerID": 18257,
          "name": "Anand Kishore P R Vachani",
          "pan": "AANPV2131N",
          "tracesPassword": "Anan&123",
          "customerOptingOutDate": null,
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
          "customerOptingOutDate": null,
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
          "customerOptingOutDate": null,
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
          "customerOptingOutDate": null,
          "incomeTaxPassword": "KA05mt6220@",
          "isPrimaryOwner": true
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
          "customerOptingOutDate": null,
          "incomeTaxPassword": "KA05mt6220@",
          "isPrimaryOwner": false
        }
      ]
    }
  ];
bizLogo = 'assets/biz-logo.png'
reproLogo = 'assets/repro-logo.png'
  getCompanyLogo(companyName: string): string {
    return companyName === 'BIZ Services' ? 'assets/biz-logo.png' : 'assets/repro-logo.png';
  }
  getCompanyImage(companyName: string): string {
    if (companyName.toLowerCase() === 'prestige' || companyName.toLowerCase() === 'repro') {
      return this.bizLogo;
    } else {
      return this.reproLogo;
    }
  }

  viewDeclaration(unitNo: string): void {
    this.router.navigate(['/table', unitNo]);
  }

  formUnits = [
    {
      projectName: 'Project 1',
      customerName: 'Customer 1',
      unitNo: 'Unit 1',
      amountPaid: '1000',
      tdsAmount: '100',
      certificateNo: 'Cert001',
      certificateDate: '2024-08-12',
      selected: false
    },
    {
      projectName: 'Project 2',
      customerName: 'Customer 2',
      unitNo: 'Unit 2',
      amountPaid: '2000',
      tdsAmount: '200',
      certificateNo: 'Cert002',
      certificateDate: '2024-08-13',
      selected: false
    },
    {
      projectName: 'Project 3',
      customerName: 'Customer 3',
      unitNo: 'Unit 3',
      amountPaid: '1500',
      tdsAmount: '150',
      certificateNo: 'Cert003',
      certificateDate: '2024-08-14',
      selected: false
    },
    {
      projectName: 'Project 4',
      customerName: 'Customer 4',
      unitNo: 'Unit 4',
      amountPaid: '3000',
      tdsAmount: '300',
      certificateNo: 'Cert004',
      certificateDate: '2024-08-15',
      selected: false
    },
    {
      projectName: 'Project 5',
      customerName: 'Customer 5',
      unitNo: 'Unit 5',
      amountPaid: '2500',
      tdsAmount: '250',
      certificateNo: 'Cert005',
      certificateDate: '2024-08-16',
      selected: false
    },
    {
      projectName: 'Project 6',
      customerName: 'Customer 6',
      unitNo: 'Unit 6',
      amountPaid: '4000',
      tdsAmount: '400',
      certificateNo: 'Cert006',
      certificateDate: '2024-08-17',
      selected: false
    },
    {
      projectName: 'Project 7',
      customerName: 'Customer 7',
      unitNo: 'Unit 7',
      amountPaid: '3500',
      tdsAmount: '350',
      certificateNo: 'Cert007',
      certificateDate: '2024-08-18',
      selected: false
    },
    {
      projectName: 'Project 8',
      customerName: 'Customer 8',
      unitNo: 'Unit 8',
      amountPaid: '4500',
      tdsAmount: '450',
      certificateNo: 'Cert008',
      certificateDate: '2024-08-19',
      selected: false
    }
  ];

  // tdsForm = {
  //   selected : false
  // }

  // downloadSelected(format: string) {
  //   const selectedUnits = this.formUnits.filter(unit => unit.selected);
  //   if (format === 'csv') {
  //     this.downloadCSV(selectedUnits);
  //   } else if (format === 'json') {
  //     this.downloadJSON(selectedUnits);
  //   }
  // }

  // downloadCSV(selectedUnits: any[]) {
  //   const csvData = selectedUnits.map(unit => ({
  //     'Project Name': unit.projectName,
  //     'Customer Name': unit.customerName,
  //     'Unit No.': unit.unitNo,
  //     'Amount Paid': unit.amountPaid,
  //     'TDS Amount': unit.tdsAmount,
  //     'Certificate No.': unit.certificateNo,
  //     'Certificate Date': unit.certificateDate
  //   }));

  //   const csvContent = this.convertToCSV(csvData);
  //   const blob = new Blob([csvContent], { type: 'text/csv' });
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'selected_units.csv';
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  // }

  // downloadJSON(selectedUnits: any[]) {
  //   const jsonContent = JSON.stringify(selectedUnits, null, 2);
  //   const blob = new Blob([jsonContent], { type: 'application/json' });
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'selected_units.json';
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  // }

  // convertToCSV(objArray: any[]) {
  //   const array = [Object.keys(objArray[0])].concat(objArray);
  //   return array.map(it => Object.values(it).toString()).join('\n');
  // }
}
