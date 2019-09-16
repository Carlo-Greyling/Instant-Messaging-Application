import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCallingComponent } from './video-calling.component';

describe('VideoCallingComponent', () => {
  let component: VideoCallingComponent;
  let fixture: ComponentFixture<VideoCallingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCallingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
