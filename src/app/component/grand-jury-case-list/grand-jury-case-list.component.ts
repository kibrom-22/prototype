import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Gjcase } from 'src/app/model/Gjcase';
import { GjcserviceService } from 'src/app/service/gjcservice.service';

@Component({
  selector: 'app-grand-jury-case-list',
  templateUrl: './grand-jury-case-list.component.html',
  styleUrls: ['./grand-jury-case-list.component.css']
})
export class GrandJuryCaseListComponent {

  gjcaselist !: Gjcase[];
  dataSource:any;
  displayedColumns: string[]=["action","usaoNumber", "grandJuryCaseName", "operationName", "Citation","ausa", "agent","defendant"]
  showMe:boolean=true;
  hideSearch:boolean=false;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:GjcserviceService){
    this.service.GetAll().subscribe(res=>{
      this.gjcaselist = res;
      this.dataSource=new MatTableDataSource<Gjcase>(this.gjcaselist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;

    })
  }
  toogleTag(){
    this.showMe=!this.showMe
    this.hideSearch=!this.hideSearch
  }

  Filterchange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }

}
