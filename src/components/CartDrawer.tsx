import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md bg-card border-border flex flex-col p-4 sm:p-6">
        <SheetHeader className="border-b border-border pb-3 sm:pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg sm:text-xl font-bold text-foreground">Carrito</SheetTitle>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-3 sm:py-4 -mx-1 px-1">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <p className="text-sm">Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 p-2.5 sm:p-3 bg-muted/30 rounded-lg">
                  {/* Product Image */}
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-border flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    <h3 className="text-xs sm:text-sm font-medium text-foreground line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neon-green font-bold mt-0.5 sm:mt-1">
                      $ {item.price.toFixed(2)} USD
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 sm:p-1.5 text-muted-foreground hover:text-foreground transition-colors active:bg-muted"
                        >
                          <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                        <span className="px-2 sm:px-3 text-xs sm:text-sm font-medium text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 sm:p-1.5 text-neon-green hover:text-neon-green/80 transition-colors active:bg-muted"
                        >
                          <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-muted-foreground hover:text-destructive transition-colors ml-auto active:text-destructive"
                      >
                        <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
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
          <div className="border-t border-border pt-3 sm:pt-4 mt-auto">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <span className="text-sm text-muted-foreground">Total:</span>
              <span className="text-lg sm:text-xl font-bold text-neon-green">
                $ {totalPrice.toFixed(2)} USD
              </span>
            </div>
            <Button className="w-full btn-gaming text-center py-2.5 sm:py-3 text-sm sm:text-lg h-auto">
              Finalizar
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
