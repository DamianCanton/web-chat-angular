import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsDetailComponent } from './chats-detail-component';

describe('ChatsDetailComponent', () => {
  let component: ChatsDetailComponent;
  let fixture: ComponentFixture<ChatsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
