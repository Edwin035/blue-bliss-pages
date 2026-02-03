import { Copy, Gift, Package, Calendar, User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  image: string;
  pins?: string[];
}

interface Order {
  id: string;
  date: string;
  status: 'completed' | 'pending' | 'cancelled';
  total: number;
  items: OrderItem[];
  playerIds?: string[];
}

interface OrderDetailModalProps {
  order: Order | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const statusColors = {
  completed: 'bg-neon-green/20 text-neon-green border-neon-green/30',
  pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  cancelled: 'bg-destructive/20 text-destructive border-destructive/30',
};

const statusLabels = {
  completed: 'Completado',
  pending: 'Pendiente',
  cancelled: 'Cancelado',
};

const OrderDetailModal = ({ order, open, onOpenChange }: OrderDetailModalProps) => {
  if (!order) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado",
      description: "PIN copiado al portapapeles",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            Detalles de la Compra
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Order Info */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border">
            <div>
              <p className="font-semibold">{order.id}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(order.date)}
              </p>
            </div>
            <Badge className={statusColors[order.status]}>
              {statusLabels[order.status]}
            </Badge>
          </div>

          {/* Items */}
          <div className="space-y-3">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Cantidad: {item.quantity}</p>
                </div>
                <span className="text-sm font-medium text-neon-green">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Player IDs */}
          {order.playerIds && order.playerIds.length > 0 && (
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <User className="h-4 w-4" />
                IDs de Jugador:
              </p>
              <div className="flex flex-wrap gap-2">
                {order.playerIds.map((id, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {id}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* PIN Codes */}
          {order.items.some(item => item.pins && item.pins.length > 0) && (
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                <Gift className="h-4 w-4 text-yellow-500" />
                Códigos PIN Generados:
              </p>
              <div className="space-y-2">
                {order.items.map((item, itemIndex) =>
                  item.pins?.map((pin, pinIndex) => (
                    <div
                      key={`${itemIndex}-${pinIndex}`}
                      className="flex items-center justify-between p-3 bg-card border border-border rounded-lg"
                    >
                      <code className="font-mono text-sm sm:text-base font-semibold">
                        {pin}
                      </code>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(pin)}
                        className="flex-shrink-0"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copiar PIN
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Total */}
          <div className="pt-4 border-t border-border flex justify-between items-center">
            <span className="text-muted-foreground">Total:</span>
            <span className="text-xl font-bold text-neon-green">
              ${order.total.toFixed(2)}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailModal;
