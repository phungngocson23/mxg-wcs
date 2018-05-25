import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidecontrolComponent } from './sidecontrol.component';

describe('SidecontrolComponent', () => {
  let component: SidecontrolComponent;
  let fixture: ComponentFixture<SidecontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidecontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidecontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
