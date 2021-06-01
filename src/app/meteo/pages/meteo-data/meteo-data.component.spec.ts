import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoDataComponent } from './meteo-data.component';

describe('MeteoDataComponent', () => {
  let component: MeteoDataComponent;
  let fixture: ComponentFixture<MeteoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
