import { NavLink } from "@/components/NavLink";
import { Moon, BookOpen, Clock, Coffee, Timer, Rocket } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navigation = () => {
  const navItems = [
    { to: "/", label: "Главная", icon: Moon },
    { to: "/benefits", label: "Польза сна", icon: BookOpen },
    { to: "/how-to", label: "Как спать", icon: Clock },
    { to: "/timer", label: "Таймер", icon: Timer },
    { to: "/excuses", label: "Отмазки", icon: Coffee },
    { to: "/no-sleep", label: "Не хочется спать", icon: Rocket },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50" role="navigation" aria-label="Основная навигация">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-label="Спящий смайлик">😴</span>
            <span className="font-bold text-lg text-foreground">
              Сонный гид
            </span>
          </div>
          
          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <Tooltip key={item.to}>
                <TooltipTrigger asChild>
                  <NavLink
                    to={item.to}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                    activeClassName="bg-primary/10 text-primary"
                    end={item.to === "/"}
                    aria-label={item.label}
                  >
                    <item.icon className="w-4 h-4" aria-hidden="true" />
                    <span className="hidden md:inline">{item.label}</span>
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent className="md:hidden">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
