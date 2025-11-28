"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChartBar,
  Globe,
  MagnifyingGlass,
  Users,
  MapPin,
  TrendUp,
  Warning,
  CheckCircle,
  XCircle,
  LightbulbFilament,
  Monitor,
  ArrowLeft,
  Building,
  GraduationCap,
  PresentationChart,
  Eye,
  Clock,
  FileText,
  ShareNetwork,
  Target,
  ChartLine,
  Database,
  ShieldCheck,
  Download,
} from "@phosphor-icons/react";

// Компонент для окремого слайду
function Slide({
  children,
  className = "",
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "title";
}) {
  const isTitle = variant === "title";
  
  return (
    <div
      className={`w-full flex items-center justify-center py-6 sm:py-8 lg:py-12 ${className}`}
      style={{ aspectRatio: "16/9", minHeight: "calc(100vw * 9 / 16)" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div 
          className={`w-full h-full rounded-lg border-2 shadow-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative ${
            isTitle 
              ? "bg-[#1f3c8f] border-white/30 shadow-white/10" 
              : "bg-white border-[#1f3c8f] shadow-[#1f3c8f]/20"
          }`}
          style={{
            boxShadow: isTitle 
              ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 2px rgba(255, 255, 255, 0.1)"
              : "0 20px 25px -5px rgba(31, 60, 143, 0.15), 0 10px 10px -5px rgba(31, 60, 143, 0.1), 0 0 0 2px #1f3c8f"
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function PresentationPage() {
  const [isGenerating, setIsGenerating] = React.useState(false);
  const presentationRef = useRef<HTMLDivElement>(null);
  
  // Перевіряємо, чи це PDF режим
  const isPdfMode = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('pdf') === 'true';

  const handleDownloadPDF = () => {
    setIsGenerating(true);
    
    // Додаємо стилі для друку
    const printStyle = document.createElement('style');
    printStyle.id = 'pdf-print-style';
    printStyle.textContent = `
      @media print {
        @page {
          size: A4 landscape;
          margin: 0.5cm;
        }
        body {
          margin: 0;
          padding: 0;
          background: white;
        }
        header, footer {
          display: none !important;
        }
        [data-slide] {
          page-break-after: always;
          page-break-inside: avoid;
          break-after: page;
          break-inside: avoid;
          min-height: 100vh;
          display: flex !important;
          align-items: center;
          justify-content: center;
        }
        [data-slide]:last-child {
          page-break-after: auto;
        }
      }
    `;
    document.head.appendChild(printStyle);
    
    // Викликаємо діалог друку
    // В діалозі друку виберіть "Зберегти як PDF" або "Microsoft Print to PDF"
    window.print();
    
    // Видаляємо стилі після закриття діалогу
    setTimeout(() => {
      const style = document.getElementById('pdf-print-style');
      if (style) {
        style.remove();
      }
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div ref={presentationRef} className="min-h-screen bg-white">
      {/* Header */}
      {!isPdfMode && (
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <Image
                  src="/image/logo.png"
                  alt="Логотип"
                  width={200}
                  height={80}
                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain flex-shrink-0"
                  priority
                />
                <div className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4 text-[#1f3c8f]" weight="regular" />
                  <span className="text-sm sm:text-base text-[#1f3c8f]">На головну</span>
                </div>
              </Link>
              <button
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                className="flex items-center gap-2 px-4 py-2 bg-[#1f3c8f] text-white rounded-lg hover:bg-[#1a2f70] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-5 h-5" weight="regular" />
                <span className="hidden sm:inline">
                  {isGenerating ? 'Генерація...' : 'Завантажити PDF'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      )}

      {/* Slide 1: Титульний слайд */}
      <div data-slide>
        <Slide variant="title" className="bg-gray-100">
        <div className="text-center">
          <PresentationChart className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 text-white" weight="regular" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            SimilarWeb
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-6 sm:mb-8 text-white/90">
            як інструмент моніторингу цифрових платформ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Комплексна оцінка ефективності державних та освітніх веб-ресурсів
          </p>
        </div>
      </Slide>
      </div>

      {/* Slide 2: Проблема */}
      <div data-slide>
      <Slide>
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <Warning className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f]" weight="regular" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f3c8f]">
              Проблема
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl" style={{ color: "#434445" }}>
            <p>
              Відсутність <strong className="text-[#1f3c8f]">комплексного та системного підходу</strong> до регулярного моніторингу державних та освітніх цифрових платформ
            </p>
            <ul className="space-y-3 sm:space-y-4 list-disc list-inside ml-4">
              <li>Немає централізованої оцінки ефективності платформ</li>
              <li>Відсутність регулярного контролю над показниками залученості користувачів</li>
              <li>Рішення щодо оптимізації ухвалюються без належного обґрунтування</li>
              <li>Складність стратегічного планування модернізації</li>
            </ul>
          </div>
        </div>
      </Slide>
      </div>

      {/* Slide 3: SimilarWeb як рішення */}
      <div data-slide>
      <Slide className="bg-gray-50">
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <LightbulbFilament className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f]" weight="regular" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f3c8f]">
              SimilarWeb як рішення
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl" style={{ color: "#434445" }}>
            <p>
              <strong className="text-[#1f3c8f]">SimilarWeb</strong> — один із найбільш зручних та ефективних інструментів для комплексної оцінки показників вебтрафіку, структури аудиторії та конкурентного середовища
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1f3c8f] flex-shrink-0 mt-1" weight="regular" />
                <p>Широкий спектр показників для оцінки ефективності</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1f3c8f] flex-shrink-0 mt-1" weight="regular" />
                <p>Аналіз поведінки користувачів та джерел трафіку</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1f3c8f] flex-shrink-0 mt-1" weight="regular" />
                <p>Конкурентний аналіз та порівняння ресурсів</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1f3c8f] flex-shrink-0 mt-1" weight="regular" />
                <p>Відстеження змін у відвідуваності</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      </div>

      {/* Slide 4: Основні показники */}
      <div data-slide>
      <Slide>
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <ChartBar className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f]" weight="regular" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f3c8f]">
              Основні показники
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <TrendUp className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f] mb-3" weight="regular" />
              <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-2">Загальний обсяг трафіку</h3>
              <p className="text-sm sm:text-base" style={{ color: "#434445" }}>
                Кількість відвідувань сайту за певний період, що дає змогу оцінити популярність ресурсу та його динаміку
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f] mb-3" weight="regular" />
              <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-2">Середній час перебування</h3>
              <p className="text-sm sm:text-base" style={{ color: "#434445" }}>
                Відображає рівень зацікавленості контентом і глибину взаємодії користувачів з платформою
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f] mb-3" weight="regular" />
              <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-2">Кількість сторінок</h3>
              <p className="text-sm sm:text-base" style={{ color: "#434445" }}>
                Середня кількість переглянутих сторінок за одне відвідування, що свідчить про якість навігації
              </p>
            </div>
          </div>
        </div>
      </Slide>
      </div>

      {/* Slide 5: Показник відмов */}
      <div data-slide>
      <Slide className="bg-gray-50">
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <XCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f]" weight="regular" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f3c8f]">
              Показник відмов
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
              <p className="text-base sm:text-lg md:text-xl mb-4" style={{ color: "#434445" }}>
                <strong className="text-[#1f3c8f]">Показник відмов</strong> демонструє частку користувачів, які залишили сайт після перегляду лише однієї сторінки
              </p>
              <div className="flex items-start gap-3 mt-4">
                <Eye className="w-6 h-6 text-[#1f3c8f] flex-shrink-0 mt-1" weight="regular" />
                <p className="text-sm sm:text-base" style={{ color: "#434445" }}>
                  Найчастіше використовується для оцінки ефективності першого контакту аудиторії з інформаційним ресурсом
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-3">Що він показує?</h3>
              <ul className="space-y-2 text-sm sm:text-base" style={{ color: "#434445" }}>
                <li>• Якість першого враження від сайту</li>
                <li>• Відповідність контенту очікуванням користувачів</li>
                <li>• Ефективність навігації та структури сайту</li>
                <li>• Потреба в оптимізації головної сторінки</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>
      </div>

      {/* Slide 6: Джерела трафіку */}
      <div data-slide>
      <Slide>
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <ShareNetwork className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f]" weight="regular" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f3c8f]">
              Джерела трафіку
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl" style={{ color: "#434445" }}>
              Структура джерел трафіку поділяється на:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#1f3c8f] flex-shrink-0"></div>
                <span className="text-sm sm:text-base font-medium" style={{ color: "#434445" }}>Прямі переходи</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#1f3c8f] flex-shrink-0"></div>
                <span className="text-sm sm:text-base font-medium" style={{ color: "#434445" }}>Реферальні</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#1f3c8f] flex-shrink-0"></div>
                <span className="text-sm sm:text-base font-medium" style={{ color: "#434445" }}>Пошукові</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#1f3c8f] flex-shrink-0"></div>
                <span className="text-sm sm:text-base font-medium" style={{ color: "#434445" }}>Соціальні мережі</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#1f3c8f] flex-shrink-0"></div>
                <span className="text-sm sm:text-base font-medium" style={{ color: "#434445" }}>Електронна пошта</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#1f3c8f] flex-shrink-0"></div>
                <span className="text-sm sm:text-base font-medium" style={{ color: "#434445" }}>Платна реклама</span>
              </div>
            </div>
            <div className="bg-[#1f3c8f]/5 rounded-lg p-4 sm:p-6 mt-4">
              <p className="text-sm sm:text-base md:text-lg" style={{ color: "#434445" }}>
                Цей розподіл дає змогу зрозуміти, які канали приносять найбільшу частку відвідувачів, і визначити ефективність маркетингових чи комунікаційних стратегій освітнього або державного інформаційного ресурсу.
              </p>
            </div>
          </div>
        </div>
      </Slide>
      </div>

      {/* Slide 7: Географія та демографія */}
      <div data-slide>
      <Slide className="bg-gray-50">
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f]" weight="regular" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f3c8f]">
              Географія та демографія
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-3">Географічний розподіл</h3>
                <p className="text-sm sm:text-base" style={{ color: "#434445" }}>
                  Дозволяє виявити основні регіони або країни, з яких надходить трафік, та відстежити демографічні характеристики користувачів
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-3">Практичне застосування</h3>
                <p className="text-sm sm:text-base" style={{ color: "#434445" }}>
                  Для національних ресурсів може виявити іноземних стейкхолдерів або партнерські структури, що проявляють зацікавлення діяльністю установи
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-3">Приклад використання</h3>
              <p className="text-sm sm:text-base" style={{ color: "#434445" }}>
                В умовах повномасштабного вторгнення подібна аналітика дає змогу з'ясувати, чи відвідують українські громадяни за кордоном сайти посольств і консульств, а також визначити, яка частка закордонної аудиторії отримує офіційну інформацію з українських державних ресурсів.
              </p>
            </div>
          </div>
        </div>
      </Slide>
      </div>

      {/* Slide 8: Додаткові можливості */}
      <div data-slide>
      <Slide>
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <Database className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f]" weight="regular" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f3c8f]">
              Додаткові можливості
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f] mb-3" weight="regular" />
              <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-2">Топові сторінки</h3>
              <p className="text-sm sm:text-base" style={{ color: "#434445" }}>
                Інформація про найпопулярніші сторінки сайту
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <MagnifyingGlass className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f] mb-3" weight="regular" />
              <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-2">Ключові слова</h3>
              <p className="text-sm sm:text-base" style={{ color: "#434445" }}>
                Аналіз запитів, за якими відвідувачі потрапляють на ресурс
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <ChartLine className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f] mb-3" weight="regular" />
              <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-2">Перехресні переходи</h3>
              <p className="text-sm sm:text-base" style={{ color: "#434445" }}>
                Аналіз переходів між сайтами та конкурентне порівняння
              </p>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 bg-[#1f3c8f]/5 rounded-lg p-4 sm:p-6">
            <p className="text-sm sm:text-base md:text-lg text-center" style={{ color: "#434445" }}>
              Сукупність усіх згаданих показників формує <strong className="text-[#1f3c8f]">цілісне уявлення</strong> про якість цифрової присутності установи, ефективність її контенту, зручність користування сайтом і вплив на цільову аудиторію.
            </p>
          </div>
        </div>
      </Slide>
      </div>

      {/* Slide 9: Практичні приклади */}
      <div data-slide>
      <Slide className="bg-gray-50">
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f]" weight="regular" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f3c8f]">
              Практичні приклади
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-3 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" weight="regular" />
                Приклад: Університет
              </h3>
              <div className="space-y-3 text-sm sm:text-base" style={{ color: "#434445" }}>
                <p>
                  <strong className="text-[#1f3c8f]">Проблема:</strong> Більшість користувачів залишають сайт після перегляду лише головної сторінки, основний трафік надходить із пошукових запитів на тему вступу.
                </p>
                <p>
                  <strong className="text-[#1f3c8f]">Рішення:</strong> Покращення структури навігації та створення окремої лендингової сторінки для абітурієнтів із чіткими закликами до дії.
                </p>
                <p>
                  <strong className="text-[#1f3c8f]">Результат:</strong> Збільшення глибини переглядів і конверсії потенційних студентів в довгостроковій перспективі.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-3 flex items-center gap-2">
                <Monitor className="w-6 h-6" weight="regular" />
                Мобільна оптимізація
              </h3>
              <p className="text-sm sm:text-base" style={{ color: "#434445" }}>
                Якщо аналітика демонструє низьку частку мобільних користувачів, університет може запровадити адаптивний дизайн і спростити форми подання заяв онлайн.
              </p>
            </div>
          </div>
        </div>
      </Slide>
      </div>

      {/* Slide 10: Обмеження та висновки */}
      <div data-slide>
      <Slide>
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#1f3c8f]" weight="regular" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f3c8f]">
              Обмеження та висновки
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-3">Обмеження</h3>
              <p className="text-sm sm:text-base" style={{ color: "#434445" }}>
                SimilarWeb базується на агрегованих даних із різних джерел, тому його абсолютні показники можуть відрізнятися від реальних даних статистики. Доцільно застосовувати платформу переважно для <strong className="text-[#1f3c8f]">порівняльного аналізу</strong> й виявлення тенденцій, а не як єдине джерело інформації про трафік.
              </p>
            </div>
            <div className="bg-[#1f3c8f]/5 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#1f3c8f] mb-3">Висновки</h3>
              <ul className="space-y-3 text-sm sm:text-base" style={{ color: "#434445" }}>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#1f3c8f] flex-shrink-0 mt-0.5" weight="regular" />
                  <span>SimilarWeb є ефективним інструментом зовнішнього моніторингу та конкурентного аналізу</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#1f3c8f] flex-shrink-0 mt-0.5" weight="regular" />
                  <span>Доцільним було б створення національної аналітичної системи, побудованої за принципами SimilarWeb</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#1f3c8f] flex-shrink-0 mt-0.5" weight="regular" />
                  <span>Це сприяло б підвищенню якості цифрових сервісів, прозорості та доступності отримання інформації</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center">
              <p className="text-base sm:text-lg font-medium" style={{ color: "#434445" }}>
                Наразі реалізація такого масштабного проєкту в Україні залишається малоймовірною через повномасштабне вторгнення, обмежені ресурси, а також відсутність єдиної аналітичної інфраструктури.
              </p>
            </div>
          </div>
        </div>
      </Slide>
      </div>

      {/* Footer */}
      {!isPdfMode && (
      <footer className="bg-gray-100 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#1f3c8f] hover:text-[#1a2f70] transition font-medium"
          >
            <ArrowLeft className="w-5 h-5" weight="regular" />
            Повернутися на головну сторінку
          </Link>
        </div>
      </footer>
      )}
    </div>
  );
}

