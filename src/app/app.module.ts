import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableHeadersComponent } from './commonComponents/table-headers/table-headers.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './commonComponents/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditEmployeeComponent } from './employee-list/add-edit-employee/add-edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    TableHeadersComponent,
    SearchComponent,
    AddEditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
