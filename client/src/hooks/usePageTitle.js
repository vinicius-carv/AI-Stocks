import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (title) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title || 'Default Page Title'; // Fallback title
  }, [location, title]);
};

export default usePageTitle;