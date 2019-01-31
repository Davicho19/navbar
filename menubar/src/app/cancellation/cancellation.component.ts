import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { CustomerNameService } from '../customer-name.service';
import { CustomerNameCancellation } from '../customername-cancellation';
import { ColDef, GridApi, ColumnApi, RowNode } from 'ag-grid-community';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {
  @Input('zipCode') zipCode: string;
  @Input('lastName') lastName: string;
  customerNames: Array<CustomerNameCancellation>;

  private api: GridApi;
  columnApi: ColumnApi;
  columnDefs: ColDef[];
  loadCancellation: boolean;
  params: any;

  constructor(private customerNameService: CustomerNameService) {
    this.columnDefs = this.createColumnDefs();
  }

  ngOnInit() {
    this.customerNameService
      .getCustomerNames(this.zipCode, this.lastName)
      .subscribe(data => { this.customerNames = data; })
    this.loadCancellation = true;
  }

  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.sizeColumnsToFit();
    this.customerNameService
      .getCustomerNames(this.zipCode, this.lastName)
      .subscribe(data => {

        if (data) {
          this.customerNames = data;
          console.log(this.customerNames);
        }
      });

    if (this.api) {
      console.log("inside if this.api");
      this.api.forEachNode((node) => {
        console.log("node" + node);
      });
    }
  }

  // this.api.forEachNode((node) => {
  // console.log("Inside gridReady");
  // this.customerNames.map((customer) => {
  //   console.log(customer);
  //   if (customer.IsCancel) {
  //     node.setSelected(true);
  //   }
  // });
  // });



  private createColumnDefs() {
    return [
      { headerName: 'Customer Number', field: 'CustomerNumber', sortable: true, filter: true },
      { headerName: 'First Name', field: 'FirstName', sortable: true, filter: true },
      { headerName: 'Middle Name', field: 'MiddleName', sortable: true, filter: true },
      { headerName: 'Last Name', field: 'LastName', sortable: true, filter: true },
      { headerName: 'Address', field: 'Address1', sortable: true, filter: true },
      { headerName: 'City', field: 'City', sortable: true, filter: true },
      { headerName: 'State', field: 'StateCd', sortable: true, filter: true },
      { headerName: 'Zip Code', field: 'ZipCode', sortable: true, filter: true },
      { headerName: 'Magazine Code', field: 'MagazineCd', sortable: true, filter: true },
      {
        headerName: 'IsCancel',
        // field:'IsCancel',
        editable: true,
        checkboxSelection: true
      },
      // {header: 'Cancel', 
      //   field: 'IsCancel', 
      //   cellRenderer: params => {
      //     return `<input type='checkbox' ${params.value ? 'checked': ''} "/>`
      //   }  
      // },
      { headerName: 'Cancellation Date', field: 'CancellationDate', sortable: true, filter: true }
    ]
  }

  saveCustomer() {
    // this.api.forEachNode(this.printNode)
    let selectedRows;
    selectedRows = this.api.getSelectedRows();
    console.log(selectedRows);
  }

  printNode(node, index) {
    console.log('Customer Number is: ' + node.data.CustomerNumber);
    console.log('Cancel is: ' + node.data.IsCancel);
    console.log('params value is: ', this.params.value)
    if (node.data.IsCancel.checked) {
      console.log('Customer Number in checked is: ' + node.data.CustomerNumber);
    }
  }

  public checkedVal() {
    console.log(this.params.node.data);
    console.log(this.params.value);
  }

}
