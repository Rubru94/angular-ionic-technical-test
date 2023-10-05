import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownContainerPage } from './dropdown-container.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DropdownContainerPageRoutingModule } from './dropdown-container-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DropdownContainerPageRoutingModule,
  ],
  declarations: [DropdownContainerPage],
})
export class DropdownContainerPageModule {}
