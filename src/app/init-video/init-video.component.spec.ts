import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitVideoComponent } from './init-video.component';

describe('InitVideoComponent', () => {
  let component: InitVideoComponent;
  let fixture: ComponentFixture<InitVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
