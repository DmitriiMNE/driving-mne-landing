
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";
import Image from "next/image";

const translations = {
  en: {
    title: "Montenegro Driving Test",
    description:
      "Prepare for the driving license exam in Montenegro! 500+ real questions, test mode, mistake tracking and performance stats. Available in 5 languages. Works on any device.",
    button: "Try the App",
  },
  ru: {
    title: "Тест на вождение в Черногории",
    description:
      "Подготовьтесь к экзамену на водительские права в Черногории! Более 500 вопросов, тесты, статистика, возможность повторять ошибки. Приложение на 5 языках, работает на любом устройстве.",
    button: "Попробовать приложение",
  },
  sr: {
    title: "Vozački ispit Crna Gora",
    description:
      "Pripremite se za vozački ispit u Crnoj Gori! Više od 500 pitanja, testovi, statistika i praćenje grešaka. Aplikacija je dostupna na 5 jezika i radi na svim uređajima.",
    button: "Probaj aplikaciju",
  },
  de: {
    title: "Führerscheinprüfung Montenegro",
    description:
      "Bereite dich auf die Führerscheinprüfung in Montenegro vor! Über 500 echte Fragen, Testmodus, Fehleranalyse und Statistiken. In 5 Sprachen verfügbar. Funktioniert auf jedem Gerät.",
    button: "App ausprobieren",
  },
  tr: {
    title: "Karadağ Sürüş Testi",
    description:
      "Karadağ’da ehliyet sınavına hazırlanın! 500’den fazla gerçek soru, test modu, hata analizi ve istatistikler. 5 dilde mevcut. Tüm cihazlarda çalışır.",
    button: "Uygulamayı dene",
  },
};

export default function LandingPage() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center justify-center">
      <div className="flex justify-end w-full max-w-3xl">
        <select
          className="border rounded p-2 text-sm"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="sr">SR</option>
          <option value="de">DE</option>
          <option value="tr">TR</option>
        </select>
      </div>
      <Card className="max-w-3xl w-full p-6 mt-4 shadow-xl text-center">
        <Image
          src="/logo.png"
          alt="Montenegro Driving Test"
          width={100}
          height={100}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
        <p className="text-gray-700 mb-6">{t.description}</p>
        <Button>{t.button}</Button>
      </Card>
    </main>
  );
}
