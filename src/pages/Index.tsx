import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductSection, { sampleProducts } from '@/components/ProductSection';
import PromoBanner from '@/components/PromoBanner';
import FeaturesBar from '@/components/FeaturesBar';
import Footer from '@/components/Footer';
import xboxImg from '@/assets/xbox.jpg';
import characterImg from '@/assets/game-character.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesBar />
      
      {/* PlayStation Section */}
      <ProductSection 
        title="PlayStation"
        subtitle="Disfruta al máximo tus juegos favoritos"
        products={sampleProducts.playstation}
      />

      {/* Promo Banner 1 */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <PromoBanner
            title="EXPLORA NUEVOS MUNDOS"
            subtitle="Descubre las mejores ofertas en juegos de mundo abierto"
            discount="40% OFF"
            image={characterImg}
          />
        </div>
      </section>

      {/* Mobile Games Section */}
      <ProductSection 
        title="Free Fire & Mobile"
        subtitle="+10% de bono en diamantes"
        products={sampleProducts.mobile}
      />

      {/* Xbox Section */}
      <ProductSection 
        title="Xbox Game Pass"
        subtitle="Códigos y juegos originales"
        products={sampleProducts.xbox}
      />

      {/* Promo Banner 2 */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <PromoBanner
            title="GAME PASS ULTIMATE"
            subtitle="Acceso ilimitado a cientos de juegos"
            discount="6% OFF"
            image={xboxImg}
            reversed
          />
        </div>
      </section>

      {/* Steam Section */}
      <ProductSection 
        title="Juegos de Steam"
        subtitle="Los mejores títulos de PC"
        products={sampleProducts.steam}
      />

      {/* Promotions Section */}
      <section className="py-16 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title gradient-text mb-4">PROMOCIONES MÁS RECIENTES</h2>
          <p className="text-muted-foreground mb-12">Ofertas exclusivas y promociones limitadas</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Game Pass', discount: '15%', desc: 'En suscripciones anuales' },
              { title: 'Steam Wallet', discount: '10%', desc: 'En todas las denominaciones' },
              { title: 'PlayStation Plus', discount: '20%', desc: 'Por tiempo limitado' },
            ].map((promo, index) => (
              <div key={index} className="card-gaming p-6 text-center">
                <span className="text-4xl font-display font-bold gradient-text">{promo.discount}</span>
                <h3 className="text-lg font-bold text-foreground mt-2">{promo.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{promo.desc}</p>
                <button className="btn-gaming mt-4">Aprovechar</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
