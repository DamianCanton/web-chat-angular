import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-chat',
  standalone: true,
  template: `
    <div class="empty-state">
      <div class="empty-content">
        <h1 class="welcome-title">Web Chat</h1>
        <p class="empty-text">
          Envía y recibe mensajes sin necesidad de mantener tu teléfono conectado.<br />
          Usa Web Chat en hasta 4 dispositivos vinculados y 1 teléfono a la vez.
        </p>
        <div class="encrypted-note">
          🔒 Tus mensajes personales están cifrados de extremo a extremo.
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .empty-state {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--panel-background);
        border-bottom: 6px solid #00a884; /* Accent strip at bottom like WA */
        flex-direction: column;
        text-align: center;
        padding: 0 40px;
      }
      .empty-content {
        max-width: 560px;
        color: var(--secondary-text);
      }
      .welcome-title {
        font-weight: 300;
        font-size: 32px;
        margin-bottom: 18px;
        color: var(--primary-text);
      }
      .empty-text {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 30px;
      }
      .encrypted-note {
        font-size: 13px;
        color: #667781;
        margin-top: 40px;
      }
    `,
  ],
})
export class EmptyChatComponent {}
