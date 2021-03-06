import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { SharedModule } from '../shared-module/shared.module';
import { CarsRoutingModule } from './cars-routing.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CarResolve } from './car-resolve-service';
import { CarsListRowComponent } from './cars-list-row/cars-list-row.component';
import { IncomeTaxComponent } from './total-cost/income-tax/income-tax.component';
import { CostSharedService } from './cost-shared.service';
import { CarsComponent } from './cars.component';
import { DateInfoComponent } from './car-details/date-info/date-info.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [CarsListComponent],
  providers: [
    CarResolve,
    CostSharedService
  ],
  entryComponents: [ // komponenty ładowane dynamicznie 
    DateInfoComponent
  ],
  declarations:  [
    CarsListComponent,
    TotalCostComponent,
    CarDetailsComponent,
    IncomeTaxComponent,
    CarsListRowComponent,
    CarsComponent,
    DateInfoComponent
  ]
})
export class CarsModule { }
