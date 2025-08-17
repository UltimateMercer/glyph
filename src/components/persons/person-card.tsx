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
import { AlertTriangle, ImageIcon, Star } from "lucide-react";
import { Badge } from "../ui/badge";
export const PersonCard = React.memo(({ person }: { person: Person }) => {
  const [selectedPerson, setSelectedPerson] = React.useState<Person | null>(
    null
  );
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
    setDrawerOpen(true);
  };
  return (
    <Card
      key={person.id}
      className="group cursor-pointer dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60 backdrop-blur-sm transition-all duration-200 hover:border-blue-700/50 py-0"
      onClick={() => handlePersonClick(person)}
    >
      <CardHeader className="relative overflow-hidden pb-0">
        <div className="relative h-60 -mx-6 rounded-t-xl mb-4">
          <Image
            src={getPersonImage(person) || "/placeholder.svg"}
            alt={person.name}
            fill
            className="object-cover  rounded-t-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent" />
        </div>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="dark:text-blue-100 text-slate-900 group-hover:underline transition-colors text-2xl">
              {person.name}
            </CardTitle>
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
        </div>
        <CardDescription className="text-blue-300 line-clamp-2">
          {person.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pb-6">
        <div className="grid gap-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-blue-400">Origin:</span>
            <span className="text-blue-300">{person.origin}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-blue-400">Status:</span>
            <span className="text-blue-300">{person.status}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
