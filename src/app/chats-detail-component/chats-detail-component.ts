import { CommonModule } from '@angular/common';
import { Component, computed, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chat } from '../../interfaces/chat';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../services/chat';

@Component({
  selector: 'app-chats-detail-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './chats-detail-component.html',
  styleUrl: './chats-detail-component.css',
})
export class ChatsDetailComponent {
  chatSignal: Signal<Chat | undefined> = computed(() => undefined);
  newText: string = '';
  private id?: string;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Subscribe to paramMap to handle route changes (e.g. searching or clicking another chat)
    // while the component is already active.
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') ?? undefined;
      if (this.id) {
        this.chatSignal = this.chatService.getChatSignal(this.id);
      }
    });
  }

  goBack() {
    this.router.navigate(['/chats']);
  }

  send() {
    if (!this.id || !this.newText.trim()) {
      return;
    }
    this.chatService.sendMessage(this.id, this.newText, true);
    this.newText = '';
  }
  //hacer idealmete como un pipe
  formatDate(date: string) {
    if (!date) {
      return '';
    }

    const dateTime = new Date(date);
    return dateTime.toLocaleString();
  }
}
