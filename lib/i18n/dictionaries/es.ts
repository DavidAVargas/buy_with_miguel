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
  sold: {
    eyebrow: "Logros Recientes",
    title: "Vendidas y Rentadas",
    intro:
      "Algunas de las familias y negocios que he ayudado a dar el siguiente paso.",
    instagram: "Ver más en Instagram",
    status: { sold: "Vendida", leased: "Rentada" },
    kinds: {
      singleFamily: "Unifamiliar",
      multiFamily: "Multifamiliar",
      apartment: "Apartamento",
      commercial: "Comercial",
    },
    beds: "hab",
    bath: "baño",
    baths: "baños",
    perMonth: "/mes",
  },
  about: {
    eyebrow: "Conoce a Miguel",
    title: "Bienes Raíces con Trato Personal",
    body: [
      "Hola, soy Miguel Hernandez, REALTOR® bilingüe con Halo Realty y orgulloso miembro de Key Move Real Estate Group. Ayudo a familias, compradores de primera vez, inversionistas y dueños de negocios en Central Jersey a comprar, vender y rentar con confianza.",
      "Ya sea tu primer apartamento o la casa de tus sueños, estoy aquí para responder tus preguntas, luchar por el mejor trato y hacer el proceso sencillo, en español o in English.",
    ],
    values: [
      "Hablo español e inglés",
      "Residencial y comercial",
      "Comunicación rápida y honesta",
      "Conozco Central Jersey",
    ],
    brokerage: "Correduría",
    team: "Equipo",
    call: "Llama o Textea a Miguel",
    photoAlt: "Miguel Hernandez, REALTOR®",
    photoSoon: "Foto próximamente",
  },
  areas: {
    county: "Condado de {name}",
    eyebrow: "Áreas de Servicio",
    title: "Arraigado en Central Jersey",
    body: "Desde la costa de Raritan Bay hasta el corazón del condado de Middlesex, conozco estos vecindarios, las escuelas, los trayectos y lo que realmente valen las casas.",
    ask: "¿No ves tu pueblo? Hablemos",
  },
  contact: {
    eyebrow: "Hablemos",
    title: "¿Listo para Dar el Paso?",
    body: "Cuéntame un poco sobre lo que buscas y te responderé rápido, normalmente el mismo día. ¿Prefieres hablar ahora? Llama o textea cuando quieras.",
    call: "Llamar",
    text: "Textear",
    email: "Correo",
    languages: "Español e Inglés",
    form: {
      name: "Nombre Completo",
      phone: "Teléfono",
      email: "Correo Electrónico",
      interest: "Quiero",
      interests: {
        buy: "Comprar",
        sell: "Vender",
        rent: "Rentar",
        commercial: "Comercial",
      },
      message: "Mensaje",
      messagePlaceholder:
        "Cuéntame tus planes, tu tiempo o la casa que tienes en mente.",
      submit: "Enviar Mensaje",
      sending: "Enviando…",
      success:
        "¡Gracias! Tu mensaje fue enviado. Miguel se comunicará contigo pronto.",
      error: "Hubo un problema al enviar tu mensaje. Por favor llama o textea.",
    },
  },
  callBar: {
    call: "Llamar",
    text: "Textear",
  },
};

export default es;
