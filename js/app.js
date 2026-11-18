const legacyProducts = [
  {
    id: "neon-quest",
    name: "Neon Quest",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "Steam",
    platforms: ["Steam", "PC"],
    genre: "RPG / Accion",
    price: 399,
    oldPrice: 549,
    rating: 4.8,
    sales: 1680,
    image: "assets/images/products/neon-quest.png",
    badge: "-27%",
    featured: true,
    bestseller: true,
    keyPrefix: "NQ",
    description: "RPG de accion con ciudades neon, misiones rapidas y progresion de personaje.",
    longDescription: "Compra Neon Quest para Steam y explora una ciudad futurista llena de contratos, botin digital y combates rapidos. Ideal para jugadores que buscan una aventura cyberpunk con mejoras constantes."
  },
  {
    id: "cyber-racers",
    name: "Cyber Racers",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "Xbox",
    platforms: ["Xbox", "PC"],
    genre: "Carreras",
    price: 449,
    oldPrice: 599,
    rating: 4.6,
    sales: 1320,
    image: "assets/images/products/cyber-racers.png",
    badge: "-25%",
    featured: true,
    keyPrefix: "CR",
    description: "Carreras futuristas con pistas luminosas, autos personalizables y modo torneo.",
    longDescription: "Compra Cyber Racers para Xbox y PC, compite en circuitos nocturnos, mejora tu vehiculo y domina torneos con velocidad futurista."
  },
  {
    id: "kingdom-forge",
    name: "Kingdom Forge",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "PC",
    platforms: ["PC"],
    genre: "Estrategia",
    price: 329,
    oldPrice: 419,
    rating: 4.5,
    sales: 940,
    image: "assets/images/products/kingdom-forge.png",
    badge: "-21%",
    featured: true,
    keyPrefix: "KF",
    description: "Estrategia medieval con construccion de reinos, recursos y batallas tacticas.",
    longDescription: "Compra Kingdom Forge para PC y construye tu reino desde cero. Administra recursos, fortalece tu ciudad y lidera ejercitos en batallas tacticas."
  },
  {
    id: "galaxy-tactics",
    name: "Galaxy Tactics",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "PS5",
    platforms: ["PS5", "PC"],
    genre: "Tactico",
    price: 289,
    oldPrice: 399,
    rating: 4.7,
    sales: 1210,
    image: "assets/images/products/galaxy-tactics.png",
    badge: "-28%",
    keyPrefix: "GT",
    description: "Combates por turnos en planetas lejanos con escuadrones y naves especiales.",
    longDescription: "Compra Galaxy Tactics para PS5 y forma un escuadron galactico. Domina mapas por turnos y desbloquea unidades especiales para misiones de alto riesgo."
  },
  {
    id: "zombie-pulse",
    name: "Zombie Pulse",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "Xbox",
    platforms: ["Xbox", "PS5"],
    genre: "Supervivencia",
    price: 379,
    rating: 4.3,
    sales: 870,
    image: "assets/images/products/zombie-pulse.png",
    keyPrefix: "ZP",
    description: "Supervivencia cooperativa con hordas, refugios, armas y objetivos diarios.",
    longDescription: "Compra Zombie Pulse para Xbox y PS5. Sobrevive con tu equipo, mejora refugios y supera oleadas con un sistema de armas progresivo."
  },
  {
    id: "dragon-arena",
    name: "Dragon Arena",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "PS5",
    platforms: ["PS5", "PC"],
    genre: "Competitivo",
    price: 459,
    oldPrice: 629,
    rating: 4.9,
    sales: 1840,
    image: "assets/images/products/dragon-arena.png",
    badge: "-27%",
    bestseller: true,
    keyPrefix: "DA",
    description: "Combate competitivo con heroes, dragones invocables y arenas clasificatorias.",
    longDescription: "Compra Dragon Arena para PS5 y PC. Elige un heroe, domina combos e invoca dragones durante partidas competitivas llenas de accion."
  },
  {
    id: "pixel-gift-25",
    name: "Pixel Gift Card $25",
    category: "gift-cards",
    categoryLabel: "Gift Card",
    platform: "Digital",
    platforms: ["Digital"],
    genre: "Saldo digital",
    price: 250,
    rating: 4.8,
    sales: 2200,
    image: "assets/images/products/pixel-gift-25.png",
    featured: true,
    bestseller: true,
    keyPrefix: "PG25",
    description: "Tarjeta digital para comprar juegos, skins y contenido descargable.",
    longDescription: "Compra Pixel Gift Card $25 y recibe saldo digital simulado para ampliar tu biblioteca, comprar complementos o regalar credito a otro jugador."
  },
  {
    id: "pixel-gift-50",
    name: "Pixel Gift Card $50",
    category: "gift-cards",
    categoryLabel: "Gift Card",
    platform: "Digital",
    platforms: ["Digital"],
    genre: "Saldo digital",
    price: 500,
    oldPrice: 550,
    rating: 4.9,
    sales: 2480,
    image: "assets/images/products/pixel-gift-50.png",
    badge: "Bonus",
    bestseller: true,
    keyPrefix: "PG50",
    description: "Saldo digital con bonificacion simulada para ampliar tu biblioteca gamer.",
    longDescription: "Compra Pixel Gift Card $50 y recibe una tarjeta balanceada para adquirir juegos, monedas virtuales o contenido premium dentro de PixelVault."
  },
  {
    id: "pixel-gift-100",
    name: "Pixel Gift Card $100",
    category: "gift-cards",
    categoryLabel: "Gift Card",
    platform: "Digital",
    platforms: ["Digital"],
    genre: "Saldo premium",
    price: 1000,
    oldPrice: 1099,
    rating: 4.9,
    sales: 1730,
    image: "assets/images/products/pixel-gift-100.png",
    badge: "Premium",
    keyPrefix: "PG100",
    description: "Credito premium para jugadores que compran lanzamientos y expansiones.",
    longDescription: "Compra Pixel Gift Card $100 y obtén credito digital de mayor valor para estrenos, DLC y recompensas premium."
  },
  {
    id: "steam-credit",
    name: "Steam Credit",
    category: "gift-cards",
    categoryLabel: "Gift Card",
    platform: "Steam",
    platforms: ["Steam", "PC"],
    genre: "Saldo PC",
    price: 300,
    rating: 4.6,
    sales: 1540,
    image: "assets/images/products/steam-credit.png",
    keyPrefix: "STM",
    description: "Saldo virtual para juegos de PC, expansiones y accesorios digitales.",
    longDescription: "Compra Steam Credit para PC y consigue saldo simulado para contenido descargable, expansiones o juegos independientes."
  },
  {
    id: "console-plus",
    name: "Console Plus 12M",
    category: "membresias",
    categoryLabel: "Membresia",
    platform: "PS5",
    platforms: ["PS5", "Xbox"],
    genre: "Membresia anual",
    price: 899,
    oldPrice: 1099,
    rating: 4.7,
    sales: 1110,
    image: "assets/images/products/console-plus.png",
    badge: "-18%",
    featured: true,
    keyPrefix: "CP12",
    description: "Membresia anual con multijugador, beneficios mensuales y descuentos.",
    longDescription: "Compra Console Plus 12M para consola y recibe beneficios recurrentes, multijugador y promociones seleccionadas durante un ano simulado."
  },
  {
    id: "ultimate-pass",
    name: "Ultimate Pass",
    category: "membresias",
    categoryLabel: "Membresia",
    platform: "Xbox",
    platforms: ["Xbox", "PC"],
    genre: "Biblioteca premium",
    price: 249,
    rating: 4.8,
    sales: 2010,
    image: "assets/images/products/ultimate-pass.png",
    badge: "Nuevo",
    featured: true,
    keyPrefix: "UP",
    description: "Acceso mensual a una biblioteca premium con novedades seleccionadas.",
    longDescription: "Compra Ultimate Pass para Xbox y PC, descubre titulos destacados y mantiene activa tu biblioteca digital con una membresia mensual."
  },
  {
    id: "cloud-pro",
    name: "Cloud Pro",
    category: "membresias",
    categoryLabel: "Membresia",
    platform: "Nube",
    platforms: ["Nube", "Digital"],
    genre: "Cloud gaming",
    price: 189,
    oldPrice: 249,
    rating: 4.4,
    sales: 760,
    image: "assets/images/products/cloud-pro.png",
    badge: "-24%",
    keyPrefix: "CLD",
    description: "Servicio de juego en la nube para continuar tus partidas desde cualquier lugar.",
    longDescription: "Compra Cloud Pro y recibe acceso simulado a juego en la nube para continuar partidas en distintos dispositivos."
  },
  {
    id: "esports-vip",
    name: "Esports VIP",
    category: "membresias",
    categoryLabel: "Membresia",
    platform: "Digital",
    platforms: ["Digital", "PC"],
    genre: "Competitivo",
    price: 159,
    rating: 4.2,
    sales: 620,
    image: "assets/images/products/esports-vip.png",
    keyPrefix: "EVIP",
    description: "Pase mensual con torneos, insignias digitales y recompensas competitivas.",
    longDescription: "Compra Esports VIP y accede a torneos ficticios, insignias digitales y recompensas especiales para jugadores competitivos."
  },
  {
    id: "indie-bundle",
    name: "Indie Bundle",
    category: "bundles",
    categoryLabel: "Bundle",
    platform: "PC",
    platforms: ["PC", "Steam"],
    genre: "Pack indie",
    price: 229,
    oldPrice: 349,
    rating: 4.6,
    sales: 1430,
    image: "assets/images/products/indie-bundle.png",
    badge: "-34%",
    featured: true,
    keyPrefix: "IND",
    description: "Paquete de cinco juegos independientes con estilos variados y codigos digitales.",
    longDescription: "Compra Indie Bundle para PC y recibe un paquete con cinco juegos independientes, codigos digitales y una seleccion variada de estilos."
  }
];

const categoryCards = [
  { id: "videojuegos", icon: "🎮", title: "Videojuegos", text: "Accion, RPG y estrategia" },
  { id: "gift-cards", icon: "💳", title: "Gift Cards", text: "Saldo digital premium" },
  { id: "membresias", icon: "⭐", title: "Membresias", text: "Planes y beneficios" },
  { id: "ofertas", icon: "🔥", title: "Ofertas", text: "Descuentos activos" },
  { id: "bundles", icon: "📦", title: "Bundles", text: "Paquetes especiales" },
  { id: "all", icon: "🆕", title: "Nuevos lanzamientos", text: "Catalogo completo" }
];

const storageKeys = {
  cart: "pixelVaultCart",
  users: "pixelVaultUsers",
  session: "pixelVaultSession",
  favorites: "pixelVaultFavorites",
  keys: "pixelVaultKeys",
  orders: "pixelVaultOrders",
  products: "pixelVaultProducts",
  adminSession: "pixelVaultAdminSession"
};

const adminCredentials = {
  email: "sofiamedinafv@gmail.com",
  password: "contraseña",
  name: "Sofia Medina"
};

const seedProducts = [
  {
    id: "resident-evil-4",
    name: "Resident Evil 4",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "Steam",
    platforms: ["Steam", "PC"],
    genre: "Survival horror",
    price: 699,
    oldPrice: 999,
    rating: 4.9,
    sales: 4860,
    stock: 18,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/library_600x900.jpg",
    badge: "-30%",
    featured: true,
    bestseller: true,
    keyPrefix: "RE4",
    keys: [],
    description: "Survival horror moderno con accion intensa, exploracion y atmosfera cinematografica.",
    longDescription: "Compra Resident Evil 4 para Steam y revive una aventura de supervivencia con accion precisa, enemigos memorables y una atmosfera de terror premium."
  },
  {
    id: "hogwarts-legacy",
    name: "Hogwarts Legacy",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "Steam",
    platforms: ["Steam", "PC", "PS5"],
    genre: "RPG / Mundo abierto",
    price: 749,
    oldPrice: 1149,
    rating: 4.8,
    sales: 5320,
    stock: 22,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_600x900.jpg",
    badge: "-35%",
    featured: true,
    bestseller: true,
    keyPrefix: "HWL",
    keys: [],
    description: "RPG de mundo abierto con hechizos, criaturas fantasticas y exploracion magica.",
    longDescription: "Compra Hogwarts Legacy para PS5 o PC y explora un mundo magico lleno de hechizos, criaturas y aventuras epicas."
  },
  {
    id: "wwe-2k24",
    name: "WWE 2K24",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "Steam",
    platforms: ["Steam", "PC", "PS5", "Xbox"],
    genre: "Deportes / Lucha",
    price: 849,
    oldPrice: 1199,
    rating: 4.5,
    sales: 2610,
    stock: 12,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2315690/library_600x900.jpg",
    badge: "Nuevo",
    featured: true,
    keyPrefix: "WWE",
    keys: [],
    description: "Lucha profesional con modos competitivos, leyendas y presentacion televisiva.",
    longDescription: "Compra WWE 2K24 y entra al ring con superestrellas, modos de carrera y enfrentamientos espectaculares."
  },
  {
    id: "gta-v",
    name: "Grand Theft Auto V",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "Steam",
    platforms: ["Steam", "PC", "PS5", "Xbox"],
    genre: "Accion / Mundo abierto",
    price: 329,
    oldPrice: 599,
    rating: 4.8,
    sales: 9200,
    stock: 30,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/library_600x900.jpg",
    badge: "Mas vendido",
    bestseller: true,
    keyPrefix: "GTAV",
    keys: [],
    description: "Mundo abierto criminal con campana cinematografica y modo online.",
    longDescription: "Compra GTA V y recorre Los Santos en una experiencia de accion, conduccion y mundo abierto con enorme contenido."
  },
  {
    id: "cyberpunk-2077",
    name: "Cyberpunk 2077",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "Steam",
    platforms: ["Steam", "PC", "PS5", "Xbox"],
    genre: "RPG / Accion",
    price: 599,
    oldPrice: 999,
    rating: 4.7,
    sales: 6750,
    stock: 24,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
    badge: "-40%",
    featured: true,
    keyPrefix: "CP77",
    keys: [],
    description: "RPG futurista en Night City con decisiones, accion y estilo cyberpunk.",
    longDescription: "Compra Cyberpunk 2077 y sumergite en Night City con misiones, mejoras ciberneticas y una historia intensa."
  },
  {
    id: "the-last-of-us",
    name: "The Last of Us Part I",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "Steam",
    platforms: ["Steam", "PC", "PS5"],
    genre: "Accion / Aventura",
    price: 899,
    oldPrice: 1199,
    rating: 4.6,
    sales: 3540,
    stock: 11,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/library_600x900.jpg",
    badge: "Premium",
    featured: true,
    keyPrefix: "TLOU",
    keys: [],
    description: "Aventura narrativa de supervivencia con combate tactico y gran carga emocional.",
    longDescription: "Compra The Last of Us Part I para PC y vive una aventura de supervivencia cinematografica con personajes inolvidables."
  },
  {
    id: "minecraft",
    name: "Minecraft",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "PC",
    platforms: ["PC", "Xbox", "PS5"],
    genre: "Sandbox / Creativo",
    price: 499,
    oldPrice: 649,
    rating: 4.9,
    sales: 10400,
    stock: 40,
    image: "https://www.halopedia.org/images/e/ef/MC_Bedrock_Cover_Art.jpg?e4ec6=",
    badge: "Mas vendido",
    bestseller: true,
    keyPrefix: "MINE",
    keys: [],
    description: "Sandbox de construccion, supervivencia, creatividad y exploracion infinita.",
    longDescription: "Compra Minecraft y construye, explora y sobrevive en mundos generados con posibilidades casi infinitas."
  },
  {
    id: "ea-fc-24",
    name: "EA SPORTS FC 24",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "Steam",
    platforms: ["Steam", "PC", "PS5", "Xbox"],
    genre: "Deportes / Futbol",
    price: 699,
    oldPrice: 1099,
    rating: 4.4,
    sales: 4480,
    stock: 19,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/library_600x900.jpg",
    badge: "-35%",
    keyPrefix: "FC24",
    keys: [],
    description: "Futbol moderno con equipos, modos competitivos y presentacion premium.",
    longDescription: "Compra EA SPORTS FC 24 y disfruta partidos, torneos, plantillas y competencia digital con estilo deportivo."
  },
  {
    id: "elden-ring",
    name: "Elden Ring",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "Steam",
    platforms: ["Steam", "PC", "PS5", "Xbox"],
    genre: "RPG / Soulslike",
    price: 799,
    oldPrice: 1199,
    rating: 4.9,
    sales: 7200,
    stock: 15,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_600x900.jpg",
    badge: "Premium",
    featured: true,
    keyPrefix: "ER",
    keys: [],
    description: "Fantasia oscura con exploracion abierta, jefes desafiantes y progresion profunda.",
    longDescription: "Compra Elden Ring y adentrate en un mundo de fantasia oscura con exploracion, combate exigente y libertad total."
  },
  {
    id: "forza-horizon-5",
    name: "Forza Horizon 5",
    category: "videojuegos",
    categoryLabel: "Videojuego",
    platform: "Steam",
    platforms: ["Steam", "PC", "Xbox"],
    genre: "Carreras",
    price: 699,
    oldPrice: 999,
    rating: 4.7,
    sales: 3900,
    stock: 14,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/library_600x900.jpg",
    badge: "-30%",
    keyPrefix: "FH5",
    keys: [],
    description: "Carreras en mundo abierto con autos de alto rendimiento y paisajes espectaculares.",
    longDescription: "Compra Forza Horizon 5 y recorre Mexico con autos personalizables, eventos y competicion online."
  },
  {
    id: "xbox-game-pass",
    name: "Xbox Game Pass Ultimate",
    category: "membresias",
    categoryLabel: "Membresia",
    platform: "Xbox",
    platforms: ["Xbox", "PC", "Digital"],
    genre: "Biblioteca premium",
    price: 249,
    oldPrice: 349,
    rating: 4.8,
    sales: 6200,
    stock: 35,
    image: "assets/images/products/ultimate-pass.png",
    badge: "Premium",
    featured: true,
    keyPrefix: "XGPU",
    keys: [],
    description: "Acceso mensual a una biblioteca de juegos, beneficios y multijugador.",
    longDescription: "Compra Xbox Game Pass Ultimate y accede a una membresia simulada con biblioteca premium, beneficios y juego en la nube."
  },
  {
    id: "playstation-plus",
    name: "PlayStation Plus 12M",
    category: "membresias",
    categoryLabel: "Membresia",
    platform: "PS5",
    platforms: ["PS5", "Digital"],
    genre: "Membresia anual",
    price: 899,
    oldPrice: 1199,
    rating: 4.7,
    sales: 4100,
    stock: 16,
    image: "assets/images/products/console-plus.png",
    badge: "-25%",
    keyPrefix: "PSPLUS",
    keys: [],
    description: "Membresia anual con multijugador, juegos mensuales y beneficios digitales.",
    longDescription: "Compra PlayStation Plus 12M y recibe una membresia simulada con multijugador, descuentos y juegos destacados."
  },
  {
    id: "steam-gift-card",
    name: "Steam Gift Card",
    category: "gift-cards",
    categoryLabel: "Gift Card",
    platform: "Steam",
    platforms: ["Steam", "PC", "Digital"],
    genre: "Saldo digital",
    price: 300,
    oldPrice: 350,
    rating: 4.8,
    sales: 7900,
    stock: 50,
    image: "assets/images/products/steam-credit.png",
    badge: "Nuevo",
    bestseller: true,
    keyPrefix: "STEAM",
    keys: [],
    description: "Saldo digital para juegos de PC, DLC, expansiones y contenido descargable.",
    longDescription: "Compra Steam Gift Card y recibe saldo digital simulado para juegos, DLC y contenido premium."
  },
  {
    id: "pixel-gift-card",
    name: "PixelVault Gift Card",
    category: "gift-cards",
    categoryLabel: "Gift Card",
    platform: "Digital",
    platforms: ["Digital"],
    genre: "Saldo premium",
    price: 500,
    oldPrice: 599,
    rating: 4.6,
    sales: 2800,
    stock: 35,
    image: "assets/images/products/pixel-gift-50.png",
    badge: "Premium",
    keyPrefix: "PVGC",
    keys: [],
    description: "Saldo ficticio premium para ampliar tu biblioteca PixelVault.",
    longDescription: "Compra PixelVault Gift Card y agrega saldo simulado a tu cuenta para juegos, bundles y membresias."
  },
  {
    id: "vault-bundle",
    name: "Vault Premium Bundle",
    category: "bundles",
    categoryLabel: "Bundle",
    platform: "PC",
    platforms: ["PC", "Steam"],
    genre: "Pack especial",
    price: 449,
    oldPrice: 799,
    rating: 4.5,
    sales: 1900,
    stock: 10,
    image: "assets/images/products/indie-bundle.png",
    badge: "-44%",
    keyPrefix: "VPB",
    keys: [],
    description: "Pack digital premium con seleccion gamer para proyecto marketplace.",
    longDescription: "Compra Vault Premium Bundle y recibe un paquete de codigos digitales simulados para ampliar tu biblioteca."
  }
];

const marketplaceCategories = [
  { id: "videojuegos", icon: "&#127918;", title: "Videojuegos", text: "Accion, RPG y estrategia" },
  { id: "gift-cards", icon: "&#128179;", title: "Gift Cards", text: "Saldo digital premium" },
  { id: "membresias", icon: "&#11088;", title: "Membresias", text: "Planes y beneficios" },
  { id: "ofertas", icon: "&#128293;", title: "Ofertas", text: "Descuentos activos" },
  { id: "bundles", icon: "&#128230;", title: "Bundles", text: "Paquetes especiales" },
  { id: "all", icon: "&#127381;", title: "Nuevos lanzamientos", text: "Catalogo completo" }
];

const currency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN"
});

const page = document.body.dataset.page;
let products = loadProducts();
let cart = readStorage(storageKeys.cart, {});
let filters = {
  search: "",
  platform: "all",
  category: "all",
  price: "all",
  offersOnly: false,
  sort: "featured"
};

function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeProduct(product, index = 0) {
  const platform = product.platform || product.platforms?.[0] || "PC";
  const category = product.category || "videojuegos";
  const keyPrefix = product.keyPrefix || product.name?.slice(0, 4).replace(/[^a-z0-9]/gi, "").toUpperCase() || "PV";

  return {
    id: product.id || `product-${Date.now()}-${index}`,
    name: product.name || "Producto PixelVault",
    category,
    categoryLabel: product.categoryLabel || categoryLabel(category),
    platform,
    platforms: Array.isArray(product.platforms) && product.platforms.length ? product.platforms : [platform],
    genre: product.genre || "Digital",
    price: Number(product.price) || 0,
    oldPrice: Number(product.oldPrice) || 0,
    rating: Number(product.rating) || 4.5,
    sales: Number(product.sales) || 0,
    stock: Number.isFinite(Number(product.stock)) ? Number(product.stock) : 0,
    image: product.image || "",
    badge: product.badge || "",
    featured: Boolean(product.featured),
    bestseller: Boolean(product.bestseller),
    keyPrefix,
    keys: Array.isArray(product.keys) ? product.keys : [],
    description: product.description || "Producto digital premium de PixelVault Gaming.",
    longDescription: product.longDescription || product.description || "Producto digital premium de PixelVault Gaming con entrega simulada de clave."
  };
}

function categoryLabel(category) {
  const labels = {
    videojuegos: "Videojuego",
    "gift-cards": "Gift Card",
    membresias: "Membresia",
    bundles: "Bundle"
  };
  return labels[category] || "Producto";
}

function loadProducts() {
  const savedProducts = readStorage(storageKeys.products, null);
  const source = Array.isArray(savedProducts) && savedProducts.length ? savedProducts : seedProducts;
  return source.map(normalizeProduct);
}

function saveProducts(nextProducts = products) {
  products = nextProducts.map(normalizeProduct);
  writeStorage(storageKeys.products, products);
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function productUrl(productId) {
  return `producto.html?id=${encodeURIComponent(productId)}`;
}

function placeholderImage(name = "PixelVault") {
  const initials = String(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "PV";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#1B102B"/>
          <stop offset="0.55" stop-color="#7B2FF7"/>
          <stop offset="1" stop-color="#00E5FF"/>
        </linearGradient>
      </defs>
      <rect width="600" height="900" fill="#0F071A"/>
      <rect x="28" y="28" width="544" height="844" rx="34" fill="url(#g)" opacity="0.7"/>
      <rect x="58" y="58" width="484" height="784" rx="26" fill="#0F071A" opacity="0.76"/>
      <circle cx="300" cy="352" r="132" fill="none" stroke="#00E5FF" stroke-width="7"/>
      <text x="300" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="82" font-weight="900" fill="#FFFFFF">${initials}</text>
      <text x="300" y="705" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="900" fill="#FFFFFF">PIXELVAULT</text>
      <text x="300" y="750" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#B9B9C9">GAMING KEY</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function imageSrc(product) {
  return product.image || placeholderImage(product.name);
}

function imageAttrs(product) {
  const fallback = placeholderImage(product.name).replaceAll("'", "%27");
  return `src="${escapeHTML(imageSrc(product))}" onerror="this.onerror=null;this.src='${fallback}'" loading="lazy" decoding="async"`;
}

function getSession() {
  return readStorage(storageKeys.session, null);
}

function setSession(user) {
  writeStorage(storageKeys.session, user);
}

function clearSession() {
  localStorage.removeItem(storageKeys.session);
}

function getFavorites() {
  return readStorage(storageKeys.favorites, []);
}

function setFavorites(favorites) {
  writeStorage(storageKeys.favorites, favorites);
}

function renderFooter() {
  const footerMount = document.querySelector("#siteFooter");
  if (!footerMount) return;

  footerMount.innerHTML = `
    <footer class="site-footer">
      <div class="footer-shell">
        <div class="footer-brand">
          <img src="assets/images/brand/pixelvault-logo.png" alt="PixelVault Gaming">
          <p>Desbloquea tu pr&oacute;xima aventura</p>
        </div>
        <nav class="footer-col" aria-label="Empresa">
          <h3>Empresa</h3>
          <a href="contact.html">Nosotros</a>
          <a href="contact.html">Contacto</a>
          <a href="contact.html">Soporte</a>
        </nav>
        <nav class="footer-col" aria-label="Comprar">
          <h3>Comprar</h3>
          <a href="index.html#catalogo" data-nav-category="videojuegos">Juegos</a>
          <a href="index.html#catalogo" data-nav-category="gift-cards">Gift Cards</a>
          <a href="index.html#catalogo" data-nav-category="membresias">Membres&iacute;as</a>
        </nav>
        <nav class="footer-col" aria-label="Cuenta">
          <h3>Cuenta</h3>
          <a href="profile.html">Mi perfil</a>
          <a href="profile.html#compras">Mis compras</a>
          <a href="my-keys.html">Mis claves</a>
        </nav>
        <nav class="footer-col" aria-label="Legal y redes">
          <h3>Legal</h3>
          <a href="#">Privacidad</a>
          <a href="#">T&eacute;rminos</a>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">Discord</a>
        </nav>
      </div>
      <div class="footer-copy">Proyecto escolar ficticio - PixelVault Gaming</div>
    </footer>
  `;
}

function renderHeaderV2() {
  const headerMount = document.querySelector("#siteHeader");
  if (!headerMount) return;

  const user = getSession();
  const authTarget = user ? "profile.html" : "login.html";
  const authMarkup = user
    ? `
      <div class="user-menu" data-user-menu>
        <button class="user-menu-button" type="button" data-toggle-user-menu>Hola, ${escapeHTML(user.name)}</button>
        <div class="user-dropdown">
          <a href="profile.html">Mi perfil</a>
          <a href="profile.html#compras">Mis compras</a>
          <a href="my-keys.html">Mis claves</a>
          <a href="profile.html#configuracion">Configuracion</a>
          <button type="button" data-logout>Cerrar sesion</button>
        </div>
      </div>
    `
    : `
      <a class="icon-button" href="login.html">&#128100; <span>Login</span></a>
      <a class="icon-button" href="register.html">&#128221; <span>Registro</span></a>
    `;

  headerMount.innerHTML = `
    <header class="site-header">
      <nav class="nav-shell" aria-label="Menu principal">
        <a class="brand" href="index.html#inicio" aria-label="PixelVault Gaming inicio">
          <img src="assets/images/brand/pixelvault-logo.png" alt="PixelVault Gaming">
        </a>

        <label class="nav-search">
          <span class="search-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Buscar productos</span>
          <input class="global-search-input" type="search" placeholder="Buscar juegos, gift cards o membresias..." data-global-search>
        </label>

        <div class="nav-actions">
          <div class="nav-dropdown" data-category-menu>
            <button class="nav-link" type="button" data-toggle-category-menu>Categorias</button>
            <div class="nav-dropdown-panel">
              <a href="index.html#catalogo" data-nav-category="videojuegos">&#127918; Videojuegos</a>
              <a href="index.html#catalogo" data-nav-category="gift-cards">&#128179; Gift Cards</a>
              <a href="index.html#catalogo" data-nav-category="membresias">&#11088; Membresias</a>
              <a href="index.html#catalogo" data-nav-category="bundles">&#128230; Bundles</a>
            </div>
          </div>
          <a class="nav-link" href="index.html#ofertas">Ofertas</a>
          <a class="nav-link" href="index.html#novedades">Novedades</a>
          <a class="nav-link" href="contact.html">Soporte</a>
          <button class="icon-button" type="button" data-show-favorites>&#10084; <span>Favoritos</span><span class="count-pill" data-favorites-count>0</span></button>
          ${user ? `<a class="icon-button" href="${authTarget}">&#128100; <span>Usuario</span></a>` : authMarkup}
          <button class="cart-button" type="button" data-open-cart>&#128722; <span class="cart-label">Carrito</span><strong data-cart-count>0</strong></button>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobileMenu" data-toggle-mobile-menu>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div class="mobile-menu" id="mobileMenu">
        <a href="index.html#catalogo" data-nav-category="videojuegos">&#127918; Videojuegos</a>
        <a href="index.html#catalogo" data-nav-category="gift-cards">&#128179; Gift Cards</a>
        <a href="index.html#catalogo" data-nav-category="membresias">&#11088; Membresias</a>
        <a href="index.html#ofertas">&#128293; Ofertas</a>
        <a href="index.html#novedades">&#127381; Novedades</a>
        <a href="contact.html">&#128233; Soporte</a>
        <a href="${authTarget}">&#128100; Usuario</a>
        <a href="my-keys.html">&#128273; Mis claves</a>
      </div>
    </header>
  `;
}

function renderCartMount() {
  const cartMount = document.querySelector("#cartMount");
  if (!cartMount) return;

  cartMount.innerHTML = `
    <aside class="cart-drawer" id="cartDrawer" aria-hidden="true" aria-labelledby="cartTitle">
      <div class="cart-panel">
        <div class="cart-header">
          <div>
            <p class="eyebrow">Carrito</p>
            <h2 id="cartTitle">Tu compra digital</h2>
          </div>
          <button class="close-cart" type="button" data-close-cart aria-label="Cerrar carrito"></button>
        </div>
        <div class="cart-items" id="cartItems"></div>
        <div class="cart-empty" id="cartEmpty">
          <strong>El carrito est&aacute; vac&iacute;o</strong>
          <span>Agrega productos desde el cat&aacute;logo.</span>
        </div>
        <div class="cart-summary">
          <div>
            <span>Subtotal</span>
            <strong id="cartSubtotal">$0.00</strong>
          </div>
          <div>
            <span>IVA simulado</span>
            <strong id="cartTax">$0.00</strong>
          </div>
          <div class="summary-total">
            <span>Total</span>
            <strong id="cartTotal">$0.00</strong>
          </div>
        </div>
        <a class="primary-button checkout-button" href="checkout.html" id="checkoutButton" data-checkout-link>Proceder al pago</a>
      </div>
    </aside>
    <div class="cart-backdrop" data-close-cart></div>
  `;
}

function cartEntries() {
  return Object.entries(cart)
    .map(([productId, quantity]) => ({ product: getProduct(productId), quantity }))
    .filter((entry) => entry.product && entry.quantity > 0);
}

function cartTotals() {
  const entries = cartEntries();
  const itemCount = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const subtotal = entries.reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0);
  const tax = subtotal * 0.16;
  const total = subtotal + tax;
  return { entries, itemCount, subtotal, tax, total };
}

function saveCart() {
  writeStorage(storageKeys.cart, cart);
}

function updateCounts() {
  const { itemCount } = cartTotals();
  document.querySelectorAll("[data-cart-count]").forEach((count) => {
    count.textContent = itemCount;
  });
  document.querySelectorAll("[data-favorites-count]").forEach((count) => {
    count.textContent = getFavorites().length;
  });
}

function cartItem({ product, quantity }) {
  return `
    <article class="cart-item">
      <a href="${productUrl(product.id)}">
        <img ${imageAttrs(product)} alt="${escapeHTML(product.name)}">
      </a>
      <div>
        <h3><a href="${productUrl(product.id)}">${escapeHTML(product.name)}</a></h3>
        <span>${escapeHTML(product.platform)} · ${escapeHTML(product.categoryLabel)}</span>
        <strong>${currency.format(product.price * quantity)}</strong>
        <div class="quantity-row">
          <button class="quantity-button" type="button" data-decrease="${product.id}" aria-label="Reducir ${escapeHTML(product.name)}">-</button>
          <span>${quantity}</span>
          <button class="quantity-button" type="button" data-increase="${product.id}" aria-label="Aumentar ${escapeHTML(product.name)}">+</button>
          <button class="remove-button" type="button" data-remove="${product.id}">Eliminar</button>
        </div>
      </div>
    </article>
  `;
}

function renderCartDrawer() {
  const cartItems = document.querySelector("#cartItems");
  const cartEmpty = document.querySelector("#cartEmpty");
  const cartSubtotal = document.querySelector("#cartSubtotal");
  const cartTax = document.querySelector("#cartTax");
  const cartTotal = document.querySelector("#cartTotal");
  const checkoutLink = document.querySelector("#checkoutButton");
  if (!cartItems || !cartSubtotal || !cartTax || !cartTotal) return;

  const { entries, subtotal, tax, total } = cartTotals();
  cartItems.innerHTML = entries.map(cartItem).join("");
  cartEmpty?.classList.toggle("show", entries.length === 0);
  cartSubtotal.textContent = currency.format(subtotal);
  cartTax.textContent = currency.format(tax);
  cartTotal.textContent = currency.format(total);

  if (checkoutLink) {
    checkoutLink.classList.toggle("is-disabled", entries.length === 0);
    checkoutLink.setAttribute("aria-disabled", String(entries.length === 0));
  }
}

function refreshCart() {
  updateCounts();
  renderCartDrawer();
  renderCheckoutPage();
}

function addToCart(productId, shouldOpen = true) {
  const product = getProduct(productId);
  if (!product || Number(product.stock) <= (cart[productId] || 0)) return;
  cart[productId] = (cart[productId] || 0) + 1;
  saveCart();
  refreshCart();
  if (shouldOpen) openCart();
}

function changeQuantity(productId, amount) {
  if (!cart[productId]) return;
  cart[productId] += amount;
  if (cart[productId] <= 0) delete cart[productId];
  saveCart();
  refreshCart();
}

function removeFromCart(productId) {
  delete cart[productId];
  saveCart();
  refreshCart();
}

function openCart() {
  const cartDrawer = document.querySelector("#cartDrawer");
  if (!cartDrawer) return;
  document.body.classList.add("cart-open");
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  const cartDrawer = document.querySelector("#cartDrawer");
  if (!cartDrawer) return;
  document.body.classList.remove("cart-open");
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function categoryCard(item) {
  return `
    <button class="category-tile ${filters.category === item.id ? "active" : ""}" type="button" data-category-filter="${item.id}">
      <span>${item.icon}</span>
      <div>
        <strong>${item.title}</strong>
        <small>${item.text}</small>
      </div>
    </button>
  `;
}

function renderCategories() {
  const categoryGrid = document.querySelector("#categoryGrid");
  if (!categoryGrid) return;
  categoryGrid.innerHTML = marketplaceCategories.map(categoryCard).join("");
}

function productMatches(product) {
  const query = filters.search.trim().toLowerCase();
  const searchable = [
    product.name,
    product.categoryLabel,
    product.platform,
    product.genre,
    product.description
  ].join(" ").toLowerCase();

  const categoryMatch =
    filters.category === "all" ||
    product.category === filters.category ||
    (filters.category === "ofertas" && product.oldPrice);
  const platformMatch = filters.platform === "all" || product.platforms.includes(filters.platform);
  const offersMatch = !filters.offersOnly || Boolean(product.oldPrice);
  const searchMatch = !query || searchable.includes(query);
  const priceMatch = matchesPrice(product.price);

  return categoryMatch && platformMatch && offersMatch && searchMatch && priceMatch;
}

function matchesPrice(price) {
  if (filters.price === "all") return true;
  if (filters.price === "901") return price >= 901;
  const [min, max] = filters.price.split("-").map(Number);
  return price >= min && price <= max;
}

function getVisibleProducts() {
  const visible = products.filter(productMatches);
  const sorted = [...visible];

  sorted.sort((a, b) => {
    if (filters.sort === "price-low") return a.price - b.price;
    if (filters.sort === "price-high") return b.price - a.price;
    if (filters.sort === "rating") return b.rating - a.rating;
    if (filters.sort === "bestsellers") return b.sales - a.sales;
    return Number(b.featured) - Number(a.featured) || b.sales - a.sales;
  });

  return sorted;
}

function productCard(product) {
  const favorites = getFavorites();
  const isFavorite = favorites.includes(product.id);
  const oldPrice = product.oldPrice ? `<span class="old-price">${currency.format(product.oldPrice)}</span>` : "";
  const badge = product.badge ? `<span class="badge">${product.badge}</span>` : "";

  return `
    <article class="product-card">
      <a class="product-media" href="${productUrl(product.id)}" aria-label="Ver detalle de ${escapeHTML(product.name)}">
        <img ${imageAttrs(product)} alt="${escapeHTML(product.name)}">
        ${badge}
      </a>
      <button class="favorite-button ${isFavorite ? "active" : ""}" type="button" data-favorite="${product.id}" aria-label="Agregar ${escapeHTML(product.name)} a favoritos">❤️</button>
      <div class="product-info">
        <div class="product-meta-line">
          <span class="platform-pill">${escapeHTML(product.platform)}</span>
          <span>${escapeHTML(product.genre)}</span>
        </div>
        <h3><a href="${productUrl(product.id)}">${escapeHTML(product.name)}</a></h3>
        <span class="product-category">${escapeHTML(product.categoryLabel)}</span>
        <div class="rating-row">
          <span>★★★★★</span>
          <span>${product.rating.toFixed(1)} · ${product.sales}+ ventas</span>
        </div>
        <div class="price-row">
          ${oldPrice}
          <span class="price">${currency.format(product.price)}</span>
        </div>
        <div class="product-actions">
          <button class="add-button" type="button" data-add="${product.id}" ${Number(product.stock) <= 0 ? "disabled" : ""}>${Number(product.stock) <= 0 ? "Agotado" : "Agregar"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const productGrid = document.querySelector("#productGrid");
  if (!productGrid) return;
  const visibleProducts = getVisibleProducts();

  if (!visibleProducts.length) {
    productGrid.innerHTML = `
      <div class="empty-results">
        <strong>No se encontraron productos</strong>
        <span>Prueba con otros filtros o una busqueda diferente.</span>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = visibleProducts.map(productCard).join("");
}

function renderOffers() {
  const offerStrip = document.querySelector("#offerStrip");
  if (!offerStrip) return;
  offerStrip.innerHTML = products
    .filter((product) => product.oldPrice)
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 3)
    .map((product) => `
      <a class="offer-card" href="${productUrl(product.id)}">
        <img ${imageAttrs(product)} alt="${escapeHTML(product.name)}">
        <div>
          <span>${escapeHTML(product.badge || "Oferta")}</span>
          <strong>${escapeHTML(product.name)}</strong>
          <small>${currency.format(product.price)} · ${escapeHTML(product.platform)}</small>
        </div>
      </a>
    `)
    .join("");
}

function renderNews() {
  const newsGrid = document.querySelector("#newsGrid");
  if (!newsGrid) return;

  const news = [
    {
      date: "Mayo 2026",
      title: "Keys autom&aacute;ticas",
      body: "Tus claves digitales quedan guardadas despu&eacute;s de comprar."
    },
    {
      date: "Mayo 2026",
      title: "Perfil de usuario",
      body: "Consulta compras y juegos desde tu cuenta."
    },
    {
      date: "Mayo 2026",
      title: "Marketplace premium",
      body: "Cat&aacute;logo con filtros, favoritos y carrito lateral."
    }
  ];

  newsGrid.innerHTML = news.map((item) => `
    <article class="news-card">
      <time>${item.date}</time>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `).join("");
}

function syncFilterControls() {
  const productSearch = document.querySelector("#productSearch");
  const platformFilter = document.querySelector("#platformFilter");
  const categoryFilter = document.querySelector("#categoryFilter");
  const priceFilter = document.querySelector("#priceFilter");
  const sortFilter = document.querySelector("#sortFilter");
  const offersOnly = document.querySelector("#offersOnly");

  if (productSearch) productSearch.value = filters.search;
  if (platformFilter) platformFilter.value = filters.platform;
  if (categoryFilter) categoryFilter.value = filters.category === "ofertas" ? "all" : filters.category;
  if (priceFilter) priceFilter.value = filters.price;
  if (sortFilter) sortFilter.value = filters.sort;
  if (offersOnly) offersOnly.checked = filters.offersOnly || filters.category === "ofertas";

  document.querySelectorAll("[data-category-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.categoryFilter === filters.category);
  });
  document.querySelectorAll("[data-platform-chip]").forEach((button) => {
    button.classList.toggle("active", button.dataset.platformChip === filters.platform);
  });
  document.querySelectorAll("[data-category-chip]").forEach((button) => {
    const activeCategory = filters.category === "ofertas" || filters.offersOnly ? "ofertas" : filters.category;
    button.classList.toggle("active", button.dataset.categoryChip === activeCategory);
  });
}

function applyPendingNavigationFilters() {
  const pendingSearch = sessionStorage.getItem("pixelVaultPendingSearch");
  const pendingCategory = sessionStorage.getItem("pixelVaultPendingCategory");
  const pendingOffers = sessionStorage.getItem("pixelVaultPendingOffers");

  if (pendingSearch) {
    filters.search = pendingSearch;
    sessionStorage.removeItem("pixelVaultPendingSearch");
  }
  if (pendingCategory) {
    filters.category = pendingCategory;
    sessionStorage.removeItem("pixelVaultPendingCategory");
  }
  if (pendingOffers) {
    filters.category = "ofertas";
    filters.offersOnly = true;
    sessionStorage.removeItem("pixelVaultPendingOffers");
  }
}

function applySearch(value, shouldScroll = false) {
  filters.search = value;
  document.querySelectorAll("[data-global-search]").forEach((input) => {
    input.value = value;
  });
  syncFilterControls();
  renderProducts();

  if (shouldScroll) {
    document.querySelector("#catalogo")?.scrollIntoView({ behavior: "smooth" });
  }
}

function showFavoritesOnly() {
  const favorites = getFavorites();
  const productGrid = document.querySelector("#productGrid");
  if (!productGrid) {
    window.location.href = "index.html#catalogo";
    return;
  }

  document.querySelector("#catalogo")?.scrollIntoView({ behavior: "smooth" });
  productGrid.innerHTML = favorites.length
    ? products.filter((product) => favorites.includes(product.id)).map(productCard).join("")
    : `
      <div class="empty-results">
        <strong>No tienes favoritos todav&iacute;a</strong>
        <span>Marca productos con el coraz&oacute;n para verlos aqu&iacute;.</span>
      </div>
    `;
}

function toggleFavorite(productId) {
  const favorites = getFavorites();
  const nextFavorites = favorites.includes(productId)
    ? favorites.filter((id) => id !== productId)
    : [...favorites, productId];
  setFavorites(nextFavorites);
  updateCounts();
  renderProducts();
  renderProductPage();
}

function renderProductPage() {
  const productDetail = document.querySelector("#productDetail");
  if (!productDetail) return;

  const productId = new URLSearchParams(window.location.search).get("id");
  const product = getProduct(productId) || products[0];
  document.title = `${product.name} | PixelVault Gaming`;

  const oldPrice = product.oldPrice ? `<span class="old-price">${currency.format(product.oldPrice)}</span>` : "";
  const badge = product.badge ? `<span class="badge detail-badge">${escapeHTML(product.badge)}</span>` : "";

  productDetail.innerHTML = `
    <article class="product-detail">
      <div class="product-detail-media">
        <img ${imageAttrs(product)} alt="${escapeHTML(product.name)}">
        ${badge}
      </div>
      <div class="product-detail-info">
        <span class="product-category">${escapeHTML(product.categoryLabel)}</span>
        <h1>${escapeHTML(product.name)}</h1>
        <p>${escapeHTML(product.longDescription)}</p>
        <div class="detail-price-row">
          ${oldPrice}
          <span class="price">${currency.format(product.price)}</span>
        </div>
        <div class="detail-meta-grid">
          <article>
            <span>Plataforma</span>
            <strong>${escapeHTML(product.platform)}</strong>
          </article>
          <article>
            <span>G&eacute;nero</span>
            <strong>${escapeHTML(product.genre)}</strong>
          </article>
          <article>
            <span>Disponibilidad</span>
            <strong>Disponible</strong>
          </article>
          <article>
            <span>Entrega</span>
            <strong>C&oacute;digo digital</strong>
          </article>
        </div>
        <div class="rating-row">
          <span>★★★★★</span>
          <span>${product.rating.toFixed(1)} · ${product.sales}+ ventas</span>
        </div>
        <div class="detail-actions">
          <button class="primary-button" type="button" data-add="${product.id}">Agregar al carrito</button>
          <button class="ghost-button" type="button" data-favorite="${product.id}">❤️ Favorito</button>
          <a class="ghost-button" href="index.html#catalogo">Volver al cat&aacute;logo</a>
        </div>
      </div>
    </article>
  `;

  const relatedProducts = document.querySelector("#relatedProducts");
  if (relatedProducts) {
    const related = products
      .filter((item) => item.id !== product.id && (item.category === product.category || item.featured))
      .slice(0, 4);
    relatedProducts.innerHTML = related.map(productCard).join("");
  }
}

function checkoutLine({ product, quantity }) {
  return `
    <article class="checkout-line">
      <a href="${productUrl(product.id)}">
        <img ${imageAttrs(product)} alt="${escapeHTML(product.name)}">
      </a>
      <div>
        <h3><a href="${productUrl(product.id)}">${escapeHTML(product.name)}</a></h3>
        <p>${escapeHTML(product.platform)} · ${escapeHTML(product.genre)}</p>
        <div class="quantity-row">
          <button class="quantity-button" type="button" data-decrease="${product.id}" aria-label="Reducir ${escapeHTML(product.name)}">-</button>
          <span>${quantity}</span>
          <button class="quantity-button" type="button" data-increase="${product.id}" aria-label="Aumentar ${escapeHTML(product.name)}">+</button>
          <button class="remove-button" type="button" data-remove="${product.id}">Eliminar</button>
        </div>
      </div>
      <strong>${currency.format(product.price * quantity)}</strong>
    </article>
  `;
}

function renderCheckoutPage() {
  const checkoutItems = document.querySelector("#checkoutItems");
  const checkoutSubtotal = document.querySelector("#checkoutSubtotal");
  const checkoutTax = document.querySelector("#checkoutTax");
  const checkoutTotal = document.querySelector("#checkoutTotal");
  const confirmButton = document.querySelector("[data-confirm-order]");
  if (!checkoutItems || !checkoutSubtotal || !checkoutTax || !checkoutTotal) return;

  const { entries, subtotal, tax, total } = cartTotals();
  checkoutItems.innerHTML = entries.length
    ? entries.map(checkoutLine).join("")
    : `
      <div class="empty-state">
        <strong>Tu carrito est&aacute; vac&iacute;o</strong>
        <span>Agrega productos para iniciar el checkout.</span>
        <a class="primary-button" href="index.html#catalogo">Ir al cat&aacute;logo</a>
      </div>
    `;

  checkoutSubtotal.textContent = currency.format(subtotal);
  checkoutTax.textContent = currency.format(tax);
  checkoutTotal.textContent = currency.format(total);
  if (confirmButton) confirmButton.disabled = entries.length === 0;
}

function prefillCheckoutUser() {
  const form = document.querySelector("#checkoutForm");
  const user = getSession();
  if (!form || !user) return;
  form.elements.customerName.value = user.name;
  form.elements.customerEmail.value = user.email;
}

function generateKey(product) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const group = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `${product.keyPrefix}-${group()}-${group()}-${group()}`;
}

function allocateProductKey(product) {
  const productIndex = products.findIndex((item) => item.id === product.id);
  const productRecord = products[productIndex] || product;
  const key = productRecord.keys?.length ? productRecord.keys.shift() : generateKey(productRecord);

  if (productIndex >= 0 && Number(productRecord.stock) > 0) {
    productRecord.stock -= 1;
    products[productIndex] = normalizeProduct(productRecord);
    saveProducts(products);
  }

  return key;
}

function confirmPurchase(form) {
  const status = document.querySelector("#checkoutStatus");
  const { entries, subtotal, tax, total } = cartTotals();
  if (!entries.length) {
    setStatus(status, "Tu carrito esta vacio.", true);
    return;
  }

  const formData = new FormData(form);
  const orderId = `PV-${Date.now().toString().slice(-7)}`;
  const createdAt = new Date().toISOString();
  const customerName = formData.get("customerName");
  const customerEmail = formData.get("customerEmail");
  const country = formData.get("country");
  const paymentMethod = formData.get("paymentMethod");
  const generatedKeys = [];
  const orderItems = [];

  entries.forEach(({ product, quantity }) => {
    for (let index = 0; index < quantity; index += 1) {
      const key = allocateProductKey(product);
      const keyRecord = {
        id: `${orderId}-${product.id}-${index}`,
        orderId,
        productId: product.id,
        productName: product.name,
        platform: product.platform,
        image: product.image,
        key,
        email: customerEmail,
        createdAt
      };
      generatedKeys.push(keyRecord);
      orderItems.push({
        productId: product.id,
        productName: product.name,
        platform: product.platform,
        price: product.price,
        key
      });
    }
  });

  const orders = readStorage(storageKeys.orders, []);
  const keys = readStorage(storageKeys.keys, []);
  const order = {
    id: orderId,
    customerName,
    customerEmail,
    country,
    paymentMethod,
    subtotal,
    tax,
    total,
    createdAt,
    status: "Completado",
    items: orderItems
  };

  writeStorage(storageKeys.orders, [order, ...orders]);
  writeStorage(storageKeys.keys, [...generatedKeys, ...keys]);
  sessionStorage.setItem("pixelVaultLastOrder", JSON.stringify({ ...order, keys: generatedKeys }));

  cart = {};
  saveCart();
  refreshCart();
  window.location.href = "success.html";
}

function renderSuccessPage() {
  const successPanel = document.querySelector("#successPanel");
  if (!successPanel) return;

  const lastOrder = readSessionJSON("pixelVaultLastOrder");
  if (!lastOrder) {
    successPanel.innerHTML = `
      <div class="success-icon">✓</div>
      <h1>No hay una compra reciente</h1>
      <p>Cuando confirmes un pedido, tus claves digitales aparecer&aacute;n aqu&iacute;.</p>
      <div class="success-actions">
        <a class="primary-button" href="index.html#catalogo">Ir al cat&aacute;logo</a>
        <a class="ghost-button" href="my-keys.html">Mis claves</a>
      </div>
    `;
    return;
  }

  successPanel.innerHTML = `
    <div class="success-icon">✓</div>
    <p class="eyebrow">Compra realizada con &eacute;xito</p>
    <h1>Tu clave digital ha sido enviada correctamente.</h1>
    <p>📩 Enviado al correo del usuario: <strong>${escapeHTML(lastOrder.customerEmail)}</strong></p>
    <div class="success-keys">
      ${lastOrder.keys.map((item) => `
        <article>
          <strong>${escapeHTML(item.productName)}</strong>
          <div class="generated-key">${escapeHTML(item.key)}</div>
        </article>
      `).join("")}
    </div>
    <div class="success-actions">
      <a class="primary-button" href="my-keys.html">Ver Mis claves</a>
      <a class="ghost-button" href="index.html#catalogo">Seguir comprando</a>
    </div>
  `;
}

function readSessionJSON(key) {
  try {
    return JSON.parse(sessionStorage.getItem(key));
  } catch {
    return null;
  }
}

function renderKeysPage() {
  const keysGrid = document.querySelector("#keysGrid");
  if (!keysGrid) return;

  const keys = readStorage(storageKeys.keys, []);
  if (!keys.length) {
    keysGrid.innerHTML = `
      <div class="empty-state">
        <strong>A&uacute;n no tienes claves</strong>
        <span>Compra un producto para generar una key digital simulada.</span>
        <a class="primary-button" href="index.html#catalogo">Ir al cat&aacute;logo</a>
      </div>
    `;
    return;
  }

  keysGrid.innerHTML = keys.map((item) => `
    <article class="key-card">
      <img src="${escapeHTML(item.image || placeholderImage(item.productName))}" onerror="this.onerror=null;this.src='${placeholderImage(item.productName).replaceAll("'", "%27")}'" loading="lazy" decoding="async" alt="${escapeHTML(item.productName)}">
      <div>
        <h3>${escapeHTML(item.productName)}</h3>
        <span class="platform-pill">${escapeHTML(item.platform)}</span>
      </div>
      <div class="key-code">${escapeHTML(item.key)}</div>
      <button class="copy-button" type="button" data-copy-key="${escapeHTML(item.key)}">Copiar key</button>
    </article>
  `).join("");
}

function renderProfilePage() {
  const profilePanel = document.querySelector("#profilePanel");
  if (!profilePanel) return;

  const user = getSession();
  if (!user) {
    profilePanel.innerHTML = `
      <div class="empty-state">
        <strong>Inicia sesi&oacute;n para ver tu perfil</strong>
        <span>Tu historial, compras y claves se vinculan con tu correo.</span>
        <a class="primary-button" href="login.html">Iniciar sesi&oacute;n</a>
      </div>
    `;
    return;
  }

  const orders = readStorage(storageKeys.orders, []).filter((order) => order.customerEmail === user.email);
  const keys = readStorage(storageKeys.keys, []).filter((item) => item.email === user.email);
  const games = new Set(keys.map((item) => item.productName));

  profilePanel.innerHTML = `
    <div class="profile-grid">
      <aside class="profile-card" id="configuracion">
        <p class="eyebrow">Usuario autenticado</p>
        <h2>${escapeHTML(user.name)}</h2>
        <p>${escapeHTML(user.email)}</p>
        <button class="ghost-button" type="button" data-logout>Cerrar sesi&oacute;n</button>
      </aside>
      <div class="profile-card">
        <div class="profile-stats">
          <article>
            <strong>${orders.length}</strong>
            <span>Compras</span>
          </article>
          <article>
            <strong>${games.size}</strong>
            <span>Juegos</span>
          </article>
          <article>
            <strong>${keys.length}</strong>
            <span>Keys</span>
          </article>
        </div>
        <div id="compras">
          <h2>Historial de compras</h2>
          <div class="order-list">
            ${orders.length ? orders.map((order) => `
              <article class="order-line">
                <strong>${escapeHTML(order.id)} · ${currency.format(order.total)}</strong>
                <p>${new Date(order.createdAt).toLocaleDateString("es-MX")} · ${escapeHTML(order.paymentMethod)} · ${order.items.length} producto(s)</p>
              </article>
            `).join("") : "<p class='empty-state'>Todavia no tienes compras registradas.</p>"}
          </div>
        </div>
      </div>
    </div>
  `;
}

function getAdminSession() {
  const session = readStorage(storageKeys.adminSession, null);
  return session?.email === adminCredentials.email ? session : null;
}

function setAdminSession() {
  writeStorage(storageKeys.adminSession, { logged: true, email: adminCredentials.email });
}

function clearAdminSession() {
  localStorage.removeItem(storageKeys.adminSession);
}

function renderAdminPage() {
  const adminRoot = document.querySelector("#adminRoot");
  if (!adminRoot) return;

  if (!getAdminSession()) {
    adminRoot.innerHTML = `
      <section class="admin-login-card">
        <p class="eyebrow">Admin PixelVault</p>
        <h1>Acceso restringido</h1>
        <p>Para entrar al dashboard inicia sesion con la cuenta administradora autorizada.</p>
        <a class="primary-button" href="login.html">Iniciar sesion</a>
      </section>
    `;
    return;
  }

  const orders = readStorage(storageKeys.orders, []);
  const totalStock = products.reduce((sum, product) => sum + Number(product.stock || 0), 0);
  const totalKeys = products.reduce((sum, product) => sum + (product.keys?.length || 0), 0);

  adminRoot.innerHTML = `
    <div class="admin-heading">
      <div>
        <p class="eyebrow">Dashboard admin</p>
        <h1>Gestion PixelVault</h1>
        <p>Administra productos, imagenes, keys, stock y pedidos simulados.</p>
      </div>
      <div class="admin-actions">
        <button class="ghost-button" type="button" data-reset-products>Restaurar catalogo</button>
        <button class="primary-button" type="button" data-admin-logout>Cerrar admin</button>
      </div>
    </div>

    <div class="admin-stats">
      <article><strong>${products.length}</strong><span>Productos</span></article>
      <article><strong>${totalStock}</strong><span>Stock total</span></article>
      <article><strong>${totalKeys}</strong><span>Keys cargadas</span></article>
      <article><strong>${orders.length}</strong><span>Pedidos</span></article>
    </div>

    <div class="admin-layout">
      <section class="admin-panel">
        <h2 id="adminFormTitle">Agregar producto</h2>
        <form id="adminProductForm" class="admin-form">
          <input type="hidden" name="id">
          <div class="admin-form-grid">
            <label>Nombre<input name="name" type="text" required></label>
            <label>Plataforma<input name="platform" type="text" placeholder="Steam, PS5, Xbox" required></label>
            <label>Categoria
              <select name="category" required>
                <option value="videojuegos">Videojuegos</option>
                <option value="gift-cards">Gift Cards</option>
                <option value="membresias">Membresias</option>
                <option value="bundles">Bundles</option>
              </select>
            </label>
            <label>Genero<input name="genre" type="text" required></label>
            <label>Precio actual<input name="price" type="number" min="0" step="1" required></label>
            <label>Precio anterior<input name="oldPrice" type="number" min="0" step="1"></label>
            <label>Rating<input name="rating" type="number" min="1" max="5" step="0.1" value="4.5"></label>
            <label>Ventas<input name="sales" type="number" min="0" step="1" value="0"></label>
            <label>Stock<input name="stock" type="number" min="0" step="1" value="0"></label>
            <label>Badge
              <select name="badge">
                <option value="">Sin badge</option>
                <option value="-35%">-35%</option>
                <option value="Nuevo">Nuevo</option>
                <option value="Mas vendido">Mas vendido</option>
                <option value="Premium">Premium</option>
              </select>
            </label>
            <label>Imagen URL<input name="image" type="url" placeholder="https://..."></label>
            <label>Subir imagen<input name="imageFile" type="file" accept="image/*"></label>
          </div>
          <label>Descripcion breve<textarea name="description" rows="3" required></textarea></label>
          <label>Descripcion larga<textarea name="longDescription" rows="4"></textarea></label>
          <label>Keys disponibles<textarea name="keys" rows="4" placeholder="Una key por linea"></textarea></label>
          <div class="admin-form-actions">
            <button class="primary-button" type="submit">Guardar producto</button>
            <button class="ghost-button" type="button" data-clear-admin-form>Nuevo producto</button>
          </div>
          <p class="form-status" id="adminProductStatus" role="status"></p>
        </form>
      </section>

      <section class="admin-panel">
        <h2>Productos</h2>
        <div class="admin-product-list">
          ${products.map(adminProductRow).join("")}
        </div>
      </section>
    </div>

    <section class="admin-panel admin-orders">
      <h2>Gestionar pedidos</h2>
      ${orders.length ? orders.map(adminOrderRow).join("") : "<p class='empty-state'>No hay pedidos todavia.</p>"}
    </section>
  `;
}

function adminProductRow(product) {
  return `
    <article class="admin-product-row">
      <img ${imageAttrs(product)} alt="${escapeHTML(product.name)}">
      <div>
        <strong>${escapeHTML(product.name)}</strong>
        <span>${escapeHTML(product.platform)} · ${escapeHTML(product.genre)}</span>
        <small>${currency.format(product.price)} · Stock ${product.stock} · Keys ${product.keys?.length || 0}</small>
      </div>
      <div class="admin-row-actions">
        <button class="ghost-button small-button" type="button" data-edit-product="${product.id}">Editar</button>
        <button class="ghost-button small-button" type="button" data-delete-product="${product.id}">Eliminar</button>
      </div>
    </article>
  `;
}

function adminOrderRow(order) {
  return `
    <article class="admin-order-row">
      <div>
        <strong>${escapeHTML(order.id)} · ${currency.format(order.total || 0)}</strong>
        <span>${escapeHTML(order.customerEmail || "Sin correo")} · ${order.items?.length || 0} producto(s)</span>
      </div>
      <select data-order-status="${escapeHTML(order.id)}">
        ${["Pendiente", "Pagado", "Completado", "Cancelado"].map((status) => `
          <option value="${status}" ${status === (order.status || "Completado") ? "selected" : ""}>${status}</option>
        `).join("")}
      </select>
    </article>
  `;
}

function fillAdminProductForm(product) {
  const form = document.querySelector("#adminProductForm");
  const title = document.querySelector("#adminFormTitle");
  if (!form || !product) return;

  title.textContent = `Editar ${product.name}`;
  form.elements.id.value = product.id;
  form.elements.name.value = product.name;
  form.elements.platform.value = product.platform;
  form.elements.category.value = product.category;
  form.elements.genre.value = product.genre;
  form.elements.price.value = product.price;
  form.elements.oldPrice.value = product.oldPrice || "";
  form.elements.rating.value = product.rating;
  form.elements.sales.value = product.sales;
  form.elements.stock.value = product.stock;
  form.elements.badge.value = product.badge || "";
  form.elements.image.value = product.image || "";
  form.elements.description.value = product.description || "";
  form.elements.longDescription.value = product.longDescription || "";
  form.elements.keys.value = product.keys?.join("\n") || "";
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function clearAdminProductForm() {
  const form = document.querySelector("#adminProductForm");
  const title = document.querySelector("#adminFormTitle");
  if (!form) return;
  form.reset();
  form.elements.id.value = "";
  if (title) title.textContent = "Agregar producto";
}

function productFromAdminForm(form) {
  const formData = new FormData(form);
  const id = String(formData.get("id") || "").trim() || slugify(formData.get("name"));
  const category = String(formData.get("category"));
  const platform = String(formData.get("platform")).trim();
  const platforms = platform.split(",").map((item) => item.trim()).filter(Boolean);
  const keys = String(formData.get("keys") || "")
    .split(/\r?\n/)
    .map((key) => key.trim())
    .filter(Boolean);

  return normalizeProduct({
    id,
    name: String(formData.get("name")).trim(),
    category,
    categoryLabel: categoryLabel(category),
    platform: platforms[0] || platform || "PC",
    platforms: platforms.length ? platforms : [platform || "PC"],
    genre: String(formData.get("genre")).trim(),
    price: Number(formData.get("price")),
    oldPrice: Number(formData.get("oldPrice")) || 0,
    rating: Number(formData.get("rating")) || 4.5,
    sales: Number(formData.get("sales")) || 0,
    stock: Number(formData.get("stock")) || keys.length,
    badge: String(formData.get("badge") || ""),
    image: String(formData.get("image") || ""),
    keyPrefix: id.slice(0, 6).replace(/[^a-z0-9]/gi, "").toUpperCase() || "PV",
    keys,
    featured: Boolean(formData.get("badge")),
    bestseller: String(formData.get("badge")) === "Mas vendido",
    description: String(formData.get("description")).trim(),
    longDescription: String(formData.get("longDescription") || formData.get("description")).trim()
  });
}

function slugify(value) {
  return String(value || "producto")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || `producto-${Date.now()}`;
}

function saveAdminProduct(form) {
  const product = productFromAdminForm(form);
  const existingIndex = products.findIndex((item) => item.id === product.id);
  const nextProducts = [...products];
  if (existingIndex >= 0) nextProducts[existingIndex] = product;
  else nextProducts.unshift(product);
  saveProducts(nextProducts);
  renderAdminPage();
}

function updateOrderStatus(orderId, status) {
  const orders = readStorage(storageKeys.orders, []);
  const nextOrders = orders.map((order) => order.id === orderId ? { ...order, status } : order);
  writeStorage(storageKeys.orders, nextOrders);
}

function initAuthForms() {
  const loginForm = document.querySelector("#loginForm");
  const registerForm = document.querySelector("#registerForm");

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#loginStatus");
    const formData = new FormData(loginForm);
    const email = String(formData.get("email")).trim().toLowerCase();
    const password = String(formData.get("password"));

    if (email === adminCredentials.email && password === adminCredentials.password) {
      setSession({ name: adminCredentials.name, email: adminCredentials.email });
      setAdminSession();
      setStatus(status, "Acceso admin correcto.");
      setTimeout(() => window.location.href = "admin.html", 650);
      return;
    }

    const users = readStorage(storageKeys.users, []);
    const user = users.find((candidate) => candidate.email === email && candidate.password === password);

    if (!user) {
      setStatus(status, "Correo o contrasena incorrectos.", true);
      return;
    }

    setSession({ name: user.name, email: user.email });
    setStatus(status, "Sesion iniciada correctamente.");
    setTimeout(() => window.location.href = "profile.html", 650);
  });

  registerForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#registerStatus");
    const formData = new FormData(registerForm);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim().toLowerCase();
    const password = String(formData.get("password"));
    const confirmPassword = String(formData.get("confirmPassword"));
    const users = readStorage(storageKeys.users, []);

    if (password.length < 6) {
      setStatus(status, "La contrasena debe tener minimo 6 caracteres.", true);
      return;
    }
    if (password !== confirmPassword) {
      setStatus(status, "Las contrasenas no coinciden.", true);
      return;
    }
    if (users.some((user) => user.email === email)) {
      setStatus(status, "Ya existe una cuenta con ese correo.", true);
      return;
    }

    const user = { name, email, password };
    writeStorage(storageKeys.users, [user, ...users]);
    setSession({ name, email });
    setStatus(status, "Cuenta creada correctamente.");
    setTimeout(() => window.location.href = "profile.html", 650);
  });
}

function setStatus(element, message, isError = false) {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("error", isError);
}

function initContactForm() {
  const contactForm = document.querySelector("#contactForm");
  const formStatus = document.querySelector("#formStatus");
  if (!contactForm || !formStatus) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    setStatus(formStatus, "Mensaje enviado correctamente. El equipo PixelVault te contactara pronto.");
    contactForm.reset();
  });
}

function initCheckoutForm() {
  const checkoutForm = document.querySelector("#checkoutForm");
  if (!checkoutForm) return;
  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    confirmPurchase(checkoutForm);
  });
}

function initAdminForms() {
  document.addEventListener("submit", (event) => {
    const adminProductForm = event.target.closest("#adminProductForm");

    if (adminProductForm) {
      event.preventDefault();
      saveAdminProduct(adminProductForm);
    }
  });
}

async function copyKey(key, button) {
  try {
    await navigator.clipboard.writeText(key);
    button.textContent = "Key copiada";
  } catch {
    button.textContent = "Copia manual";
  }
  setTimeout(() => {
    button.textContent = "Copiar key";
  }, 1200);
}

function handleNavigationCategory(category) {
  if (page === "home") {
    filters.category = category;
    filters.offersOnly = category === "ofertas";
    syncFilterControls();
    renderCategories();
    renderProducts();
    document.querySelector("#catalogo")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  sessionStorage.setItem("pixelVaultPendingCategory", category);
  window.location.href = "index.html#catalogo";
}

function resetFilters() {
  filters = {
    search: "",
    platform: "all",
    category: "all",
    price: "all",
    offersOnly: false,
    sort: "featured"
  };
  document.querySelectorAll("[data-global-search]").forEach((input) => {
    input.value = "";
  });
  syncFilterControls();
  renderCategories();
  renderProducts();
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const openCartButton = event.target.closest("[data-open-cart]");
  const closeCartButton = event.target.closest("[data-close-cart]");
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");
  const removeButton = event.target.closest("[data-remove]");
  const favoriteButton = event.target.closest("[data-favorite]");
  const categoryButton = event.target.closest("[data-category-filter]");
  const platformChip = event.target.closest("[data-platform-chip]");
  const categoryChip = event.target.closest("[data-category-chip]");
  const navCategory = event.target.closest("[data-nav-category]");
  const showOffers = event.target.closest("[data-show-offers]");
  const showFavorites = event.target.closest("[data-show-favorites]");
  const resetButton = event.target.closest("[data-reset-filters]");
  const checkoutLink = event.target.closest("[data-checkout-link]");
  const userMenuToggle = event.target.closest("[data-toggle-user-menu]");
  const categoryMenuToggle = event.target.closest("[data-toggle-category-menu]");
  const mobileMenuToggle = event.target.closest("[data-toggle-mobile-menu]");
  const logoutButton = event.target.closest("[data-logout]");
  const copyButton = event.target.closest("[data-copy-key]");
  const adminLogoutButton = event.target.closest("[data-admin-logout]");
  const editProductButton = event.target.closest("[data-edit-product]");
  const deleteProductButton = event.target.closest("[data-delete-product]");
  const clearAdminFormButton = event.target.closest("[data-clear-admin-form]");
  const resetProductsButton = event.target.closest("[data-reset-products]");

  if (addButton) addToCart(addButton.dataset.add);
  if (openCartButton) openCart();
  if (closeCartButton) closeCart();
  if (increaseButton) changeQuantity(increaseButton.dataset.increase, 1);
  if (decreaseButton) changeQuantity(decreaseButton.dataset.decrease, -1);
  if (removeButton) removeFromCart(removeButton.dataset.remove);

  if (favoriteButton) {
    event.preventDefault();
    toggleFavorite(favoriteButton.dataset.favorite);
  }

  if (categoryButton) {
    filters.category = categoryButton.dataset.categoryFilter;
    filters.offersOnly = filters.category === "ofertas";
    syncFilterControls();
    renderCategories();
    renderProducts();
    document.querySelector("#catalogo")?.scrollIntoView({ behavior: "smooth" });
  }

  if (platformChip) {
    filters.platform = platformChip.dataset.platformChip;
    syncFilterControls();
    renderProducts();
  }

  if (categoryChip) {
    filters.category = categoryChip.dataset.categoryChip;
    filters.offersOnly = filters.category === "ofertas";
    syncFilterControls();
    renderProducts();
  }

  if (navCategory) {
    event.preventDefault();
    handleNavigationCategory(navCategory.dataset.navCategory);
  }

  if (showOffers) {
    filters.category = "ofertas";
    filters.offersOnly = true;
    syncFilterControls();
    renderCategories();
    renderProducts();
  }

  if (showFavorites) showFavoritesOnly();
  if (resetButton) resetFilters();

  if (checkoutLink && cartTotals().entries.length === 0) {
    event.preventDefault();
  }

  if (userMenuToggle) {
    document.querySelector("[data-user-menu]")?.classList.toggle("open");
  }

  if (categoryMenuToggle) {
    document.querySelector("[data-category-menu]")?.classList.toggle("open");
  }

  if (mobileMenuToggle) {
    const menu = document.querySelector("#mobileMenu");
    const isOpen = menu?.classList.toggle("open");
    mobileMenuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  }

  if (logoutButton) {
    clearSession();
    clearAdminSession();
    renderHeaderV2();
    updateCounts();
    if (["profile", "keys", "admin"].includes(page)) window.location.href = "index.html";
  }

  if (copyButton) copyKey(copyButton.dataset.copyKey, copyButton);

  if (adminLogoutButton) {
    clearAdminSession();
    renderAdminPage();
  }

  if (editProductButton) {
    fillAdminProductForm(getProduct(editProductButton.dataset.editProduct));
  }

  if (deleteProductButton) {
    products = products.filter((product) => product.id !== deleteProductButton.dataset.deleteProduct);
    saveProducts(products);
    renderAdminPage();
  }

  if (clearAdminFormButton) clearAdminProductForm();

  if (resetProductsButton) {
    localStorage.removeItem(storageKeys.products);
    products = loadProducts();
    renderAdminPage();
  }
});

document.addEventListener("input", (event) => {
  const globalSearch = event.target.closest("[data-global-search]");
  const productSearch = event.target.closest("#productSearch");
  if (globalSearch && page === "home") {
    applySearch(globalSearch.value);
  }
  if (productSearch) {
    filters.search = productSearch.value;
    document.querySelectorAll("[data-global-search]").forEach((input) => {
      input.value = productSearch.value;
    });
    renderProducts();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    document.querySelector("[data-user-menu]")?.classList.remove("open");
    document.querySelector("[data-category-menu]")?.classList.remove("open");
  }

  const globalSearch = event.target.closest("[data-global-search]");
  if (!globalSearch || event.key !== "Enter") return;
  event.preventDefault();

  if (page === "home") {
    applySearch(globalSearch.value, true);
    return;
  }

  sessionStorage.setItem("pixelVaultPendingSearch", globalSearch.value);
  window.location.href = "index.html#catalogo";
});

document.addEventListener("change", (event) => {
  const orderStatus = event.target.closest("[data-order-status]");
  const imageFile = event.target.closest("#adminProductForm input[name='imageFile']");

  if (orderStatus) {
    updateOrderStatus(orderStatus.dataset.orderStatus, orderStatus.value);
  }

  if (imageFile?.files?.[0]) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const form = document.querySelector("#adminProductForm");
      if (form) form.elements.image.value = reader.result;
    });
    reader.readAsDataURL(imageFile.files[0]);
  }

  if (event.target.matches("#platformFilter")) filters.platform = event.target.value;
  if (event.target.matches("#categoryFilter")) filters.category = event.target.value;
  if (event.target.matches("#priceFilter")) filters.price = event.target.value;
  if (event.target.matches("#sortFilter")) filters.sort = event.target.value;
  if (event.target.matches("#offersOnly")) filters.offersOnly = event.target.checked;

  if (event.target.matches("#platformFilter, #categoryFilter, #priceFilter, #sortFilter, #offersOnly")) {
    if (filters.offersOnly && filters.category === "all") {
      filters.category = "ofertas";
    } else if (!filters.offersOnly && filters.category === "ofertas") {
      filters.category = "all";
    }
    syncFilterControls();
    renderCategories();
    renderProducts();
  }
});

function initHomePage() {
  applyPendingNavigationFilters();
  renderCategories();
  syncFilterControls();
  renderProducts();
  renderOffers();
  renderNews();

  if (location.hash === "#catalogo" && (filters.search || filters.category !== "all")) {
    setTimeout(() => document.querySelector("#catalogo")?.scrollIntoView(), 0);
  }
}

function init() {
  renderHeaderV2();
  renderCartMount();
  renderFooter();
  initAuthForms();
  initContactForm();
  initCheckoutForm();
  initAdminForms();

  if (page === "home") initHomePage();
  if (page === "product") renderProductPage();
  if (page === "checkout") {
    prefillCheckoutUser();
    renderCheckoutPage();
  }
  if (page === "success") renderSuccessPage();
  if (page === "keys") renderKeysPage();
  if (page === "profile") renderProfilePage();
  if (page === "admin") renderAdminPage();

  refreshCart();
}

init();
