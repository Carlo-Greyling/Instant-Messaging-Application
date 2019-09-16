import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceCallingComponent } from './voice-calling.component';

describe('VoiceCallingComponent', () => {
  let component: VoiceCallingComponent;
  let fixture: ComponentFixture<VoiceCallingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceCallingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceCallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
