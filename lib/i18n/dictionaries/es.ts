import type { Dictionary } from "./en";

const es: Dictionary = {
  meta: {
    title: "Miguel Hernandez, REALTOR® | Bienes Raíces en Central New Jersey",
    description:
      "Compra, vende o renta en Central New Jersey con Miguel Hernandez, REALTOR® bilingüe con Halo Realty, sirviendo a Perth Amboy, South Amboy y pueblos cercanos.",
  },
  topbar: {
    language: "We speak English",
  },
  nav: {
    links: [
      { label: "Servicios", href: "#services" },
      { label: "Ventas Recientes", href: "#sold" },
      { label: "Sobre Mí", href: "#about" },
      { label: "Áreas", href: "#areas" },
    ],
    contact: "Contacto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchLanguage: "View in English",
  },
  hero: {
    eyebrow: "Compra · Vende · Renta en New Jersey",
    title: "Casas en Central Jersey",
    body: "Ya sea que estés comprando tu primera casa, vendiendo al mejor precio o buscando tu próxima renta, Miguel te acompaña en cada paso, residencial o comercial, en español o inglés.",
    primaryCta: "Hablemos",
    secondaryCta: "¿Cuánto Vale Mi Casa?",
    imageAlt: "Casa clásica de New Jersey con porche y jardín",
    highlights: [
      "Residencial y Comercial",
      "Compradores · Vendedores · Inquilinos",
      "Bilingüe · Español e Inglés",
    ],
  },
  services: {
    eyebrow: "Cómo Te Puedo Ayudar",
    title: "Servicios de Bienes Raíces",
    intro:
      "Un agente de confianza para cada paso, ya sea que estés comprando, vendiendo, rentando o invirtiendo en Central Jersey.",
    cta: "Comenzar",
    items: [
      {
        icon: "buy",
        title: "Comprar una Casa",
        body: "Desde compradores de primera vez hasta familias en crecimiento: encuentra la casa ideal, negocia el mejor precio y cierra con confianza.",
      },
      {
        icon: "sell",
        title: "Vender tu Casa",
        body: "Precio estratégico, marketing profesional y exposición en redes sociales para vender tu casa rápido y al mejor precio.",
      },
      {
        icon: "rent",
        title: "Rentas",
        body: "¿Buscas apartamento o tienes una propiedad para rentar? Conectamos inquilinos y propietarios rápidamente, desde la visita hasta el contrato firmado.",
      },
      {
        icon: "commercial",
        title: "Comercial",
        body: "Locales, oficinas, uso mixto y propiedades de inversión para dueños de negocios e inversionistas que buscan el espacio ideal.",
      },
    ],
  },
};

export default es;
