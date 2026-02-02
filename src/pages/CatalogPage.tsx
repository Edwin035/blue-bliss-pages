import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { allProducts } from '@/data/products';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const platforms = ['Todos', 'PlayStation', 'Xbox', 'Steam', 'Mobile'];

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPlatform = searchParams.get('platform') || 'Todos';
  
  const [selectedPlatform, setSelectedPlatform] = useState(initialPlatform);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesPlatform = selectedPlatform === 'Todos' || product.platform === selectedPlatform;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.platform.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesPlatform && matchesSearch;
    });
  }, [selectedPlatform, searchQuery]);

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
    if (platform === 'Todos') {
      searchParams.delete('platform');
    } else {
      searchParams.set('platform', platform);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedPlatform('Todos');
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
            Catálogo
          </h1>
          <p className="text-muted-foreground">
            Explora nuestra colección de {allProducts.length} productos digitales
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
          
          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`md:w-64 shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="card-gaming p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Plataforma</h3>
                {(selectedPlatform !== 'Todos' || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-primary hover:text-secondary flex items-center gap-1"
                  >
                    <X className="h-3 w-3" />
                    Limpiar
                  </button>
                )}
              </div>
              
              <div className="space-y-2">
                {platforms.map((platform) => (
                  <button
                    key={platform}
                    onClick={() => handlePlatformChange(platform)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                      selectedPlatform === platform
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-card-hover hover:text-foreground'
                    }`}
                  >
                    {platform}
                    <span className="float-right opacity-60">
                      {platform === 'Todos' 
                        ? allProducts.length 
                        : allProducts.filter(p => p.platform === platform).length
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Mostrando <span className="text-foreground font-medium">{filteredProducts.length}</span> productos
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Intenta con otros filtros o términos de búsqueda
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Limpiar filtros
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CatalogPage;
