require("dotenv").config();
require("./config/database");
// const imgUrl = require('./public/images/die-cut-hand.png')

const Category = require("./models/category");
const Item = require("./models/item");

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Stickers", sortOrder: 10 },
    { name: "Magnets", sortOrder: 20 },
    { name: "Posters", sortOrder: 30 },
    { name: "Vinyls", sortOrder: 40 },
    { name: "Bussiness Cards", sortOrder: 50 },
    { name: "Signs", sortOrder: 60 },
    { name: "Other", sortOrder: 70 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    // Category 0: Stickers
    {
      name: "Semi-Gloss",
      emoji: "🖼️",
      category: categories[0],
      price: 5.95,
    },
    { name: "Die-cut", emoji: "⭐", category: categories[0], price: 5.95 },
    { name: "4 x 4", emoji: "🖼️", category: categories[0], price: 5.95 },
    { name: "7 x 5", emoji: "🖼️", category: categories[0], price: 5.95 },
    { name: "8 x 10", emoji: "🖼️", category: categories[0], price: 6.95 },
    { name: "Round", emoji: "🥧", category: categories[0], price: 6.95 },

    // Category 1: Magnets
    { name: '2" X 3.5"', emoji: "🧲", category: categories[1], price: 1.95 },
    { name: '3" X 4"', emoji: "🧲", category: categories[1], price: 0.95 },
    { name: '4" X 7"', emoji: "🧲", category: categories[1], price: 2.95 },
    { name: '5" X 7"', emoji: "🧲", category: categories[1], price: 2.95 },
    { name: '7" X 5"', emoji: "🧲", category: categories[1], price: 2.95 },
    { name: "Die-Cut", emoji: "🧲", category: categories[1], price: 2.95 },

    // Category 2: Posters
    {
      name: "Hamburgersa",
      imgUrl: "./die-cut-hand.png",
      category: categories[2],
      price: 5.95,
    },
    {
      name: "Premium Matte",
      emoji: "🎨",
      category: categories[2],
      price: 11.95,
    }, 
    {
      name: "Premium Glossy",
      emoji: "🖼️",
      category: categories[2],
      price: 9.95,
    }, 
    { name: "Indoor", emoji: "🏠", category: categories[2], price: 9.95 }, 
    { name: "Outdoor", emoji: "🏞️", category: categories[2], price: 9.95 },

    // Category 3: Vinyls
    { name: "Outdoor", emoji: "🏞️", category: categories[3], price: 0.95 },
    { name: "Indoor", emoji: "🏠", category: categories[3], price: 0.95 }, 
    {
      name: "Reinforced Edges (Recommended)",
      emoji: "🛡️",
      category: categories[3],
      price: 8.95,
    }, 
    {
      name: "No Reinforced Edges",
      emoji: "❌",
      category: categories[3],
      price: 3.95,
    }, 

    // Category 4: Business Cards
    { name: "Matte", emoji: "🌑", category: categories[4], price: 3.95 }, 
    { name: "Glossy", emoji: "🌕", category: categories[4], price: 7.95 }, 
    { name: "Uncoated", emoji: "📜", category: categories[4], price: 1.95 },
    { name: "Pearl", emoji: "💎", category: categories[4], price: 1.95 }, 
    {
      name: "Natural Textured",
      emoji: "🌾",
      category: categories[4],
      price: 1.95,
    },

    // Category 5: Signs
    { name: "Yard Sign", emoji: "🚩", category: categories[5], price: 1.95 },
    { name: "Flag", emoji: "🏳️", category: categories[5], price: 4.95 },
    { name: "Hanging Sign", emoji: "🚶", category: categories[5], price: 9.95 },
    { name: "Canopy Tent", emoji: "⛺", category: categories[5], price: 9.95 }, 

    // Category 8: Other
    { name: "Photo Books", emoji: "📚", category: categories[6], price: 3.95 }, 
    { name: "Mugs", emoji: "☕", category: categories[6], price: 2.95 },
    { name: "Card Holders", emoji: "📇", category: categories[6], price: 2.95 },
    { name: "Blankets", emoji: "🛌", category: categories[6], price: 2.95 }, 
    { name: "Tote Bags", emoji: "🛍️", category: categories[6], price: 2.95 },
  ]);

  console.log(items);

  process.exit();
})();
