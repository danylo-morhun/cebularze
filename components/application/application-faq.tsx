import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ApplicationFAQ() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Często Zadawane Pytania</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Jakie są wymagania, aby dołączyć do drużyny?</AccordionTrigger>
            <AccordionContent>
              Dla drużyny seniorskiej wymagamy minimum 2 lat doświadczenia w hokeju na lodzie oraz dobrej kondycji
              fizycznej. Dla drużyny juniorskiej przyjmujemy zawodników na każdym poziomie zaawansowania.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Ile kosztuje członkostwo w klubie?</AccordionTrigger>
            <AccordionContent>
              Składka członkowska wynosi 200 zł miesięcznie dla seniorów i 150 zł dla juniorów. W cenę wchodzą treningi,
              dostęp do lodowiska oraz podstawowy sprzęt treningowy.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Czy klub zapewnia sprzęt hokejowy?</AccordionTrigger>
            <AccordionContent>
              Klub zapewnia podstawowy sprzęt treningowy (kije, krążki). Zawodnicy muszą posiadać własny sprzęt
              ochronny, łyżwy i strój. Dla nowych zawodników oferujemy możliwość wypożyczenia sprzętu na pierwsze
              treningi.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Jak długo trwa proces rekrutacji?</AccordionTrigger>
            <AccordionContent>
              Po wysłaniu aplikacji skontaktujemy się w ciągu 7 dni roboczych. Proces rekrutacji obejmuje rozmowę,
              trening próbny i może potrwać do 2 tygodni.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Czy mogę trenować z drużyną przed oficjalnym przyjęciem?</AccordionTrigger>
            <AccordionContent>
              Tak, oferujemy 2 bezpłatne treningi próbne dla każdego kandydata. To pozwala nam i Tobie ocenić, czy nasza
              drużyna to odpowiednie miejsce.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Jakie są godziny treningów?</AccordionTrigger>
            <AccordionContent>
              Treningi seniorów odbywają się: poniedziałek, środa, piątek 20:00-22:00 oraz sobota 10:00-12:00. Treningi
              juniorów: wtorek, czwartek 18:00-19:30 oraz sobota 14:00-15:30.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
