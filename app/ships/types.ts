export interface ShipWeapon {
  name: string;
  type: string;
  damage: string;
  description: string;
}

export interface ShipSystem {
  name: string;
  status: "Operational" | "Damaged" | "Upgraded";
  description: string;
}

export interface ShipDetails {
  name: string;
  class: string;
  affiliation: string;
  status: string;
  image: string;
  description: string;
  specifications: {
    length: string;
    width: string;
    height: string;
    mass: string;
    crew: string;
    maxSpeed: string;
    armament: ShipWeapon[];
    defenses: string[];
    powerCore: string;
    propulsion: string;
  };
  systems: ShipSystem[];
  history: {
    commissioned: string;
    notableActions: string[];
    commanders: string[];
    battles: string[];
  };
  capabilities: string[];
  specialFeatures: string[];
}
