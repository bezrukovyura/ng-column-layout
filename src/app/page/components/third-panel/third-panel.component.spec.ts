import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPanelComponent } from './third-panel.component';

describe('ThirdPanelComponent', () => {
  let component: ThirdPanelComponent;
  let fixture: ComponentFixture<ThirdPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
