import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  service: string;
  phoneNumber: string;
  variant?: "cardiology" | "radiology" | "emergency";
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  service, 
  phoneNumber,
  variant = "cardiology" 
}: ServiceCardProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAccess = () => {
    if (user && user.service === service) {
      navigate(`/${service}`);
    } else if (user && user.service !== service) {
      alert(`Accès refusé. Vous n'êtes pas autorisé à accéder au service ${title}.`);
    } else {
      alert("Veuillez vous connecter pour accéder à ce service.");
    }
  };

  const getCardVariant = () => {
    switch (variant) {
      case "cardiology":
        return "border-cardiology/20 hover:border-cardiology/50";
      case "radiology":
        return "border-radiology/20 hover:border-radiology/50";
      case "emergency":
        return "border-emergency-service/20 hover:border-emergency-service/50";
      default:
        return "border-primary/20 hover:border-primary/50";
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case "cardiology":
        return "text-cardiology";
      case "radiology":
        return "text-radiology";
      case "emergency":
        return "text-emergency-service";
      default:
        return "text-primary";
    }
  };

  return (
    <Card className={`transition-all duration-300 hover:shadow-card-hover transform hover:scale-105 ${getCardVariant()}`}>
      <CardHeader className="text-center">
        <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary-light to-primary/10 flex items-center justify-center mb-4`}>
          <Icon className={`h-8 w-8 ${getIconColor()}`} />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="text-sm text-muted-foreground">
          <p className="font-medium">Numéro direct :</p>
          <p className="text-primary font-mono">{phoneNumber}</p>
        </div>
        <Button 
          variant={variant} 
          className="w-full"
          onClick={handleAccess}
        >
          Accéder au service
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;