import { User, Package, Lock, LogOut, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const UserMenu = () => {
  const { isAuthenticated, setIsAuthOpen, logout } = useAuth();

  if (!isAuthenticated) {
    return (
      <button 
        onClick={() => setIsAuthOpen(true)}
        className="p-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <User className="h-5 w-5" />
      </button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1.5 px-2">
          <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground hidden sm:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link to="/perfil" className="flex items-center gap-2 cursor-pointer">
            <User className="h-4 w-4" />
            Mi Perfil
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/historial" className="flex items-center gap-2 cursor-pointer">
            <Package className="h-4 w-4" />
            Historial de Compras
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/cambiar-contrasena" className="flex items-center gap-2 cursor-pointer">
            <Lock className="h-4 w-4" />
            Cambiar Contraseña
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={logout}
          className="flex items-center gap-2 cursor-pointer text-destructive focus:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          Cerrar Sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
