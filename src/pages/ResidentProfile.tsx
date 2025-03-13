
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Mock medications data
const mockMedications = [
  { id: "1", name: "Paracetamol", dose: "500mg", time: "8:00 AM" },
  { id: "2", name: "Lisinopril", dose: "10mg", time: "8:00 AM" },
  { id: "3", name: "Metformin", dose: "850mg", time: "1:00 PM" },
  { id: "4", name: "Atorvastatin", dose: "20mg", time: "8:00 PM" },
];

// Mock history data
const mockHistory = [
  { id: "1", description: "Fall incident", date: "03/10/2025" },
  { id: "2", description: "Doctor visit - routine checkup", date: "02/15/2025" },
  { id: "3", description: "Flu symptoms", date: "01/20/2025" },
];

const ResidentProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isIncidentModalOpen, setIsIncidentModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiQuestion, setAiQuestion] = useState("");

  // Placeholder data for the resident
  const resident = {
    id,
    name: "Ana Pérez",
    room: "Room 12",
    age: 78,
    allergies: "None",
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditModalOpen(false);
    toast({
      title: "Profile Updated",
      description: "Resident profile has been updated successfully.",
    });
  };

  const handleIncidentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsIncidentModalOpen(false);
    toast({
      title: "Incident Logged",
      description: "The incident has been recorded successfully.",
      variant: "destructive",
    });
  };

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAiModalOpen(false);
    setAiQuestion("");
    toast({
      title: "AI Response",
      description: "The AI is processing your question.",
    });
  };

  return (
    <div className="space-y-6 animate-slide-in">
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{resident.name}</h1>
          <p className="text-muted-foreground">{resident.room}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Resident Profile</DialogTitle>
                <DialogDescription>
                  Make changes to the resident's profile here.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleEditSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue={resident.name}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="room" className="text-right">
                      Room
                    </Label>
                    <Input
                      id="room"
                      defaultValue={resident.room}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="age" className="text-right">
                      Age
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      defaultValue={resident.age}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="allergies" className="text-right">
                      Allergies
                    </Label>
                    <Input
                      id="allergies"
                      defaultValue={resident.allergies}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog
            open={isIncidentModalOpen}
            onOpenChange={setIsIncidentModalOpen}
          >
            <DialogTrigger asChild>
              <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
                Log Incident
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Log New Incident</DialogTitle>
                <DialogDescription>
                  Record details about the incident that occurred.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleIncidentSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="incident-date" className="text-right">
                      Date
                    </Label>
                    <Input
                      id="incident-date"
                      type="date"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="incident-type" className="text-right">
                      Type
                    </Label>
                    <Input
                      id="incident-type"
                      placeholder="Fall, Health Issue, etc."
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="incident-description" className="text-right">
                      Description
                    </Label>
                    <Textarea
                      id="incident-description"
                      placeholder="Detailed description of the incident..."
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setIsIncidentModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="destructive">
                    Log Incident
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog open={isAiModalOpen} onOpenChange={setIsAiModalOpen}>
            <DialogTrigger asChild>
              <Button>Ask AI</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Ask AI Assistant</DialogTitle>
                <DialogDescription>
                  Get AI-powered insights about this resident.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAiSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 gap-4">
                    <Label htmlFor="ai-question">Your question</Label>
                    <Textarea
                      id="ai-question"
                      placeholder="Ask about this resident's health, medication, preferences, etc."
                      value={aiQuestion}
                      onChange={(e) => setAiQuestion(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setIsAiModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Get Answer</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <span className="text-2xl font-medium">AP</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{resident.name}</h2>
                  <p className="text-muted-foreground">{resident.room}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Resident ID
                  </span>
                  <p>#{resident.id}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Admitted
                  </span>
                  <p>January 15, 2025</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Primary Contact
                  </span>
                  <p>Juan Pérez (Son)</p>
                  <p className="text-sm text-muted-foreground">
                    +52 555 123 4567
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center space-y-2">
                <div className="w-24 h-24 bg-white flex items-center justify-center">
                  <p className="text-sm text-gray-500">QR Code Here</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Scan for quick access
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Personal Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Age
                          </span>
                          <p>{resident.age}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Date of Birth
                          </span>
                          <p>05/12/1947</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Allergies
                          </span>
                          <p>{resident.allergies}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Blood Type
                          </span>
                          <p>O+</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Medical Information</h3>
                      <div className="mt-4">
                        <span className="text-sm font-medium text-muted-foreground">
                          Medical Conditions
                        </span>
                        <p>Hypertension, Type 2 Diabetes</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Notes</h3>
                      <p className="mt-4 text-muted-foreground">
                        Ana prefers to have her meals in her room. She enjoys reading in the afternoon and listening to classical music. She has minor mobility issues but can walk with a cane. Weekly physical therapy sessions on Tuesdays at 10am.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="medications" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Dose</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockMedications.map((medication) => (
                        <TableRow key={medication.id}>
                          <TableCell className="font-medium">
                            {medication.name}
                          </TableCell>
                          <TableCell>{medication.dose}</TableCell>
                          <TableCell>{medication.time}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {mockHistory.map((event) => (
                      <div
                        key={event.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b last:border-0 last:pb-0"
                      >
                        <div>
                          <h4 className="font-medium">{event.description}</h4>
                          <p className="text-sm text-muted-foreground">
                            {event.date}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="sm:ml-4 mt-2 sm:mt-0">
                          View Details
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ResidentProfile;
