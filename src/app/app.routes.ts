import { Routes } from '@angular/router';
import { ChatsComponent } from './chats-component/chats-component';
import { ChatsDetailComponent } from './chats-detail-component/chats-detail-component';
import { NewChatComponent } from './new-chat-component/new-chat-component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { EmptyChatComponent } from './empty-chat/empty-chat.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'chats',
    pathMatch: 'full',
  },
  {
    path: 'chats',
    component: MainLayoutComponent,
    children: [
      { path: '', component: EmptyChatComponent },
      { path: 'new', component: NewChatComponent },
      { path: ':id', component: ChatsDetailComponent },
    ],
  },
  {
    path: '**',
    redirectTo: 'chats',
  },
];
