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
        {/* <div className="relative ">
          <div className="flex flex-col gap-4 p-5 rounded-xl border border-blue-100 bg-gray-100 backdrop-blur-sm dark:border-blue-900/50 dark:bg-blue-950/20">
            <div className="inline-flex items-center text-slate-700 gap-1 mb-2">
              <File />
              <h4 className="text-lg  font-medium italic">
                {`${person.name.replace(/\s+/g, "-").toLowerCase()}-file`}
              </h4>
            </div>

            <div className="relative h-60 rounded-lg">
              <Image
                src={getPersonImage(person) || "/placeholder.svg"}
                alt={person.name}
                className="object-cover w-full h-60 rounded-lg shadow-xl "
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent rounded-lg" />
            </div>

            <div className="p-2 rounded-md bg-white/75 dark:bg-slate-800 flex justify-end">
              <Button
                onClick={handleDrawerOpen}
                variant="outline"
                className="cursor-pointer"
              >
                {" "}
                Read file
              </Button>
            </div>
          </div>
        </div> */}
        <Card
          key={person.id}
          className="group relative rounded-md dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60 backdrop-blur-sm transition-all duration-200 hover:ring-4 hover:ring-blue-500/25 py-0"
        >
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
            {/* <CardDescription className="text-blue-300 line-clamp-2">
              {person.description}
            </CardDescription> */}
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
            {/* <div className="grid gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-blue-400">Origin:</span>
                <span className="text-blue-300">{person.origin}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-400">Status:</span>
                <span className="text-blue-300">{person.status}</span>
              </div>
            </div> */}
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
        </Card>
      </>
    );
  }
);
