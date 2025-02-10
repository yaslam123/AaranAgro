interface PortfolioDataType {
  id: number;
  title: string;
  images: string[];
  imgDesc: string;
  thumbnails: string[];
  description: string;
  category: string;

  enviroment: string;
  suitableClimate: string;
  germinationTime: string;
  sowingDepth: string;
  betweenSpaces: string;
  harvestingTime: string;
}

const seeds_data: PortfolioDataType[] = [
  {
    id: 1,
    title: "Beetroots",
    images: ["/assets/img/OPV/betrot.jpg"],
    imgDesc: "A versatile and nutrient-rich root vegetable.",
    thumbnails: [
      "/assets/img/OPV/betrot.jpg",
      "/assets/img/OPV/betrot.jpg",
      "/assets/img/OPV/betrot.jpg",
      "/assets/img/OPV/betrot.jpg",
      "/assets/img/OPV/betrot.jpg",
      "/assets/img/OPV/betrot.jpg",
    ],
    description:
      "Beetroots are an excellent source of nutrients, grown in tropical environments with optimal conditions for high yields.",
    enviroment: "Tropical",
    suitableClimate: "18-24°C",
    germinationTime: "5 Days",
    sowingDepth:
      "2.5cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "30cm between rows, 15cm between plants.",
    harvestingTime:
      "50-60 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 2,
    title: "Cabbages",
    images: ["/assets/img/OPV/Cabbages.jpg"],
    imgDesc: "A leafy vegetable packed with essential nutrients.",
    thumbnails: [
      "/assets/img/OPV/Cabbages.jpg",
      "/assets/img/OPV/Cabbages.jpg",
      "/assets/img/OPV/Cabbages.jpg",
      "/assets/img/OPV/Cabbages.jpg",
      "/assets/img/OPV/Cabbages.jpg",
      "/assets/img/OPV/Cabbages.jpg",
    ],
    description:
      "Cabbages are nutrient-rich leafy vegetables, ideal for tropical climates and grown for their wide culinary uses.",
    enviroment: "Tropical",
    suitableClimate: "17-23°C",
    germinationTime: "10 Days",
    sowingDepth:
      "1cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "45cm between rows, 30cm between plants.",
    harvestingTime:
      "80-180 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 3,
    title: "Carrots",
    images: ["/assets/img/OPV/Carrots.jpg"],
    imgDesc: "A root vegetable known for its sweet and crunchy texture.",
    thumbnails: [
      "/assets/img/OPV/Carrots.jpg",
      "/assets/img/OPV/Carrots.jpg",
      "/assets/img/OPV/Carrots.jpg",
      "/assets/img/OPV/Carrots.jpg",
      "/assets/img/OPV/Carrots.jpg",
    ],
    description:
      "Carrots are a popular root vegetable rich in vitamins, ideal for tropical climates and widely used in culinary dishes.",
    enviroment: "Tropical",
    suitableClimate: "18-25°C",
    germinationTime: "21 Days",
    sowingDepth:
      "1cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate",
    betweenSpaces: "30cm between rows, 20cm between plants.",
    harvestingTime:
      "60-80 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 4,
    title: "Chinese Reddish",
    images: ["/assets/img/OPV/Daikon.jpg"],
    imgDesc:
      "A fast-growing root vegetable with a crisp texture and spicy flavor.",
    thumbnails: [
      "/assets/img/OPV/Daikon.jpg",
      "/assets/img/OPV/Daikon.jpg",
      "/assets/img/OPV/Daikon.jpg",
      "/assets/img/OPV/Daikon.jpg",
      "/assets/img/OPV/Daikon.jpg",
    ],
    description:
      "Chinese Reddish is a nutritious root vegetable known for its quick growth and rich, peppery taste, ideal for tropical climates.",
    enviroment: "Tropical",
    suitableClimate: "18-30°C",
    germinationTime: "4 Days",
    sowingDepth:
      "1cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "10-20cm between rows, 20-30cm between plants.",
    harvestingTime:
      "50-60 days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 5,
    title: "Coriander",
    images: ["/assets/img/OPV/Coriander.jpg"],
    imgDesc: "A fragrant herb widely used for culinary and medicinal purposes.",
    thumbnails: [
      "/assets/img/OPV/Coriander.jpg",
      "/assets/img/OPV/Coriander.jpg",
      "/assets/img/OPV/Coriander.jpg",
      "/assets/img/OPV/Coriander.jpg",
      "/assets/img/OPV/Coriander.jpg",
    ],
    description:
      "Coriander is a versatile herb known for its fresh aroma and flavorful leaves, commonly used in cooking and herbal medicine.",
    enviroment: "Tropical",
    suitableClimate: "20-25°C",
    germinationTime: "21 Days",
    sowingDepth:
      "1cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "15cm between rows, 10cm between plants.",
    harvestingTime:
      "40-45 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 6,
    title: "Cucumber",
    images: ["/assets/img/OPV/Cucumber.jpg"],
    imgDesc: "A refreshing and hydrating vegetable with high water content.",
    thumbnails: [
      "/assets/img/OPV/Cucumber.jpg",
      "/assets/img/OPV/Cucumber.jpg",
      "/assets/img/OPV/Cucumber.jpg",
      "/assets/img/OPV/Cucumber.jpg",
      "/assets/img/OPV/Cucumber.jpg",
    ],
    description:
      "Cucumber is a widely cultivated vegetable known for its crisp texture and cooling properties, ideal for salads and fresh consumption.",
    enviroment: "Tropical",
    suitableClimate: "25-35°C",
    germinationTime: "10 Days",
    sowingDepth:
      "2cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "180cm between rows, 120cm between plants.",
    harvestingTime:
      "50-70 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 7,
    title: "Eggplant",
    images: ["/assets/img/OPV/Eggplant.jpg"],
    imgDesc: "A nutrient-rich vegetable known for its versatility in cooking.",
    thumbnails: [
      "/assets/img/OPV/Eggplant.jpg",
      "/assets/img/OPV/Eggplant.jpg",
      "/assets/img/OPV/Eggplant.jpg",
      "/assets/img/OPV/Eggplant.jpg",
      "/assets/img/OPV/Eggplant.jpg",
    ],
    description:
      "Eggplant is a widely cultivated vegetable with a rich, meaty texture, making it an excellent ingredient for various dishes.",
    enviroment: "Tropical",
    suitableClimate: "20-30°C",
    germinationTime: "21 Days",
    sowingDepth:
      "2.5cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "85cm between rows, 60cm between plants.",
    harvestingTime:
      "100-120 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 8,
    title: "Elne Celery",
    images: ["/assets/img/OPV/Celery.jpg"],
    imgDesc: "A crisp and aromatic vegetable widely used in culinary dishes.",
    thumbnails: [
      "/assets/img/OPV/Celery.jpg",
      "/assets/img/OPV/Celery.jpg",
      "/assets/img/OPV/Celery.jpg",
      "/assets/img/OPV/Celery.jpg",
      "/assets/img/OPV/Celery.jpg",
    ],
    description:
      "Elne Celery is a flavorful and nutrient-rich vegetable, known for its crunchy texture and use in soups, salads, and seasonings.",
    enviroment: "Tropical",
    suitableClimate: "18-24°C",
    germinationTime: "5 Days",
    sowingDepth:
      "2.5cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "30cm between rows, 15cm between plants.",
    harvestingTime:
      "50-60 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 9,
    title: "Grand Vert Basil",
    images: ["/assets/img/OPV/Basil.jpg"],
    imgDesc: "A fragrant herb known for its rich aroma and culinary uses.",
    thumbnails: [
      "/assets/img/OPV/Basil.jpg",
      "/assets/img/OPV/Basil.jpg",
      "/assets/img/OPV/Basil.jpg",
      "/assets/img/OPV/Basil.jpg",
      "/assets/img/OPV/Basil.jpg",
    ],
    description:
      "Grand Vert Basil is a flavorful herb commonly used in cooking, known for its strong aroma and medicinal benefits.",
    enviroment: "Tropical",
    suitableClimate: "18-24°C",
    germinationTime: "5 Days",
    sowingDepth:
      "2.5cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "30cm between rows, 15cm between plants.",
    harvestingTime:
      "50-60 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 10,
    title: "Hot Pepper",
    images: ["/assets/img/OPV/HotPepper.jpg"],
    imgDesc: "A spicy and flavorful vegetable widely used in cooking.",
    thumbnails: [
      "/assets/img/OPV/HotPepper.jpg",
      "/assets/img/OPV/HotPepper.jpg",
      "/assets/img/OPV/HotPepper.jpg",
      "/assets/img/OPV/HotPepper.jpg",
      "/assets/img/OPV/HotPepper.jpg",
    ],
    description:
      "Hot Pepper is a pungent and aromatic vegetable, commonly used to add spice and heat to a variety of dishes around the world.",
    enviroment: "Tropical",
    suitableClimate: "20-27°C",
    germinationTime: "2 weeks",
    sowingDepth:
      "1cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "40cm between rows, 15cm between plants.",
    harvestingTime:
      "82-90 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 11,
    title: "Lettuce",
    images: ["/assets/img/OPV/Lettuce.jpg"],
    imgDesc:
      "A leafy green vegetable known for its crisp texture and mild flavor.",
    thumbnails: [
      "/assets/img/OPV/Lettuce.jpg",
      "/assets/img/OPV/Lettuce.jpg",
      "/assets/img/OPV/Lettuce.jpg",
      "/assets/img/OPV/Lettuce.jpg",
      "/assets/img/OPV/Lettuce.jpg",
    ],
    description:
      "Lettuce is a nutritious and widely grown leafy vegetable, commonly used in salads, sandwiches, and wraps.",
    enviroment: "Tropical",
    suitableClimate: "18-23°C",
    germinationTime: "15 Days",
    sowingDepth:
      "1cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "40cm between rows, 15cm between plants.",
    harvestingTime:
      "45-70 Day Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 12,
    title: "Mint",
    images: ["/assets/img/OPV/Mint.jpg"],
    imgDesc:
      "A refreshing and aromatic herb widely used in cooking and herbal remedies.",
    thumbnails: [
      "/assets/img/OPV/Mint.jpg",
      "/assets/img/OPV/Mint.jpg",
      "/assets/img/OPV/Mint.jpg",
      "/assets/img/OPV/Mint.jpg",
      "/assets/img/OPV/Mint.jpg",
    ],
    description:
      "Mint is a fast-growing herb known for its cooling flavor and multiple culinary, medicinal, and aromatic uses.",
    enviroment: "Tropical",
    suitableClimate: "18-24°C",
    germinationTime: "5 Days",
    sowingDepth:
      "2.5cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "30cm between rows, 15cm between plants.",
    harvestingTime:
      "50-60 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 13,
    title: "Okra",
    images: ["/assets/img/OPV/Okra.jpg"],
    imgDesc: "A nutrient-rich vegetable known for its edible green pods.",
    thumbnails: [
      "/assets/img/OPV/Okra.jpg",
      "/assets/img/OPV/Okra.jpg",
      "/assets/img/OPV/Okra.jpg",
      "/assets/img/OPV/Okra.jpg",
      "/assets/img/OPV/Okra.jpg",
    ],
    description:
      "Okra is a widely grown vegetable valued for its fiber-rich pods, often used in soups, stews, and fried dishes.",
    enviroment: "Tropical",
    suitableClimate: "20-25°C",
    germinationTime: "12 Days",
    sowingDepth:
      "2cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "60cm between rows, 40cm between plants.",
    harvestingTime:
      "50-65 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 14,
    title: "Onions",
    images: ["/assets/img/OPV/Onions.jpg"],
    imgDesc:
      "A widely used vegetable known for its strong flavor and culinary versatility.",
    thumbnails: [
      "/assets/img/OPV/Onions.jpg",
      "/assets/img/OPV/whiteOnion.jpg",
      "/assets/img/OPV/Onions.jpg",
      "/assets/img/OPV/whiteOnion2.jpg",
      "/assets/img/OPV/Onions.jpg",
    ],
    description:
      "Onions are a staple ingredient in many cuisines, valued for their pungent flavor and health benefits.",
    enviroment: "Tropical",
    suitableClimate: "20-25°C",
    germinationTime: "11 Days",
    sowingDepth:
      "1cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "45cm between rows, 25cm between plants.",
    harvestingTime:
      "100-125 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 15,
    title: "Pumpkin",
    images: ["/assets/img/OPV/Pumpkin.jpg"],
    imgDesc:
      "A nutrient-rich vegetable known for its versatility in cooking and baking.",
    thumbnails: [
      "/assets/img/OPV/Pumpkin.jpg",
      "/assets/img/OPV/Pumpkin.jpg",
      "/assets/img/OPV/Pumpkin.jpg",
      "/assets/img/OPV/Pumpkin.jpg",
      "/assets/img/OPV/Pumpkin.jpg",
    ],
    description:
      "Pumpkin is a highly nutritious and widely cultivated vegetable, valued for its sweet flesh, seeds, and culinary applications.",
    enviroment: "Tropical",
    suitableClimate: "24-30",
    germinationTime: "10 Days",
    sowingDepth:
      "2.5cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "180-300cm between rows, 120-240cm between plants.",
    harvestingTime:
      "78-90 days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 16,
    title: "Rosemary",
    images: ["/assets/img/OPV/Rosemary.jpg"],
    imgDesc: "A fragrant herb widely used for culinary and medicinal purposes.",
    thumbnails: [
      "/assets/img/OPV/Rosemary.jpg",
      "/assets/img/OPV/Rosemary.jpg",
      "/assets/img/OPV/Rosemary.jpg",
      "/assets/img/OPV/Rosemary.jpg",
      "/assets/img/OPV/Rosemary.jpg",
    ],
    description:
      "Rosemary is a perennial herb known for its strong aroma and multiple uses in cooking, herbal medicine, and essential oils.",
    enviroment: "Tropical",
    suitableClimate: "18-24°C",
    germinationTime: "5 Days",
    sowingDepth:
      "2.5cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "30cm between rows, 15cm between plants.",
    harvestingTime:
      "50-60 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 17,
    title: "Squash",
    images: ["/assets/img/OPV/Squash.jpg"],
    imgDesc:
      "A versatile vegetable known for its rich flavor and high nutritional value.",
    thumbnails: [
      "/assets/img/OPV/Squash.jpg",
      "/assets/img/OPV/Squash.jpg",
      "/assets/img/OPV/Squash.jpg",
      "/assets/img/OPV/Squash.jpg",
      "/assets/img/OPV/Squash.jpg",
    ],
    description:
      "Squash is a widely cultivated vegetable, valued for its tender flesh and culinary versatility in soups, stews, and baked dishes.",
    enviroment: "Tropical",
    suitableClimate: "18-24°C",
    germinationTime: "5 Days",
    sowingDepth:
      "2.5cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "30cm between rows, 15cm between plants.",
    harvestingTime:
      "50-60 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 18,
    title: "Sweet Melon",
    images: ["/assets/img/OPV/Melon.jpg"],
    imgDesc:
      "A juicy and refreshing fruit known for its sweet flavor and high water content.",
    thumbnails: [
      "/assets/img/OPV/Melon.jpg",
      "/assets/img/OPV/Melon.jpg",
      "/assets/img/OPV/Melon.jpg",
      "/assets/img/OPV/Melon.jpg",
      "/assets/img/OPV/Melon.jpg",
    ],
    description:
      "Sweet Melon is a tropical fruit prized for its sweet and juicy flesh, perfect for fresh consumption and smoothies.",
    enviroment: "Tropical",
    suitableClimate: "24-30°C",
    germinationTime: "10 Days",
    sowingDepth:
      "2.5cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "180-300cm between rows, 120-240cm between plants.",
    harvestingTime:
      "78-90 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 19,
    title: "Sweet Pepper",
    images: ["/assets/img/OPV/SweetPepper.jpg"],
    imgDesc: "A vibrant and mildly sweet vegetable used in various cuisines.",
    thumbnails: [
      "/assets/img/OPV/SweetPepper.jpg",
      "/assets/img/OPV/SweetPepper.jpg",
      "/assets/img/OPV/SweetPepper.jpg",
      "/assets/img/OPV/SweetPepper.jpg",
      "/assets/img/OPV/SweetPepper.jpg",
    ],
    description:
      "Sweet Pepper is a colorful, nutrient-rich vegetable known for its crisp texture and sweet taste, widely used in salads, stir-fries, and sauces.",
    enviroment: "Tropical",
    suitableClimate: "20-27°C",
    germinationTime: "2 weeks",
    sowingDepth:
      "1cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "40cm between rows, 15cm between plants.",
    harvestingTime:
      "82-90 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 20,
    title: "Swiss Chard",
    images: ["/assets/img/OPV/SwissChard.jpg"],
    imgDesc:
      "A leafy green vegetable packed with essential vitamins and minerals.",
    thumbnails: [
      "/assets/img/OPV/SwissChard.jpg",
      "/assets/img/OPV/SwissChard.jpg",
      "/assets/img/OPV/SwissChard.jpg",
      "/assets/img/OPV/SwissChard.jpg",
      "/assets/img/OPV/SwissChard.jpg",
    ],
    description:
      "Swiss Chard is a nutrient-dense leafy green known for its vibrant stems and tender leaves, commonly used in salads, soups, and sautés.",
    enviroment: "Tropical",
    suitableClimate: "15-24°C",
    germinationTime: "10 Days",
    sowingDepth:
      "2cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "45cm between rows, 30cm between plants.",
    harvestingTime:
      "50-60 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 21,
    title: "Thyme",
    images: ["/assets/img/OPV/Thyme.jpg"],
    imgDesc: "A fragrant herb known for its culinary and medicinal benefits.",
    thumbnails: [
      "/assets/img/OPV/Thyme.jpg",
      "/assets/img/OPV/Thyme.jpg",
      "/assets/img/OPV/Thyme.jpg",
      "/assets/img/OPV/Thyme.jpg",
      "/assets/img/OPV/Thyme.jpg",
    ],
    description:
      "Thyme is an aromatic herb widely used in cooking, herbal teas, and natural remedies due to its rich flavor and health-boosting properties.",
    enviroment: "Tropical",
    suitableClimate: "18-24°C",
    germinationTime: "5 Days",
    sowingDepth:
      "2.5cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "30cm between rows, 15cm between plants.",
    harvestingTime:
      "50-60 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 22,
    title: "Tomato",
    images: ["/assets/img/fresh.jpg"],
    imgDesc: "A widely cultivated fruit known for its versatility in cooking.",
    thumbnails: [
      "/assets/img/fresh.jpg",
      "/assets/img/fresh.jpg",
      "/assets/img/fresh.jpg",
      "/assets/img/fresh.jpg",
      "/assets/img/fresh.jpg",
    ],
    description:
      "Tomatoes are a rich source of vitamins and antioxidants, used in a variety of culinary dishes including sauces, salads, and soups.",
    enviroment: "Tropical",
    suitableClimate: "26-29°C",
    germinationTime: "8 Days",
    sowingDepth:
      "2cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "90cm between rows, 60cm between plants.",
    harvestingTime:
      "60-85 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },
  {
    id: 23,
    title: "Watermelon",
    images: ["/assets/img/OPV/Watermelon.jpg"],
    imgDesc:
      "A refreshing and hydrating fruit rich in vitamins and antioxidants.",
    thumbnails: [
      "/assets/img/OPV/Watermelon.jpg",
      "/assets/img/OPV/Watermelon.jpg",
      "/assets/img/OPV/Watermelon.jpg",
      "/assets/img/OPV/Watermelon.jpg",
      "/assets/img/OPV/Watermelon.jpg",
    ],
    description:
      "Watermelon is a juicy fruit known for its high water content and sweet flavor, making it a popular choice for hydration and summer treats.",
    enviroment: "Tropical",
    suitableClimate: "21-29°C",
    germinationTime: "12 Days",
    sowingDepth:
      "3cm, And it's a good idea to sow two seeds per hole in case one doesn't germinate.",
    betweenSpaces: "1m between rows, 1m between plants",
    harvestingTime:
      "70-100 Days after germination and it depends how mature you want to harvest.",
    category: "OPV Seeds",
  },

  // hyprid seeds
  {
    id: 201,
    title: "Broccoli Isabela F1",
    images: ["/assets/img/hyprid/Broccoli.jpg"],
    imgDesc:
      "A high-yielding broccoli variety known for its compact, dark green heads.",
    thumbnails: ["/assets/img/hyprid/Broccoli.jpg"],
    description:
      "Broccoli Isabela F1 is a hybrid variety with excellent disease resistance, producing dense and flavorful florets.",
    enviroment: "Cool to moderate",
    suitableClimate: "15-22°C",
    germinationTime: "5-10 Days",
    sowingDepth: "1cm deep, sowing in moist soil for optimal growth.",
    betweenSpaces: "45cm between rows, 30cm between plants.",
    harvestingTime: "75-90 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 202,
    title: "Cabbage Vizir F1",
    images: ["/assets/img/hyprid/Cabbage.jpg"],
    imgDesc:
      "A fast-growing hybrid cabbage variety producing large, uniform heads.",
    thumbnails: ["/assets/img/hyprid/Cabbage.jpg"],
    description:
      "Cabbage Vizir F1 is a robust hybrid known for its disease resistance and firm, high-quality heads.",
    enviroment: "Cool to moderate",
    suitableClimate: "12-20°C",
    germinationTime: "7-10 Days",
    sowingDepth: "0.5-1cm deep in well-drained soil.",
    betweenSpaces: "50cm between rows, 40cm between plants.",
    harvestingTime: "80-100 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 203,
    title: "Cauliflower Olymp F1",
    images: ["/assets/img/hyprid/Cauliflower.jpg"],
    imgDesc: "A premium hybrid cauliflower with dense, white curds.",
    thumbnails: ["/assets/img/hyprid/Cauliflower.jpg"],
    description:
      "Cauliflower Olymp F1 is a high-yielding variety known for its uniform head formation and crisp texture.",
    enviroment: "Cool climate",
    suitableClimate: "15-20°C",
    germinationTime: "7-12 Days",
    sowingDepth: "0.5cm deep in fertile, well-drained soil.",
    betweenSpaces: "50cm between rows, 45cm between plants.",
    harvestingTime: "70-85 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 204,
    title: "Cucumber Tropical F1",
    images: ["/assets/img/hyprid/Cucumber.jpg"],
    imgDesc:
      "A heat-resistant cucumber variety with smooth, dark green fruits.",
    thumbnails: ["/assets/img/hyprid/Cucumber.jpg"],
    description:
      "Cucumber Tropical F1 is a highly productive hybrid suitable for warm climates, producing crisp and juicy cucumbers.",
    enviroment: "Warm to tropical",
    suitableClimate: "22-30°C",
    germinationTime: "5-7 Days",
    sowingDepth: "1.5cm deep in loose, well-drained soil.",
    betweenSpaces: "90cm between rows, 50cm between plants.",
    harvestingTime: "45-60 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 205,
    title: "Eggplant Kalenda F1",
    images: ["/assets/img/hyprid/Eggplant.jpg"],
    imgDesc:
      "A high-yielding eggplant variety with glossy, deep purple fruits.",
    thumbnails: ["/assets/img/hyprid/Eggplant.jpg"],
    description:
      "Eggplant Kalenda F1 is a vigorous hybrid known for its uniform fruit size, smooth skin, and excellent taste.",
    enviroment: "Warm to tropical",
    suitableClimate: "20-30°C",
    germinationTime: "8-12 Days",
    sowingDepth: "0.5-1cm deep in well-prepared soil.",
    betweenSpaces: "60cm between rows, 40cm between plants.",
    harvestingTime: "70-90 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 206,
    title: "Melon Jino F1",
    images: ["/assets/img/hyprid/Melon.jpg"],
    imgDesc: "A premium melon variety with sweet, juicy flesh.",
    thumbnails: ["/assets/img/hyprid/Melon.jpg"],
    description:
      "Melon Jino F1 is a hybrid melon with excellent disease resistance, producing large, aromatic fruits.",
    enviroment: "Tropical",
    suitableClimate: "22-32°C",
    germinationTime: "5-7 Days",
    sowingDepth: "2cm deep in loose, sandy soil.",
    betweenSpaces: "100cm between rows, 80cm between plants.",
    harvestingTime: "75-90 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 207,
    title: "Melon Kappa F1",
    images: ["/assets/img/hyprid/MelonKappa.jpg"],
    imgDesc: "A high-yielding hybrid melon with excellent sweetness.",
    thumbnails: ["/assets/img/hyprid/MelonKappa.jpg"],
    description:
      "Melon Kappa F1 produces round, orange-fleshed melons known for their intense sweetness and rich aroma.",
    enviroment: "Tropical",
    suitableClimate: "22-32°C",
    germinationTime: "5-7 Days",
    sowingDepth: "2cm deep in well-drained soil.",
    betweenSpaces: "100cm between rows, 80cm between plants.",
    harvestingTime: "80-95 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 208,
    title: "Melon Ninja F1",
    images: ["/assets/img/hyprid/MelonNinja.jpg"],
    imgDesc: "A disease-resistant hybrid melon with firm, juicy flesh.",
    thumbnails: ["/assets/img/hyprid/MelonNinja.jpg"],
    description:
      "Melon Ninja F1 is a hybrid variety that produces sweet, refreshing melons with excellent shelf life.",
    enviroment: "Tropical",
    suitableClimate: "22-32°C",
    germinationTime: "5-7 Days",
    sowingDepth: "2cm deep in loose, sandy soil.",
    betweenSpaces: "100cm between rows, 80cm between plants.",
    harvestingTime: "75-90 Days after germination.",
    category: "Hybrid Seeds",
  },

  {
    id: 209,
    title: "Papaya Komoa F1",
    images: ["/assets/img/hyprid/Papaya.jpg"],
    imgDesc:
      "A high-yielding papaya variety known for its sweet and aromatic fruits.",
    thumbnails: ["/assets/img/hyprid/Papaya.jpg"],
    description:
      "Papaya Komoa F1 is a fast-growing hybrid with excellent disease resistance, producing large, juicy fruits rich in vitamins.",
    enviroment: "Tropical",
    suitableClimate: "22-32°C",
    germinationTime: "10-14 Days",
    sowingDepth: "1cm deep in moist, well-drained soil.",
    betweenSpaces: "3m between rows, 2m between plants.",
    harvestingTime: "150-180 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 210,
    title: "Papaya Rana",
    images: ["/assets/img/hyprid/PapayaRana.jpg"],
    imgDesc:
      "A robust papaya hybrid with excellent yield and disease resistance.",
    thumbnails: ["/assets/img/hyprid/PapayaRana.jpg"],
    description:
      "Papaya Rana produces large, sweet fruits with an appealing texture, making it a preferred choice for both fresh consumption and processing.",
    enviroment: "Tropical",
    suitableClimate: "22-32°C",
    germinationTime: "10-14 Days",
    sowingDepth: "1cm deep in sandy, well-drained soil.",
    betweenSpaces: "3m between rows, 2m between plants.",
    harvestingTime: "150-180 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 211,
    title: "Pumpkin Gladiator F1",
    images: ["/assets/img/hyprid/Pumpkin.jpg"],
    imgDesc: "A high-yielding hybrid pumpkin variety with firm, sweet flesh.",
    thumbnails: ["/assets/img/hyprid/Pumpkin.jpg"],
    description:
      "Pumpkin Gladiator F1 is known for its large fruit size, long storage life, and excellent resistance to common pumpkin diseases.",
    enviroment: "Tropical",
    suitableClimate: "22-30°C",
    germinationTime: "5-10 Days",
    sowingDepth: "2.5cm deep in nutrient-rich soil.",
    betweenSpaces: "1.5m between rows, 1m between plants.",
    harvestingTime: "90-110 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 212,
    title: "Sweet Pepper Aalberic F1",
    images: ["/assets/img/hyprid/SweetPepper.jpg"],
    imgDesc: "A sweet and crunchy pepper hybrid with uniform fruit size.",
    thumbnails: ["/assets/img/hyprid/SweetPepper.jpg"],
    description:
      "Sweet Pepper Aalberic F1 is a hybrid variety that produces thick-walled, glossy peppers with a mild, sweet flavor.",
    enviroment: "Warm to tropical",
    suitableClimate: "20-30°C",
    germinationTime: "8-12 Days",
    sowingDepth: "0.5cm deep in well-drained soil.",
    betweenSpaces: "60cm between rows, 40cm between plants.",
    harvestingTime: "70-90 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 213,
    title: "Sweet Pepper Goliath F1",
    images: ["/assets/img/hyprid/SweetPepper2.jpg"],
    imgDesc:
      "A large-fruited hybrid sweet pepper variety with excellent taste.",
    thumbnails: ["/assets/img/hyprid/SweetPepper2.jpg"],
    description:
      "Sweet Pepper Goliath F1 produces thick, blocky peppers with outstanding disease resistance and high yield potential.",
    enviroment: "Warm to tropical",
    suitableClimate: "20-30°C",
    germinationTime: "8-12 Days",
    sowingDepth: "0.5cm deep in rich, well-drained soil.",
    betweenSpaces: "60cm between rows, 40cm between plants.",
    harvestingTime: "70-90 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 214,
    title: "Tomato Anaya F1",
    images: ["/assets/img/hyprid/Tomato.jpg"],
    imgDesc: "A high-yielding hybrid tomato with firm, juicy fruits.",
    thumbnails: ["/assets/img/hyprid/Tomato.jpg"],
    description:
      "Tomato Anaya F1 is a hybrid variety known for its high resistance to diseases, producing uniform, deep red fruits.",
    enviroment: "Tropical",
    suitableClimate: "18-30°C",
    germinationTime: "5-10 Days",
    sowingDepth: "0.5cm deep in nutrient-rich soil.",
    betweenSpaces: "70cm between rows, 50cm between plants.",
    harvestingTime: "75-90 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 215,
    title: "Tomato Cobra 26 F1",
    images: ["/assets/img/fresh.jpg"],
    imgDesc: "A disease-resistant hybrid tomato with excellent fruit quality.",
    thumbnails: ["/assets/img/fresh.jpg"],
    description:
      "Tomato Cobra 26 F1 is a widely grown hybrid known for its uniform, firm fruits and high yield potential.",
    enviroment: "Tropical",
    suitableClimate: "18-30°C",
    germinationTime: "5-10 Days",
    sowingDepth: "0.5cm deep in rich, well-aerated soil.",
    betweenSpaces: "70cm between rows, 50cm between plants.",
    harvestingTime: "75-90 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 216,
    title: "Tomato Jaguar+ F1",
    images: ["/assets/img/hyprid/Tomato2.jpg"],
    imgDesc:
      "A hybrid tomato variety known for its superior fruit setting and disease resistance.",
    thumbnails: ["/assets/img/hyprid/Tomato2.jpg"],
    description:
      "Tomato Jaguar+ F1 produces firm, high-quality fruits with an extended shelf life, making it ideal for commercial production.",
    enviroment: "Tropical",
    suitableClimate: "18-30°C",
    germinationTime: "5-10 Days",
    sowingDepth: "0.5cm deep in nutrient-rich soil.",
    betweenSpaces: "70cm between rows, 50cm between plants.",
    harvestingTime: "75-90 Days after germination.",
    category: "Hybrid Seeds",
  },
  {
    id: 217,
    title: "Watermelon Koloss F1",
    images: ["/assets/img/hyprid/Watermelon.jpg"],
    imgDesc:
      "A high-yielding hybrid watermelon variety with sweet, juicy flesh.",
    thumbnails: ["/assets/img/hyprid/Watermelon.jpg"],
    description:
      "Watermelon Koloss F1 produces large, oval-shaped fruits with deep red flesh, known for its high sugar content and excellent transportability.",
    enviroment: "Tropical",
    suitableClimate: "22-32°C",
    germinationTime: "5-7 Days",
    sowingDepth: "2cm deep in loose, sandy soil.",
    betweenSpaces: "150cm between rows, 90cm between plants.",
    harvestingTime: "80-100 Days after germination.",
    category: "Hybrid Seeds",
  },
];

export default seeds_data;
