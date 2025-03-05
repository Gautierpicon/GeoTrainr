import { useEffect } from "react";

const Favicon = ({ countryCode }) => {
  useEffect(() => {
    const link = document.querySelector("link[rel='icon']") || document.createElement("link");
    link.rel = "icon";

    if (countryCode) {
      // Si le code du pays est disponible, on met la favicon du drapeau
      link.href = `https://flagcdn.com/${countryCode}.svg`;
    } else {
      // Si pas de question, on garde la favicon par défaut
      link.href = "/favicon.png";
    }

    // Ajout de la balise link au head si elle n'existe pas déjà
    document.head.appendChild(link);

    // Cleanup de la balise link lorsqu'on quitte ce composant
    return () => {
      link.remove();
    };
  }, [countryCode]);

  return null;
};

export default Favicon;