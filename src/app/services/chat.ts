import { computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import { Chat } from '../../interfaces/chat';
import { Message } from '../../interfaces/message';


@Injectable({
  providedIn: 'root',
})
export class ChatService  {
  //mock de chats guardados en un signal
  private _chats: WritableSignal<Chat[]> = signal<Chat[]>(this.createMock())
  // buena practica por que solo se puede modificar desde los metodos pero los mostramos como solo lectura
  public readonly chats: Signal<Chat[]> = this._chats.asReadonly()

  constructor() {}
  // mock de chats default
  private createMock () : Chat [] {
    const now = new Date().toISOString()
    return [
      {
        id: '1',
        name: 'renata',
        lastmessage: 'de perlas!',
        messageslist: [
          {
            id: '1',
            text: 'hola, como estas?',
            fromME: false,
            date: now,
          },
          {
            id: '2',
            text: 'bien y tu?',
            fromME: true,
            date: now,
          },
          {
            id: '3',
            text: 'de perlas!',
            fromME: false,
            date: now,
          }
        ],
      },
      {
        id: '2',
        name: 'juan',
        lastmessage: 'nos vemos mañana',
        messageslist: [
          {
            id: '1',
            text: 'hola juan!',
            fromME: true,
            date: now,
          },
          {
            id: '2',
            text: 'nos vemos mañana',
            fromME: false,
            date: now,
          },
          {
            id: '3',
            text: 'Chau',
            fromME: false,
            date: now,
          }
        ],
      },
      {
        id: '3',
        name: 'maria',
        lastmessage: 'te llamo en un rato',
        messageslist: [
          {
            id: '1',
            text: 'hola maria!',
            fromME: true,
            date: now,
          },
          {
            id: '2',
            text: 'te llamo en un rato',
            fromME: false,
            date: now,
          }
        ],
      },
    ];
  }

  getChatSnapshot(): Chat[] {
    return this._chats();
  }

  getChatSignal (id: string): Signal<Chat | undefined> {
    return computed (() => 
      {return this._chats().find (chat => chat.id === id)} )
  }

  createChat (name: string): Chat {
    // creas nuevo chat en base al formulario
    const newChat: Chat = {
      id: Date.now().toString(),
      name: name,
      lastmessage: '',
      messageslist: [],
    };
    //actualizacion de signal
    this._chats.update ((chats) => [...chats, newChat]);
    return newChat;
  }

  sendMessage (chat_id: string, text: string, fromME: true): Message | undefined {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: text,
      fromME: fromME,
      date: new Date().toISOString(),
    };

    this._chats.update ((chats_actuales) => {
      return chats_actuales.map ((chat) => {
        if (chat.id !== chat_id) {
          return chat;
        }
        const updateMessages = [...chat.messageslist, newMessage]
        return {
          ...chat,
          messageslist: updateMessages,
          lastmessage: text,
        }
      });
    });
    return newMessage;
  }
}
