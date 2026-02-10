import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductSection, { sampleProducts } from '@/components/ProductSection';
import PromoBanner from '@/components/PromoBanner';
import PartnerBanner from '@/components/PartnerBanner';
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
            image={'https://www.parents.com/thmb/tSML3POrp_0tDY4mO5y-HnVUqaQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Video20Games-fa6d2b8bac9c47d1b2144928e4713f38.jpg'}
          />
        </div>
      </section>

      {/* Mobile Games Section */}
      <ProductSection 
        title="Free Fire"
        subtitle="+10% de bono en diamantes"
        products={sampleProducts.mobile}
      />

   

      {/* Promo Banner 2 */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <PromoBanner
            title="GAME PASS ULTIMATE"
            subtitle="Acceso ilimitado a cientos de juegos"
            discount="6% OFF"
            image={'https://t4.ftcdn.net/jpg/03/64/29/09/360_F_364290929_al9CUzJQooK5fJ7dekJ2X1U88gvamAmC.jpg'}
            reversed
          />
        </div>
      </section>

      {/* Partner Banner */}
      <PartnerBanner />

      <Footer />
    </div>
  );
};

export default Index;
