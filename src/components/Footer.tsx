import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>20 Rue Leblanc</p>
                  <p>75015 Paris, France</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <p>01 56 09 20 00</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <p>contact@hegp.fr</p>
              </div>
            </div>
          </div>

          {/* Services avec numéros */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services & Numéros</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Cardiologie</span>
                <span className="font-mono">01 56 09 21 01</span>
              </div>
              <div className="flex justify-between">
                <span>Radiologie</span>
                <span className="font-mono">01 56 09 22 02</span>
              </div>
              <div className="flex justify-between">
                <span>Urgences</span>
                <span className="font-mono">01 56 09 23 03</span>
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-2 text-emergency">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Urgences 24h/24</span>
                </div>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horaires</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-medium">Consultations</p>
                <p>Lun-Ven: 8h00 - 18h00</p>
                <p>Sam: 8h00 - 12h00</p>
              </div>
              <div>
                <p className="font-medium">Urgences</p>
                <p>24h/24 - 7j/7</p>
              </div>
              <div>
                <p className="font-medium">Standard</p>
                <p>Lun-Ven: 8h00 - 17h00</p>
              </div>
            </div>
          </div>

          {/* Formulaire contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Rapide</h3>
            <form className="space-y-3">
              <Input 
                placeholder="Votre nom" 
                className="bg-primary-foreground text-foreground"
              />
              <Input 
                type="email" 
                placeholder="Votre email" 
                className="bg-primary-foreground text-foreground"
              />
              <Textarea 
                placeholder="Votre message" 
                rows={3}
                className="bg-primary-foreground text-foreground resize-none"
              />
              <Button variant="secondary" size="sm" className="w-full">
                Envoyer
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span>© 2024 Hôpital Européen Georges Pompidou</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Données personnelles
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;