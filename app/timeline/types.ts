export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  type: "major" | "conflict" | "discovery" | "contact";
  icon: any;
  details: {
    location: string;
    significance: string;
    casualties?: string;
    keyFigures: string[];
    aftermath: string;
    longTermEffects: string;
    relatedEvents?: string[];
    classifiedInfo?: string;
    sources?: string[];
    archivalNotes?: string;
    culturalImpact?: string;
    technologicalImpact?: string;
    politicalImpact?: string;
    economicImpact?: string;
    images?: string[];
  };
};

export type TimelineEra = {
  era: string;
  description?: string;
  significance?: string;
  events: TimelineEvent[];
};
