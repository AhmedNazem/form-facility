"use client";

import { Button } from "@/components/ui/button";
import { LanguagesIcon } from "lucide-react";

export default function LanguageSwitcher({ language, onLanguageChange }) {
  return (
    <Button
      variant="outline"
      onClick={() => onLanguageChange(language === "en" ? "ar" : "en")}
      className="flex items-center gap-2"
    >
      <LanguagesIcon className="h-4 w-4" />
      {language === "en" ? "العربية" : "English"}
    </Button>
  );
}
