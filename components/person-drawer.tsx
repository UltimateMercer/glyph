/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Shield, Star, Heart, Crosshair, Brain, Award } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface PersonDetails {
  name: string;
  role: string;
  affiliation: string;
  status: string;
  description: string;
  achievements: string[];
  image: string;
  type: string;
  details?: {
    biography: string;
    specializations: string[];
    notableActions: string[];
    relationships: { name: string; relation: string }[];
    skills: { category: string; level: number }[];
  };
}

interface PersonDrawerProps {
  person: PersonDetails | null;
  open: boolean;
  onClose: () => void;
}

export function PersonDrawer({ person, open, onClose }: PersonDrawerProps) {
  if (!person) return null;

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full border-l border-blue-900/50 bg-blue-950/90 backdrop-blur-sm sm:max-w-xl">
        <SheetHeader>
          <SheetTitle className="text-blue-100">{person.name}</SheetTitle>
        </SheetHeader>
        <div className="flex gap-4 py-4">
          <Image
            src={person.image || "/persons/user.jpg"}
            className="rounded-lg object-cover size-20"
            alt={person.name}
            width={80}
            height={80}
          />
          <div className="">
            <h2 className="text-xl text-blue-100 font-bold mb-2">
              {person.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-blue-400/30 bg-blue-950/50 text-blue-400"
              >
                {person.role}
              </Badge>
              <Badge
                variant="outline"
                className="border-blue-400/30 bg-blue-950/50 text-blue-400"
              >
                {person.status}
              </Badge>
            </div>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-6rem)] pr-4">
          {/* Hero Image */}
          {/* <div className="relative mt-4 h-64 overflow-hidden rounded-lg">
            <Image
              src={person.image || "/placeholder.svg"}
              alt={person.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-blue-400/30 bg-blue-950/50 text-blue-400"
                >
                  {person.role}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-blue-400/30 bg-blue-950/50 text-blue-400"
                >
                  {person.status}
                </Badge>
              </div>
            </div>
          </div> */}

          <div className="mt-6 space-y-6">
            {/* Basic Info */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-blue-400">
                Current Status
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-blue-300">Affiliation</p>
                  <p className="font-medium text-blue-100">
                    {person.affiliation}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-blue-300">Role</p>
                  <p className="font-medium text-blue-100">{person.role}</p>
                </div>
              </div>
            </div>

            <Separator className="bg-white" />

            {/* Biography */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-blue-400">Biography</h3>
              <p className="text-sm text-blue-300">
                {person.details?.biography || person.description}
              </p>
            </div>

            {person.details?.specializations && (
              <>
                <Separator className="bg-white" />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-blue-400">
                    Specializations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {person.details.specializations.map((spec) => (
                      <Badge
                        key={spec}
                        className="bg-blue-900/20 text-blue-300"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}

            {person.details?.skills && (
              <>
                <Separator className="bg-white" />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-blue-400">
                    Combat Proficiency
                  </h3>
                  <div className="grid gap-3">
                    {person.details.skills.map((skill) => (
                      <div key={skill.category} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-300">
                            {skill.category}
                          </span>
                          <span className="text-blue-400">
                            {skill.level}/10
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-blue-950">
                          <div
                            className="h-full rounded-full bg-blue-600"
                            style={{ width: `${(skill.level / 10) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {person.details?.notableActions && (
              <>
                <Separator className="bg-white" />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-blue-400">
                    Notable Actions
                  </h3>
                  <ul className="grid gap-2 text-sm text-blue-300">
                    {person.details.notableActions.map((action, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Star className="mt-1 h-4 w-4 shrink-0 text-blue-400" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {person.details?.relationships && (
              <>
                <Separator className="bg-white" />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-blue-400">
                    Key Relationships
                  </h3>
                  <div className="grid gap-2">
                    {person.details.relationships.map((rel) => (
                      <div
                        key={rel.name}
                        className="flex items-center justify-between rounded-lg border border-blue-900/50 bg-blue-950/50 p-2 text-sm"
                      >
                        <span className="text-blue-100">{rel.name}</span>
                        <Badge
                          variant="outline"
                          className="border-blue-400/30 text-blue-400"
                        >
                          {rel.relation}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Achievements */}
            <Separator className="bg-white" />
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-blue-400">
                Achievements
              </h3>
              <div className="flex flex-wrap gap-2">
                {person.achievements.map((achievement) => (
                  <Badge
                    key={achievement}
                    variant="outline"
                    className="border-blue-400/30 bg-blue-950/50 text-blue-400"
                  >
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export function PersonDialog({ person, open, onClose }: PersonDrawerProps) {
  if (!person) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl border-blue-900/50 bg-blue-950/90 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-100">
            Individual Profile
          </DialogTitle>
        </DialogHeader>
        <div className="flex gap-4 py-2">
          <Image
            src={person.image || "/persons/user.jpg"}
            className="rounded-lg object-cover size-20"
            alt={person.name}
            width={80}
            height={80}
          />
          <div className="">
            <h2 className="text-xl text-blue-100 font-bold mb-2">
              {person.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-blue-400/30 bg-blue-950/50 text-blue-400"
              >
                {person.role}
              </Badge>
              <Badge
                variant="outline"
                className="border-blue-400/30 bg-blue-950/50 text-blue-400"
              >
                {person.status}
              </Badge>
            </div>
          </div>
        </div>
        <ScrollArea className="h-[450px] pr-4">
          <div className="mt-2 space-y-6">
            {/* Basic Info */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-blue-400">
                Current Status
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-blue-300">Affiliation</p>
                  <p className="font-medium text-blue-100">
                    {person.affiliation}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-blue-300">Role</p>
                  <p className="font-medium text-blue-100">{person.role}</p>
                </div>
              </div>
            </div>

            <Separator className="bg-white" />

            {/* Biography */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-blue-400">Biography</h3>
              <p className="text-sm text-blue-300">
                {person.details?.biography || person.description}
              </p>
            </div>

            {person.details?.specializations && (
              <>
                <Separator className="bg-white" />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-blue-400">
                    Specializations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {person.details.specializations.map((spec) => (
                      <Badge
                        key={spec}
                        className="bg-blue-900/20 text-blue-300"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}

            {person.details?.skills && (
              <>
                <Separator className="bg-white" />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-blue-400">
                    Combat Proficiency
                  </h3>
                  <div className="grid gap-3">
                    {person.details.skills.map((skill) => (
                      <div key={skill.category} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-300">
                            {skill.category}
                          </span>
                          <span className="text-blue-400">
                            {skill.level}/10
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-blue-950">
                          <div
                            className="h-full rounded-full bg-blue-600"
                            style={{ width: `${(skill.level / 10) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {person.details?.notableActions && (
              <>
                <Separator className="bg-white" />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-blue-400">
                    Notable Actions
                  </h3>
                  <ul className="grid gap-2 text-sm text-blue-300">
                    {person.details.notableActions.map((action, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Star className="mt-1 h-4 w-4 shrink-0 text-blue-400" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {person.details?.relationships && (
              <>
                <Separator className="bg-white" />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-blue-400">
                    Key Relationships
                  </h3>
                  <div className="grid gap-2">
                    {person.details.relationships.map((rel) => (
                      <div
                        key={rel.name}
                        className="flex items-center justify-between rounded-lg border border-blue-900/50 bg-blue-950/50 p-2 text-sm"
                      >
                        <span className="text-blue-100">{rel.name}</span>
                        <Badge
                          variant="outline"
                          className="border-blue-400/30 text-blue-400"
                        >
                          {rel.relation}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Achievements */}
            <Separator className="bg-white" />
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-blue-400">
                Achievements
              </h3>
              <div className="flex flex-wrap gap-2">
                {person.achievements.map((achievement) => (
                  <Badge
                    key={achievement}
                    variant="outline"
                    className="border-blue-400/30 bg-blue-950/50 text-blue-400"
                  >
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
