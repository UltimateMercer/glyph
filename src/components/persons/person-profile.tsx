import type { Person } from "@/schemas/persons";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import { getPersonImage, getThreatLevelColor } from "./helpers";
import {
  Activity,
  Award,
  Clock,
  FileText,
  ImageIcon,
  MapPin,
  Star,
  User,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface PersonProfileProps {
  person: Person | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PersonProfile = React.memo(
  ({ person, open, onOpenChange }: PersonProfileProps) => {
    // Early return se não há pessoa selecionada
    if (!person) {
      return null;
    }

    const hasTimeline = person.timeline && person.timeline.length > 0;

    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[90vh] !max-w-6xl dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/90 backdrop-blur-sm py-10">
          <DialogHeader className="pb-4">
            <div className="flex gap-5">
              <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-blue-900/50 flex-shrink-0">
                <Image
                  src={getPersonImage(person) || "/placeholder.svg"}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <DialogTitle className="text-3xl font-bold dark:text-white text-slate-900 mb-3">
                  {person.name}
                </DialogTitle>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="dark:border-blue-700 dark:bg-blue-900/50 dark:text-blue-300 text-md"
                  >
                    {person.species}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-blue-700 dark:bg-blue-900/50 dark:text-blue-300 text-md"
                  >
                    {person.affiliation}
                  </Badge>
                  {/* {person.threatLevel && (
                    <Badge className={getThreatLevelColor(person.threatLevel)}>
                      {person.threatLevel === "Allied" ? (
                        <Star className="mr-1 h-3 w-3" />
                      ) : (
                        <AlertTriangle className="mr-1 h-3 w-3" />
                      )}
                      {person.threatLevel}
                    </Badge>
                  )} */}
                </div>
              </div>
            </div>
          </DialogHeader>

          <Tabs defaultValue="overview" className=" pb-4">
            <TabsList className="grid items-center w-full grid-cols-5 border dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-300 bg-white/80 h-10 rounded-md">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-blue-700 data-[state=active]:text-blue-100 text-blue-500 rounded self-stretch cursor-pointer"
              >
                <FileText className="w-4 h-4 mr-1" />
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="portraits"
                className="data-[state=active]:bg-blue-700 data-[state=active]:text-blue-100 text-blue-500 rounded cursor-pointer"
              >
                <ImageIcon className="w-4 h-4 mr-1" />
                Portraits
              </TabsTrigger>
              <TabsTrigger
                value="timeline"
                className="data-[state=active]:bg-blue-700 data-[state=active]:text-blue-100 text-blue-500 rounded cursor-pointer"
                disabled={!hasTimeline}
              >
                <Clock className="w-4 h-4 mr-1" />
                Timeline
              </TabsTrigger>
              <TabsTrigger
                value="background"
                className="data-[state=active]:bg-blue-700 data-[state=active]:text-blue-100 text-blue-500 rounded cursor-pointer"
              >
                <Award className="w-4 h-4 mr-1" />
                Background
              </TabsTrigger>
              <TabsTrigger
                value="associates"
                className="data-[state=active]:bg-blue-700 data-[state=active]:text-blue-100 text-blue-500 rounded cursor-pointer"
              >
                <Users className="w-4 h-4 mr-1" />
                Associates
              </TabsTrigger>
              {/* {person.classifiedInfo && (
                <TabsTrigger
                  value="classified"
                  className="data-[state=active]:bg-red-700/50 data-[state=active]:text-red-100 text-red-300"
                >
                  <Shield className="w-4 h-4 mr-1" />
                  Classified
                </TabsTrigger>
              )} */}
            </TabsList>
            <TabsContent
              value="overview"
              className="h-full max-h-[60vh] overflow-y-auto pr-2"
            >
              <div className="p-4 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Personal Details Card */}
                  <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-blue-100 flex items-center">
                        <User className="mr-2 h-5 w-5 text-cyan-400" />
                        Personal Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-3 text-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-blue-400" />
                            <span className="text-blue-400">Origin:</span>
                          </div>
                          <span className="text-blue-300">{person.origin}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Activity className="h-4 w-4 text-blue-400" />
                            <span className="text-blue-400">Status:</span>
                          </div>
                          <span className="text-blue-300">{person.status}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-blue-400" />
                            <span className="text-blue-400">Species:</span>
                          </div>
                          <span className="text-blue-300">
                            {person.species}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-blue-400" />
                            <span className="text-blue-400">Affiliation:</span>
                          </div>
                          <span className="text-blue-300">
                            {person.affiliation}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats Card */}
                  <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-blue-100 flex items-center">
                        <Star className="mr-2 h-5 w-5 text-cyan-400" />
                        Quick Stats
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-3 text-sm">
                        {person.portraits && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <ImageIcon className="h-4 w-4 text-blue-400" />
                              <span className="text-blue-400">Portraits:</span>
                            </div>
                            <span className="text-blue-300">
                              {person.portraits.length}
                            </span>
                          </div>
                        )}
                        {hasTimeline && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-blue-400" />
                              <span className="text-blue-400">
                                Timeline Events:
                              </span>
                            </div>
                            <span className="text-blue-300">
                              {person.timeline!.length}
                            </span>
                          </div>
                        )}
                        {person.notableAchievements && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Award className="h-4 w-4 text-blue-400" />
                              <span className="text-blue-400">
                                Achievements:
                              </span>
                            </div>
                            <span className="text-blue-300">
                              {person.notableAchievements.length}
                            </span>
                          </div>
                        )}
                        {/* {person.knownAssociates && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-blue-400" />
                            <span className="text-blue-400">Associates:</span>
                          </div>
                          <span className="text-blue-300">
                            {person.knownAssociates.length}
                          </span>
                        </div>
                      )} */}
                        {/* {person.threatLevel && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="h-4 w-4 text-blue-400" />
                            <span className="text-blue-400">Threat Level:</span>
                          </div>
                          <Badge
                            className={getThreatLevelColor(person.threatLevel)}
                            size="sm"
                          >
                            {person.threatLevel}
                          </Badge>
                        </div>
                      )} */}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Summary Card */}
                <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-blue-100">Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-300 leading-relaxed">
                      {person.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Key Achievements Preview */}
                {person.notableAchievements &&
                  person.notableAchievements.length > 0 && (
                    <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-blue-100 flex items-center">
                          <Award className="mr-2 h-5 w-5 text-cyan-400" />
                          Key Achievements
                        </CardTitle>
                        <CardDescription className="text-blue-400">
                          Showing first 3 achievements - view Background tab for
                          complete list
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {person.notableAchievements
                            .slice(0, 3)
                            .map((achievement, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-2"
                              >
                                <Star className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span className="text-blue-300">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          {person.notableAchievements.length > 3 && (
                            <li className="text-blue-400 text-sm italic">
                              ...and {person.notableAchievements.length - 3}{" "}
                              more achievements
                            </li>
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    );
  }
);
