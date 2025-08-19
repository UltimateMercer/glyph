import type { Person } from "@/schemas/persons";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { getPersonImage } from "./helpers";
import { AlertTriangle, File, ImageIcon, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface PersonCardProps {
  person: Person;
  onOpenDrawer?: (person: Person) => void; // Nova prop para callback
}

export const PersonCard = React.memo(
  ({ person, onOpenDrawer }: PersonCardProps) => {
    const [selectedPerson, setSelectedPerson] = React.useState<Person | null>(
      null
    );
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerOpen = (e: React.MouseEvent) => {
      e.stopPropagation(); // Evita conflito se o card inteiro for clicável
      onOpenDrawer?.(person);
    };
    return (
      <>
        <div className="group relative flex flex-col rounded-lg p-4 h-96 dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60 backdrop-blur-sm transition-all duration-200 hover:ring-4 hover:ring-blue-500/25">
          <Image
            src={getPersonImage(person) || "/placeholder.svg"}
            alt={person.name}
            fill
            className="object-cover rounded-lg grayscale"
          />
          <div className="absolute flex flex-col justify-end top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-blue-950/90 via-blue-950/60 to-transparent px-5 py-8 rounded-lg">
            <h4 className="text-2xl font-bold text-blue-100 mb-2">
              {person.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-blue-700 bg-blue-900/50 text-blue-300"
              >
                {person.species}
              </Badge>
              <Badge
                variant="outline"
                className="border-blue-700 bg-blue-900/50 text-blue-300"
              >
                {person.affiliation}
              </Badge>
            </div>
          </div>
          <div className="absolute -bottom-4 right-4">
            <Button
              onClick={handleDrawerOpen}
              variant="outline"
              className="cursor-pointer border-blue-900/50 bg-blue-950 hover:bg-blue-800 text-white hover:text-white group-hover:ring-4 group-hover:ring-blue-500/25"
            >
              {" "}
              Ver Detalhes
            </Button>
          </div>
        </div>
        {/* <Card className="group relative rounded-md dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60 backdrop-blur-sm transition-all duration-200 hover:ring-4 hover:ring-blue-500/25 py-0">
          <CardHeader className="relative overflow-hidden pb-0">
            <div className="relative h-60 -mx-6 rounded-md mb-4">
              <Image
                src={getPersonImage(person) || "/placeholder.svg"}
                alt={person.name}
                fill
                className="object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/60 to-transparent" />
            </div>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="dark:text-blue-100 text-slate-900 group-hover:underline transition-colors text-2xl">
                  {person.name}
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pb-6">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-blue-700 bg-blue-900/50 text-blue-300"
              >
                {person.species}
              </Badge>
              <Badge
                variant="outline"
                className="border-blue-700 bg-blue-900/50 text-blue-300"
              >
                {person.affiliation}
              </Badge>
            </div>
          </CardContent>
          <div className="absolute -bottom-4 right-4">
            <Button
              onClick={handleDrawerOpen}
              variant="outline"
              className="cursor-pointer dark:border-blue-900/50 dark:bg-blue-950 dark:hover:bg-blue-800 hover:bg-blue-100 border-blue-200 bg-white group-hover:ring-4 group-hover:ring-blue-500/25"
            >
              {" "}
              Ver Detalhes
            </Button>
          </div>
        </Card> */}
      </>
    );
  }
);
