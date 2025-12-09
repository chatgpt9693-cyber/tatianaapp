import { useState } from "react";
import SleepyCard from "@/components/SleepyCard";
import FloatingZs from "@/components/FloatingZs";
import { Copy, Check, Shuffle, Star, Sparkles } from "lucide-react";

const excuses = [
  {
    text: "Учёные доказали, что информация лучше усваивается после сна. Я просто оптимизирую процесс обучения! 🧬",
    category: "Научный подход",
    rating: 5
  },
  {
    text: "Мой мозг сейчас в режиме дефрагментации. Прерывать этот процесс опасно для когнитивных функций. 💾",
    category: "Технический",
    rating: 4
  },
  {
    text: "Я практикую технику Сальвадора Дали — гениальные идеи приходят на грани сна и бодрствования! 🎨",
    category: "Творческий",
    rating: 5
  },
  {
    text: "Это не прокрастинация, это стратегическая пауза для максимальной продуктивности. 📈",
    category: "Бизнес",
    rating: 4
  },
  {
    text: "NASA рекомендует короткий сон для повышения эффективности. Ты что, против космических технологий? 🚀",
    category: "Авторитетный",
    rating: 5
  },
  {
    text: "Я изучаю материал методом осмотической абсорбции — учебник лежит рядом с подушкой. 📚",
    category: "Креативный",
    rating: 3
  },
  {
    text: "Сон укрепляет иммунитет. В условиях пандемии это не лень, а забота о здоровье! 🏥",
    category: "Медицинский",
    rating: 4
  },
  {
    text: "Я не сплю, я медитирую с закрытыми глазами в горизонтальном положении. 🧘‍♀️",
    category: "Духовный",
    rating: 3
  },
  {
    text: "Согласно хронобиологии, сейчас мой организм находится в ультрадианном спаде. Противиться природе — глупо! 🌿",
    category: "Природный",
    rating: 5
  },
  {
    text: "Я заряжаю внутренние батарейки. Учёба на разряженном мозге — это как работа на севшем телефоне. 🔋",
    category: "Аналогия",
    rating: 4
  }
];

const Excuses = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [currentExcuse, setCurrentExcuse] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
    
    // Отслеживаем копирование отмазки
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'copy_excuse', {
        event_category: 'Excuses',
        event_label: text.substring(0, 50),
      });
    }
  };

  const randomExcuse = () => {
    setIsSpinning(true);
    let count = 0;
    const interval = setInterval(() => {
      setCurrentExcuse(Math.floor(Math.random() * excuses.length));
      count++;
      if (count > 10) {
        clearInterval(interval);
        setIsSpinning(false);
        
        // Отслеживаем использование генератора
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'random_excuse', {
            event_category: 'Excuses',
            event_label: 'Генератор отмазок',
          });
        }
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-dreamy relative">
      <FloatingZs />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
              <span className="text-gradient">Готовые отмазки</span>
              <span className="text-foreground"> для Тани</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up opacity-0 delay-200" style={{ animationFillMode: "forwards" }}>
              Проверенные временем и наукой* оправдания
            </p>
            <p className="text-xs text-muted-foreground/50 mt-2 animate-fade-in-up opacity-0 delay-300" style={{ animationFillMode: "forwards" }}>
              * наука может быть слегка преувеличена
            </p>
          </div>
          
          {/* Random Excuse Generator */}
          <div className="mb-12">
            <SleepyCard delay={400} className="text-center">
              <div className="mb-4">
                <Sparkles className="w-8 h-8 text-primary mx-auto animate-pulse-soft" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Генератор отмазок
              </h2>
              <div className={`bg-muted rounded-2xl p-6 mb-6 min-h-[120px] flex items-center justify-center transition-all duration-300 ${isSpinning ? 'animate-pulse' : ''}`}>
                <p className="text-lg text-foreground">
                  {excuses[currentExcuse].text}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={randomExcuse}
                  disabled={isSpinning}
                  className="dreamy-button flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Shuffle className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
                  Крутануть рулетку
                </button>
                <button
                  onClick={() => copyToClipboard(excuses[currentExcuse].text, -1)}
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {copiedIndex === -1 ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  {copiedIndex === -1 ? "Скопировано!" : "Скопировать"}
                </button>
              </div>
            </SleepyCard>
          </div>
          
          {/* All Excuses */}
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
            Полная коллекция 📋
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {excuses.map((excuse, index) => (
              <SleepyCard key={index} delay={500 + index * 50} className="group hover:scale-[1.02] transition-transform duration-300">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {excuse.category}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(excuse.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  {excuse.text}
                </p>
                <button
                  onClick={() => copyToClipboard(excuse.text, index)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-4 h-4" />
                      Скопировано!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Скопировать
                    </>
                  )}
                </button>
              </SleepyCard>
            ))}
          </div>
          
          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <div className="bg-secondary/30 rounded-2xl p-6 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}>
              <p className="text-lg mb-2">⚠️</p>
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Дисклеймер:</strong> Авторы сайта не несут ответственности за последствия использования данных отмазок. 
                Применять с осторожностью и чувством юмора!
              </p>
              <p className="text-muted-foreground/60 text-xs mt-3 italic">
                P.S. Татьяна, мы всё видим. Учебник ждёт. 📚👀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excuses;
