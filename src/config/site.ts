// ============================================================
// Configuración central de la oferta (Sesión de Apertura $79)
// ============================================================

// Los botones llevan al video de la misma página.
export const CTA_HREF = "#video";

export const CTA_TEXT = "QUIERO AGENDAR MI SESIÓN";
export const CTA_TEXT_BONUS = "QUIERO MI SESIÓN + EL BONO";

// Barra de garantías que acompaña a los botones principales.
export const BADGES = [
  { icon: "⏱️", text: "45 minutos" },
  { icon: "🔒", text: "Llamada Privada 1:1" },
  { icon: "💵", text: "79 dólares" },
  { icon: "📄", text: "Tu Mapa por Escrito" },
];

// Minutos que dura el contador del Bono de Acción Rápida.
// Se guarda en localStorage para que no se reinicie al recargar.
export const BONUS_MINUTES = 20;
