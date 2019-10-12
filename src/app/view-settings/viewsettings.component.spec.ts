import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsettingsComponent } from './viewsettings.component';

describe('ViewsettingsComponent', () => {
  let component: ViewsettingsComponent;
  let fixture: ComponentFixture<ViewsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
