import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoRequestComponent } from './repo-request.component';

describe('RepoRequestComponent', () => {
  let component: RepoRequestComponent;
  let fixture: ComponentFixture<RepoRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
