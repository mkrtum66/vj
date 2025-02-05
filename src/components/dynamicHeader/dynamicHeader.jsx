import { useEffect } from 'react';

const DynamicHeader = ({ title, metaTags, eventScripts }) => {
  // Update document title
  useEffect(() => {
    document.title = title || 'VJ Glass & Moldings Inc. ';
  }, [title]);

  // Update meta tags
  useEffect(() => {
    if (metaTags) {
      metaTags.forEach(({ name, content }) => {
        let metaTag = document.querySelector(`meta[name="${name}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('name', name);
          document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', content);
      });
    }
  }, [metaTags]);

  // Track Pixel events for the route
  useEffect(() => {
    if (eventScripts) {
      eventScripts.forEach(({ onload }) => {
        if (typeof onload === 'function') {
          onload(); // Trigger tracking
        }
      });
    }
  }, [eventScripts]);

  return null;
};

export default DynamicHeader;
