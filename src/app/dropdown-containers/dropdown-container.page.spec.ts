import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DropdownContainerPage } from './dropdown-container.page';

describe('DropdownContainerPage', () => {
  let component: DropdownContainerPage;
  let fixture: ComponentFixture<DropdownContainerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownContainerPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownContainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
