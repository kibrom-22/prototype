import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TableComponent } from './component/table/table.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { AssociateComponent } from './component/associate/associate.component';
import { GrandJuryCaseListComponent } from './component/grand-jury-case-list/grand-jury-case-list.component';
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'table', component:TableComponent},
  {path: 'form', component:FormdesignComponent},
  {path: 'associate', component:AssociateComponent},
  {path: 'grand-jury-case-list', component:GrandJuryCaseListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
