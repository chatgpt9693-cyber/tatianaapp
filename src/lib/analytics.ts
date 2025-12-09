// Google Analytics 4
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

// Инициализация Google Analytics
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) return;

  // Загружаем скрипт Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Инициализируем gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });

  // Делаем gtag доступным глобально
  (window as any).gtag = gtag;
};

// Отслеживание просмотра страницы
export const trackPageView = (url: string) => {
  if (!GA_MEASUREMENT_ID) return;
  
  const gtag = (window as any).gtag;
  if (gtag) {
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Отслеживание событий
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!GA_MEASUREMENT_ID) return;

  const gtag = (window as any).gtag;
  if (gtag) {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Готовые события для вашего сайта
export const analytics = {
  // Навигация
  viewPage: (pageName: string) => {
    trackEvent('page_view', 'Navigation', pageName);
  },

  // Таймер
  startTimer: (duration: number) => {
    trackEvent('start_timer', 'Timer', `${duration} минут`, duration);
  },
  
  completeTimer: (duration: number) => {
    trackEvent('complete_timer', 'Timer', `${duration} минут`, duration);
  },

  // Отмазки
  copyExcuse: (excuseText: string) => {
    trackEvent('copy_excuse', 'Excuses', excuseText.substring(0, 50));
  },

  randomExcuse: () => {
    trackEvent('random_excuse', 'Excuses', 'Генератор');
  },

  // Бизнес-идеи
  openBusinessIdea: (ideaTitle: string) => {
    trackEvent('open_idea', 'Business', ideaTitle);
  },

  expandBusinessIdea: (ideaTitle: string) => {
    trackEvent('expand_idea', 'Business', ideaTitle);
  },

  // Клики по кнопкам
  clickButton: (buttonName: string, location: string) => {
    trackEvent('click_button', 'Engagement', `${buttonName} - ${location}`);
  },

  // Время на странице (автоматически отслеживается GA)
  // Но можно добавить кастомное событие
  timeOnPage: (pageName: string, seconds: number) => {
    trackEvent('time_on_page', 'Engagement', pageName, seconds);
  },
};

// Простой счетчик посещений (альтернатива без GA)
export const simpleCounter = {
  init: () => {
    const visits = localStorage.getItem('site_visits');
    const count = visits ? parseInt(visits) + 1 : 1;
    localStorage.setItem('site_visits', count.toString());
    
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('last_visit');
    
    if (lastVisit !== today) {
      const dailyVisits = localStorage.getItem('daily_visits');
      const dailyCount = dailyVisits ? parseInt(dailyVisits) + 1 : 1;
      localStorage.setItem('daily_visits', dailyCount.toString());
      localStorage.setItem('last_visit', today);
    }
  },

  getStats: () => {
    return {
      total: parseInt(localStorage.getItem('site_visits') || '0'),
      today: parseInt(localStorage.getItem('daily_visits') || '0'),
    };
  },
};

// Расширение типов для window
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}
