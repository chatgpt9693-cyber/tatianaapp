import { useState, useEffect, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Moon, Sparkles } from "lucide-react";
import FloatingZs from "@/components/FloatingZs";

const Timer = () => {
  const [duration, setDuration] = useState(20); // minutes
  const [timeLeft, setTimeLeft] = useState(duration * 60); // seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Play notification sound when timer completes
  const playNotification = () => {
    try {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGS57OihUBELTKXh8bllHAU2jdXvzn0vBSh+zPDajzsKElyx6OyrWBUIQ5zd8sFuJAUuhM/z24k2CBhku+zooVARC0yl4fG5ZRwFNo3V7859LwUofsz');
      audio.play().catch(() => {});
    } catch (e) {
      // Fallback: vibrate if available
      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = isRunning || timeLeft !== duration * 60 
    ? ((duration * 60 - timeLeft) / (duration * 60)) * 100 
    : 0;

  const handleStart = useCallback(() => {
    if (timeLeft === 0) {
      setTimeLeft(duration * 60);
    }
    setIsRunning(true);
    setIsComplete(false);
    
    // Отслеживаем запуск таймера
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'start_timer', {
        event_category: 'Timer',
        event_label: `${duration} минут`,
        value: duration,
      });
    }
  }, [timeLeft, duration]);

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(duration * 60);
    setIsComplete(false);
  };

  const handleDurationChange = (value: number[]) => {
    const newDuration = value[0];
    setDuration(newDuration);
    if (!isRunning) {
      setTimeLeft(newDuration * 60);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsComplete(true);
            playNotification();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const getNapTip = () => {
    if (duration <= 20) return "Идеально для быстрого восстановления энергии! 🚀";
    if (duration <= 30) return "Отличный power nap для улучшения концентрации 💡";
    if (duration <= 45) return "Хороший баланс отдыха и бодрости ⚡";
    if (duration <= 60) return "Глубокий отдых для творческого мышления 🎨";
    return "Полный цикл сна для максимального восстановления 🌙";
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingZs />
      
      {/* Relaxing animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl transition-all duration-[3000ms] ${
            isRunning ? "animate-pulse scale-110" : ""
          }`}
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl transition-all duration-[4000ms] ${
            isRunning ? "animate-pulse scale-125" : ""
          }`}
          style={{ animationDelay: "1s" }}
        />
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl transition-all duration-[5000ms] ${
            isRunning ? "animate-pulse" : ""
          }`}
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Moon className="w-4 h-4" />
              <span>Таймер сна вместо учебы</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Время отдохнуть 😴
            </h1>
            <p className="text-muted-foreground">
              Настрой идеальный дневной сон, Татьяна!
            </p>
          </div>

          {/* Timer Display */}
          <div 
            className={`relative bg-card rounded-3xl p-8 shadow-xl border border-border/50 mb-8 transition-all duration-500 ${
              isRunning ? "shadow-primary/20 shadow-2xl" : ""
            } ${isComplete ? "animate-soft-bounce" : ""}`}
          >
            {/* Progress ring */}
            <div className="relative w-64 h-64 mx-auto mb-6">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="6"
                />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                  className="transition-all duration-1000 ease-linear"
                />
              </svg>
              
              {/* Time display */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span 
                  className={`text-5xl font-bold text-foreground transition-all duration-300 ${
                    isRunning ? "scale-105" : ""
                  }`}
                >
                  {formatTime(timeLeft)}
                </span>
                <span className="text-muted-foreground text-sm mt-2">
                  {isComplete ? "Просыпайся! 🌅" : isRunning ? "Сладких снов..." : "минут отдыха"}
                </span>
              </div>

              {/* Floating sparkles when running */}
              {isRunning && (
                <>
                  <Sparkles 
                    className="absolute top-4 right-8 w-5 h-5 text-primary/60 animate-wiggle" 
                  />
                  <Sparkles 
                    className="absolute bottom-8 left-4 w-4 h-4 text-accent/60 animate-wiggle" 
                    style={{ animationDelay: "0.5s" }}
                  />
                  <Sparkles 
                    className="absolute top-1/2 right-0 w-3 h-3 text-primary/40 animate-wiggle" 
                    style={{ animationDelay: "1s" }}
                  />
                </>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              {!isRunning ? (
                <Button
                  onClick={handleStart}
                  size="lg"
                  className="rounded-full px-8 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  Начать сон
                </Button>
              ) : (
                <Button
                  onClick={handlePause}
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-8 gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Pause className="w-5 h-5" />
                  Пауза
                </Button>
              )}
              
              <Button
                onClick={handleReset}
                size="lg"
                variant="outline"
                className="rounded-full px-4 hover:scale-105 transition-all duration-300"
              >
                <RotateCcw className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Duration slider */}
          <div 
            className={`bg-card rounded-2xl p-6 border border-border/50 transition-opacity duration-300 ${
              isRunning ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-foreground">
                Продолжительность сна
              </span>
              <span className="text-lg font-bold text-primary">
                {duration} мин
              </span>
            </div>
            
            <Slider
              value={[duration]}
              onValueChange={handleDurationChange}
              min={10}
              max={90}
              step={5}
              disabled={isRunning}
              className="mb-4"
            />
            
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>10 мин</span>
              <span>30 мин</span>
              <span>60 мин</span>
              <span>90 мин</span>
            </div>

            <div className="mt-4 p-3 bg-muted/50 rounded-xl text-center">
              <span className="text-sm text-muted-foreground">
                {getNapTip()}
              </span>
            </div>
          </div>

          {/* Fun message */}
          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-muted-foreground text-sm">
              Помни: каждая минута сна — это минута, 
              <br />
              <span className="text-primary font-medium">не потраченная на изучение материала</span> 📚❌
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
