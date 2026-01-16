import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { ChatsComponent } from '../chats-component/chats-component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChatsComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  constructor(public router: Router) {}

  get isChatSelected(): boolean {
    // If url is not exactly '/chats', we assume a specific chat (or new chat) is selected
    // and we should show the right panel on mobile.
    // However, 'EmptyChat' is at /chats, but we want to show Sidebar on mobile for EmptyChat.
    // So if URL is '/chats', show Sidebar.
    // If URL is '/chats/id', show Chat.
    return this.router.url !== '/chats';
  }
}
