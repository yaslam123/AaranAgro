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
}

const tools_data = [
  // Modern Farming Tools
  {
    id: 1,
    title: "Dam Liners",
    images: ["/assets/img/tools/liners.jpg"],
    imgDesc: "High-quality liners for water retention in dams and ponds.",
    thumbnails: [
      "/assets/img/tools/liners.jpg",
      "/assets/img/tools/liners.jpg",
    ],
    description:
      "Durable dam liners to prevent water seepage, ensuring long-term water storage.",
    category: "Modern Farming Tools",
    detail1: "UV-resistant material for durability under sunlight.",
    detail2: "Customizable sizes to fit any pond or dam.",
    detail3: "Eco-friendly and tear-resistant material.",
  },
  {
    id: 2,
    title: "Drip Irrigation Pipes",
    images: ["/assets/img/tools/irrigationPipes.jpg"],
    imgDesc: "Efficient pipes for water conservation and targeted irrigation.",
    thumbnails: [
      "/assets/img/tools/irrigationPipes.jpg",
      "/assets/img/tools/irrigationPipes.jpg",
    ],
    description:
      "Innovative pipes for drip irrigation, designed to optimize water usage and enhance crop growth.",
    category: "Modern Farming Tools",
    detail1: "Made from high-density polyethylene for durability.",
    detail2: "Drip emitters for uniform water distribution.",
    detail3: "Clog-resistant for low-maintenance operation.",
  },
  {
    id: 3,
    title: "Farmer Clothes & Boots",
    images: ["/assets/img/tools/bootsCloth.jpg"],
    imgDesc: "Protective clothing and boots for farming activities.",
    thumbnails: [
      "/assets/img/tools/bootsCloth.jpg",
      "/assets/img/tools/bootsCloth.jpg",
    ],
    description:
      "Durable and protective clothing and footwear designed for safety and comfort in farming.",
    category: "Modern Farming Tools",
    detail1: "Breathable fabric for hot climates.",
    detail2: "Anti-slip soles for wet or muddy conditions.",
    detail3: "Reinforced stitching for long-lasting wear.",
  },
  {
    id: 4,
    title: "JACTO GM-3 Fertilizers Granular Spreader",
    images: ["/assets/img/tools/jacto-farti.jpg"],
    imgDesc: "High-performance spreader for fertilizers.",
    thumbnails: [
      "/assets/img/tools/jacto-farti.jpg",
      "/assets/img/tools/jacto-farti.jpg",
    ],
    description:
      "Precision granular spreader for uniform fertilizer application.",
    category: "Modern Farming Tools",

    detail1: "Adjustable spread width for versatile use.",
    detail2: "Corrosion-resistant hopper for durability.",
    detail3: "Ergonomic handle for comfortable use.",
  },
  {
    id: 5,
    title: "Plastic Mulching",
    images: ["/assets/img/tools/plasticMulch.jpg"],
    imgDesc: "Effective tool for reducing soil erosion and weed growth.",
    thumbnails: [
      "/assets/img/tools/plasticMulch.jpg",
      "/assets/img/tools/plasticMulch.jpg",
    ],
    description:
      "High-quality mulching film designed to conserve soil moisture and improve crop yield.",
    category: "Modern Farming Tools",

    detail1: "Reduces evaporation and soil temperature fluctuations.",
    detail2: "Durable polyethylene material for extended use.",
    detail3: "Lightweight and easy to apply and remove.",
  },
  {
    id: 6,
    title: "Sprinkler Irrigation Pipes",
    images: ["/assets/img/tools/springlePipes.jpg"],
    imgDesc: "Efficient pipes for sprinkler irrigation systems.",
    thumbnails: [
      "/assets/img/tools/springlePipes.jpg",
      "/assets/img/tools/springlePipes.jpg",
    ],
    description:
      "Durable and efficient pipes for evenly distributing water through sprinkler systems.",
    category: "Modern Farming Tools",

    detail1: "Made from high-quality PVC material.",
    detail2: "Designed for even water distribution.",
    detail3: "Easy to install and maintain.",
  },
  {
    id: 7,
    title: "JACTO PM-11 Pruner",
    images: ["/assets/img/tools/jactoPM.jpg"],
    imgDesc: "A lightweight pruner designed for precision cutting.",
    thumbnails: [
      "/assets/img/tools/jactoPM.jpg",
      "/assets/img/tools/jactoPM.jpg",
    ],
    description:
      "JACTO PM-11 Pruner is a durable and efficient tool for pruning trees and shrubs.",
    category: "Modern Farming Tools",
    detail1: "Made with high-carbon steel for long-lasting sharpness.",
    detail2: "Ergonomic handle design for comfortable use.",
    detail3: "Ideal for small and medium-sized branches.",
  },
  {
    id: 8,
    title: "JACTO PM-20 Pruner",
    images: ["/assets/img/tools/jactoPM20.jpg"],
    imgDesc: "A durable pruner for handling tough pruning tasks.",
    thumbnails: [
      "/assets/img/tools/jactoPM20.jpg",
      "/assets/img/tools/jactoPM20.jpg",
    ],
    description:
      "The JACTO PM-20 Pruner is built to tackle heavy-duty pruning efficiently.",
    category: "Modern Farming Tools",
    detail1: "Strong steel blade for clean and precise cuts.",
    detail2: "Non-slip grip handle for safety during operation.",
    detail3: "Perfect for thicker branches and dense shrubs.",
  },
  {
    id: 9,
    title: "JACTO PM-25W Pruner",
    images: ["/assets/img/tools/jactoPM25.jpg"],
    imgDesc: "A versatile pruner suitable for various cutting tasks.",
    thumbnails: [
      "/assets/img/tools/jactoPM25.jpg",
      "/assets/img/tools/jactoPM25.jpg",
    ],
    description:
      "The JACTO PM-25W Pruner offers reliability and precision for pruning jobs.",
    category: "Modern Farming Tools",
    detail1: "Adjustable blade tension for versatile pruning tasks.",
    detail2: "Lightweight design reduces user fatigue.",
    detail3: "Designed for easy maintenance and durability.",
  },
  {
    id: 10,
    title: "JACTO PM-30 Pruner",
    images: ["/assets/img/tools/jactoPM30.jpg"],
    imgDesc: "A powerful pruner for large-scale pruning operations.",
    thumbnails: [
      "/assets/img/tools/jactoPM30.jpg",
      "/assets/img/tools/jactoPM30.jpg",
    ],
    description:
      "The JACTO PM-30 Pruner ensures high performance and durability for professional pruning.",
    category: "Modern Farming Tools",
    detail1: "High-strength blade for cutting thicker branches.",
    detail2: "Ergonomic grip for extended usage without strain.",
    detail3: "Suitable for professional landscapers and farmers.",
  },
  {
    id: 11,
    title: "JACTO PR-40 Battery Operated Pruner",
    images: ["/assets/img/tools/jactoPR40.jpg"],
    imgDesc: "A battery-operated pruner for effortless cutting.",
    thumbnails: [
      "/assets/img/tools/jactoPR40.jpg",
      "/assets/img/tools/jactoPR40.jpg",
    ],
    description:
      "JACTO PR-40 Pruner provides convenience and efficiency with battery-powered operation.",
    category: "Modern Farming Tools",
    detail1: "Rechargeable battery ensures extended usage.",
    detail2: "High-torque motor for cutting thicker branches with ease.",
    detail3: "Lightweight design for comfortable handling.",
  },
  {
    id: 12,
    title: "Nursery Containers",
    images: ["/assets/img/tools/NurseryCont.jpg"],
    imgDesc: "Durable containers for growing seedlings and plants.",
    thumbnails: [
      "/assets/img/tools/NurseryCont.jpg",
      "/assets/img/tools/NurseryCont.jpg",
    ],
    description:
      "High-quality nursery containers designed for optimal root development.",
    category: "Modern Farming Tools",
    detail1: "Available in various sizes for diverse planting needs.",
    detail2: "Made from UV-stabilized plastic for durability.",
    detail3: "Drainage holes ensure proper aeration and water flow.",
  },
  {
    id: 13,
    title: "Plant Pots",
    images: ["/assets/img/tools/plantPots.jpg"],
    imgDesc: "Sturdy pots for planting and decorative purposes.",
    thumbnails: [
      "/assets/img/tools/plantPots.jpg",
      "/assets/img/tools/plantPots.jpg",
    ],
    description:
      "Plant pots made from durable materials, ideal for indoor and outdoor use.",
    category: "Modern Farming Tools",
    detail1: "Lightweight and easy to handle.",
    detail2: "Designed for maximum root aeration.",
    detail3: "Available in various colors and sizes for aesthetic appeal.",
  },
  {
    id: 14,
    title: "Seedling Bags",
    images: ["/assets/img/tools/SeedlingBags.jpg"],
    imgDesc: "Eco-friendly bags for seedling growth and transplantation.",
    thumbnails: [
      "/assets/img/tools/SeedlingBags.jpg",
      "/assets/img/tools/SeedlingBags.jpg",
    ],
    description:
      "Seedling bags designed to protect and nurture young plants during early growth stages.",
    category: "Modern Farming Tools",
    detail1: "Biodegradable material for eco-friendly use.",
    detail2: "Ideal for growing saplings and small plants.",
    detail3: "Reinforced seams for added durability.",
  },

  // Farm Tools
  {
    id: 15,
    title: "Farmer Boots",
    images: ["/assets/img/tools/farmerBoots.jpg"],
    imgDesc:
      "Essential footwear for farmers, providing comfort and protection.",
    thumbnails: [
      "/assets/img/tools/farmerBoots.jpg",
      "/assets/img/tools/farmerBoots.jpg",
    ],
    description:
      "Durable and comfortable boots designed to protect farmers during agricultural activities.",
    category: "Farm Tools",
    detail1: "Made from high-quality rubber for durability.",
    detail2: "Waterproof design to keep feet dry during wet conditions.",
    detail3: "Non-slip soles for stability on muddy terrains.",
  },
  {
    id: 16,
    title: "Handling Seedling Tool",
    images: ["/assets/img/tools/seedlingTrans.jpg"],
    imgDesc: "A tool designed to handle seedlings efficiently and carefully.",
    thumbnails: [
      "/assets/img/tools/seedlingTrans.jpg",
      "/assets/img/tools/seedlingTrans.jpg",
    ],
    description:
      "Specialized tool for handling and planting seedlings with ease and precision.",
    category: "Farm Tools",
    detail1: "Ergonomic handle for reduced hand fatigue.",
    detail2: "Lightweight design for easy handling.",
    detail3: "Rust-resistant material for long-term durability.",
  },
  {
    id: 17,
    title: "Watering Pot",
    images: ["/assets/img/tools/wateringPot.jpg"],
    imgDesc: "A simple yet vital tool for watering plants.",
    thumbnails: [
      "/assets/img/tools/wateringPot.jpg",
      "/assets/img/tools/wateringPot.jpg",
    ],
    description:
      "Sturdy watering pots designed to ensure even water distribution for plants.",
    category: "Farm Tools",
    detail1: "Anti-leak spout for precision watering.",
    detail2: "Available in multiple sizes for diverse needs.",
    detail3: "Durable plastic material for extended use.",
  },
];

export default tools_data;
