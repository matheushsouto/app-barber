import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvailableTimesPage } from './available-times.page';

describe('AvailableTimesPage', () => {
  let component: AvailableTimesPage;
  let fixture: ComponentFixture<AvailableTimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableTimesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvailableTimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
