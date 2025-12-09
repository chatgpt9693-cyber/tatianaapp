import SleepyCard from "@/components/SleepyCard";
import FloatingZs from "@/components/FloatingZs";
import { Brain, Heart, Zap, Shield, Smile, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Улучшение памяти",
    description: "Во время сна мозг обрабатывает информацию и переносит её в долгосрочную память. Так что технически ты учишься даже во сне!",
    fact: "NASA доказало: 26 минут сна повышают продуктивность на 34%",
    emoji: "🧠"
  },
  {
    icon: Zap,
    title: "Заряд энергии",
    description: "Короткий сон восстанавливает уровень энергии лучше, чем литры кофе. И без побочных эффектов!",
    fact: "Power nap в 10-20 минут = мгновенный буст энергии",
    emoji: "⚡"
  },
  {
    icon: Heart,
    title: "Здоровье сердца",
    description: "Регулярный дневной сон снижает риск сердечно-сосудистых заболеваний. Сон — это забота о себе!",
    fact: "3 раза в неделю сиеста = -37% риск болезней сердца",
    emoji: "❤️"
  },
  {
    icon: Shield,
    title: "Укрепление иммунитета",
    description: "Недосып ослабляет иммунную систему. Дневной сон помогает организму восстановиться и бороться с вирусами.",
    fact: "Недосып снижает иммунитет на 70%",
    emoji: "🛡️"
  },
  {
    icon: Smile,
    title: "Улучшение настроения",
    description: "Сон снижает уровень кортизола (гормона стресса) и повышает серотонин. Просыпаешься счастливой!",
    fact: "Сиеста снижает раздражительность на 50%",
    emoji: "😊"
  },
  {
    icon: TrendingUp,
    title: "Креативность",
    description: "Сон активирует правое полушарие мозга, отвечающее за творчество. Гениальные идеи приходят после сна!",
    fact: "Сальвадор Дали специально засыпал для вдохновения",
    emoji: "🎨"
  }
];

const Benefits = () => {
  return (
    <div className="min-h-screen bg-dreamy relative">
      <FloatingZs />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
              <span className="text-gradient">Научные факты</span>
              <span className="text-foreground"> о пользе сна</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up opacity-0 delay-200" style={{ animationFillMode: "forwards" }}>
              Веские аргументы для Татьяны (и её совести)
            </p>
            <div className="mt-4 inline-block bg-secondary/50 rounded-full px-4 py-2 animate-fade-in-up opacity-0 delay-300" style={{ animationFillMode: "forwards" }}>
              <span className="text-secondary-foreground text-sm">
                📖 Это тоже своего рода учёба, правда?
              </span>
            </div>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <SleepyCard key={benefit.title} delay={400 + index * 100} className="group hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-3xl">{benefit.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {benefit.description}
                    </p>
                    <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                      <p className="text-sm text-primary font-medium">
                        📊 {benefit.fact}
                      </p>
                    </div>
                  </div>
                </div>
              </SleepyCard>
            ))}
          </div>
          
          {/* Bottom message */}
          <div className="mt-12 text-center">
            <div className="bg-card pillow-effect p-8 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
              <p className="text-2xl mb-2">🎓</p>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Итого: сон — это инвестиция в себя
              </h3>
              <p className="text-muted-foreground">
                А учебник... ну, он же цифровой, никуда не денется. 
                <span className="block mt-2 text-accent font-medium">
                  Зато твои нейроны скажут спасибо! 🧠✨
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
