import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname, search } = useLocation();

  // useLayoutEffect - выполняется ДО рендера DOM
  useLayoutEffect(() => {
    console.log('ScrollToTop (layout): forcing scroll to top');
    
    // Мгновенный скролл
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname, search]);

  // useEffect - выполняется ПОСЛЕ рендера DOM (дополнительная гарантия)
  useEffect(() => {
    console.log('ScrollToTop (effect): checking scroll position');
    
    const scrollToTop = () => {
      if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
        console.log('ScrollToTop: still not at top, forcing again');
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    // Проверяем сразу
    scrollToTop();
    
    // И через небольшие интервалы на случай асинхронных операций
    const timer1 = setTimeout(scrollToTop, 10);
    const timer2 = setTimeout(scrollToTop, 50);
    const timer3 = setTimeout(scrollToTop, 100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname, search]);
};