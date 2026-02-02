import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md bg-card border-border flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-bold text-foreground">Carrito</SheetTitle>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-muted/30 rounded-lg">
                  {/* Product Image */}
                  <div className="w-24 h-24 rounded-lg overflow-hidden border border-border flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-foreground line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neon-green font-bold mt-1">
                      $ {item.price.toFixed(2)} USD
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-3 text-sm font-medium text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-neon-green hover:text-neon-green/80 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-muted-foreground hover:text-destructive transition-colors ml-auto"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border pt-4 mt-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted-foreground">Total:</span>
              <span className="text-xl font-bold text-neon-green">
                $ {totalPrice.toFixed(2)} USD
              </span>
            </div>
            <Button className="w-full btn-gaming text-center py-3 text-lg h-auto">
              Finalizar
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
