import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaquillasComponent } from './taquillas.component';

describe('TaquillasComponent', () => {
  let component: TaquillasComponent;
  let fixture: ComponentFixture<TaquillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaquillasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaquillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
