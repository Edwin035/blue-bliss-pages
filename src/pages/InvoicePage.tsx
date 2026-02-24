import { useParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Home, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById } from '@/data/products';
import { useAuth } from '@/contexts/AuthContext';

const InvoicePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const product = getProductById(Number(id));

  if (!isAuthenticated || !product) {
    navigate('/');
    return null;
  }

  const subtotal = product.discountPrice;
  const commission = 0;
  const total = subtotal + commission;
  const orderNumber = `ORD-${Date.now().toString(36).toUpperCase()}`;
  const orderDate = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Success Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            ¡Pago Confirmado!
          </h1>
          <p className="text-muted-foreground">
            Tu orden ha sido procesada exitosamente.
          </p>
        </div>

        {/* Invoice Card */}
        <div className="card-gaming p-6 md:p-8 mb-6 animate-fade-in">
          {/* Invoice Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">Factura</h2>
            </div>
            <span className="text-sm text-muted-foreground font-mono">{orderNumber}</span>
          </div>

          {/* Order Date */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">Fecha</p>
            <p className="font-medium text-foreground">{orderDate}</p>
          </div>

          {/* Product Info */}
          <div className="flex gap-4 mb-6 pb-6 border-b border-border">
            <div className="w-20 h-20 rounded-lg overflow-hidden border border-border flex-shrink-0">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">{product.title}</h3>
              <p className="text-sm text-muted-foreground">{product.platform}</p>
              {product.activation && (
                <p className="text-sm text-primary">{product.activation}</p>
              )}
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">${subtotal.toFixed(2)} USD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Comisión</span>
              <span className="text-foreground">${commission.toFixed(2)} USD</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-border">
              <span className="font-bold text-foreground">Total</span>
              <span className="text-xl font-bold text-neon-green">${total.toFixed(2)} USD</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Método de pago</p>
            <p className="font-semibold text-foreground">Mercado Pago</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in">
          <Link
            to="/"
            className="flex-1 btn-gaming text-center py-3 inline-flex items-center justify-center gap-2"
          >
            <Home className="h-4 w-4" />
            Volver al Inicio
          </Link>
          <Link
            to="/historial"
            className="flex-1 py-3 rounded-lg border border-border text-foreground font-semibold text-center inline-flex items-center justify-center gap-2 hover:bg-muted transition-colors"
          >
            <Download className="h-4 w-4" />
            Ver Historial
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InvoicePage;
