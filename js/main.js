/**
 * Main Javascript for LasRevinu Corporate Site
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollAnimations();
});

/**
 * Handles the mobile navigation menu toggle
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');

      // Icon toggle
      const icon = menuBtn.querySelector('i');
      if (icon) {
        if (!isExpanded) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  }
}

/**
 * Initializes Intersection Observer for scroll-into-view animations
 */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-up');

  // Ensure elements are visible if JS fails, but we start them hidden via CSS

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve after animating once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

const esDict = {
  // Nav & Common
  "Home": "Inicio",
  "About Us": "Nosotros",
  "About": "Nosotros",
  "Sell Us Your Inventory": "Véndenos tu Inventario",
  "Contact": "Contacto",
  "Privacy Policy": "Política de Privacidad",

  // Hero - index.html
  "Trusted Domestic Retail Partner": "Socio Minorista Nacional Confiable",
  "EASY SALE.": "VENTA FÁCIL.",
  "EASY SCALE.": "ESCALA FÁCIL.",
  "We buy household and consumer goods from authorized distributors, and sell them directly to the end consumer across high-volume digital marketplaces.": "Compramos bienes de consumo de distribuidores autorizados y los vendemos directamente al consumidor final en mercados digitales de gran volumen.",
  "SUBMIT CATALOG": "ENVIAR CATÁLOGO",
  "Review Our Purchasing Process": "Revise Nuestro Proceso de Compra",

  // Trust Metrics
  "Volume": "Alto Volumen",
  "Purchase Orders": "De Órdenes de Compra",
  "Upfront Funding": "Pago por Adelantado",
  "Reliable Capital": "Capital Asegurado",
  "Receiving Active": "Recepción Activa",
  "Streamlined intake for inbound shipments.": "Ingreso optimizado para envíos entrantes.",

  // Core Commitments
  "Why Wholesalers Sell to ": "Por Qué los Mayoristas Venden a ",
  "We don't operate like standard marketplace sellers. As a heavily capitalized retail partner, we protect your brand equity, purchase your products in bulk, and handle the selling logistics so you can focus on expanding your distribution network.": "No operamos como vendedores estándar. Como socio altamente capitalizado, protegemos el valor de su marca, compramos en grandes volúmenes y manejamos la logística para que usted se enfoque en expandir su red de distribución.",
  "Predictable Liquidity": "Liquidez Predecible",
  "We don't just buy once. We act as a consistent, high-volume endpoint for your inventory. Our goal is to provide reliable cash flow so you can continue acquiring premium brand catalogs without capital bottlenecks.": "No compramos una sola vez. Actuamos como un punto final de alto volumen constante para su inventario. El objetivo es brindar flujo de caja confiable para que pueda seguir adquiriendo marcas premium sin interrupciones de capital.",
  "Strategic Capital": "Capital Estratégico",
  "No drop-shipping. No arbitrary inventory limits. We believe in building trusted, long-term wholesale relationships and scaling our purchase orders alongside your distribution capacity.": "Sin drop-shipping ni límites arbitrarios de inventario. Creemos en relaciones mayoristas a largo plazo y en escalar nuestras órdenes de compra a la par de su capacidad.",
  "Direct Purchasing Power": "Poder de Compra Directo",
  "We don't offer 3PL services or act as an agency. We buy your products outright, take inventory risk, and handle all the logistics to sell directly to the end consumer.": "No somos 3PL ni actuamos como agencia. Compramos sus productos directamente, asumimos el riesgo de inventario y manejamos toda la logística para vender directamente al consumidor.",

  // CTA Section
  "Have A Product That Aligns With What We Do?": "¿Tiene un Producto que se Alinea con lo que Hacemos?",
  "We source everyday products from Authorized Distributors to sell online. Connect with our purchasing team today to discuss consistent, recurring purchase orders.": "Compramos productos de uso diario de Distribuidores Autorizados para vender en línea. Conéctese con nuestro equipo para discutir órdenes de compra recurrentes y predecibles.",

  // Footer
  "A premier retail buyer specializing in high-volume, direct-to-consumer sales across global digital marketplaces.": "Un comprador minorista líder especializado en ventas directas al consumidor de alto volumen a través de los mercados digitales.",
  "© ": "© ",
  " LasRevinu Corporation. All Rights Reserved.": " LasRevinu Corporation. Todos los Derechos Reservados.",

  // About Hero
  "The Origin of": "El Origen de",
  "Built for Scale.": "Construído para Escalar.",
  "Engineered for Trust.": "Diseñado para Confiar.",
  "Established in 2023, we are a premier retail partner dedicated to streamlining the supply chain and reaching the end consumer through online markets.": "Establecidos en 2023, somos un socio minorista de primer nivel enfocado en simplificar la cadena de suministro y conectar el producto con el consumidor a través de mercados en línea.",


  // Mission
  "The Meaning Behind The Name": "El Significado del Nombre",
  "Laser-Focused Revenue.": "Ingresos Orientados al Láser.",
  "The name \"LasRevinu\" is a combination of \"Laser\" and \"Revenue.\" It represents our absolute, undivided focus on generating consistent, high-volume sales velocity for the brands and distributors we partner with.": "El nombre \"LasRevinu\" combina \"Laser\" y \"Revenue\". Representa nuestro enfoque total en generar una velocidad de ventas de gran volumen para las marcas y distribuidores con los que trabajamos.",
  "We don't get distracted by retail fads or short-term trends. We build highly efficient, predictable purchasing channels that our wholesale partners can count on month after month.": "No nos distraemos con modas. Construimos canales de compra altamente eficientes y predecibles para que nuestros socios mayoristas vendan de manera confiable mes a mes.",
  "\"Buy. Sell. Repeat. We are the reliable, frictionless volume purchaser you can count on month after month.\"": "\"Comprar. Vender. Repetir. Somos el comprador volumétrico y sin fricciones en el que usted puede confiar mes tras mes.\"",

  // Diagram
  "The Frictionless Model": "El Modelo Libre de Fricción",
  "1. Buy": "1. Comprar",
  "High-volume wholesale POs": "POs mayoristas de alto volumen",
  "2. Sell": "2. Vender",
  "Direct scale to consumers": "Escala directa a consumidores",
  "3. Repeat": "3. Repetir",
  "Predictable monthly revenue": "Ingresos mensuales predecibles",
  "Our Operational Focus": "Nuestro Enfoque Operativo",
  "We strive to build relationships with authorized distributors purchasing products consumed by the everyday American.": "Nos esforzamos por construir relaciones con distribuidores autorizados, comprando productos consumidos diariamente por el estadounidense promedio.",
  "From cleaning and hygienic products, to office and restaurant supplies, even home decor and niche products, we sell it all.": "Desde productos de limpieza e higiene, hasta suministros de oficina y restaurante, e incluso decoración para el hogar y nichos, lo vendemos todo.",


  // Procurement Process
  "The Procurement Process": "El Proceso de Adquisición",
  "Our streamlined approach to deploying capital and managing high-volume product flow.": "Nuestra técnica optimizada para inyectar capital y gestionar flujos de productos masivos.",
  "Account Vetting": "Evaluación del Socio",
  "We strictly purchase from highly-rated, authorized distributors with clean logistics and proven supply chains.": "Compramos de forma estricta a distribuidores de alta reputación y logística transparente.",
  "PO Issuance": "Emisión de PO",
  "Once terms are established, we deploy immediate upfront capital to meet your Minimum Order Quantity (MOQ).": "Definidos los términos, aportamos capital inicial para satisfacer su Cantidad Mínima de Orden (MOQ).",
  "Logistics": "Logística y Recepción",
  "Palletized inventory is received at our loading docks and processed utilizing streamlined warehousing protocols.": "Recibimos la mercadería en palets mediante procedimientos avanzados que evitan los cuellos de botella.",
  "Account Growth": "Desarrollo y Expansión",
  "As sell-through velocity is proven, we rapidly increase our PO frequency and establish long-term Net Terms.": "Confirmado el volumen de salida, aceleramos la frecuencia de la PO y definimos Términos Netos a nivel corporativo.",

  "Account Approval": "Aprobación de Cuenta",
  "Rapid vetting of your catalog and brand authorizations.": "Evaluación rápida de su catálogo y autorizaciones de marca.",
  "Immediate capital deployment meeting and exceeding your Minimum Order Quantity (MOQ).": "Despliegue inmediato de capital que cumple y supera su Cantidad Mínima de Orden (MOQ).",
  "Freight & Receiving": "Carga y Recepción",
  "We handle the direct routing to our prep facilities.": "Manejamos el enrutamiento directo a nuestras instalaciones de preparación.",
  "Recurring Restocks": "Reabastecimientos Recurrentes",
  "Predictable re-orders based on consistent sell-through data.": "Re-órdenes predecibles basadas en datos consistentes de ventas.",
  "Ready to Supply the Next Order?": "¿Listo para el Próximo Abastecimiento?",
  "We are actively onboarding new distribution partners who can meet our purchasing scale.": "Integramos proactivamente nuevos distribuidores capaces de sostener nuestra gran capacidad de compra.",

  // Contact Hero
  "Vendor Onboarding": "Inscripción Comercial",
  "Open A ": "Abrir ",
  "Wholesale Account": "Cuenta Mayorista",
  "Partner With A Reliable Retailer": "Asóciese con un Minorista Confiable",
  "We source everyday products from Authorized Distributors to sell online. Our purchasing department is actively vetting new partners. We focus on building trusted, long-term relationships before scaling to high-volume purchase orders.": "Adquirimos productos cotidianos de Distribuidores Autorizados para vender en línea. Nuestro departamento de compras evalúa activamente nuevos socios. Nos enfocamos en construir relaciones sólidas y a largo plazo antes de escalar a órdenes de compra de gran volumen.",

  // Criteria
  "Our Partnership Criteria": "Nuestros Criterios de Sociedad",
  "Authentic Sourcing:": "Abastecimiento Auténtico:",
  "Direct authorization trails only.": "Solo con rastro de autorización directa de la marca.",
  "Consistent Supply:": "Suministro Consistente:",
  "High-volume scalable inventory.": "Inventario escalable de alto volumen.",
  "Clean Logistics:": "Logística Limpia:",
  "Swift, accurate order processing.": "Procesamiento de pedidos rápido y preciso.",
  "Long-Term Vision:": "Visión a Largo Plazo:",
  "Ready for predictable, recurring POs.": "Listo para órdenes predecibles y recurrentes.",

  // Contact Info
  "Corporate Procurement": "Adquisiciones Corporativas",
  "Net Terms": "Términos Netos",
  "Immediate upfront payment available for new accounts. We also establish standard corporate Net Terms as our purchasing volume scales with your facility.": "Pago inicial inmediato disponible para cuentas nuevas. También establecemos Términos Netos corporativos estándar a medida que nuestro volumen de compra escala con su instalación.",

  // Form
  "Submit Your Distribution Catalog": "Proporcione su Oferta B2B",
  "Company / Distributor Name": "Nombre de la Corporación / Distribuidora",
  "Direct Contact Name": "Ejecutivo de Contacto Directo",
  "Corporate Email Address": "Casilla de Correo Empresarial",
  "Company Website or LinkedIn": "Dirección Web o LinkedIn Empresarial",
  "Primary Product Categories": "Segmento Comercial (Hogar, etc)",
  "Submit Inquiry": "Hacer Envío",
  "Your information is secure and will only be reviewed by our internal procurement team.": "La información es evaluada discretamente por nuestro plantel de control directo.",

  // New Form Fields
  "Vendor Intake Form": "Formulario de Ingreso de Proveedores",
  "First Name": "Nombre",
  "Last Name": "Apellido",
  "Company / Brand Name": "Nombre de Empresa / Marca",
  "Corporate Email": "Correo Corporativo",
  "Product Category": "Categoría de Producto",
  "Submit For Review": "Enviar Para Revisión",
  "Sending...": "Enviando...",
  "Inquiry Received": "Consulta Recibida",
  "Your vendor application has been securely submitted. A procurement manager will contact you at your corporate email address within 1-2 business days.": "Su solicitud de proveedor ha sido enviada de forma segura. Un gerente de compras se comunicará con usted en su correo electrónico corporativo dentro de 1-2 días hábiles.",
  "Submit another inquiry": "Enviar otra consulta",

  // Category Dropdown
  "Select a primary category...": "Seleccione una categoría principal...",
  "Beauty & Personal Care": "Belleza y Cuidado Personal",
  "Health & Household": "Salud y Hogar",
  "Grocery & Gourmet Food": "Alimentos y Bebidas",
  "Pet Supplies": "Artículos para Mascotas",
  "Baby Products": "Productos para Bebés",
  "Office Products": "Productos de Oficina",
  "Tools & Home Improvement": "Herramientas y Mejoras del Hogar",
  "Industrial & Scientific": "Industrial y Científico",
  "Toys & Games": "Juguetes y Juegos",
  "Other": "Otro",

  // Privacy Policy
  "Privacy Policy and Data Handling procedures for LasRevinu Corporation. We value and protect the confidentiality of our B2B wholesale partners.": "Política de Privacidad y procedimientos de Manejo de Datos para LasRevinu Corporation. Valoramos y protegemos la confidencialidad de nuestros socios mayoristas B2B.",
  "Privacy Policy": "Política de Privacidad",
  "Last Updated: February 2026": "Última actualización: Febrero 2026",
  "1. Information We Collect": "1. Información que Recopilamos",
  "LasRevinu Corporation (\"LasRevinu\", \"we\", \"our\", or \"us\") operates as a specialized wholesale buyer. To facilitate B2B transactions, we may collect business contact information when you interact with us, including:": "LasRevinu Corporation (\"LasRevinu\", \"nosotros\" o \"nuestro\") opera como un comprador mayorista especializado. Para facilitar las transacciones B2B, podemos recopilar información de contacto comercial cuando interactúa con nosotros, que incluye:",
  "Business name, address, and industry classification": "Nombre de la empresa, dirección y clasificación de la industria",
  "Contact names, email addresses, and phone numbers": "Nombres de contacto, direcciones de correo electrónico y números de teléfono",
  "Product catalogs, inventory lists, and distributor authorizations": "Catálogos de productos, listas de inventario y autorizaciones de distribuidores",
  "Payment and billing information necessary to establish Net Terms or issue Purchase Orders": "Información de pago y facturación necesaria para establecer términos netos o emitir órdenes de compra",
  "2. How We Use Your Information": "2. Cómo Usamos Su Información",
  "The information collected is used exclusively for legitimate business purposes. We do not sell, rent, or trade your contact information to third-party marketers. We utilize your data to:": "La información recopilada se utiliza exclusivamente para fines comerciales legítimos. No vendemos, alquilamos ni intercambiamos su información de contacto a comercializadores externos. Utilizamos sus datos para:",
  "Evaluate potential wholesale partnerships and authorize brand sourcing.": "Evaluar posibles asociaciones mayoristas y autorizar el abastecimiento de marcas.",
  "Communicate regarding Purchase Orders (POs), Minimum Order Quantities (MOQs), and logistics routing.": "Comunicarnos sobre órdenes de compra (PO), cantidades mínimas de pedido (MOQ) y rutas logísticas.",
  "Process payments and establish long-term financial terms.": "Procesar pagos y establecer términos financieros a largo plazo.",
  "Respond to your inquiries via our website or direct email.": "Responder a sus consultas a través de nuestro sitio web o correo electrónico directo.",
  "3. Data Security and Confidentiality": "3. Seguridad y Confidencialidad de los Datos",
  "We implement strict operational security measures to protect your catalogs, pricing structures, and business data against unauthorized access. As a high-volume retail partner, we recognize that your supply chain relationships and pricing agreements are highly sensitive. Documents shared during the Account Vetting phase are kept strictly confidential.": "Implementamos estrictas medidas de seguridad operativa para proteger sus catálogos, estructuras de precios y datos comerciales contra el acceso no autorizado. Como socio minorista de alto volumen, reconocemos que sus relaciones en la cadena de suministro y acuerdos de precios son altamente confidenciales. Los documentos compartidos durante la fase de Evaluación de Cuentas se mantienen estrictamente confidenciales.",
  "4. Cookies and Website Analytics": "4. Cookies y Análisis de Sitios Web",
  "Our corporate landing page may use basic cookies or analytics trackers to ensure site functionality and monitor general traffic patterns. This data is aggregated and does not identify individual users. You may disable cookies in your browser settings without affecting your ability to view our site.": "Nuestra página de destino corporativa puede usar cookies básicas o rastreadores de análisis para garantizar la funcionalidad del sitio y monitorear los patrones de tráfico general. Estos datos se agregan y no identifican a usuarios individuales. Puede desactivar las cookies en la configuración de su navegador sin afectar su capacidad para ver nuestro sitio.",
  "5. Contact Information": "5. Información de Contacto",
  "If you have any questions or concerns regarding our privacy practices or data handling procedures, please contact our administrative team at the email or phone number provided to your designated procurement agent.": "Si tiene alguna pregunta o inquietud sobre nuestras prácticas de privacidad o procedimientos de manejo de datos, comuníquese con nuestro equipo administrativo al correo electrónico o número de teléfono proporcionado a su agente de compras designado."
};

const textNodes = [];
const placeholderElements = [];

function initI18n() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walker.nextNode()) {
    if (node.parentElement && node.parentElement.tagName !== 'SCRIPT' && node.parentElement.tagName !== 'STYLE') {
      const text = node.nodeValue;
      if (text.trim() !== '') {
        textNodes.push({ node: node, originalText: text });
      }
    }
  }

  document.querySelectorAll('[placeholder]').forEach(el => {
    placeholderElements.push({ el: el, originalPlaceholder: el.getAttribute('placeholder') });
  });
}

function setLanguage(lang) {
  const isEs = lang === 'es';

  textNodes.forEach(({ node, originalText }) => {
    let key = originalText;
    let fallback = originalText.trim();
    let normalized = originalText.replace(/\s+/g, ' ').trim();

    if (esDict[key] !== undefined) {
      node.nodeValue = isEs ? esDict[key] : originalText;
    } else if (esDict[fallback] !== undefined) {
      node.nodeValue = isEs ? originalText.replace(fallback, esDict[fallback]) : originalText;
    } else if (esDict[normalized] !== undefined) {
      // If the normalized string matches, we replace the whole text node (padding with spaces if it started/ended with them)
      let preSpace = originalText.match(/^\s*/)[0];
      let postSpace = originalText.match(/\s*$/)[0];
      node.nodeValue = isEs ? preSpace + esDict[normalized] + postSpace : originalText;
    }
  });

  placeholderElements.forEach(({ el, originalPlaceholder }) => {
    let key = originalPlaceholder;
    let fallback = originalPlaceholder.trim();
    let normalized = originalPlaceholder.replace(/\s+/g, ' ').trim();

    if (esDict[key] !== undefined) {
      el.setAttribute('placeholder', isEs ? esDict[key] : originalPlaceholder);
    } else if (esDict[fallback] !== undefined) {
      el.setAttribute('placeholder', isEs ? esDict[fallback] : originalPlaceholder);
    } else if (esDict[normalized] !== undefined) {
      el.setAttribute('placeholder', isEs ? esDict[normalized] : originalPlaceholder);
    }
  });

  // Toggle active button states
  document.querySelectorAll('.lang-btn-en').forEach(btn => {
    if (isEs) btn.classList.replace('text-white', 'text-slate-500');
    else btn.classList.replace('text-slate-500', 'text-white');
  });

  document.querySelectorAll('.lang-btn-es').forEach(btn => {
    if (isEs) btn.classList.replace('text-slate-500', 'text-white');
    else btn.classList.replace('text-white', 'text-slate-500');
  });

  const espanolBadge = document.getElementById('espanol-badge');
  if (espanolBadge) {
    espanolBadge.style.display = isEs ? 'none' : 'inline-flex';
  }

  localStorage.setItem('lasrevinu_lang', lang);
  document.documentElement.lang = lang;
}

// Add initI18n to existing DOMContentLoaded listener by hijacking it nicely:
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  const savedLang = localStorage.getItem('lasrevinu_lang') || 'en';
  setLanguage(savedLang);
  window.setLanguage = setLanguage;
});
