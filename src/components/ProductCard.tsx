import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  platform: string;
  originalPrice: number;
  discountPrice: number;
  discount?: number;
}

const ProductCard = ({ id, image, title, platform, originalPrice, discountPrice, discount }: ProductCardProps) => {
  return (
    <Link to={`/producto/${id}`} className="block h-full">
      <div className="card-gaming group h-full flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {discount && (
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold rounded">
              -{discount}%
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-2.5 sm:p-4 flex flex-col flex-grow">
          <span className="text-[10px] sm:text-xs text-primary font-medium uppercase tracking-wider">
            {platform}
          </span>
          <h3 className="text-xs sm:text-sm font-semibold text-foreground mt-0.5 sm:mt-1 line-clamp-2 min-h-[32px] sm:min-h-[40px]">
            {title}
          </h3>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 mt-2 sm:mt-3">
            {discount && (
              <span className="text-[10px] sm:text-xs text-muted-foreground line-through">
                ${originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-sm sm:text-lg font-bold text-neon-green">
              ${discountPrice.toLocaleString()} USD
            </span>
          </div>

          <button className="w-full mt-auto pt-2.5 sm:pt-4 py-1.5 sm:py-2 text-xs sm:text-sm btn-gaming text-center">
            Comprar
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
