"use client";

import { useState } from "react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

export default function NavActions() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
   code: "AR", name: "العربية", flag: "🇸🇦" 
  });

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const languages: Language[] = [
    { code: "AR", name: "العربية", flag: "🇸🇦" },
    { code: "EN", name: "English", flag: "🇬🇧" },
    { code: "ES", name: "Español", flag: "🇪🇸" },
    { code: "FR", name: "Français", flag: "🇫🇷" },
    { code: "DE", name: "Deutsch", flag: "🇩🇪" },
  ];

  return (
    <div className="hidden md:flex items-center gap-3">
      {/* Language */}
      <div className="relative">
        <button
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-md text-black font-medium text-sm hover:bg-gray-50 transition-colors"
        >
          <span className="text-lg">{selectedLanguage.flag}</span>
          <span>{selectedLanguage.name}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              isLanguageOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isLanguageOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white z-50">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  setSelectedLanguage(language);
                  setIsLanguageOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                  selectedLanguage.code === language.code
                    ? "bg-gray-100 text-primary font-semibold"
                    : "text-black"
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <button className="bg-primary text-white px-5 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity">
        Create Account
      </button>

      <button className="flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-md font-semibold text-sm hover:bg-gray-50 transition-colors">
        Login
      </button>
    </div>
  );
}
