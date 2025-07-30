import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Scan, Monitor, Calendar, FileX, Eye, Download } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Radiology = () => {
  const { user } = useAuth();

  if (!user || user.service !== "radiologie") {
    return <Navigate to="/" replace />;
  }

  const examensPrioritaires = [
    { patient: "Leblanc Sophie", type: "IRM Cérébrale", urgence: "urgent", heure: "14:00", motif: "AVC suspecté" },
    { patient: "Garcia Miguel", type: "Scanner Thoracique", urgence: "normal", heure: "15:30", motif: "Nodule pulmonaire" },
    { patient: "Chen Wei", type: "Échographie Cardiaque", urgence: "urgent", heure: "16:00", motif: "Douleur thoracique" }
  ];

  const resultatsAValider = [
    { patient: "Moreau Paul", examen: "Radio Thorax", date: "Aujourd'hui 11:30", statut: "à analyser" },
    { patient: "Rousseau Emma", examen: "IRM Genou", date: "Aujourd'hui 10:15", statut: "à valider" },
    { patient: "Lefevre Marc", examen: "Scanner Abdominal", date: "Hier 16:45", statut: "à signer" }
  ];

  const equipements = [
    { nom: "IRM 3T - Salle 1", statut: "disponible", prochainExamen: "16:30" },
    { nom: "Scanner 64 barrettes", statut: "en cours", prochainExamen: "15:45" },
    { nom: "Échographe cardiaque", statut: "maintenance", prochainExamen: "18:00" },
    { nom: "Mammographe numérique", statut: "disponible", prochainExamen: "17:15" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-radiology-light to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-medical p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-radiology/10 rounded-full flex items-center justify-center">
                <Brain className="h-8 w-8 text-radiology" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-radiology">Service de Radiologie</h1>
                <p className="text-muted-foreground">Interface du Radiologue - {user.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Station de travail</p>
              <p className="text-lg font-semibold">Poste R-{user.id}</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="examens" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="examens">Examens</TabsTrigger>
            <TabsTrigger value="resultats">Résultats</TabsTrigger>
            <TabsTrigger value="equipements">Équipements</TabsTrigger>
            <TabsTrigger value="archives">Archives</TabsTrigger>
          </TabsList>

          {/* Onglet Examens */}
          <TabsContent value="examens" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scan className="h-5 w-5 text-radiology" />
                    Examens Programmés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {examensPrioritaires.map((examen, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{examen.patient}</h3>
                            <p className="text-sm text-muted-foreground">{examen.type}</p>
                            <p className="text-xs text-muted-foreground">{examen.motif}</p>
                            <p className="text-xs font-medium text-radiology">Programmé à {examen.heure}</p>
                          </div>
                          <Badge variant={examen.urgence === "urgent" ? "destructive" : "secondary"}>
                            {examen.urgence === "urgent" ? "Urgent" : "Normal"}
                          </Badge>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button variant="radiology" size="sm">Commencer</Button>
                          <Button variant="outline" size="sm">Dossier</Button>
                          <Button variant="outline" size="sm">Protocole</Button>
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
                      <Monitor className="h-5 w-5" />
                      Statistiques du jour
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-radiology">18</div>
                      <p className="text-sm text-muted-foreground">Examens réalisés</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emergency">7</div>
                      <p className="text-sm text-muted-foreground">Examens urgents</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">5</div>
                      <p className="text-sm text-muted-foreground">En attente de lecture</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Actions rapides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="radiology" className="w-full">
                      Nouvel examen
                    </Button>
                    <Button variant="outline" className="w-full">
                      Dictée vocale
                    </Button>
                    <Button variant="outline" className="w-full">
                      Visionneuse DICOM
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Onglet Résultats */}
          <TabsContent value="resultats" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Résultats à analyser
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resultatsAValider.map((resultat, index) => (
                    <div key={index} className="border rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{resultat.patient}</h3>
                        <p className="text-sm text-muted-foreground">{resultat.examen}</p>
                        <p className="text-xs text-muted-foreground">{resultat.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={resultat.statut === "à analyser" ? "destructive" : "secondary"}>
                          {resultat.statut}
                        </Badge>
                        <Button variant="radiology" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Analyser
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Équipements */}
          <TabsContent value="equipements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  État des équipements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {equipements.map((equipement, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{equipement.nom}</h3>
                        <Badge variant={equipement.statut === "disponible" ? "secondary" : 
                                       equipement.statut === "en cours" ? "destructive" : "outline"}>
                          {equipement.statut}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Prochain examen: {equipement.prochainExamen}
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Gérer planning
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Archives */}
          <TabsContent value="archives" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileX className="h-5 w-5" />
                  Archives DICOM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Download className="h-12 w-12 mx-auto mb-4" />
                  <p>Recherche dans les archives disponible</p>
                  <Button variant="radiology" className="mt-4">
                    Accéder aux archives
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Radiology;