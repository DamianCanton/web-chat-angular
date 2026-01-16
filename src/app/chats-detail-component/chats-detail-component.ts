import { CommonModule } from '@angular/common';
import { Component, computed, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chat } from '../../interfaces/chat';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat';



@Component({
  selector: 'app-chats-detail-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './chats-detail-component.html',
  styleUrl: './chats-detail-component.css',
})
export class ChatsDetailComponent {
  chatSignal!: Signal <Chat | undefined>;
  newText: string = '';
  private id?: string;

  constructor(private route: ActivatedRoute,
    private chatService: ChatService,) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? undefined;
    if (this.id) {
      this.chatSignal = this.chatService.getChatSignal(this.id);
    } else {
      this.chatSignal = computed(() => (undefined));
    }
  }

  send(){
    if (this.id || !this.newText.trim()) {
      return;
    }
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
