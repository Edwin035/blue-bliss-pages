import { useState } from 'react';
import { Package, Calendar, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import OrderDetailModal from '@/components/OrderDetailModal';

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

const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'completed',
    total: 59.99,
    playerIds: ['123456789', '987654321'],
    items: [
      { 
        name: 'PlayStation Plus 12 Meses', 
        quantity: 1, 
        price: 59.99, 
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=100&h=100&fit=crop',
        pins: ['B115-545B-9351-WAZ2', 'C226-656C-1462-XBZ3']
      }
    ]
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    status: 'completed',
    total: 25.00,
    playerIds: ['555123456'],
    items: [
      { 
        name: 'Steam Gift Card $25', 
        quantity: 1, 
        price: 25.00, 
        image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=100&h=100&fit=crop',
        pins: ['STEAM-XXXX-YYYY-ZZZZ']
      }
    ]
  },
  {
    id: 'ORD-003',
    date: '2024-01-05',
    status: 'pending',
    total: 10.00,
    items: [
      { 
        name: 'Free Fire 1000 Diamantes', 
        quantity: 1, 
        price: 10.00, 
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop'
      }
    ]
  },
];

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

const OrderHistoryPage = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleOrder = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const openOrderDetail = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
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
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-border rounded-lg overflow-hidden"
                    >
                      {/* Order Header */}
                      <button
                        onClick={() => toggleOrder(order.id)}
                        className="w-full p-3 sm:p-4 flex items-center justify-between bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                          <div className="text-left min-w-0">
                            <p className="font-medium text-sm sm:text-base truncate">{order.id}</p>
                            <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3 flex-shrink-0" />
                              <span className="truncate">{formatDate(order.date)}</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                          <Badge className={`${statusColors[order.status]} text-[10px] sm:text-xs`}>
                            {statusLabels[order.status]}
                          </Badge>
                          <span className="font-bold text-sm sm:text-base text-neon-green hidden sm:block">
                            ${order.total.toFixed(2)}
                          </span>
                          {expandedOrder === order.id ? (
                            <ChevronUp className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </button>
                      
                      {/* Order Details */}
                      {expandedOrder === order.id && (
                        <div className="p-3 sm:p-4 border-t border-border bg-background/50">
                          <div className="space-y-3">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover flex-shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium truncate">{item.name}</p>
                                  <p className="text-xs text-muted-foreground">
                                    Cantidad: {item.quantity}
                                  </p>
                                </div>
                                <span className="text-sm font-medium text-neon-green flex-shrink-0">
                                  ${item.price.toFixed(2)}
                                </span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                            <div className="sm:hidden">
                              <span className="text-sm text-muted-foreground">Total: </span>
                              <span className="font-bold text-neon-green">${order.total.toFixed(2)}</span>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full sm:w-auto"
                              onClick={() => openOrderDetail(order)}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              Ver Detalles
                            </Button>
                            <span className="font-bold text-lg text-neon-green hidden sm:block">
                              Total: ${order.total.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <OrderDetailModal 
        order={selectedOrder}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default OrderHistoryPage;
