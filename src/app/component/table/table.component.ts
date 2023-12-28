
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/model/Customer';
import { PopupComponent } from '../popup/popup.component';
import { CourtCalanderSearchService } from 'src/app/service/court-calander-search.service';
// import { PopupComponent } from '../popup/popup.component';
import { UserdetailComponent } from '../userdetail/userdetail.component';

import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  filteroptions!: Observable<string[]>
  formcontrol = new FormControl('');
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["code", "name", "email", "phone", "status", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  Customerlist!: Customer[];
  filteroptionslist!: Observable<Customer[]>

  showMe:boolean=true;
  hideSearch:boolean=false;
  constructor(private service: CourtCalanderSearchService, private dialog: MatDialog) {
    this.loadcustomer();
  }

  loadcustomer() {
    this.service.GetCustomer().subscribe(res => {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<Customer>(this.customerlist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  toogleTag(){
    this.showMe=!this.showMe
    this.hideSearch=!this.hideSearch
  }
  
  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  ngOnInit(): void {
    // this.filteroptions = this.formcontrol.valueChanges.pipe(
    //   startWith(''), map(value => this._FILTER(value || ''))
    // )

    this.filteroptionslist = this.formcontrol.valueChanges.pipe(
      startWith(''), map(value => this._LISTFILTER(value || ''))
    )
  }

  private _LISTFILTER(value: string): Customer[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.customerlist.filter(option => option.name.toLocaleLowerCase().includes(searchvalue) || 
    option.name.toLocaleLowerCase().includes(searchvalue));
  }

  editcustomer(code: any) {
    this.Openpopup(code, 'Edit Customer',PopupComponent);
  }

  detailcustomer(code: any) {
    this.Openpopup(code, 'Customer Detail',UserdetailComponent);
  }

  addcustomer(){
    this.Openpopup(0, 'Add Customer',PopupComponent);
  }

  Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '30%',
      
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
  
    _popup.afterClosed().subscribe(item => {
       console.log(item)
      this.loadcustomer();
    })
  }

}
