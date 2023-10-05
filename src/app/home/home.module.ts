import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { DropdownContainerComponent } from '../dropdown-container/dropdown-container.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, HomePageRoutingModule],
  declarations: [HomePage, DropdownContainerComponent, DropdownComponent],
})
export class HomePageModule {}
