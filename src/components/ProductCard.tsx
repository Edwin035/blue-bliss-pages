interface ProductCardProps {
  image: string;
  title: string;
  platform: string;
  originalPrice: number;
  discountPrice: number;
  discount?: number;
}

const ProductCard = ({ image, title, platform, originalPrice, discountPrice, discount }: ProductCardProps) => {
  return (
    <div className="card-gaming group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {discount && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
            -{discount}%
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs text-primary font-medium uppercase tracking-wider">
          {platform}
        </span>
        <h3 className="text-sm font-semibold text-foreground mt-1 line-clamp-2 min-h-[40px]">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 mt-3">
          {discount && (
            <span className="text-xs text-muted-foreground line-through">
              ${originalPrice.toLocaleString()} MXN
            </span>
          )}
          <span className="text-lg font-bold text-primary">
            ${discountPrice.toLocaleString()} MXN
          </span>
        </div>

        <button className="w-full mt-4 btn-gaming text-center">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
