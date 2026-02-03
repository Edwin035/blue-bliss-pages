import heroImage from '@/assets/hero-gaming.jpg';
import { ChevronRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const HeroSection = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthOpen } = useAuth();

  const handleBuyClick = () => {
    if (isAuthenticated) {
      navigate('/catalogo');
    } else {
      setIsAuthOpen(true);
    }
  };

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 flex flex-col justify-center min-h-[500px] md:min-h-[600px]">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6 animate-glow">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Oferta Especial</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight">
            <span className="gradient-text">NIVEL FINAL</span>
            <br />
            <span className="text-foreground">Máximo descuento</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Hasta <span className="text-primary font-bold text-3xl">15% OFF</span> en todos tus juegos favoritos
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={handleBuyClick} className="btn-gaming flex items-center gap-2">
              Comprar Ahora
              <ChevronRight className="h-4 w-4" />
            </button>
            <button 
              onClick={() => navigate('/catalogo')}
              className="px-6 py-2 rounded-lg font-semibold text-sm uppercase tracking-wider border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Ver Catálogo
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
