import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Head from "next/head";
import Image from "next/image";

const translations = {
  en: {
    title: "Montenegro Driving Test",
    description: "Test yourself with 500+ questions in 5 languages. Track progress and learn from your mistakes. Optimized for mobile, tablet, and desktop.",
    button: "Start Now",
  },
  ru: {
    title: "Тест ПДД Черногория",
    description: "500+ вопросов на 5 языках. Отслеживание ошибок и прогресс. Удобно с телефона, планшета или ноутбука.",
    button: "Начать",
  },
  sr: {
    title: "Test iz saobraćajnih pravila",
    description: "Više od 500 pitanja na 5 jezika. Pratite napredak i učite iz grešaka. Radi na svim uređajima.",
    button: "Počni sada",
  },
  de: {
    title: "Führerscheintest Montenegro",
    description: "500+ Fragen auf 5 Sprachen. Lerne aus Fehlern. Funktioniert auf allen Geräten.",
    button: "Jetzt starten",
  },
  tr: {
    title: "Karadağ Ehliyet Sınavı",
    description: "500+ soru, 5 dilde. Hatalarınızı takip edin. Tüm cihazlarda çalışır.",
    button: "Hemen Başla",
  },
};

type Language = keyof typeof translations;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <>
      <Head>
        <title>Driving Test Montenegro</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
        <Image src="/logo.png" alt="Logo" width={96} height={96} />
        <h1 className="text-3xl font-bold mt-4">{translations[language].title}</h1>
        <p className="text-center text-gray-600 max-w-lg mt-2">{translations[language].description}</p>

        <div className="flex gap-2 mt-4">
          {Object.keys(translations).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang as Language)}
              className={`px-3 py-1 rounded-md border ${
                language === lang ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        <Card className="mt-6 p-4 w-full max-w-sm text-center">
          <Button>{translations[language].button}</Button>
        </Card>
      </main>
    </>
  );
}