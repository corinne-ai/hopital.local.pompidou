import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Ambulance, Clock, Users, AlertTriangle, Heart, Activity } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Emergency = () => {
  const { user } = useAuth();

  if (!user || user.service !== "urgences") {
    return <Navigate to="/" replace />;
  }

  const patientsUrgences = [
    { 
      nom: "Anonyme M.", 
      age: 45, 
      motif: "Douleur thoracique intense", 
      gravite: "P1", 
      heure: "13:45",
      box: "Box 3",
      constantes: { pouls: 95, ta: "140/90", sat: "98%" }
    },
    { 
      nom: "Bertrand Claire", 
      age: 28, 
      motif: "Traumatisme crânien léger", 
      gravite: "P2", 
      heure: "14:20",
      box: "Box 7",
      constantes: { pouls: 88, ta: "125/80", sat: "99%" }
    },
    { 
      nom: "Anonyme F.", 
      age: 67, 
      motif: "Détresse respiratoire", 
      gravite: "P1", 
      heure: "14:35",
      box: "Box 1",
      constantes: { pouls: 110, ta: "160/95", sat: "89%" }
    }
  ];

  const ambulancesEnRoute = [
    { numero: "SAMU 15-01", eta: "5 min", motif: "Arrêt cardiaque", destination: "Réa" },
    { numero: "SMUR 75-12", eta: "12 min", motif: "Accident circulation", destination: "Box choc" },
    { numero: "VSL-089", eta: "8 min", motif: "Transfert programmé", destination: "Standard" }
  ];

  const equipeMedicale = [
    { nom: "Dr. Rousseau", role: "Médecin urgentiste", statut: "disponible", localisation: "Box 1-5" },
    { nom: "Dr. Lecomte", role: "Médecin urgentiste", statut: "occupé", localisation: "Réanimation" },
    { nom: "Inf. Martinez", role: "IDE", statut: "disponible", localisation: "Accueil" },
    { nom: "Inf. Dubois", role: "IDE", statut: "occupé", localisation: "Box 3" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emergency-service-light to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header d'urgence */}
        <div className="bg-white rounded-lg shadow-medical p-6 mb-8 border-l-4 border-emergency-service">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-emergency-service/10 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-emergency-service animate-pulse-medical" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-emergency-service">Service des Urgences</h1>
                <p className="text-muted-foreground">Interface Infirmière - {user.name}</p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge variant="destructive" className="animate-pulse">
                    <Clock className="h-3 w-3 mr-1" />
                    Service 24h/24
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Dernière mise à jour: {new Date().toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-emergency-service">3</div>
                  <p className="text-xs text-muted-foreground">P1 Vitaux</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">7</div>
                  <p className="text-xs text-muted-foreground">P2 Urgents</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">12</div>
                  <p className="text-xs text-muted-foreground">P3 Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="patients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="ambulances">Ambulances</TabsTrigger>
            <TabsTrigger value="equipe">Équipe</TabsTrigger>
            <TabsTrigger value="statistiques">Statistiques</TabsTrigger>
          </TabsList>

          {/* Onglet Patients */}
          <TabsContent value="patients" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-emergency-service" />
                    Patients en cours de prise en charge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patientsUrgences.map((patient, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold">{patient.nom}, {patient.age} ans</h3>
                              <Badge variant={patient.gravite === "P1" ? "destructive" : "secondary"}>
                                {patient.gravite}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{patient.box}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{patient.motif}</p>
                            <div className="flex items-center gap-4 text-xs">
                              <span>Arrivée: {patient.heure}</span>
                              <span>Pouls: {patient.constantes.pouls} bpm</span>
                              <span>TA: {patient.constantes.ta}</span>
                              <span>SatO2: {patient.constantes.sat}</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button variant="emergency" size="sm">
                              <Heart className="h-4 w-4 mr-1" />
                              Constantes
                            </Button>
                            <Button variant="outline" size="sm">Dossier</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Actions rapides
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="emergency" className="w-full">
                      Nouveau patient
                    </Button>
                    <Button variant="outline" className="w-full">
                      Tri infirmier
                    </Button>
                    <Button variant="outline" className="w-full">
                      Appel médecin
                    </Button>
                    <Button variant="outline" className="w-full">
                      Transfert service
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Alertes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="p-2 bg-emergency-light rounded text-sm">
                        <AlertTriangle className="h-4 w-4 inline mr-1" />
                        Saturation Box 1 critique
                      </div>
                      <div className="p-2 bg-yellow-50 rounded text-sm">
                        <Clock className="h-4 w-4 inline mr-1" />
                        Délai d'attente P2 &gt; 30min
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Onglet Ambulances */}
          <TabsContent value="ambulances" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ambulance className="h-5 w-5 text-emergency-service" />
                  Ambulances en route
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ambulancesEnRoute.map((ambulance, index) => (
                    <div key={index} className="border rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold flex items-center gap-2">
                          <Ambulance className="h-4 w-4" />
                          {ambulance.numero}
                        </h3>
                        <p className="text-sm text-muted-foreground">{ambulance.motif}</p>
                        <p className="text-xs text-muted-foreground">Destination: {ambulance.destination}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="destructive" className="mb-2">
                          ETA: {ambulance.eta}
                        </Badge>
                        <div>
                          <Button variant="emergency" size="sm">Préparer</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Équipe */}
          <TabsContent value="equipe" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Équipe de garde
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {equipeMedicale.map((membre, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{membre.nom}</h3>
                        <Badge variant={membre.statut === "disponible" ? "secondary" : "destructive"}>
                          {membre.statut}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{membre.role}</p>
                      <p className="text-xs text-muted-foreground">Position: {membre.localisation}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Contacter
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Statistiques */}
          <TabsContent value="statistiques" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Patients du jour</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emergency-service">47</div>
                  <p className="text-sm text-muted-foreground">+12% vs hier</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Temps d'attente moyen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-600">23 min</div>
                  <p className="text-sm text-muted-foreground">Objectif: &lt; 30 min</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Taux d'occupation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary">85%</div>
                  <p className="text-sm text-muted-foreground">18/21 box occupés</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Emergency;