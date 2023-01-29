import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultModuleComponent } from './default-module.component';

describe('DefaultModuleComponent', () => {
  let component: DefaultModuleComponent;
  let fixture: ComponentFixture<DefaultModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
