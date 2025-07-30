import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Activity, Users, Calendar, FileText, AlertTriangle, TrendingUp } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Cardiology = () => {
  const { user } = useAuth();

  if (!user || user.service !== "cardiologie") {
    return <Navigate to="/" replace />;
  }

  const patientsCritiques = [
    { nom: "Dubois Marie", age: 67, pathologie: "Infarctus aigu", gravite: "critique", chambre: "C102" },
    { nom: "Martin Pierre", age: 52, pathologie: "Arythmie sévère", gravite: "elevee", chambre: "C105" },
    { nom: "Leroy Anne", age: 74, pathologie: "Insuffisance cardiaque", gravite: "moyenne", chambre: "C108" }
  ];

  const examensEnAttente = [
    { patient: "Dubois Marie", type: "ECG", heure: "14:30", priorite: "urgente" },
    { patient: "Bernard Jean", type: "Écho cardiaque", heure: "15:00", priorite: "normale" },
    { patient: "Morel Claire", type: "Holter", heure: "15:30", priorite: "normale" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cardiology-light to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-medical p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-cardiology/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-cardiology" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-cardiology">Service de Cardiologie</h1>
                <p className="text-muted-foreground">Interface du Cardiologue - {user.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Dernière connexion</p>
              <p className="text-lg font-semibold">{new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="patients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="examens">Examens</TabsTrigger>
            <TabsTrigger value="resultats">Résultats</TabsTrigger>
            <TabsTrigger value="planning">Planning</TabsTrigger>
          </TabsList>

          {/* Onglet Patients */}
          <TabsContent value="patients" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-emergency" />
                    Patients Critiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patientsCritiques.map((patient, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{patient.nom}, {patient.age} ans</h3>
                            <p className="text-sm text-muted-foreground">{patient.pathologie}</p>
                            <p className="text-xs text-muted-foreground">Chambre {patient.chambre}</p>
                          </div>
                          <Badge variant={patient.gravite === "critique" ? "destructive" : 
                                       patient.gravite === "elevee" ? "destructive" : "secondary"}>
                            {patient.gravite === "critique" ? "Critique" : 
                             patient.gravite === "elevee" ? "Élevée" : "Moyenne"}
                          </Badge>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button variant="cardiology" size="sm">Examiner</Button>
                          <Button variant="outline" size="sm">Dossier</Button>
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
                      Statistiques
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cardiology">24</div>
                      <p className="text-sm text-muted-foreground">Patients hospitalisés</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emergency">3</div>
                      <p className="text-sm text-muted-foreground">Urgences cardiologiques</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">12</div>
                      <p className="text-sm text-muted-foreground">Consultations aujourd'hui</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Actions rapides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="cardiology" className="w-full">
                      Nouvelle consultation
                    </Button>
                    <Button variant="outline" className="w-full">
                      Prescrire examen
                    </Button>
                    <Button variant="outline" className="w-full">
                      Rapport médical
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Onglet Examens */}
          <TabsContent value="examens" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Examens en attente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {examensEnAttente.map((examen, index) => (
                    <div key={index} className="border rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{examen.patient}</h3>
                        <p className="text-sm text-muted-foreground">{examen.type}</p>
                        <p className="text-xs text-muted-foreground">Programmé à {examen.heure}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={examen.priorite === "urgente" ? "destructive" : "secondary"}>
                          {examen.priorite === "urgente" ? "Urgent" : "Normal"}
                        </Badge>
                        <Button variant="cardiology" size="sm">Valider</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Résultats */}
          <TabsContent value="resultats" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Résultats à valider
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                  <p>Aucun résultat en attente de validation</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Planning */}
          <TabsContent value="planning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Planning du jour
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-l-4 border-cardiology pl-4 py-2">
                    <p className="font-semibold">09:00 - Consultation M. Durand</p>
                    <p className="text-sm text-muted-foreground">Suivi post-infarctus</p>
                  </div>
                  <div className="border-l-4 border-cardiology pl-4 py-2">
                    <p className="font-semibold">10:30 - Écho cardiaque Mme Petit</p>
                    <p className="text-sm text-muted-foreground">Contrôle insuffisance cardiaque</p>
                  </div>
                  <div className="border-l-4 border-cardiology pl-4 py-2">
                    <p className="font-semibold">14:00 - Réunion équipe</p>
                    <p className="text-sm text-muted-foreground">Discussion cas complexes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Cardiology;