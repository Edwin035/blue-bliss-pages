import partnerImg from '@/assets/partner-character.png';

const PartnerBanner = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-destructive via-destructive/90 to-destructive/80 min-h-[200px] md:min-h-[260px]">
          {/* Diagonal stripes overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
            }}
          />

          {/* Top & bottom accent bars */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-secondary" />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-secondary" />

          <div className="relative flex flex-col md:flex-row items-center h-full">
            {/* Character image */}
            <div className="flex-1 flex justify-center items-end pt-6 md:pt-0">
              <img
                src={partnerImg}
                alt="Partner character"
                className="h-40 md:h-56 lg:h-64 object-contain drop-shadow-2xl"
              />
            </div>

            {/* Text content */}
            <div className="flex-1 flex flex-col items-center md:items-start justify-center p-6 md:p-10 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white italic mb-4 leading-tight">
                Vuélvete una Leyenda,
                <br />
                sé nuestro partner
              </h3>
              <button className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-secondary/80 transition-all duration-300 shadow-lg">
                Comenzar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBanner;
