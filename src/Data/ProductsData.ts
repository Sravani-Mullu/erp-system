type ProductDataType = {
  id: String;
  name: String;
  quantity: Number;
  price: Number;
};

const listOfProducts: ProductDataType[] = [
  {
    id: "A001",
    name: "Libas Soft Cotton Kurti",
    price: 99.9,
    quantity: 20,
  },
  {
    id: "A002",
    name: "Levi's Men's 511 Slim Fit Jeans",
    price: 49.99,
    quantity: 30,
  },
  {
    id: "A003",
    name: "Adidas Men's Essentials 3-Stripes T-Shirt",
    price: 50.0,
    quantity: 25,
  },
  {
    id: "A004",
    name: "Under Armour Women's Tech Twist V-Neck T-Shirt",
    price: 99.0,
    quantity: 15,
  },
  {
    id: "A005",
    name: "Puma Men's Essentials Logo Hoodie",
    price: 1499.99,
    quantity: 10,
  },
  {
    id: "A006",
    name: "The North Face Women's Osito 2 Fleece Jacket",
    price: 39.99,
    quantity: 20,
  },
  {
    id: "A007",
    name: "Columbia Men's Steens Mountain Fleece Vest",
    price: 79.99,
    quantity: 12,
  },
  {
    id: "A008",
    name: "Patagonia Women's Nano Puff Jacket",
    price: 29.0,
    quantity: 8,
  },
  {
    id: "A009",
    name: "Ralph Lauren Men's Classic Fit Oxford Shirt",
    price: 49.99,
    quantity: 40,
  },
  {
    id: "A010",
    name: "Tommy Hilfiger Women's Classic Fit Polo Shirt",
    price: 279.99,
    quantity: 18,
  },
  {
    id: "A011",
    name: "Calvin Klein Men's Cotton Stretch Boxer Briefs (3-Pack)",
    price: 179.95,
    quantity: 22,
  },
  {
    id: "A012",
    name: "Champion Women's Powerblend Fleece Joggers",
    price: 59.99,
    quantity: 25,
  },
  {
    id: "A013",
    name: "Levi's Men's 505 Regular Fit Jeans",
    price: 159.99,
    quantity: 14,
  },
  {
    id: "A014",
    name: "Nike Women's Pro Indy Sports Bra",
    price: 39.99,
    quantity: 20,
  },
  {
    id: "A015",
    name: "Adidas Men's Tiro 19 Training Pants",
    price: 79.95,
    quantity: 16,
  },
  {
    id: "A016",
    name: "Under Armour Women's Play Up Shorts 3.0",
    price: 129.99,
    quantity: 18,
  },
  {
    id: "A017",
    name: "Puma Men's Essentials Fleece Hoodie",
    price: 129.0,
    quantity: 25,
  },
  {
    id: "A018",
    name: "The North Face Women's Resolve Waterproof Jacket",
    price: 69.99,
    quantity: 30,
  },
  {
    id: "A019",
    name: "Columbia Men's Silver Ridge Convertible Pants",
    price: 59.99,
    quantity: 35,
  },
  {
    id: "A020",
    name: "Patagonia Women's Better Sweater 1/4 Zip Fleece",
    price: 149.0,
    quantity: 15,
  },
  {
    id: "A021",
    name: "Ralph Lauren Men's Classic Fit Chino Pants",
    price: 65.99,
    quantity: 10,
  },
  {
    id: "A022",
    name: "Tommy Hilfiger Women's Cotton Boyshorts (3-Pack)",
    price: 90.99,
    quantity: 8,
  },
  {
    id: "A023",
    name: "Calvin Klein Men's Cotton Classics Multipack Briefs (4-Pack)",
    price: 49.99,
    quantity: 15,
  },
  {
    id: "A024",
    name: "Champion Women's Powerblend Fleece Full Zip Hoodie",
    price: 39.0,
    quantity: 20,
  },
  {
    id: "A025",
    name: "Levi's Men's 502 Regular Taper Fit Jeans",
    price: 32.99,
    quantity: 25,
  },
  {
    id: "A026",
    name: "Nike Women's Air Zoom Pegasus 38 Running Shoes",
    price: 29.99,
    quantity: 10,
  },
  {
    id: "A027",
    name: "Adidas Men's Ultraboost 21 Running Shoes",
    price: 49.99,
    quantity: 18,
  },
  {
    id: "A028",
    name: "Under Armour Women's Charged Assert 8 Running Shoes",
    price: 39.99,
    quantity: 12,
  },
  {
    id: "A029",
    name: "Puma Men's Cell Surin 2 FM Cross-Trainer Shoes",
    price: 49.99,
    quantity: 14,
  },
  {
    id: "A030",
    name: "The North Face Women's Thermoball Eco Jacket",
    price: 99.99,
    quantity: 20,
  },
  {
    id: "A031",
    name: "Columbia Men's Glennaker Lake Rain Jacket",
    price: 69.99,
    quantity: 15,
  },
  {
    id: "A032",
    name: "Patagonia Women's Los Gatos Fleece Vest",
    price: 87.99,
    quantity: 22,
  },
  {
    id: "A033",
    name: "Ralph Lauren Men's Classic Fit Mesh Polo Shirt",
    price: 29.95,
    quantity: 30,
  },
  {
    id: "A034",
    name: "Tommy Hilfiger Women's Basic Short Sleeve V-Neck T-Shirt",
    price: 59.0,
    quantity: 25,
  },
  {
    id: "A035",
    name: "Calvin Klein Men's Cotton Stretch Multipack Crew Neck T-Shirts (3-Pack)",
    price: 49.99,
    quantity: 10,
  },
  {
    id: "A036",
    name: "Champion Women's Campus French Terry Hoodie",
    price: 89.99,
    quantity: 12,
  },
  {
    id: "A037",
    name: "Levi's Men's 514 Straight Fit Jeans",
    price: 59.99,
    quantity: 20,
  },
  {
    id: "A038",
    name: "Nike Women's Flex Experience Run 10 Running Shoes",
    price: 29.0,
    quantity: 18,
  },
  {
    id: "A039",
    name: "Adidas Men's Lite Racer Adapt 4.0 Running Shoes",
    price: 24.99,
    quantity: 40,
  },
  {
    id: "A040",
    name: "Under Armour Women's Charged Pursuit 2 Running Shoes",
    price: 82.0,
    quantity: 15,
  },
];


// const updateListOfProducts = (updatedProducts: ProductDataType[]) => {
//     listOfProducts = updatedProducts;
// };

// updateListOfProducts(listOfProducts)

export default listOfProducts
