import { CommonModule,Location } from '@angular/common';
import { Component,Input, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.css'
})
export class DynamicTableComponent implements OnInit {
  @Input() tableData: any[] = []; // Data for rows
  columns: string[] = []; // Automatically determined column headers
  constructor(private location : Location) {}

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
  ngOnInit(): void {
    // Automatically extract column names from the first row of the data
    console.log("this si table data ",this.tableData)
    this.tableData = this.formUnits;
    if (this.formUnits.length > 0) {
      this.columns = Object.keys(this.tableData[0]).filter(key => key !== 'selected');
    }
  }

  goBack(): void {
    this.location.back();
  }

  downloadSelectedRows() {
    const selectedRows = this.tableData.filter(row => row.selected);
    this.downloadData(selectedRows);
  }

  downloadAllRows() {
    this.downloadData(this.tableData);
  }

  private downloadData(data : any[]) {
    const csvData = this.convertToCSV(data);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'table_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private convertToCSV(objArray : any[]) {
    const array = [Object.keys(objArray[0])].concat(objArray);
    return array.map(it => {
      return Object.values(it).toString();
    }).join('\n');
  }
}
