import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Person } from "@/schemas/persons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Award,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const PersonTimeline = React.memo(({ person }: { person: Person }) => {
  const [expandedEvents, setExpandedEvents] = React.useState<Set<string>>(
    new Set()
  );
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  if (!person.timeline || person.timeline.length === 0) {
    return (
      <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center space-y-2">
            <Clock className="mx-auto h-12 w-12 text-blue-600" />
            <p className="text-blue-400">
              No timeline data available for this character
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const toggleEventExpansion = (eventId: string) => {
    const newExpanded = new Set(expandedEvents);
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId);
    } else {
      newExpanded.add(eventId);
    }
    setExpandedEvents(newExpanded);
  };

  const getCategoryIcon = (category?: string) => {
    if (!category) return <Clock className="h-5 w-5" />;

    switch (category) {
      case "early_life":
        return <Star className="h-5 w-5" />;
      case "career":
        return <Shield className="h-5 w-5" />;
      case "major_event":
        return <Zap className="h-5 w-5" />;
      case "transformation":
        return <Award className="h-5 w-5" />;
      case "legacy":
        return <Calendar className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category?: string) => {
    if (!category) return "bg-gray-500 text-white";

    switch (category) {
      case "early_life":
        return "bg-green-500 text-white";
      case "career":
        return "bg-blue-500 text-white";
      case "major_event":
        return "bg-orange-500 text-white";
      case "transformation":
        return "bg-purple-500 text-white";
      case "legacy":
        return "bg-yellow-500 text-black";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getImportanceColor = (importance?: string) => {
    if (!importance) return "border-blue-500 bg-blue-950/20";

    switch (importance) {
      case "critical":
        return "border-red-500 bg-red-950/20";
      case "high":
        return "border-orange-500 bg-orange-950/20";
      case "medium":
        return "border-blue-500 bg-blue-950/20";
      case "low":
        return "border-gray-500 bg-gray-950/20";
      default:
        return "border-blue-500 bg-blue-950/20";
    }
  };

  const formatCategoryName = (category?: string) => {
    if (!category) return "Unknown";
    return category.replace("_", " ");
  };

  const filteredEvents =
    selectedCategory === "all"
      ? person.timeline
      : person.timeline.filter((event) => event.category === selectedCategory);

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    // Sort by year, handling non-numeric years
    const yearA = Number.parseInt(a.year) || 0;
    const yearB = Number.parseInt(b.year) || 0;
    return yearA - yearB;
  });

  const categories = Array.from(
    new Set(person.timeline.map((event) => event.category).filter(Boolean))
  );

  const getPortraitForEvent = (event: any) => {
    if (!event.portraitId || !person.portraits) return null;
    return person.portraits.find((p) => p.id === event.portraitId);
  };

  return (
    <>
      {/* Timeline Overview */}
      <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-blue-100 flex items-center">
            <Clock className="mr-2 h-5 w-5 text-cyan-400" />
            Character Timeline
          </CardTitle>
          <CardDescription className="text-blue-400">
            Key events and milestones in {person.name}'s life
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 rounded-lg bg-blue-900/20 border border-blue-800/50">
              <div className="text-lg font-bold text-cyan-400">
                {person.timeline.length}
              </div>
              <div className="text-xs text-blue-400">Total Events</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-blue-900/20 border border-blue-800/50">
              <div className="text-lg font-bold text-cyan-400">
                {
                  person.timeline.filter((e) => e.importance === "critical")
                    .length
                }
              </div>
              <div className="text-xs text-blue-400">Critical Events</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-blue-900/20 border border-blue-800/50">
              <div className="text-lg font-bold text-cyan-400">
                {categories.length}
              </div>
              <div className="text-xs text-blue-400">Life Phases</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-blue-900/20 border border-blue-800/50">
              <div className="text-lg font-bold text-cyan-400">
                {person.timeline.filter((e) => e.portraitId).length}
              </div>
              <div className="text-xs text-blue-400">With Portraits</div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Category Filter */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-6 bg-blue-900/30 border border-blue-800/50">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-blue-700/50 data-[state=active]:text-blue-100 text-blue-300"
          >
            All Events
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-blue-700/50 data-[state=active]:text-blue-100 text-blue-300"
            >
              <div className="flex items-center space-x-1">
                {getCategoryIcon(category)}
                <span className="hidden sm:inline capitalize">
                  {formatCategoryName(category)}
                </span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory} className="space-y-4 mt-6">
          {/* Timeline Events */}
          <div className="space-y-4">
            {sortedEvents.map((event, index) => {
              const isExpanded = expandedEvents.has(event.id);
              const portrait = getPortraitForEvent(event);

              return (
                <Card
                  key={event.id}
                  className={`${getImportanceColor(
                    event.importance
                  )} border backdrop-blur-sm transition-all duration-200`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        {/* Timeline Connector */}
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              getCategoryColor(event.category).split(" ")[0]
                            } border-2 border-white`}
                          />
                          {index < sortedEvents.length - 1 && (
                            <div className="w-0.5 h-16 bg-blue-800/50 mt-2" />
                          )}
                        </div>

                        {/* Event Content */}
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-3">
                            <Badge
                              className={cn(
                                getCategoryColor(event.category),
                                "rounded-none text-md"
                              )}
                            >
                              {getCategoryIcon(event.category)}
                              <span className="ml-1 capitalize">
                                {formatCategoryName(event.category)}
                              </span>
                            </Badge>
                            <Badge
                              variant="outline"
                              className="border-blue-700 bg-blue-900/50 text-blue-300 text-md"
                            >
                              {event.year}
                            </Badge>
                            {event.importance === "critical" && (
                              <Badge className="bg-red-500 text-white">
                                <Star className="mr-1 h-3 w-3" />
                                Critical
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-blue-100">
                            {event.title}
                          </CardTitle>
                          <CardDescription className="text-blue-400">
                            {isExpanded
                              ? event.description
                              : `${event.description.slice(0, 150)}...`}
                          </CardDescription>
                        </div>

                        {/* Portrait Thumbnail */}
                        {portrait && (
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-blue-800/50 flex-shrink-0">
                            <Image
                              src={portrait.url || "/placeholder.svg"}
                              alt={portrait.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    {event.description.length > 150 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleEventExpansion(event.id)}
                        className="w-fit text-blue-400 hover:text-blue-300"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="mr-1 h-4 w-4" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="mr-1 h-4 w-4" />
                            Show More
                          </>
                        )}
                      </Button>
                    )}
                  </CardHeader>

                  {/* Expanded Content */}
                  {isExpanded && portrait && (
                    <CardContent className="pt-0">
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-900/20 border border-blue-800/50">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-blue-700">
                          <Image
                            src={portrait.url || "/placeholder.svg"}
                            alt={portrait.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-blue-100">
                            {portrait.title}
                          </p>
                          <p className="text-xs text-blue-400">
                            {portrait.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
});
