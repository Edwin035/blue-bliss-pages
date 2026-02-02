import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductById, getRelatedProducts } from '@/data/products';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(Number(id));
  const relatedProducts = product ? getRelatedProducts(product, 4) : [];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Producto no encontrado</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Volver al inicio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Volver a productos</span>
        </Link>

        {/* Product Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          {product.title}
        </h1>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Main Image */}
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-xl overflow-hidden border border-border">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {product.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Description Section */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Muestra a tus enemigos quién manda en el juego
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Estos productos solo son válidos para su redención en cuentas compatibles. 
                  Además de tu habilidad, es importante tener el mejor equipo para enfrentarte cara a cara con tus rivales.
                </p>
                {product.description && <p>{product.description}</p>}
                <p>¡Aprovecha esta oportunidad y lleva tu equipo a la victoria!</p>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase Info */}
          <div className="lg:col-span-1">
            <div className="card-gaming p-6 sticky top-24">
              {/* Thumbnail */}
              <div className="aspect-video rounded-lg overflow-hidden border border-border mb-6">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Price Section */}
              <div className="flex items-center gap-3 mb-4">
                {product.discount && (
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded">
                    -{product.discount}%
                  </span>
                )}
                <div className="flex flex-col">
                  {product.discount && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)} USD
                    </span>
                  )}
                  <span className="text-2xl font-bold text-neon-green">
                    ${product.discountPrice.toFixed(2)} USD
                  </span>
                </div>
              </div>

              {/* Buy Button */}
              <button className="w-full btn-gaming text-center py-3 text-lg mb-6">
                COMPRAR
              </button>

              {/* Product Details */}
              <div className="space-y-4 border-t border-border pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Plataforma</span>
                  <span className="text-foreground font-medium">{product.platform}</span>
                </div>
                {product.activation && (
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Activación</span>
                    <span className="text-primary font-medium">{product.activation}</span>
                  </div>
                )}
                {product.distributor && (
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Distribuidor</span>
                    <span className="text-primary font-medium">{product.distributor}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 border-t border-border">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8">
              Ver también
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} {...relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
