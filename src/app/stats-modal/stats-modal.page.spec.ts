import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatsModalPage } from './stats-modal.page';

describe('StatsModalPage', () => {
  let component: StatsModalPage;
  let fixture: ComponentFixture<StatsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
