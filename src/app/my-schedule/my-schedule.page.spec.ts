import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MySchedulePage } from './my-schedule.page';

describe('MySchedulePage', () => {
  let component: MySchedulePage;
  let fixture: ComponentFixture<MySchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySchedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MySchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
