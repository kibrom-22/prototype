import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandJuryCaseListComponent } from './grand-jury-case-list.component';

describe('GrandJuryCaseListComponent', () => {
  let component: GrandJuryCaseListComponent;
  let fixture: ComponentFixture<GrandJuryCaseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandJuryCaseListComponent]
    });
    fixture = TestBed.createComponent(GrandJuryCaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
