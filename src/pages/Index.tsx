import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Zap, Phone, MapPin, Users, Award, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import hospitalHero from "@/assets/hospital-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={hospitalHero} 
            alt="Hôpital Georges Pompidou" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
              Hôpital Européen Georges Pompidou
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in">
              Centre hospitalier universitaire d'excellence, pionnier dans l'innovation médicale 
              et la qualité des soins. Votre santé est notre priorité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button variant="hero" size="lg">
                Prendre rendez-vous
              </Button>
              <Button variant="secondary" size="lg">
                Nos services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-service">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nos Services d'Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos trois services spécialisés équipés des dernières technologies 
              et dirigés par des équipes médicales expertes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title="Cardiologie"
              description="Service de cardiologie interventionnelle et de rythmologie avec plateau technique de pointe"
              icon={Heart}
              service="cardiologie"
              phoneNumber="01 56 09 21 01"
              variant="cardiology"
            />
            <ServiceCard
              title="Radiologie"
              description="Imagerie médicale avancée : IRM, Scanner, Échographie avec reconstruction 3D"
              icon={Brain}
              service="radiologie"
              phoneNumber="01 56 09 22 02"
              variant="radiology"
            />
            <ServiceCard
              title="Urgences"
              description="Service d'urgences 24h/24 avec équipe de réanimation et SMUR"
              icon={Zap}
              service="urgences"
              phoneNumber="01 56 09 23 03"
              variant="emergency"
            />
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                L'Excellence au Service de Votre Santé
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Depuis notre création, nous nous engageons à offrir des soins de qualité exceptionnelle 
                grâce à nos équipes dédiées, nos technologies de pointe et notre approche centrée sur le patient.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">1000+</h3>
                  <p className="text-sm text-muted-foreground">Professionnels</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground">5 étoiles</h3>
                  <p className="text-sm text-muted-foreground">Certification HAS</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Horaires d'ouverture
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Consultations</span>
                    <span className="font-medium">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Urgences</span>
                    <span className="font-medium text-emergency">24h/24 - 7j/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Standard</span>
                    <span className="font-medium">8h00 - 17h00</span>
                  </div>
                  <div className="pt-4 border-t">
                    <Button variant="medical" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      01 56 09 20 00
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Nous Rejoindre
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez une équipe d'excellence et contribuez à l'innovation médicale 
            au service des patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="medical" size="lg">
              <Users className="h-5 w-5 mr-2" />
              Offres d'emploi
            </Button>
            <Button variant="outline" size="lg">
              <MapPin className="h-5 w-5 mr-2" />
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
