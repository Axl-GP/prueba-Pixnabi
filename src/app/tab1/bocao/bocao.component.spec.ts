import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BocaoComponent } from './bocao.component';

describe('BocaoComponent', () => {
  let component: BocaoComponent;
  let fixture: ComponentFixture<BocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BocaoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
