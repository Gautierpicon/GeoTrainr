import { useEffect } from "react";

const Favicon = ({ countryCode }) => {
  useEffect(() => {
    let link = document.querySelector("link[rel='icon']");
    let originalHref = null;
    let isLinkCreated = false;

    // Créer ou récupérer la balise link existante
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      isLinkCreated = true;
    } else {
      originalHref = link.href; // Sauvegarder l'URL originale
    }

    // Mettre à jour l'URL de la favicon
    link.href = countryCode 
      ? `https://flagcdn.com/${countryCode}.svg`
      : "/favicon.png";

    // Ajouter la balise si elle a été créée
    if (isLinkCreated) {
      document.head.appendChild(link);
    }

    // Restaurer l'état original lors du nettoyage
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