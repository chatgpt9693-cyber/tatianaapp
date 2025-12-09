import { Link } from "react-router-dom";
import FloatingZs from "@/components/FloatingZs";
import SleepyCard from "@/components/SleepyCard";
import { Moon, Sparkles, BookX, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-dreamy relative overflow-hidden">
      <FloatingZs />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-bounce-soft inline-block mb-6">
            <span className="text-7xl md:text-8xl">🛏️</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <span className="text-foreground">Привет, </span>
            <span className="text-gradient">Татьяна!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up opacity-0 delay-200" style={{ animationFillMode: "forwards" }}>
            Добро пожаловать в твой персональный гид по 
            <span className="text-primary font-semibold"> дневному сну</span>
          </p>
          
          <div className="bg-secondary/50 rounded-2xl p-4 md:p-6 inline-block mb-8 animate-fade-in-up opacity-0 delay-300 animate-wiggle" style={{ animationFillMode: "forwards" }}>
            <p className="text-secondary-foreground flex items-center gap-2 text-lg">
              <BookX className="w-5 h-5 text-accent" />
              <span className="italic">
                "Учёба подождёт... подушка зовёт!"
              </span>
              <span className="text-2xl">😏</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-500" style={{ animationFillMode: "forwards" }}>
            <Link to="/benefits" className="dreamy-button flex items-center justify-center gap-2">
              <Moon className="w-5 h-5" />
              Узнать пользу сна
            </Link>
            <Link to="/excuses" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Готовые отмазки
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Preview */}
      <section className="container mx-auto px-4 pb-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <SleepyCard delay={600}>
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Мозг скажет спасибо</h3>
            <p className="text-muted-foreground">
              Дневной сон улучшает память и концентрацию. 
              <span className="text-accent font-medium"> Но сначала поспи!</span>
            </p>
          </SleepyCard>
          
          <SleepyCard delay={700}>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Энергия вместо кофе</h3>
            <p className="text-muted-foreground">
              20 минут сна = 2 чашки кофе. Математика на стороне подушки!
            </p>
          </SleepyCard>
          
          <SleepyCard delay={800}>
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Учёба? Какая учёба?</h3>
            <p className="text-muted-foreground">
              Учебники никуда не денутся, а вот идеальный момент для сна — сейчас!
            </p>
          </SleepyCard>
        </div>
        
        {/* Easter egg message */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground/60 text-sm italic animate-pulse-soft">
            P.S. Мы знаем, что ты открыла этот сайт вместо учебника... 
            <span className="not-italic">😴</span>
          </p>
        </div>
      </section>
      
      {/* Quick stats */}
      <section className="bg-card/50 border-y border-border/50 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "900ms", animationFillMode: "forwards" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary">20</div>
              <div className="text-sm text-muted-foreground">минут сна</div>
            </div>
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary">+40%</div>
              <div className="text-sm text-muted-foreground">к продуктивности</div>
            </div>
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "1100ms", animationFillMode: "forwards" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">страниц учебника</div>
            </div>
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">удовольствия</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Готова к путешествию в мир снов?
          </h2>
          <p className="text-muted-foreground mb-6">
            Исследуй все разделы и найди идеальную отмазку для следующего сеанса прокрастинации
          </p>
          <Link 
            to="/benefits" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            Начать изучение <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
