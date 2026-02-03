import { useState } from 'react';
import { Package, ChevronUp, ChevronDown, Copy, Gift } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import { toast } from 'sonner';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Order {
  id: string;
  productName: string;
  productCategory: string;
  date: string;
  time: string;
  status: 'completed' | 'pending' | 'cancelled';
  total: number;
  playerIds?: string[];
  pinCodes?: string[];
}

const mockOrders: Order[] = [
  {
    id: 'ORD123456789',
    productName: 'Free Fire Diamantes',
    productCategory: 'Recarga de Juego',
    date: '12/01/2026',
    time: '14:30',
    status: 'completed',
    total: 15.00,
    playerIds: ['123456789', '987654321'],
    pinCodes: ['B115-545B-9351-WAZ2', 'C226-656C-1462-XBZ3']
  },
  {
    id: 'ORD987654321',
    productName: 'PlayStation Plus 12 Meses',
    productCategory: 'Suscripción',
    date: '10/01/2026',
    time: '09:15',
    status: 'completed',
    total: 59.99,
    pinCodes: ['PS12-ABCD-EFGH-1234']
  },
  {
    id: 'ORD456789123',
    productName: 'Steam Gift Card $25',
    productCategory: 'Tarjeta de Regalo',
    date: '05/01/2026',
    time: '18:45',
    status: 'pending',
    total: 25.00,
  },
];

const statusColors = {
  completed: 'bg-neon-green/20 text-neon-green border-neon-green/30',
  pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  cancelled: 'bg-destructive/20 text-destructive border-destructive/30',
};

const statusLabels = {
  completed: 'COMPLETADO',
  pending: 'PENDIENTE',
  cancelled: 'CANCELADO',
};

const OrderHistoryPage = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const toggleOrder = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('PIN copiado al portapapeles');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl font-display font-bold mb-6">Mi Cuenta</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <ProfileSidebar activePage="orders" />
          
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-6 flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Historial de Compras
              </h2>
              
              {mockOrders.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No tienes compras aún</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-primary hover:bg-primary">
                        <TableHead className="text-primary-foreground font-semibold">Pedido</TableHead>
                        <TableHead className="text-primary-foreground font-semibold">Producto</TableHead>
                        <TableHead className="text-primary-foreground font-semibold">Fecha</TableHead>
                        <TableHead className="text-primary-foreground font-semibold">Estado</TableHead>
                        <TableHead className="text-primary-foreground font-semibold text-right">Total</TableHead>
                        <TableHead className="text-primary-foreground font-semibold text-right">Detalles</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockOrders.map((order) => (
                        <>
                          <TableRow key={order.id} className="border-b border-border">
                            <TableCell className="font-medium">#{order.id}</TableCell>
                            <TableCell>
                              <div>
                                <p className="font-medium">{order.productName}</p>
                                <p className="text-sm text-muted-foreground">{order.productCategory}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <p>{order.date}</p>
                                <p className="text-sm text-muted-foreground">{order.time}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={`${statusColors[order.status]} text-xs`}>
                                {statusLabels[order.status]}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right font-bold">
                              {order.total.toFixed(2)} USDT
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleOrder(order.id)}
                                className="hover:bg-muted"
                              >
                                {expandedOrder === order.id ? (
                                  <ChevronUp className="h-4 w-4" />
                                ) : (
                                  <ChevronDown className="h-4 w-4" />
                                )}
                              </Button>
                            </TableCell>
                          </TableRow>
                          
                          {expandedOrder === order.id && (
                            <TableRow key={`${order.id}-details`}>
                              <TableCell colSpan={6} className="bg-muted/30 p-4">
                                <div className="space-y-4">
                                  {order.playerIds && order.playerIds.length > 0 && (
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-2">IDs de Jugador:</p>
                                      <div className="flex flex-wrap gap-2">
                                        {order.playerIds.map((id, index) => (
                                          <span
                                            key={index}
                                            className="px-3 py-1.5 bg-background border border-border rounded-md text-sm"
                                          >
                                            {id}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  
                                  {order.pinCodes && order.pinCodes.length > 0 && (
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                                        <Gift className="h-4 w-4 text-primary" />
                                        Códigos PIN Generados:
                                      </p>
                                      <div className="space-y-2">
                                        {order.pinCodes.map((pin, index) => (
                                          <div
                                            key={index}
                                            className="flex items-center justify-between bg-background border border-border rounded-lg p-3"
                                          >
                                            <span className="font-mono text-base sm:text-lg font-medium">
                                              {pin}
                                            </span>
                                            <Button
                                              variant="outline"
                                              size="sm"
                                              onClick={() => copyToClipboard(pin)}
                                              className="flex items-center gap-2"
                                            >
                                              <Copy className="h-4 w-4" />
                                              Copiar PIN
                                            </Button>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  
                                  {!order.pinCodes && !order.playerIds && (
                                    <p className="text-sm text-muted-foreground">
                                      Los detalles estarán disponibles cuando se complete el pedido.
                                    </p>
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          )}
                        </>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderHistoryPage;
