import { Message } from "./messege";

export interface Chat {
    id: string;
    name: string;
    lastmessage: string;
    messageslist: Message[];
}