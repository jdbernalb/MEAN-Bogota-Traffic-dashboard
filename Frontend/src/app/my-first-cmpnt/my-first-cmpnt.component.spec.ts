import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstCmpntComponent } from './my-first-cmpnt.component';

describe('MyFirstCmpntComponent', () => {
  let component: MyFirstCmpntComponent;
  let fixture: ComponentFixture<MyFirstCmpntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstCmpntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstCmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
