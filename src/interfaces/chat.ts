import { Message } from "./message";

export interface Chat {
    id: string;
    name: string;
    lastmessage: string;
    messageslist: Message[];
}