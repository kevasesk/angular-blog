import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPostsComponent } from './listing-posts.component';

describe('ListingPostsComponent', () => {
  let component: ListingPostsComponent;
  let fixture: ComponentFixture<ListingPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
