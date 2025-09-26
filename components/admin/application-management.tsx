"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle, Clock, Eye, Mail, Phone, User } from "lucide-react"

interface Application {
  id: string
  name: string
  email: string
  phone: string
  position: string
  experience: string
  team: string
  status: "pending" | "approved" | "rejected"
  submittedAt: string
}

interface ApplicationManagementProps {
  applications: Application[]
}

export function ApplicationManagement({ applications }: ApplicationManagementProps) {
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null)
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false)

  const filteredApplications = applications.filter((app) => {
    return selectedStatus === "all" || app.status === selectedStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="text-orange-500 border-orange-500">
            Oczekuje
          </Badge>
        )
      case "approved":
        return <Badge className="bg-green-500 text-white">Zaakceptowana</Badge>
      case "rejected":
        return <Badge variant="destructive">Odrzucona</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4 text-orange-500" />
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "rejected":
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const handleViewApplication = (application: Application) => {
    setSelectedApplication(application)
    setIsDetailDialogOpen(true)
  }

  const handleStatusChange = (applicationId: string, newStatus: string) => {
    // In a real app, this would update the application status
    console.log(`Changing status of application ${applicationId} to ${newStatus}`)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Zarządzanie Aplikacjami</CardTitle>
              <CardDescription>Przeglądaj i zarządzaj zgłoszeniami do drużyny</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-orange-500 border-orange-500">
                {applications.filter((app) => app.status === "pending").length} oczekujących
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filtruj status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Wszystkie aplikacje</SelectItem>
                <SelectItem value="pending">Oczekujące</SelectItem>
                <SelectItem value="approved">Zaakceptowane</SelectItem>
                <SelectItem value="rejected">Odrzucone</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Applications Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kandydat</TableHead>
                  <TableHead>Pozycja</TableHead>
                  <TableHead>Drużyna</TableHead>
                  <TableHead>Doświadczenie</TableHead>
                  <TableHead>Data zgłoszenia</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Akcje</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>
                            {application.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{application.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center space-x-2">
                            <Mail className="w-3 h-3" />
                            <span>{application.email}</span>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{application.position}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          application.team === "senior"
                            ? "bg-primary text-primary-foreground"
                            : "bg-orange-500 text-white"
                        }
                      >
                        {application.team === "senior" ? "Cebularze" : "Szczypiorki"}
                      </Badge>
                    </TableCell>
                    <TableCell>{application.experience}</TableCell>
                    <TableCell>{application.submittedAt}</TableCell>
                    <TableCell>{getStatusBadge(application.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleViewApplication(application)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                        {application.status === "pending" && (
                          <>
                            <Button
                              size="sm"
                              className="bg-green-500 hover:bg-green-600 text-white"
                              onClick={() => handleStatusChange(application.id, "approved")}
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleStatusChange(application.id, "rejected")}
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredApplications.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Nie znaleziono aplikacji spełniających kryteria filtrowania.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Application Detail Dialog */}
      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Szczegóły Aplikacji</span>
            </DialogTitle>
            <DialogDescription>Pełne informacje o kandydacie</DialogDescription>
          </DialogHeader>
          {selectedApplication && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="text-lg">
                    {selectedApplication.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{selectedApplication.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>{selectedApplication.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>{selectedApplication.phone}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  {getStatusBadge(selectedApplication.status)}
                  <div className="text-sm text-muted-foreground mt-1">Zgłoszono: {selectedApplication.submittedAt}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Pozycja</Label>
                  <div className="p-3 bg-muted rounded-lg">
                    <Badge variant="outline">{selectedApplication.position}</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Drużyna</Label>
                  <div className="p-3 bg-muted rounded-lg">
                    <Badge
                      className={
                        selectedApplication.team === "senior"
                          ? "bg-primary text-primary-foreground"
                          : "bg-orange-500 text-white"
                      }
                    >
                      {selectedApplication.team === "senior" ? "Cebularze (Senior)" : "Szczypiorki (Junior)"}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Doświadczenie</Label>
                <div className="p-3 bg-muted rounded-lg">{selectedApplication.experience}</div>
              </div>

              {selectedApplication.status === "pending" && (
                <div className="space-y-4">
                  <Label>Zmień status aplikacji</Label>
                  <div className="flex space-x-2">
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white flex-1"
                      onClick={() => {
                        handleStatusChange(selectedApplication.id, "approved")
                        setIsDetailDialogOpen(false)
                      }}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Zaakceptuj
                    </Button>
                    <Button
                      variant="destructive"
                      className="flex-1"
                      onClick={() => {
                        handleStatusChange(selectedApplication.id, "rejected")
                        setIsDetailDialogOpen(false)
                      }}
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Odrzuć
                    </Button>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label>Notatki administratora</Label>
                <Textarea placeholder="Dodaj notatki dotyczące tej aplikacji..." rows={3} />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
