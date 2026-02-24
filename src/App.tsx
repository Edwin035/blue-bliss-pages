import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ScrollToTop from "./components/ScrollToTop";
import AuthDialog from "./components/AuthDialog";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CatalogPage from "./pages/CatalogPage";
import InvoicePage from "./pages/InvoicePage";
import ProfilePage from "./pages/ProfilePage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import PartnerPage from "./pages/PartnerPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AuthDialog />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/producto/:id" element={<ProductPage />} />
            <Route path="/checkout/:id" element={<CheckoutPage />} />
            <Route path="/factura/:id" element={<InvoicePage />} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/cambiar-contrasena" element={<ChangePasswordPage />} />
            <Route path="/historial" element={<OrderHistoryPage />} />
            <Route path="/aliados" element={<PartnerPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
