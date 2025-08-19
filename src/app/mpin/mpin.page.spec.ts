import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MpinPage } from './mpin.page';

describe('MpinPage', () => {
  let component: MpinPage;
  let fixture: ComponentFixture<MpinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MpinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
