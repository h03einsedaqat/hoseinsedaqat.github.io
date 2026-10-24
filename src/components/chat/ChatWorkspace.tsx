'use client';

import React from 'react';
import { MessageComposer } from '@/components/chat/MessageComposer';
import { MessageList } from '@/components/chat/MessageList';
import { WelcomeScreen } from '@/components/chat/WelcomeScreen';
import { useChat } from '@/context/ChatContext';

export function ChatWorkspace() {
  const { activeConversation, isSending, sendMessage } = useChat();
  const hasMessages = Boolean(activeConversation && activeConversation.messages.length > 0);

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <div className="flex-1 overflow-y-auto">
        {hasMessages && activeConversation ? (
          <MessageList
            messages={activeConversation.messages}
            isSending={isSending}
            onSelectFollowUp={(text) => {
              void sendMessage(text);
            }}
          />
        ) : (
          <WelcomeScreen
            disabled={isSending}
            onSelectPrompt={(text) => {
              void sendMessage(text);
            }}
          />
        )}
      </div>

      <MessageComposer
        disabled={isSending}
        onSend={(text) => sendMessage(text)}
      />
    </div>
  );
}
