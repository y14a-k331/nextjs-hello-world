'use client';
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'jp'>('en');

  const messages = {
    en: 'Hello World',
    jp: 'こんにちは'
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="flex gap-2">
        <button
          className={`px-4 py-2 rounded ${
            language === 'en' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
        <button
          className={`px-4 py-2 rounded ${
            language === 'jp' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setLanguage('jp')}
        >
          JP
        </button>
      </div>
      <h1 className="text-4xl font-bold">
        {messages[language]}
      </h1>
    </div>
  );
}
