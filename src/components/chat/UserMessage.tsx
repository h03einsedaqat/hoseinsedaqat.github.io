'use client';

import React from 'react';

interface UserMessageProps {
  text: string;
}

export function UserMessage({ text }: UserMessageProps) {
  return (
    <div className="flex w-full justify-end animate-fade-in">
      <div className="max-w-[85%] rounded-3xl bg-user-bubble px-4 py-2.5 text-sm leading-relaxed text-ink sm:max-w-[75%] sm:px-5 sm:py-3 sm:text-[15px]">
        <p className="whitespace-pre-wrap break-words">{text}</p>
      </div>
    </div>
  );
}
