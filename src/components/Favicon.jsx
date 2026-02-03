import { useEffect } from 'react';

const Favicon = ({ countryCode }) => {
  useEffect(() => {
    let link = document.querySelector("link[rel='icon']");
    let originalHref = null;
    let isLinkCreated = false;

    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      isLinkCreated = true;
    } else {
      originalHref = link.href;
    }

    link.href = countryCode
      ? `https://flagcdn.com/${countryCode}.svg`
      : '/favicon.png';

    if (isLinkCreated) {
      document.head.appendChild(link);
    }

    return () => {
      if (isLinkCreated) {
        link.remove();
      } else if (originalHref !== null) {
        link.href = originalHref;
      }
    };
  }, [countryCode]);

  return null;
};

export default Favicon;
