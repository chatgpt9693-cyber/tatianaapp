import SleepyCard from "@/components/SleepyCard";
import FloatingZs from "@/components/FloatingZs";
import { Clock, Moon, Sun, Coffee, Sofa, Volume2 } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Выбери время",
    description: "Идеальное время для дневного сна — между 13:00 и 15:00. Это естественный спад активности организма.",
    tip: "Совпадает со временем, когда обычно открывают учебники... Совпадение? 🤔",
    icon: Clock,
    emoji: "⏰"
  },
  {
    number: 2,
    title: "Установи будильник",
    description: "10-20 минут — идеально для бодрости. 90 минут — полный цикл сна для глубокого отдыха.",
    tip: "Не больше 30 минут, иначе проснёшься сонной!",
    icon: Moon,
    emoji: "⏱️"
  },
  {
    number: 3,
    title: "Создай атмосферу",
    description: "Тёмная комната, прохладная температура, удобная поза. Можно надеть маску для сна.",
    tip: "Закрытый учебник создаёт идеальную подставку под голову 📚",
    icon: Sofa,
    emoji: "🛋️"
  },
  {
    number: 4,
    title: "Откажись от кофе",
    description: "Не пей кофе за 4-6 часов до сна. Кофеин блокирует аденозин — гормон сонливости.",
    tip: "Хотя... кофе + сон = кофейная сиеста (гуглить разрешается)",
    icon: Coffee,
    emoji: "☕"
  },
  {
    number: 5,
    title: "Заглуши шум",
    description: "Используй беруши или белый шум. Тишина помогает быстрее заснуть.",
    tip: "Звук открывающегося учебника — НЕ белый шум!",
    icon: Volume2,
    emoji: "🔇"
  },
  {
    number: 6,
    title: "Просыпайся постепенно",
    description: "Дай себе 5-10 минут на пробуждение. Выпей воды, потянись, посмотри в окно.",
    tip: "Потом можно снова закрыть глаза... шутка! Или нет? 😏",
    icon: Sun,
    emoji: "🌅"
  }
];

const HowTo = () => {
  return (
    <div className="min-h-screen bg-dreamy relative">
      <FloatingZs />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
              <span className="text-foreground">Как </span>
              <span className="text-gradient">правильно спать</span>
              <span className="text-foreground"> днём</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up opacity-0 delay-200" style={{ animationFillMode: "forwards" }}>
              Пошаговая инструкция для Татьяны
            </p>
            <div className="mt-4 inline-block bg-peach rounded-full px-4 py-2 animate-fade-in-up opacity-0 delay-300" style={{ animationFillMode: "forwards" }}>
              <span className="text-accent-foreground text-sm">
                🎯 Спойлер: это проще, чем изучать материал
              </span>
            </div>
          </div>
          
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <SleepyCard key={step.number} delay={400 + index * 100} className="relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-lavender-dark flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{step.emoji}</span>
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {step.description}
                    </p>
                    <div className="bg-secondary/50 rounded-lg p-3 inline-block">
                      <p className="text-sm text-secondary-foreground italic">
                        💡 {step.tip}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -right-4 -bottom-4 text-6xl opacity-10">
                  {step.emoji}
                </div>
              </SleepyCard>
            ))}
          </div>
          
          {/* Pro tip */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20 animate-fade-in-up opacity-0" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
              <div className="text-center">
                <span className="text-4xl mb-4 block">🏆</span>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Про-тип от бывалого
                </h3>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Положи открытый учебник рядом с кроватью. 
                  Технически, ты будешь "заниматься с учебником" — 
                  <span className="text-primary font-semibold"> он же рядом!</span>
                </p>
                <p className="mt-4 text-sm text-muted-foreground/60">
                  * Не является юридическим советом 😴
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
