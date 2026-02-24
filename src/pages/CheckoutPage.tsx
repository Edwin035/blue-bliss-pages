import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Lock, CreditCard, Loader2 } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById } from '@/data/products';
import { useAuth } from '@/contexts/AuthContext';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

const CheckoutPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [selectedMethod, setSelectedMethod] = useState<string>('mercadopago');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const product = getProductById(Number(id));

  if (!isAuthenticated) {
    navigate('/');
    return null;
  }

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

  const subtotal = product.discountPrice;
  const commission = 0;
  const total = subtotal + commission;

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate(`/factura/${id}`);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <Link
          to={`/producto/${product.id}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Volver al producto</span>
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
          Completa tu pago
        </h1>
        <p className="text-muted-foreground mb-8">
          Método: Mercado Pago · Cantidad: 1 · Total: <span className="font-semibold text-foreground">${total.toFixed(2)} USD</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Payment Methods */}
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden border border-border">
              <div className="bg-primary px-6 py-3">
                <h2 className="text-primary-foreground font-bold text-lg">Métodos de Pago</h2>
              </div>
              <div className="p-6 space-y-3">
                {/* Mercado Pago */}
                <button
                  onClick={() => setSelectedMethod('mercadopago')}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-colors text-left ${
                    selectedMethod === 'mercadopago'
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-muted-foreground/30'
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#009ee3] flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Mercado Pago</p>
                    <p className="text-sm text-muted-foreground">Paga de forma segura con Mercado Pago</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="lg:col-span-1">
            <div className="card-gaming p-6 sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">Resumen de Compra</h2>

              <div className="space-y-4">
                <div className="pb-4 border-b border-border">
                  <p className="text-sm text-muted-foreground">Producto</p>
                  <p className="font-semibold text-foreground">{product.title}</p>
                </div>

                <div className="pb-4 border-b border-border">
                  <p className="text-sm text-muted-foreground">Plataforma</p>
                  <p className="font-semibold text-foreground">{product.platform}</p>
                </div>

                <div className="pb-4 border-b border-border">
                  <p className="text-sm text-muted-foreground">SubTotal</p>
                  <p className="text-lg font-bold text-foreground">${subtotal.toFixed(2)} USD</p>
                </div>

                <div className="pb-4 border-b border-border">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold text-neon-green">${total.toFixed(2)} USD</p>
                </div>

                <div className="bg-muted/50 rounded-lg p-3 text-sm text-muted-foreground">
                  Al presionar <span className="font-semibold text-foreground">Confirmar Pago</span>, se creará la orden y se abrirá Mercado Pago para completar el pago.
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4" />
                  <span>Pago 100% seguro y encriptado. Tus datos están protegidos.</span>
                </div>

                <button
                  onClick={handleConfirmPayment}
                  className="w-full btn-gaming text-center py-3 text-lg"
                >
                  Confirmar Pago
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Loading Modal */}
      <Dialog open={isProcessing}>
        <DialogContent className="sm:max-w-md text-center" onPointerDownOutside={(e) => e.preventDefault()}>
          <DialogTitle className="sr-only">Procesando pago</DialogTitle>
          <div className="flex flex-col items-center gap-5 py-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground">Procesando tu pago</h3>
              <p className="text-sm text-muted-foreground">
                Estamos confirmando tu transacción con Mercado Pago...
              </p>
            </div>
            <div className="w-full">
              <Progress value={Math.min(progress, 100)} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {Math.min(Math.round(progress), 100)}% completado
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
