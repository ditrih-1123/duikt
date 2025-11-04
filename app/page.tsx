"use client";

import Image from "next/image";
import { useState } from "react";
import { 
  LightbulbFilament, 
  Code, 
  Rocket,
  Monitor,
  FileText,
  Globe,
  Scales,
  Envelope,
  GraduationCap,
  Briefcase,
  TrendUp,
  Users,
  Building,
  Books,
  Archive,
  ChartBar,
  ChatCircle,
  MagnifyingGlass,
  Play,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
  ListBullets,
  Sparkle,
  Star,
  BookOpen,
  Student,
  Notebook,
  PaperPlane,
  Certificate
} from "@phosphor-icons/react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
    {
      title: "Сучасний підхід",
      features: [
        {
          icon: <Monitor className="h-6 w-6 text-[#1f3c8f]" weight="regular" />,
          text: "Інтеграція сучасних технологій та методів управління інформаційними ресурсами в освітній процес"
        },
        {
          icon: <FileText className="h-6 w-6 text-[#1f3c8f]" weight="regular" />,
          text: "Актуальні навчальні програми, що відповідають вимогам сучасного ринку праці"
        },
        {
          icon: <Globe className="h-6 w-6 text-[#1f3c8f]" weight="regular" />,
          text: "Міжнародні стандарти та найкращі практики в сфері інформаційно-комунікаційної діяльності"
        }
      ]
    },
    {
      title: "Практична орієнтація",
      features: [
        {
          icon: <Scales className="h-6 w-6 text-[#1f3c8f]" weight="regular" />,
          text: "Збалансована комбінація теоретичних знань та практичних навичок для успішної професійної діяльності"
        },
        {
          icon: <Envelope className="h-6 w-6 text-[#1f3c8f]" weight="regular" />,
          text: "Реальні проекти та кейси від провідних організацій індустрії"
        },
        {
          icon: <GraduationCap className="h-6 w-6 text-[#1f3c8f]" weight="regular" />,
          text: "Стажування та практики в провідних бібліотеках, архівах та інформаційних центрах"
        }
      ]
    },
    {
      title: "Кар'єрні перспективи",
      features: [
        {
          icon: <Briefcase className="h-6 w-6 text-[#1f3c8f]" weight="regular" />,
          text: "Широкі можливості працевлаштування в бібліотеках, архівах, інформаційних центрах та IT-компаніях"
        },
        {
          icon: <TrendUp className="h-6 w-6 text-[#1f3c8f]" weight="regular" />,
          text: "Висока конкурентоспроможність випускників на ринку праці"
        },
        {
          icon: <Users className="h-6 w-6 text-[#1f3c8f]" weight="regular" />,
          text: "Підтримка кар'єрного розвитку та професійного зростання після завершення навчання"
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        {/* Top Utility Bar */}
        <div className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Left: Logo and Title */}
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <Image
                  src="/image/logo.png"
                  alt="Логотип"
                  width={200}
                  height={80}
                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain flex-shrink-0"
                  priority
                />
                <div className="flex-1 min-w-0">
                  <h1 className="text-sm sm:text-base lg:text-xl font-normal text-[#1f3c8f] leading-tight" style={{ fontFamily: 'var(--font-roboto-slab)' }}>
                    <span className="hidden sm:inline">Управління інформаційно-</span>
                    <span className="sm:hidden">Управління інформаційно-<br />комунікаційною діяльністю</span>
                    <br className="hidden sm:block lg:hidden" />
                    <span className="hidden sm:inline lg:block">комунікаційною діяльністю</span>
                  </h1>
                </div>
              </div>

              {/* Right: Contact and Mobile Menu Button */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <a href="#" className="hidden lg:flex items-center gap-2 text-sm text-[#1f3c8f] transition hover:text-[#1a2f70]">
                  <Envelope className="w-4 h-4" weight="regular" />
                  Контактна інформація
                </a>
                {/* Mobile menu button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label={mobileMenuOpen ? "Закрити меню" : "Відкрити меню"}
                >
                  {mobileMenuOpen ? (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <nav className={`bg-gray-100 ${mobileMenuOpen ? '' : 'hidden lg:block'}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 lg:pt-0">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex h-16 items-center justify-between py-2">
              <div className="flex items-center gap-6 lg:gap-8">
                <a
                  href="#program-info"
                  className="flex items-center gap-2 text-base font-medium text-[#1f3c8f] transition hover:text-[#1a2f70]"
                >
                  <FileText className="h-[1em] w-[1em]" weight="regular" />
                  Про програму
                </a>
                <a
                  href="#features"
                  className="flex items-center gap-2 text-base font-medium text-[#1f3c8f] transition hover:text-[#1a2f70]"
                >
                  <Sparkle className="h-[1em] w-[1em]" weight="regular" />
                  Особливості
                </a>
                <a
                  href="#career"
                  className="flex items-center gap-2 text-base font-medium text-[#1f3c8f] transition hover:text-[#1a2f70]"
                >
                  <Briefcase className="h-[1em] w-[1em]" weight="regular" />
                  Кар'єра
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-base font-medium text-[#1f3c8f] transition hover:text-[#1a2f70]"
                >
                  <Envelope className="h-[1em] w-[1em]" weight="regular" />
                  Контакти
                </a>
              </div>
              <a
                href="#contact"
                className="rounded-full bg-[#1f3c8f] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1a2f70]"
              >
                Подати заявку
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-gray-100">
              <div className="mx-auto max-w-7xl px-4 py-4 space-y-2">
                <a
                  href="#program-info"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#1f3c8f] rounded-md transition hover:bg-gray-200"
                >
                  <FileText className="h-[1em] w-[1em]" weight="regular" />
                  Про програму
                </a>
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#1f3c8f] rounded-md transition hover:bg-gray-200"
                >
                  <Sparkle className="h-[1em] w-[1em]" weight="regular" />
                  Особливості
                </a>
                <a
                  href="#career"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#1f3c8f] rounded-md transition hover:bg-gray-200"
                >
                  <Briefcase className="h-[1em] w-[1em]" weight="regular" />
                  Кар'єра
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#1f3c8f] rounded-md transition hover:bg-gray-200"
                >
                  <Envelope className="h-[1em] w-[1em]" weight="regular" />
                  Контакти
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mx-4 mt-4 rounded-full bg-[#1f3c8f] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white text-center shadow-md transition hover:bg-[#1a2f70]"
                >
                  Подати заявку
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#1f3c8f] rounded-md transition hover:bg-gray-200"
                >
                  <Envelope className="h-[1em] w-[1em]" weight="regular" />
                  Контактна інформація
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden animate-fade-in-up" style={{ backgroundColor: '#1f3c8f' }}>
        {/* Animated Comets Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="comet" style={{ left: '3%', animationDelay: '0s', animationDuration: '8s' }}>
            <GraduationCap className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '8%', animationDelay: '-1.2s', animationDuration: '9.2s' }}>
            <BookOpen className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '13%', animationDelay: '-2.4s', animationDuration: '10.4s' }}>
            <Star className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '18%', animationDelay: '-0.6s', animationDuration: '8.6s' }}>
            <LightbulbFilament className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '23%', animationDelay: '-1.8s', animationDuration: '9.8s' }}>
            <Code className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '28%', animationDelay: '-3s', animationDuration: '11s' }}>
            <Notebook className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '33%', animationDelay: '-0.9s', animationDuration: '8.9s' }}>
            <Student className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '38%', animationDelay: '-2.1s', animationDuration: '10.1s' }}>
            <Certificate className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '43%', animationDelay: '-1.3s', animationDuration: '9.3s' }}>
            <Rocket className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '48%', animationDelay: '-3.5s', animationDuration: '11.5s' }}>
            <PaperPlane className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '53%', animationDelay: '-0.4s', animationDuration: '8.4s' }}>
            <Sparkle className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '58%', animationDelay: '-2.6s', animationDuration: '10.6s' }}>
            <Monitor className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '63%', animationDelay: '-1.7s', animationDuration: '9.7s' }}>
            <Globe className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '68%', animationDelay: '-3.8s', animationDuration: '11.8s' }}>
            <TrendUp className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '73%', animationDelay: '-0.8s', animationDuration: '8.8s' }}>
            <FileText className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '78%', animationDelay: '-2.3s', animationDuration: '10.3s' }}>
            <Books className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '83%', animationDelay: '-1.5s', animationDuration: '9.5s' }}>
            <Briefcase className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '88%', animationDelay: '-3.2s', animationDuration: '11.2s' }}>
            <Users className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '93%', animationDelay: '-0.7s', animationDuration: '8.7s' }}>
            <ChartBar className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '98%', animationDelay: '-2.9s', animationDuration: '10.9s' }}>
            <Building className="w-full h-full text-white/30" weight="regular" />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-0 sm:px-6 sm:pt-16 sm:pb-0 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            {/* Text Content */}
            <div className="text-center lg:text-left pb-12 sm:pb-16 relative z-10">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl animate-text-appear">
                Управління інформаційно-<br className="hidden sm:block" />
                комунікаційною діяльністю
              </h1>
              <p className="mx-auto lg:mx-0 mt-6 max-w-3xl text-base leading-relaxed sm:text-lg text-white/95 animate-text-appear-delay-1">
                Освітньо-професійна програма магістерського рівня, що готує фахівців у сфері інформаційних технологій, бібліотечної справи та комунікаційного менеджменту.
              </p>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-x-6">
                <a
                  href="#program-info"
                  className="rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-[#1f3c8f] shadow-lg transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Дізнатися більше
                </a>
                <a
                  href="#contact"
                  className="text-sm sm:text-base font-semibold leading-6 text-white ring-2 ring-white/30 hover:ring-white/50 hover:bg-white/10 rounded-full px-6 py-3 sm:px-8 sm:py-4 transition"
                >
                  Зв'язатися з нами <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="flex justify-center lg:justify-end items-end -mb-0 w-full lg:overflow-visible relative">
              <Image
                src="/image/people.png"
                alt="Студенти та випускники програми"
                width={1200}
                height={1200}
                className="w-full lg:w-[300%] lg:max-w-none lg:ml-auto lg:mr-0 h-auto lg:object-right-bottom"
                priority
                unoptimized={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Information Section */}
      <section id="program-info" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#1f3c8f] sm:text-4xl animate-text-appear">
              Про програму
            </h2>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Перевага 1 */}
              <div className="rounded-2xl bg-white p-6 sm:p-8 md:p-10 ring-1 ring-gray-200 text-center transition-all duration-300 hover:-translate-y-1 animate-text-appear-delay-1">
              <div className="flex justify-center mb-4 sm:mb-6">
                <LightbulbFilament className="h-12 w-12 sm:h-16 sm:w-16 text-[#1f3c8f]" weight="regular" />
              </div>
              <h3 className="text-xl font-bold text-[#1f3c8f] leading-tight mb-2">
                Інноваційні технології
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ color: '#434445' }}>
                Сучасні інформаційні системи та методи управління цифровими ресурсами для ефективної роботи з даними
              </p>
            </div>

            {/* Перевага 2 */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 md:p-10 ring-1 ring-gray-200 text-center transition-all duration-300 hover:-translate-y-1 animate-text-appear-delay-2">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Code className="h-12 w-12 sm:h-16 sm:w-16 text-[#1f3c8f]" weight="regular" />
              </div>
              <h3 className="text-xl font-bold text-[#1f3c8f] leading-tight mb-2">
                Практичний досвід
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ color: '#434445' }}>
                Збалансована комбінація теоретичної підготовки та практичних проектів з реальними кейсами з індустрії
              </p>
            </div>

            {/* Перевага 3 */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 md:p-10 ring-1 ring-gray-200 text-center transition-all duration-300 hover:-translate-y-1 animate-text-appear-delay-3">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Rocket className="h-12 w-12 sm:h-16 sm:w-16 text-[#1f3c8f]" weight="regular" />
              </div>
              <h3 className="text-xl font-bold text-[#1f3c8f] leading-tight mb-2">
                Кар'єрні перспективи
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ color: '#434445' }}>
                Широкі можливості працевлаштування в бібліотеках, архівах, IT-компаніях та інформаційних службах
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Carousel */}
      <section id="features" className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#1f3c8f] sm:text-4xl animate-text-appear">
              Чому саме ця програма?
            </h2>
          </div>

          {/* Mobile View - All cards stacked */}
          <div className="mt-8 block sm:hidden space-y-4">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-5 animate-text-appear`}
                style={{ backgroundColor: '#f3f6f7', animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-[#1f3c8f] mb-4">
                  {slide.title}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {slide.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5">
                          {feature.icon}
                        </div>
                      </div>
                      <p className="text-sm lg:text-base leading-relaxed" style={{ color: '#434445' }}>
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Carousel */}
          <div className="relative mt-8 hidden sm:block">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full flex-shrink-0">
                    <div 
                      className="rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12" 
                      style={{ backgroundColor: '#f3f6f7' }}
                    >
                      <h3 className="text-xl font-bold text-[#1f3c8f] mb-6">
                        {slide.title}
                      </h3>
                      <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        {slide.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex gap-3 sm:gap-4 items-start">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-6 sm:w-6">
                                {feature.icon}
                              </div>
                            </div>
                            <p className="text-sm lg:text-base leading-relaxed" style={{ color: '#434445' }}>
                              {feature.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10"
              aria-label="Попередній слайд"
            >
              <svg className="h-6 w-6 text-[#1f3c8f]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10"
              aria-label="Наступний слайд"
            >
              <svg className="h-6 w-6 text-[#1f3c8f]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-[#1f3c8f]' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Перейти до слайду ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section id="career" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#1f3c8f] sm:text-4xl">
              Кар'єрні можливості
            </h2>
          </div>

          <div className="mt-8 sm:mt-12">
            {/* Career Path Map - Desktop View */}
            <div className="hidden lg:block">
              {/* Central Node - Program */}
              <div className="mb-8 sm:mb-12">
                <div className="rounded-2xl bg-[#1f3c8f] px-6 sm:px-8 py-4 sm:py-5 w-full">
                  <h3 className="text-xl font-bold text-white text-center leading-tight">
                    Магістр з інформаційної, бібліотечної та архівної справ
                  </h3>
                  <p className="text-sm text-white/90 text-center mt-2">
                    Освітня кваліфікація, що відкриває широкі кар'єрні можливості
                  </p>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-2 gap-6 lg:gap-8">
                {/* Public Sector Column */}
                <div className="space-y-5 sm:space-y-6">
                  <div className="rounded-xl bg-white px-5 sm:px-6 py-3 sm:py-4 ring-2 ring-[#1f3c8f]/30 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Building className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                      </div>
                      <h4 className="text-lg font-bold text-[#1f3c8f]">
                        Публічний сектор
                      </h4>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 pl-4 sm:pl-6 border-l-4 border-[#1f3c8f]/20">
                    {/* Specialization 1 */}
                    <div className="rounded-lg bg-[#f3f6f7] px-4 sm:px-5 py-3 sm:py-4 ring-1 ring-gray-300">
                      <div className="flex gap-3 sm:gap-4 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-gray-100 rounded-lg">
                          <Books className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                        </div>
                        <p className="text-sm lg:text-base font-medium leading-relaxed flex-1" style={{ color: '#434445' }}>
                          Бібліотекар-аналітик<br />у бібліотеках та інформаційних центрах
                        </p>
                      </div>
                    </div>
                    
                    {/* Specialization 2 */}
                    <div className="rounded-lg bg-[#f3f6f7] px-4 sm:px-5 py-3 sm:py-4 ring-1 ring-gray-300">
                      <div className="flex gap-3 sm:gap-4 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-gray-100 rounded-lg">
                          <Archive className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                        </div>
                        <p className="text-sm lg:text-base font-medium leading-relaxed flex-1" style={{ color: '#434445' }}>
                          Архівіст-дослідник<br />у державних та муніципальних архівах
                        </p>
                      </div>
                    </div>
                    
                    {/* Specialization 3 */}
                    <div className="rounded-lg bg-[#f3f6f7] px-4 sm:px-5 py-3 sm:py-4 ring-1 ring-gray-300">
                      <div className="flex gap-3 sm:gap-4 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-gray-100 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                        </div>
                        <p className="text-sm lg:text-base font-medium leading-relaxed flex-1" style={{ color: '#434445' }}>
                          Інформаційний спеціаліст<br />у наукових та освітніх установах
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Private Sector Column */}
                <div className="space-y-5 sm:space-y-6">
                  <div className="rounded-xl bg-white px-5 sm:px-6 py-3 sm:py-4 ring-2 ring-[#1f3c8f]/30 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Briefcase className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                      </div>
                      <h4 className="text-lg font-bold text-[#1f3c8f]">
                        Приватний сектор
                      </h4>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 pl-4 sm:pl-6 border-l-4 border-[#1f3c8f]/20">
                    {/* Specialization 1 */}
                    <div className="rounded-lg bg-[#f3f6f7] px-4 sm:px-5 py-3 sm:py-4 ring-1 ring-gray-300">
                      <div className="flex gap-3 sm:gap-4 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-gray-100 rounded-lg">
                          <Code className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                        </div>
                        <p className="text-sm lg:text-base font-medium leading-relaxed flex-1" style={{ color: '#434445' }}>
                          IT-консультант<br />у IT-компаніях та технологічних стартапах
                        </p>
                      </div>
                    </div>
                    
                    {/* Specialization 2 */}
                    <div className="rounded-lg bg-[#f3f6f7] px-4 sm:px-5 py-3 sm:py-4 ring-1 ring-gray-300">
                      <div className="flex gap-3 sm:gap-4 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-gray-100 rounded-lg">
                          <ChartBar className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                        </div>
                        <p className="text-sm lg:text-base font-medium leading-relaxed flex-1" style={{ color: '#434445' }}>
                          Data Analyst<br />у медіа та комунікаційних агентствах
                        </p>
                      </div>
                    </div>
                    
                    {/* Specialization 3 */}
                    <div className="rounded-lg bg-[#f3f6f7] px-4 sm:px-5 py-3 sm:py-4 ring-1 ring-gray-300">
                      <div className="flex gap-3 sm:gap-4 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-gray-100 rounded-lg">
                          <ChatCircle className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                        </div>
                        <p className="text-sm lg:text-base font-medium leading-relaxed flex-1" style={{ color: '#434445' }}>
                          Комунікаційний менеджер<br />у корпоративних інформаційних службах
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet View */}
            <div className="lg:hidden space-y-6 sm:space-y-8">
              {/* Central Program */}
              <div className="rounded-2xl bg-[#1f3c8f] px-5 sm:px-6 py-4 sm:py-5 text-center w-full">
                <h3 className="text-xl font-bold text-white leading-tight">
                  Магістр з інформаційної, бібліотечної та архівної справ
                </h3>
                <p className="text-xs text-white/90 text-center mt-2">
                  Освітня кваліфікація, що відкриває широкі кар'єрні можливості
                </p>
              </div>

              {/* Sectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Public Sector */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="rounded-xl bg-white px-5 sm:px-6 py-3 sm:py-4 ring-2 ring-[#1f3c8f]/30">
                    <div className="flex items-center justify-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Building className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                      </div>
                      <h4 className="text-lg font-bold text-[#1f3c8f]">
                        Публічний сектор
                      </h4>
                    </div>
                  </div>
                  <div className="space-y-3 pl-3 sm:pl-4 border-l-2 border-[#1f3c8f]/20">
                    <div className="rounded-lg bg-[#f3f6f7] px-4 py-3 ring-1 ring-gray-200">
                      <div className="flex gap-3 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-gray-100 rounded-lg">
                          <Books className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                        </div>
                        <p className="text-sm lg:text-base font-medium leading-relaxed flex-1" style={{ color: '#434445' }}>
                          Бібліотекар-аналітик<br />у бібліотеках та інформаційних центрах
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-[#f3f6f7] px-4 py-3 ring-1 ring-gray-200">
                      <div className="flex gap-3 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-gray-100 rounded-lg">
                          <Archive className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                        </div>
                        <p className="text-sm lg:text-base font-medium leading-relaxed flex-1" style={{ color: '#434445' }}>
                          Архівіст-дослідник<br />у державних та муніципальних архівах
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-[#f3f6f7] px-4 py-3 ring-1 ring-gray-200">
                      <div className="flex gap-3 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-gray-100 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                        </div>
                        <p className="text-sm lg:text-base font-medium leading-relaxed flex-1" style={{ color: '#434445' }}>
                          Інформаційний спеціаліст<br />у наукових та освітніх установах
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Private Sector */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="rounded-xl bg-white px-5 sm:px-6 py-3 sm:py-4 ring-2 ring-[#1f3c8f]/30">
                    <div className="flex items-center justify-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Briefcase className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                      </div>
                      <h4 className="text-lg font-bold text-[#1f3c8f]">
                        Приватний сектор
                      </h4>
                    </div>
                  </div>
                  <div className="space-y-3 pl-3 sm:pl-4 border-l-2 border-[#1f3c8f]/20">
                    <div className="rounded-lg bg-[#f3f6f7] px-4 py-3 ring-1 ring-gray-200">
                      <div className="flex gap-3 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-gray-100 rounded-lg">
                          <Code className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                        </div>
                        <p className="text-sm lg:text-base font-medium leading-relaxed flex-1" style={{ color: '#434445' }}>
                          IT-консультант<br />у IT-компаніях та технологічних стартапах
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-[#f3f6f7] px-4 py-3 ring-1 ring-gray-200">
                      <div className="flex gap-3 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-gray-100 rounded-lg">
                          <ChartBar className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                        </div>
                        <p className="text-sm lg:text-base font-medium leading-relaxed flex-1" style={{ color: '#434445' }}>
                          Data Analyst<br />у медіа та комунікаційних агентствах
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-[#f3f6f7] px-4 py-3 ring-1 ring-gray-200">
                      <div className="flex gap-3 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-gray-100 rounded-lg">
                          <ChatCircle className="h-6 w-6 text-[#1f3c8f]" weight="regular" />
                        </div>
                        <p className="text-sm lg:text-base font-medium leading-relaxed flex-1" style={{ color: '#434445' }}>
                          Комунікаційний менеджер<br />у корпоративних інформаційних службах
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price CTA Section */}
      <section id="contact" className="relative overflow-hidden animate-fade-in-up" style={{ backgroundColor: '#1f3c8f' }}>
        {/* Animated Comets Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="comet" style={{ left: '3%', animationDelay: '0s', animationDuration: '8s' }}>
            <GraduationCap className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '8%', animationDelay: '-1.2s', animationDuration: '9.2s' }}>
            <BookOpen className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '13%', animationDelay: '-2.4s', animationDuration: '10.4s' }}>
            <Star className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '18%', animationDelay: '-0.6s', animationDuration: '8.6s' }}>
            <LightbulbFilament className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '23%', animationDelay: '-1.8s', animationDuration: '9.8s' }}>
            <Code className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '28%', animationDelay: '-3s', animationDuration: '11s' }}>
            <Notebook className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '33%', animationDelay: '-0.9s', animationDuration: '8.9s' }}>
            <Student className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '38%', animationDelay: '-2.1s', animationDuration: '10.1s' }}>
            <Certificate className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '43%', animationDelay: '-1.3s', animationDuration: '9.3s' }}>
            <Rocket className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '48%', animationDelay: '-3.5s', animationDuration: '11.5s' }}>
            <PaperPlane className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '53%', animationDelay: '-0.4s', animationDuration: '8.4s' }}>
            <Sparkle className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '58%', animationDelay: '-2.6s', animationDuration: '10.6s' }}>
            <Monitor className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '63%', animationDelay: '-1.7s', animationDuration: '9.7s' }}>
            <Globe className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '68%', animationDelay: '-3.8s', animationDuration: '11.8s' }}>
            <TrendUp className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '73%', animationDelay: '-0.8s', animationDuration: '8.8s' }}>
            <FileText className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '78%', animationDelay: '-2.3s', animationDuration: '10.3s' }}>
            <Books className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '83%', animationDelay: '-1.5s', animationDuration: '9.5s' }}>
            <Briefcase className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '88%', animationDelay: '-3.2s', animationDuration: '11.2s' }}>
            <Users className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '93%', animationDelay: '-0.7s', animationDuration: '8.7s' }}>
            <ChartBar className="w-full h-full text-white/30" weight="regular" />
          </div>
          <div className="comet" style={{ left: '98%', animationDelay: '-2.9s', animationDuration: '10.9s' }}>
            <Building className="w-full h-full text-white/30" weight="regular" />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-0 sm:px-6 sm:pt-16 sm:pb-0 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left pb-12 sm:pb-16 relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 animate-text-appear">
                Вартість навчання за рік:<br />
                26 300 гривень
              </h2>
              <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-base leading-relaxed text-white/90 animate-text-appear-delay-1">
                Навчайтеся вигідно та отримуйте якісну освіту другого (магістерського) рівня. 
                Приєднуйтесь до наших студентів та розвивайте кар'єру в сфері інформаційно-комунікаційної діяльності.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-[#1f3c8f] shadow-lg transition hover:bg-white/90"
                >
                  Подати заявку
                </a>
                <a
                  href="mailto:info@university.edu.ua"
                  className="text-sm sm:text-base font-semibold leading-6 text-white ring-2 ring-white/30 hover:ring-white/50 rounded-full px-6 py-3 sm:px-8 sm:py-4 transition"
                >
                  Дізнатися більше
                </a>
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end items-end -mb-0 w-full lg:overflow-visible relative">
              <Image
                src="/image/people.png"
                alt="Студенти та випускники програми"
                width={600}
                height={600}
                className="w-full lg:w-[70%] lg:max-w-none lg:ml-auto lg:mr-0 h-auto lg:object-right-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white" style={{ backgroundColor: '#16486b' }}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Navigation Links */}
            <div>
              <h5 className="text-base font-semibold mb-4">Навігація</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#program-info" className="text-sm text-white/80 hover:text-white transition-colors">
                    Про програму
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors">
                    Особливості
                  </a>
                </li>
                <li>
                  <a href="#career" className="text-sm text-white/80 hover:text-white transition-colors">
                    Кар'єрні можливості
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors">
                    Вартість навчання
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h5 className="text-base font-semibold mb-4">Контакти</h5>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="mailto:info@university.edu.ua" className="hover:text-white transition-colors">
                    info@university.edu.ua
                  </a>
                </li>
                <li>
                  <a href="tel:+380123456789" className="hover:text-white transition-colors">
                    +38 (012) 345-67-89
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Program Info */}
            <div>
              <h5 className="text-base font-semibold mb-4">Про програму</h5>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Галузь: 02 Культура і мистецтво</li>
                <li>Спеціальність: 029 Інформаційна, бібліотечна та архівна справа</li>
                <li>Освітня кваліфікація: Магістр</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-sm leading-5 text-white/90">
              &copy; {new Date().getFullYear()} Освітньо-професійна програма "Управління інформаційно-комунікаційною діяльністю". Всі права захищені.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}