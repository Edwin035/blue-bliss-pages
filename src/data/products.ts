import xboxImg from '@/assets/xbox.jpg';
import steamImg from '@/assets/steam.jpg';
import mobileImg from '@/assets/mobile-gaming.jpg';
import characterImg from '@/assets/game-character.jpg';
import playstationImg from '@/assets/playstation.jpg';

export interface Product {
  id: number;
  image: string;
  title: string;
  platform: string;
  originalPrice: number;
  discountPrice: number;
  discount?: number;
  description?: string;
  tags?: string[];
  distributor?: string;
  activation?: string;
}

export const allProducts: Product[] = [
  // PlayStation
  { id: 1, image: playstationImg, title: 'PlayStation Plus Essential 1 Mes', platform: 'PlayStation', originalPrice: 10, discountPrice: 8.50, discount: 15, description: 'Accede a juegos online, descuentos exclusivos y juegos gratis mensuales con PlayStation Plus Essential.', tags: ['Suscripción', 'Online', 'Multijugador'], distributor: 'Sony', activation: 'PlayStation Store' },
  { id: 2, image: characterImg, title: 'God of War Ragnarök Digital', platform: 'PlayStation', originalPrice: 69, discountPrice: 55, discount: 20, description: 'Embárcate en una épica aventura mitológica con Kratos y Atreus en la conclusión de la saga nórdica.', tags: ['Acción', 'Aventura', 'Historia', 'Mitología'], distributor: 'Sony', activation: 'PlayStation Store' },
  { id: 3, image: playstationImg, title: 'PlayStation Plus Extra 3 Meses', platform: 'PlayStation', originalPrice: 25, discountPrice: 21, description: 'Disfruta de un catálogo de cientos de juegos descargables además de todos los beneficios de Essential.', tags: ['Suscripción', 'Catálogo', 'Juegos'], distributor: 'Sony', activation: 'PlayStation Store' },
  { id: 4, image: characterImg, title: 'Spider-Man 2 Digital Deluxe', platform: 'PlayStation', originalPrice: 79, discountPrice: 69, discount: 12, description: 'Experimenta la última aventura de Peter Parker y Miles Morales en la edición definitiva con contenido extra.', tags: ['Acción', 'Superhéroes', 'Mundo Abierto'], distributor: 'Sony', activation: 'PlayStation Store' },
  { id: 5, image: playstationImg, title: 'PlayStation Plus Premium Anual', platform: 'PlayStation', originalPrice: 159, discountPrice: 135, discount: 15, description: 'La experiencia completa con streaming de juegos, catálogo clásico y todas las ventajas de PlayStation Plus.', tags: ['Suscripción', 'Premium', 'Streaming', 'Clásicos'], distributor: 'Sony', activation: 'PlayStation Store' },
  
  // Xbox
  { id: 6, image: xboxImg, title: 'Xbox Game Pass Ultimate 1 Mes', platform: 'Xbox', originalPrice: 17, discountPrice: 14, discount: 15, description: 'Acceso ilimitado a cientos de juegos en consola, PC y nube con Xbox Game Pass Ultimate.', tags: ['Suscripción', 'Game Pass', 'Cloud Gaming'], distributor: 'Microsoft', activation: 'Xbox Live' },
  { id: 7, image: xboxImg, title: 'Xbox Live Gold 3 Meses', platform: 'Xbox', originalPrice: 25, discountPrice: 22, discount: 11, description: 'Juega online con amigos y accede a juegos gratis mensuales con Xbox Live Gold.', tags: ['Suscripción', 'Online', 'Multijugador'], distributor: 'Microsoft', activation: 'Xbox Live' },
  { id: 8, image: characterImg, title: 'Forza Horizon 5 Premium', platform: 'Xbox', originalPrice: 99, discountPrice: 79, discount: 20, description: 'La experiencia de carreras definitiva en México con todas las expansiones y contenido extra.', tags: ['Carreras', 'Mundo Abierto', 'Coches'], distributor: 'Microsoft', activation: 'Xbox Live' },
  { id: 9, image: xboxImg, title: 'Xbox Game Pass Core 12 Meses', platform: 'Xbox', originalPrice: 59, discountPrice: 50, discount: 15, description: 'El nivel esencial de Game Pass con juegos online y un catálogo selecto de títulos.', tags: ['Suscripción', 'Game Pass', 'Online'], distributor: 'Microsoft', activation: 'Xbox Live' },
  { id: 10, image: characterImg, title: 'Halo Infinite Campaign', platform: 'Xbox', originalPrice: 59, discountPrice: 47, discount: 20, description: 'Vive la épica campaña del Master Chief en el mundo más grande de Halo jamás creado.', tags: ['Acción', 'FPS', 'Sci-Fi', 'Campaña'], distributor: 'Microsoft', activation: 'Xbox Live' },
  
  // Steam
  { id: 11, image: steamImg, title: 'Steam Wallet $25 USD', platform: 'Steam', originalPrice: 25, discountPrice: 22.50, discount: 10, description: 'Añade fondos a tu cartera de Steam para comprar juegos, DLCs y artículos del mercado.', tags: ['Wallet', 'Gift Card', 'Saldo'], distributor: 'Valve', activation: 'Steam' },
  { id: 12, image: characterImg, title: 'Elden Ring', platform: 'Steam', originalPrice: 59, discountPrice: 41, discount: 30, description: 'El aclamado RPG de acción de FromSoftware en colaboración con George R.R. Martin. Explora las Tierras Intermedias.', tags: ['RPG', 'Acción', 'Mundo Abierto', 'Souls-like'], distributor: 'Bandai Namco', activation: 'Steam' },
  { id: 13, image: steamImg, title: 'Steam Wallet $50 USD', platform: 'Steam', originalPrice: 50, discountPrice: 45, discount: 10, description: 'Añade $50 USD a tu cartera de Steam para todas tus compras en la plataforma.', tags: ['Wallet', 'Gift Card', 'Saldo'], distributor: 'Valve', activation: 'Steam' },
  { id: 14, image: characterImg, title: 'Cyberpunk 2077 Ultimate', platform: 'Steam', originalPrice: 69, discountPrice: 48, discount: 30, description: 'Sumérgete en Night City con la edición definitiva que incluye la expansión Phantom Liberty.', tags: ['RPG', 'Acción', 'Cyberpunk', 'Mundo Abierto'], distributor: 'CD Projekt', activation: 'Steam' },
  { id: 15, image: steamImg, title: 'Steam Wallet $10 USD', platform: 'Steam', originalPrice: 10, discountPrice: 9, discount: 10, description: 'Recarga tu cartera de Steam con $10 USD para tus próximas compras.', tags: ['Wallet', 'Gift Card', 'Saldo'], distributor: 'Valve', activation: 'Steam' },
  
  // Mobile
  { id: 16, image: mobileImg, title: 'Free Fire 520 Diamantes', platform: 'Mobile', originalPrice: 9, discountPrice: 7.65, discount: 15, description: 'Recarga diamantes directamente a tu cuenta de Free Fire para comprar skins y pases.', tags: ['Diamantes', 'Recarga', 'Battle Royale'], distributor: 'Garena', activation: 'Free Fire ID' },
  { id: 17, image: mobileImg, title: 'Free Fire 1060 Diamantes', platform: 'Mobile', originalPrice: 17, discountPrice: 14, discount: 15, description: 'Paquete de 1060 diamantes para Free Fire. Obtén más contenido exclusivo en el juego.', tags: ['Diamantes', 'Recarga', 'Battle Royale'], distributor: 'Garena', activation: 'Free Fire ID' },
  { id: 18, image: mobileImg, title: 'Free Fire 2180 Diamantes', platform: 'Mobile', originalPrice: 29, discountPrice: 24.65, discount: 15, description: 'El mejor paquete de diamantes para Free Fire. Maximiza tu experiencia de juego.', tags: ['Diamantes', 'Recarga', 'Battle Royale'], distributor: 'Garena', activation: 'Free Fire ID' },
  { id: 19, image: mobileImg, title: 'PUBG Mobile 660 UC', platform: 'Mobile', originalPrice: 12, discountPrice: 10, discount: 15, description: 'Unknown Cash para PUBG Mobile. Desbloquea skins, pases de batalla y más.', tags: ['UC', 'Recarga', 'Battle Royale'], distributor: 'Krafton', activation: 'PUBG ID' },
  { id: 20, image: mobileImg, title: 'Roblox 800 Robux', platform: 'Mobile', originalPrice: 14, discountPrice: 12.60, discount: 10, description: 'Robux para usar en millones de experiencias de Roblox. Personaliza tu avatar y más.', tags: ['Robux', 'Recarga', 'Gaming'], distributor: 'Roblox Corp', activation: 'Roblox' },
];

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return allProducts
    .filter(p => p.platform === product.platform && p.id !== product.id)
    .slice(0, limit);
};

export const getProductsByPlatform = (platform: string): Product[] => {
  return allProducts.filter(p => p.platform === platform);
};
