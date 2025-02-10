interface PortfolioDataType {
  id: number;
  title: string;
  images: string[];
  imgDesc: string;
  thumbnails: string[];
  description: string;
  category: string;

  // Details
  detail1?: string;
  detail2?: string;
  detail3?: string;
  detail4?: string;
  detail5?: string;

  // Spraying
  application?: string[];
  areaSize?: string[];
  sprayingType?: string;
  recomendation?: string[];
  dimesions?: string[];
  lance?: string;
  hose?: string[];
  warranty?: string;

  // Pump
  model?: string;
  pumpType?: string;
  maximumPressure?: string;
  openFlow?: string;
  chamberVolume?: string;
  material?: string;
  triggeringSystem?: string;
  pressureRegulationSystem?: string;

  // Battery
  batteryModel?: string;
  rechargeTime?: string;
  batteryType?: string;
  capacity?: string;
  ratedVoltage?: string;
  batteryWarranty?: string;

  // Engine
  enginetype?: string;
  engineOutputPower?: string;
  EngineMaxNetTorque?: string;
  coolingSystem?: string;
  ignitionSystem?: string;
  fuelTankCapacity?: string;
  engineOilCapacity?: string;
  sparkPlug?: string;
}

const sprayers_data: PortfolioDataType[] = [
  // Manual Sprayers
  {
    id: 1,
    title: "JACTO HD-16",
    images: ["/assets/img/sprayers/HD16-Blue.jpg"],
    imgDesc: "Bring all the efficiency of Jacto HD to your everyday life",
    thumbnails: [
      "/assets/img/HD16-Blue.jpg",
      "/assets/img/HD16-Blue.jpg",
      "/assets/img/HD16-Blue.jpg",
      "/assets/img/HD16-Blue.jpg",
      "/assets/img/HD16-Blue.jpg",
    ],
    description:
      "The HD backpack sprayer is ideal for everyday work. Being resistant and versatile, it has pumping option on both sides and compression chamber volume of 900 ml (30.4 oz), much more efficiency for your routine.",
    category: "Manual",

    // details
    detail1: "reache and maintain pressure with less pumping.",
    detail2:
      "greater versatility with the option of pumping on the right and left sides.",
    detail3:
      "produced with high quality materials and resistant to UV rays for longer life cycle. It has two versions: 16 and 20 liters.",

    // Spraying
    application: [
      "Cereals",
      "Livestock",
      "Sugar cane",
      "Orchards",
      "Coffee",
      "Seedlings (nurseries)",
      "Grape",
      "Banana",
      "Hardwoods",
      "Fruits",
      "Tobacco",
      "Forestry",
    ],
    areaSize: [
      "Up to 5 ha",
      "Up to 10 ha",
      "Up to 25 ha",
      "Up to 50 ha",
      "Up to 500 ha",
      "Above 500 ha",
    ],
    sprayingType: "Manual backpack sprayer",
    recomendation: ["Approved crop protection products"],
    dimesions: [
      "Tank 20 liters: GW: 4.3 Kg (9.46 lbs) and NW: 3.9 Kg (8.6 lbs)",
      "Tank 16 liters: GW: 4.6 Kg (10.14 lbs) and NW: 3.7 Kg (8.16 lbs)",
      "Tank opening diameter: 105 mm (4.13 in)",
      "Material: Polyethylene",
    ],
    lance: "Length: 600 mm (23.6 in)",
    hose: ["Length: 1,650 mm (65 in)"],
    warranty: "03 years - as per manual",

    // Pump
    model: "N/A",
    pumpType: "Piston",
    maximumPressure: "75 psi (5.1 bar)",
    openFlow: "N/A",
    chamberVolume: "900 ml (30.4 oz)",
    material: "Polyethilene",
  },
  {
    id: 2,
    title: "JACTO HH-5L",
    images: ["/assets/img/sprayers/hh-5.jpg"],
    imgDesc: "Bring all the efficiency of Jacto HD to your everyday life",
    thumbnails: [
      "/assets/img/sprayers/hh-5.jpg",
      "/assets/img/sprayers/hh-5.jpg",
      "/assets/img/sprayers/hh-5.jpg",
      "/assets/img/sprayers/hh-5.jpg",
      "/assets/img/sprayers/hh-5.jpg",
    ],
    description:
      "The Jacto HH-5L compression sprayer is portable and easy to use. Equipped with a piston-type pump, high-durability tank, adjustable cone nozzle, decompression valve for easy opening, and a wide funnel-type top for easy filling, the Jacto HH-5 is ideal for spraying small areas or individual plants.",
    category: "Manual",

    // details

    detail1: "reache and maintain pressure with less pumping.",
    detail2:
      "greater versatility with the option of pumping on the right and left sides.",
    detail3:
      "produced with high quality materials and resistant to UV rays for longer life cycle. It has two versions: 16 and 20 liters.",

    // Spraying
    application: [
      "Cereals",
      "Livestock",
      "Sugar cane",
      "Orchards",
      "Coffee",
      "Seedlings (nurseries)",
      "Grape",
      "Banana",
      "Hardwoods",
      "Fruits",
      "Tobacco",
      "Forestry",
    ],
    areaSize: ["N/A"],
    sprayingType: "Manual backpack sprayer",
    recomendation: ["Approved crop protection products"],
    dimesions: [
      "Length: 7.7 in (197 mm)",
      "Width: 7.7 in (197 mm)",
      "Height: 18.7 in (477 mm)",
      "Net weight: 3.3 lbs (1,5 kg)",
      "Material: Plastic",
    ],
    lance: "Length: 13.7 in (350 mm)",
    hose: ["Length: 64.9 in (1650 mm)"],
    warranty: "03 years - as per manual",

    // Pump
    model: "N/A",
    pumpType: "Piston",
    maximumPressure: "35 psi (2.4 bar)",
    openFlow: "N/A",
    chamberVolume: "1.3 gal (5 litros)",
    material: "Plastic",
  },
  {
    id: 3,
    title: "JACTO PJ-16",
    images: ["/assets/img/sprayers/pj-16-manual.jpg"],
    imgDesc:
      "Ideal for environmental health professionals who work with Pest Control.",
    thumbnails: [
      "/assets/img/sprayers/pj-16-manual.jpg",
      "/assets/img/sprayers/pj-16-manual.jpg",
      "/assets/img/sprayers/pj-16-manual.jpg",
      "/assets/img/sprayers/pj-16-manual.jpg",
      "/assets/img/sprayers/pj-16-manual.jpg",
    ],
    description:
      "The Jacto PJ-16U brings the quality and tradition of Jacto backpack sprayers, now applied to urban environments. Perfect for Pest Control professionals! This equipment was developed to meet the demands of professionals who need special seals for greater resistance to chemical products used in urban pest control. It has anti-corrosive paint, a stainless-steel spray lance, and a pressure mechanism made of brass, which protects against leaking during heavy work.",
    category: "Manual",

    // details
    detail1:
      "Special seals: are 5 times stronger compared to conventional Viton seals",
    detail2: "Hose: made of special PVC for greater chemical resistance.",
    detail3:
      "Internal stirrer: the solution is homogeneous throughout the application.",
    detail4:
      "Brass chamber: protects against leaking and ensures higher working pressure.",
    detail5:
      "Trigger: has a safety lock, brass needle, and removable handle that works as a key to assist in the assembly and maintenance of the sprayer.",

    // Spraying
    application: [
      "Fleas",
      "Ticks",
      "Termites",
      "Spiders",
      "Scorpions",
      "Urban Plagues",
      "Rodents",
      "Insects",
    ],
    areaSize: ["Varies"],
    sprayingType: "Professional manual backpack sprayer for Pest Control",
    recomendation: [
      "Mineral and vegetable solvers",
      "Pest control",
      "Disinfection",
    ],
    dimesions: [
      "Tank 16 liter (4.2 gal): GW: 5.3 kg (11.6 lbs) and NW: 4.9 kg (10.8 lbs)",
      "Tank opening diameter: 105 mm (4.1 in)",
      "Material: Polyethylene",
    ],
    lance: "Length: 600 mm (23.6 in)",
    hose: [
      "Length: 1,650 mm (65 in)",
      "Material: Special PVC",
      "Seals: FKM especial",
    ],
    warranty: "01 year - as per manual",

    // Pump
    model: "N/A",
    pumpType: "Double Piston",
    maximumPressure: "100 psi (6.8 bar)",
    openFlow: "N/A",
    chamberVolume: "600 ml (20.3 oz)",
    material: "Brass",
  },
  {
    id: 4,
    title: "JACTO XP-12",
    images: ["/assets/img/sprayers/xp-12.jpg"],
    imgDesc: "The lightest sprayer in the category.",
    thumbnails: [
      "/assets/img/sprayers/xp-12.jpg",
      "/assets/img/sprayers/xp-12.jpg",
      "/assets/img/sprayers/xp-12.jpg",
      "/assets/img/sprayers/xp-12.jpg",
      "/assets/img/sprayers/xp-12.jpg",
    ],
    description:
      "Jacto’s lightest and most ergonomic knapsack sprayer delivers high performance with less effort and fatigue for the operator. Ideal for both small and large applications.",
    category: "Manual",

    // details
    detail1:
      "Trigger Valve: Lightweight and tough with internal filter. Ideal for all-day work.",
    detail2:
      "Resistance: Impact, corrosion and UV resistant, high density polyethylene.",

    // Spraying
    application: [
      "Vegetables",
      "Fruits",
      "Orchards",
      "Tabacco",
      "Coffee",
      "Livestock",
      "Banana",
      "Grape",
      "Flowers",
      "Seedlings",
      "Cereal",
      "Sugarcane",
    ],
    areaSize: [
      "Up to 5 ha",
      "Up to 10 ha",
      "Up to 25 ha",
      "Up to 50 ha",
      "Up to 500 ha",
      "Above 500 ha",
    ],
    sprayingType: "Professional agrochemical pesticides",
    recomendation: ["Approved crop protection products"],
    dimesions: [
      "Tank 12 liters: GW: 4.1 kg (9 lbs) and NW: 3.5 kg (7.7 lbs)",
      "Tank 16 liters: GW: 4.2 kg (9.2 lbs) and NW: 3.6 kg (7.9 lbs)",
      "Tank 20 liters: GW: 4.4 kg (9.7 lbs) and NW: 3.7 kg (8.1 lbs)",
      "Tank opening diameter: 100 mm (3.9 in)",
      "Material: Polyethylene",
    ],
    lance: "Length: 600 mm (23.6 in)",
    hose: ["Length: 1350 mm (53.1 in)"],
    warranty: "03 years - as per manual",

    // Pump
    model: "N/A",
    pumpType: "Piston",
    maximumPressure: "75 psi (5.1 bar)",
    openFlow: "N/A",
    chamberVolume: "600 ml (20.3 oz)",
    material: "Polypropylene",
  },
  {
    id: 5,
    title: "JACTO XP-16",
    images: ["/assets/img/sprayers/xp-12.jpg"],
    imgDesc: "The lightest sprayer in the category.",
    thumbnails: [
      "/assets/img/sprayers/xp-12.jpg",
      "/assets/img/sprayers/xp-12.jpg",
      "/assets/img/sprayers/xp-12.jpg",
      "/assets/img/sprayers/xp-12.jpg",
      "/assets/img/sprayers/xp-12.jpg",
    ],
    description:
      "Jacto’s lightest and most ergonomic knapsack sprayer delivers high performance with less effort and fatigue for the operator. Ideal for both small and large applications.",
    category: "Manual",

    // details
    detail1:
      "Ergonomic & Lightweight: The XP-16 is designed for comfort and ease of use, being the lightest in its category to minimize operator fatigue",
    detail2:
      "High-Performance Spraying: Provides even and effective coverage, ensuring optimal results for various spraying tasks.",
    detail3:
      "Versatile Spot Spraying: Ideal for focused applications, allowing you to efficiently manage weeds, pests, and diseases in specific areas.",

    // Spraying
    application: [
      "Vegetables",
      "Fruits",
      "Orchards",
      "Tabacco",
      "Coffee",
      "Livestock",
      "Banana",
      "Grape",
      "Flowers",
      "Seedlings",
      "Cereal",
      "Sugarcane",
    ],
    areaSize: [
      "Up to 5 ha",
      "Up to 10 ha",
      "Up to 25 ha",
      "Up to 50 ha",
      "Up to 500 ha",
      "Above 500 ha",
    ],
    sprayingType: "Professional agrochemical pesticides",
    recomendation: ["Approved crop protection products"],
    dimesions: [
      "Tank 12 liters: GW: 4.1 kg (9 lbs) and NW: 3.5 kg (7.7 lbs)",
      "Tank 16 liters: GW: 4.2 kg (9.2 lbs) and NW: 3.6 kg (7.9 lbs)",
      "Tank 20 liters: GW: 4.4 kg (9.7 lbs) and NW: 3.7 kg (8.1 lbs)",
      "Tank opening diameter: 100 mm (3.9 in)",
      "Material: Polyethylene",
    ],
    lance: "Length: 600 mm (23.6 in)",
    hose: ["Length: 1350 mm (53.1 in)"],
    warranty: "03 years - as per manual",

    // Pump
    model: "N/A",
    pumpType: "Piston",
    maximumPressure: "75 psi (5.1 bar)",
    openFlow: "N/A",
    chamberVolume: "600 ml (20.3 oz)",
    material: "Polypropylene",
  },

  // Battery Operated Sprayers
  {
    id: 6,
    title: "JACTO DJB-16/20",
    images: ["/assets/img/sprayers/DJP.png"],
    imgDesc: "Battery-Powered Backpack Doser and Sprayer",
    thumbnails: [
      "/assets/img/sprayers/DJP.png",
      "/assets/img/sprayers/DJP.png",
      "/assets/img/sprayers/DJP.png",
      "/assets/img/sprayers/DJP.png",
      "/assets/img/sprayers/DJP.png",
    ],
    description:
      "All the tradition, quality and ease of operation of Jacto's battery backpack sprayers is now applied to spraying urban environments for pest control. The Jacto PJB-16U was developed to meet the request of Pest Control professionals who need special seals for greater resistance to chemical attack associated with pest-control chemicals, and who need to spray in places of difficult access. With no need for pumping, the PJB-16U can not only allow the operator to work in tight spots, but also delivers complete spray consistency.",
    category: "Battery Operated",

    // details
    detail1:
      "The Jacto DJB comes equipped with a fully intuitive panel. Here, the operator turns the equipment on/off quickly and easily, switches to dosing or spraying mode with just one button, checks the battery level and activates the timer.",
    detail2:
      "The Jacto DJB has a side nozzle inlet. Combined with the quick-attach system, these details allow for greater agility for the operator before and after the operation!",

    // Spraying
    application: ["Coffee", "Seedlings", "Vegetables", "Fruit tree", "Tobacco"],
    areaSize: [
      "Up to 10 ha",
      "Up to 25 ha",
      "Up to 50 ha",
      "Up to 200 ha",
      "Above 500 ha",
    ],
    sprayingType: "Battery backpack doser and sprayer",
    recomendation: ["Approved crop protection products"],
    dimesions: [
      "Tank 20 liters: GW: 5kg (11 lbs) and NW: 4.9 Kg (10.8lbs)",
      "Tank 16 liters: GW: 5.5 Kg (12.1 lbs) and NW: 4.8 Kg (10.6 lbs)",
      "Material: Polyethylene",
    ],
    lance: "Length: 600 mm (23.6 in)",
    hose: ["Length: 1.350 mm (53.1 in)"],
    warranty: "03 years - as per manual",

    // Pump
    model: "JEP-80",
    pumpType: "Diaphragm",
    maximumPressure: "60 psi (4.8 bar)",
    openFlow: "2.1 liters (71 oz.) / minute",
    chamberVolume: "N/A",
    material: "N/A",

    // Battery
    batteryModel: "JB-1680",
    rechargeTime: "5 hours",
    batteryType: "Rechargeable Lithium-ion",
    capacity: "84.3 W.h - 5.8 A.h",
    ratedVoltage: "14,54 V (16,4 V max.)",
    batteryWarranty: "03 years - as per manual",
  },
  {
    id: 7,
    title: "JACTO PJB-16/20",
    images: ["/assets/img/sprayers/PJB.png"],
    imgDesc:
      "More efficiency, productivity and convenience for urban pest control operations.",
    thumbnails: [
      "/assets/img/sprayers/PJB.png",
      "/assets/img/sprayers/PJB.png",
      "/assets/img/sprayers/PJB.png",
      "/assets/img/sprayers/PJB.png",
      "/assets/img/sprayers/PJB.png",
    ],
    description:
      "All the tradition, quality and ease of operation of Jacto's battery backpack sprayers is now applied to spraying urban environments for pest control. The Jacto PJB-16U was developed to meet the request of Pest Control professionals who need special seals for greater resistance to chemical attack associated with pest-control chemicals, and who need to spray in places of difficult access. With no need for pumping, the PJB-16U can not only allow the operator to work in tight spots, but also delivers complete spray consistency.",
    category: "Battery Operated",

    // details
    detail1:
      "Electronic panel: with micro pressure regulation and battery level indicator.",
    detail2:
      "Battery: developed with rechargeable Li-ion that is easy to remove.",
    detail3:
      "Special seals: our FKM seals are 5 times more chemical resistant as compared to conventional Viton® seals.",
    detail4: "Hose: made of special PVC for greater chemical resistance.",
    detail5:
      "Trigger: equipped with a safety lock, brass needle and removable handle that has double-duty as a wrench used for trigger-valve maintenance.",

    // Spraying category
    application: [
      "Fleas",
      "Ticks",
      "Termites",
      "Spiders",
      "Scorpions",
      "Urban Plagues",
      "Rodents",
      "Insects",
    ],
    areaSize: ["Varies"],
    sprayingType: "Battery backpack sprayer for Pest Control",
    recomendation: ["Fumigation", "Pest control", "Disinfection"],
    dimesions: [
      "Tank 16 liters (4 gallons): GW: 5kg (11 lbs) and NW: 4.4kg (9.7 lbs)",
      "Tank opening diameter: 115 mm (4.5 in)",
      "Material: Polyethylene",
    ],
    lance: "Length: 600 mm (23.6 in)",
    hose: [
      "Length: 1,650 mm (65 in)",
      "Material: Special PVC",
      "Seals: FKM especial",
    ],
    warranty: "01 year - as per manual",

    // Pump category
    model: "JEP-80U",
    pumpType: "Diaphragm",
    maximumPressure: "70 psi (4.8 bar)",
    openFlow: "2.1 liters (71 oz.) / minute",
    chamberVolume: "N/A",
    material: "N/A",

    // Battery category
    batteryModel: "JB-1680",
    rechargeTime: "5 hours",
    batteryType: "Rechargeable Lithium-ion",
    capacity: "84.3 W.h - 5.8 A.h",
    ratedVoltage: "14,54 V (16,4 V max.)",
    batteryWarranty: "03 years - as per manual",
  },

  // Motorized Power Sprayers
  {
    id: 8,
    title: "JACTO PJM-25",
    images: ["/assets/img/sprayers/PJM.jpg"],
    imgDesc:
      "Motorized Backpack Sprayer Power and performance for spraying your crops.",
    thumbnails: [
      "/assets/img/sprayers/PJM.jpg",
      "/assets/img/sprayers/PJM.jpg",
      "/assets/img/sprayers/PJM.jpg",
      "/assets/img/sprayers/PJM.jpg",
      "/assets/img/sprayers/PJM.jpg",
    ],
    description:
      "The new PJM-25 Motorized Sprayer was designed to meet the needs of producers who need high power and efficiency for spraying. With 25-liter tank capacity, up to 360psi working pressure, 4-stroke engine (35 cc), maximum 10 L/min flowrate, 2 technical nozzles (ATR 2.0), increased agility, and wide spray coverage will be within your reach.",
    category: "Motorized Power",

    // details
    detail1:
      "Ceramic Piston Pump: 10L/min flowrate at 7,000RPM, with greaseless lubrication system (grease-free).",
    detail2:
      "Dual ATR 2.0 Nozzles: Manufactured in high wear resistance ceramic, it maintains exceptional application quality even at high pressures.",
    detail3:
      "Improved Performance: The engine and pump assembly provides high flow and pressure and enables using two lances* simultaneously, further increasing the spraying performance.",
    detail4:
      "Parts and Maintenance: An authorized technical service network and easily accessible spare parts.",

    // Spraying
    application: [
      "Vegetables",
      "Fruit trees",
      "Orchards",
      "Tobacco",
      "Coffee",
      "Banana",
      "Grape",
      "Seedlings",
      "Cereal",
      "Sugar cane",
      "Livestock",
    ],
    areaSize: [
      "Up to 10 ha",
      "Up to 25 ha",
      "Up to 50 ha",
      "Up to 200 ha",
      "Above 500 ha",
    ],
    sprayingType: "Motorized knapsack sprayer",
    recomendation: ["Approved agrochemical pesticides"],
    dimesions: [
      "Tank 25 liters: GW: 13.3 kg (29.3 lbs) and NW: 11.5 kg (25.3 lbs)",
      "Tank opening diameter: 150 mm (6 in)",
      "Material: Polyethylene",
    ],
    lance: "Length: 853 mm (33.5 in)",
    hose: ["Length: 1,600 mm (62.9 in)"],
    warranty: "01 year - as per manual",

    // Pump
    pumpType: "Piston",
    material: "Ceramics",
    maximumPressure: "360 psi (25 bar)",
    openFlow: "10 liters/minute (7000 RPM)",
    chamberVolume: "900 ml (30.4 oz)",
    triggeringSystem: "Automatic centrifugal clutch",
    pressureRegulationSystem: "Check valve",

    // Engine
    enginetype: "HONDA 4-stroke",
    engineOutputPower: "1.3 hp / 7,000 rpm",
    EngineMaxNetTorque: "1.6 Nm / 5,500 rpm",
    coolingSystem: "Forced air circulation",
    ignitionSystem: "A-magnet, Transistorized",
    fuelTankCapacity: "0.63 L",
    engineOilCapacity: "0.1 L (3.3 oz)",
    sparkPlug: "NGK: CMR5H",
  },
  {
    id: 9,
    title: "JACTO PJM-20",
    images: ["/assets/img/sprayers/PJM-25.jpg"],
    imgDesc:
      "Motorized Backpack Sprayer Power and performance for spraying your crops.",
    thumbnails: [
      "/assets/img/sprayers/PJM-25.jpg",
      "/assets/img/sprayers/PJM-25.jpg",
      "/assets/img/sprayers/PJM-25.jpg",
      "/assets/img/sprayers/PJM-25.jpg",
      "/assets/img/sprayers/PJM-25.jpg",
    ],
    description:
      "The new PJM-20 Motorized Sprayer was designed to meet the needs of producers who need high power and efficiency for spraying. With 25-liter tank capacity, up to 360psi working pressure, 4-stroke engine (35 cc), maximum 10 L/min flowrate, 2 technical nozzles (ATR 2.0), increased agility, and wide spray coverage will be within your reach.",
    category: "Motorized Power",

    // details
    detail1:
      "Ceramic Piston Pump: 10L/min flowrate at 7,000RPM, with greaseless lubrication system (grease-free).",
    detail2:
      "Dual ATR 2.0 Nozzles: Manufactured in high wear resistance ceramic, it maintains exceptional application quality even at high pressures.",
    detail3:
      "Improved Performance: The engine and pump assembly provides high flow and pressure and enables using two lances* simultaneously, further increasing the spraying performance.",
    detail4:
      "Parts and Maintenance: An authorized technical service network and easily accessible spare parts.",

    // Spraying
    application: [
      "Vegetables",
      "Fruit trees",
      "Orchards",
      "Tobacco",
      "Coffee",
      "Banana",
      "Grape",
      "Seedlings",
      "Cereal",
      "Sugar cane",
      "Livestock",
    ],
    areaSize: [
      "Up to 10 ha",
      "Up to 25 ha",
      "Up to 50 ha",
      "Up to 200 ha",
      "Above 500 ha",
    ],
    sprayingType: "Motorized knapsack sprayer",
    recomendation: ["Approved agrochemical pesticides"],
    dimesions: [
      "Tank 25 liters: GW: 13.3 kg (29.3 lbs) and NW: 11.5 kg (25.3 lbs)",
      "Tank opening diameter: 150 mm (6 in)",
      "Material: Polyethylene",
    ],
    lance: "Length: 853 mm (33.5 in)",
    hose: ["Length: 1,600 mm (62.9 in)"],
    warranty: "01 year - as per manual",

    // Pump
    pumpType: "Piston",
    material: "Ceramics",
    maximumPressure: "360 psi (25 bar)",
    openFlow: "10 liters/minute (7000 RPM)",
    chamberVolume: "900 ml (30.4 oz)",
    triggeringSystem: "Automatic centrifugal clutch",
    pressureRegulationSystem: "Check valve",

    // Engine
    enginetype: "HONDA 4-stroke",
    engineOutputPower: "1.3 hp / 7,000 rpm",
    EngineMaxNetTorque: "1.6 Nm / 5,500 rpm",
    coolingSystem: "Forced air circulation",
    ignitionSystem: "A-magnet, Transistorized",
    fuelTankCapacity: "0.63 L",
    engineOilCapacity: "0.1 L (3.3 oz)",
    sparkPlug: "NGK: CMR5H",
  },
];

export default sprayers_data;
