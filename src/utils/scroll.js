import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola suavemente para o topo da página
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]); 

  return null; 
}

export default ScrollToTop;