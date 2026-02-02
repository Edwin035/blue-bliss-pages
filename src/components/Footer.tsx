import { Gamepad2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    productos: ['PlayStation', 'Xbox', 'Steam', 'Nintendo', 'Mobile Games'],
    ayuda: ['FAQ', 'Contacto', 'Envíos', 'Devoluciones', 'Términos'],
    empresa: ['Nosotros', 'Blog', 'Carreras', 'Prensa', 'Afiliados'],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-display font-bold gradient-text">
                GAME ZONE
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Tu tienda de confianza para códigos de juegos y suscripciones digitales.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>soporte@gamezone.mx</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Productos</h4>
            <ul className="space-y-2">
              {footerLinks.productos.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Ayuda</h4>
            <ul className="space-y-2">
              {footerLinks.ayuda.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Game Zone. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">Métodos de pago:</span>
              <div className="flex items-center gap-2">
                {['Visa', 'MC', 'AMEX', 'PayPal', 'OXXO'].map((method) => (
                  <span key={method} className="px-2 py-1 text-xs bg-muted rounded text-muted-foreground">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
