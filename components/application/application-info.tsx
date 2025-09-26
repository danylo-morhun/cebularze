import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Target, Calendar, MapPin } from "lucide-react"

export function ApplicationInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Senior Team */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-primary">Cebularze Kalisz</CardTitle>
            <Badge variant="default">Drużyna Seniorska</Badge>
          </div>
          <CardDescription>Profesjonalna drużyna hokejowa grająca w lidze regionalnej</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-primary" />
            <span>Wiek: 18+ lat</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>Treningi: 4x w tygodniu</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-primary" />
            <span>Mecze: Weekendy</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4 text-primary" />
            <span>Poziom: Średnio-zaawansowany/Profesjonalny</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Lodowisko: Arena Kalisz</span>
          </div>
        </CardContent>
      </Card>

      {/* Junior Team */}
      <Card className="border-orange-500/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-orange-500">Szczypiorki Kalisz</CardTitle>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Drużyna Juniorska
            </Badge>
          </div>
          <CardDescription>Drużyna młodzieżowa rozwijająca talenty hokejowe</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-orange-500" />
            <span>Wiek: 12-18 lat</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-orange-500" />
            <span>Treningi: 3x w tygodniu</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-orange-500" />
            <span>Mecze: Soboty</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4 text-orange-500" />
            <span>Poziom: Początkujący/Średnio-zaawansowany</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-orange-500" />
            <span>Lodowisko: Arena Kalisz</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
