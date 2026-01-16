import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat';

@Component({
  selector: 'app-chats-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chats-component.html',
  styleUrl: './chats-component.css',
  standalone: true,
})
export class ChatsComponent {
  chatService = inject(ChatService);
  private router = inject(Router);

  searchControl = new FormControl('');
  searchQuery = toSignal(this.searchControl.valueChanges, { initialValue: '' });

  filteredChats = computed(() => {
    const query = this.searchQuery()?.toLowerCase() || '';
    const chats = this.chatService.chats();

    if (!query) {
      return chats;
    }

    return chats.filter((chat) => chat.name.toLowerCase().includes(query));
  });

  constructor() {}

  open(id: string) {
    this.router.navigate(['/chats', id]);
  }

  nuevo() {
    this.router.navigate(['/chats', 'new']);
  }
}
