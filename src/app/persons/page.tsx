"use client";
import * as React from "react";
import { HeaderSection } from "@/components/header-section";
import { ImageIcon, Star, Users } from "lucide-react";
import type { Person } from "@/schemas/persons";
import { persons } from "@/lib/person-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { PersonCard } from "@/components/persons/person-card";
import { PersonProfile } from "@/components/persons/person-profile";

export default function PersonsPage() {
  const [selectedPerson, setSelectedPerson] = React.useState<Person | null>(
    null
  );
  const [profileOpen, setProfileOpen] = React.useState(false);

  const handleOpenProfile = React.useCallback((person: Person) => {
    setSelectedPerson(person);
    setProfileOpen(true);
  }, []);

  const handleCloseProfile = React.useCallback((open: boolean) => {
    setProfileOpen(open);
    if (!open) {
      // Delay para limpar a pessoa selecionada após a animação do dialog
      setTimeout(() => setSelectedPerson(null), 200);
    }
  }, []);

  return (
    <>
      <div className="min-h-screen ">
        <HeaderSection
          icon={Users}
          badge="Personnel Database"
          title="Key Individuals"
          description="Comprehensive profiles of significant individuals who have shaped galactic history and current events."
        />

        {/* Persons Grid */}
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3  py-8">
          {persons.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
              onOpenDrawer={handleOpenProfile}
            />
          ))}
        </div>

        <PersonProfile
          person={selectedPerson}
          open={profileOpen}
          onOpenChange={handleCloseProfile}
        />
      </div>
    </>
  );
}
