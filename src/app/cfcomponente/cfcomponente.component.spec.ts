import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfcomponenteComponent } from './cfcomponente.component';

describe('CfcomponenteComponent', () => {
  let component: CfcomponenteComponent;
  let fixture: ComponentFixture<CfcomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CfcomponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CfcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
