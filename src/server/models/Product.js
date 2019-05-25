const mongoose = require("mongoose");

const types = mongoose.Schema.Types;

const productSchema = new mongoose.Schema({
  title: { type: types.String, required: true },
  imgUrl: { type: types.String, required: true },
  description: { type: types.String, required: true },
  categories: [{ type: types.String }],
  price: { type: types.Number, required: true },
  inStock: { type: types.Number, required: true },
  productSales: { type: types.Number, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

Product.seedInitialProducts = async () => {
  try {
    let productsCount = await Product.countDocuments().exec();
    console.info(`Database products collection has ${productsCount} products`);
    if (productsCount > 0) return;
    await Product.insertMany(products);
    console.info("Initial products inserted");
  } catch (err) {
    console.error("Seed initial products ERROR!");
    console.error(err);
  }
};

const products = [
  {
    title: "Mouse TRACER MORO/ WI-FI",
    imgUrl: "11458028339230.jpg",
    description:
      "Asperiores expedita id aliquid nostrum id debitis non. Cupiditate et minus similique et consequatur rerum rem.",
    categories: ["Ergonomic", "Tasty"],
    price: "2462.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "Joystick TRACER LIZARD PC/PS3",
    imgUrl: "11472198664222.jpg",
    description:
      "Consequatur officiis perspiciatis cum quo. Est consequatur totam nisi velit.",
    categories: ["Gorgeous", "Generic", "Handmade", "Practical"],
    price: "4892.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "Wall bracket THUNDER STTV TTS-L311",
    imgUrl: "11452836413470.jpg",
    description:
      "Reprehenderit inventore tempora sed nobis repellendus sit dolor. Qui ipsum neque et architecto veritatis suscipit laborum illo atque.",
    categories: ["Awesome", "Tasty"],
    price: "1070.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "ДИСТАНЦИОННО ONE FOR ALL URC1912",
    imgUrl: "11462603702302.jpg",
    description:
      "Harum quisquam illo. Voluptas numquam animi impedit debitis est iusto excepturi.",
    categories: ["Small", "Handmade", "Unbranded"],
    price: "1612.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "ДИСТАНЦИОННО ONE FOR ALL URC1911",
    imgUrl: "11456562626590.jpg",
    description:
      "Minus similique similique optio. Non dolorem quisquam sapiente quam eum debitis repellendus sequi quis.",
    categories: ["Tasty", "Rustic", "Awesome"],
    price: "4457.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "ДИСТАНЦИОННО ONE FOR ALL URC1910",
    imgUrl: "11454705565726.jpg",
    description:
      "Ut maiores dolorum aliquid debitis laborum. Ut dicta dolorem commodi earum.",
    categories: ["Refined", "Handmade", "Generic", "Rustic"],
    price: "2938.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "Wall bracket THUNDER STTV TTS-L312",
    imgUrl: "11452833529886.jpg",
    description: "Velit iure distinctio at quod. Sit voluptates amet vel.",
    categories: ["Incredible", "Tasty", "Awesome", "Ergonomic"],
    price: "583.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "Headphones TRACER DRAGON RED",
    imgUrl: "11460920573982.jpg",
    description: "Aut fuga mollitia eos. Et temporibus occaecati unde.",
    categories: ["Awesome", "Practical", "Fantastic", "Sleek", "Intelligent"],
    price: "294.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "Headphones TRACER DRAGON",
    imgUrl: "11458029781022.jpg",
    description:
      "Autem non vero. Sunt dicta veniam corrupti qui sed quasi exercitationem magnam expedita.",
    categories: ["Licensed", "Intelligent", "Handmade"],
    price: "4327.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "ЦИФРОВ DVB-T ДЕКОДЕР DIVA HD 1405B",
    imgUrl: "11460181295134.jpg",
    description:
      "Velit aut ea temporibus culpa error iure nostrum ducimus consequatur. Non et molestiae deleniti delectus autem molestiae aspernatur.",
    categories: ["Ergonomic", "Handmade"],
    price: "538.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "АНТЕНА PHLIPS SDV8622/12",
    imgUrl: "11457570570270.jpg",
    description:
      "Fuga asperiores corrupti voluptas eveniet perferendis nobis. Quam sunt aut excepturi nihil ducimus.",
    categories: ["Ergonomic", "Practical", "Refined", "Ergonomic"],
    price: "2564.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "Kit COUGAR DEATHFIRE EX",
    imgUrl: "11472641490974.jpg",
    description:
      "Et qui dolorem maiores totam esse consequatur nisi laudantium. Tenetur est quia.",
    categories: ["Gorgeous", "Sleek", "Licensed", "Rustic"],
    price: "4380.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "Wheel TRACER DRIFTER PC/PS2/PS3",
    imgUrl: "11463124353054.jpg",
    description:
      "Ducimus laborum nisi aliquam voluptas. Deleniti nostrum dignissimos aut sapiente ducimus.",
    categories: ["Licensed", "Awesome", "Licensed", "Practical", "Generic"],
    price: "1686.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "SONY PS4 DUALSHOCK WIR. ALPINE GREEN",
    imgUrl: "11568048799774.jpg",
    description:
      "Qui qui mollitia dolorum repellat vero aperiam et sit. Qui placeat ducimus aut est et ea expedita.",
    categories: ["Awesome", "Handcrafted", "Refined"],
    price: "743.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "ИГРА MORTAL KOMBAT 11",
    imgUrl: "11528989311006.jpg",
    description:
      "Ad dolor autem. Tempora rem quos doloremque eos veritatis velit dolorem molestiae.",
    categories: ["Rustic", "Tasty", "Fantastic"],
    price: "1020.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "ИГРА MORTAL KOMBAT 11",
    imgUrl: "11528989671454.jpg",
    description:
      "Placeat fuga fugiat sunt. Qui est accusamus vel ipsum excepturi explicabo fuga aliquid fuga.",
    categories: ["Rustic", "Intelligent", "Gorgeous"],
    price: "5233.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "ИГРА DAYS GONE",
    imgUrl: "11570667356190.jpg",
    description:
      "Rerum odit consequuntur beatae laudantium corrupti. Architecto veritatis porro quae qui occaecati omnis iusto.",
    categories: ["Handmade", "Incredible", "Licensed", "Fantastic"],
    price: "2695.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "PS4 STEREO СЛУШАЛКИ GOLD/WHITE",
    imgUrl: "11482487095326.jpg",
    description: "Modi fuga sit suscipit eum qui optio. Minus inventore sit.",
    categories: ["Sleek", "Generic", "Rustic", "Handcrafted"],
    price: "444.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "Audio system DIVA BS40",
    imgUrl: "11482740097054.jpg",
    description:
      "Qui atque omnis repudiandae exercitationem veritatis dolorem placeat itaque. Sed qui voluptatum est labore temporibus perferendis labore.",
    categories: [
      "Handcrafted",
      "Incredible",
      "Unbranded",
      "Gorgeous",
      "Refined"
    ],
    price: "70.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "ИГРА MORTAL KOMBAT 11 PREMIUM ED.",
    imgUrl: "11517939679262.jpg",
    description:
      "Perspiciatis amet molestiae veniam praesentium sint voluptas iusto unde et. Voluptatem voluptatem fugiat sit perspiciatis nihil hic qui.",
    categories: ["Small", "Tasty", "Tasty"],
    price: "1337.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "СИНТЕЗАТОР CASIO CTK-240",
    imgUrl: "11448993185822.jpg",
    description:
      "Incidunt enim incidunt voluptatibus esse asperiores nihil animi optio. Tenetur praesentium consequuntur ipsam totam sit rerum enim tempora.",
    categories: ["Generic", "Tasty", "Unbranded", "Licensed"],
    price: "1091.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "TV TELEFUNKEN 24HB4600 LED",
    imgUrl: "11472671277086.jpg",
    description:
      "Illum qui facilis. Consequuntur rerum dolor exercitationem et dolor cum provident.",
    categories: ["Generic", "Small", "Awesome"],
    price: "4488.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "Projector XMART MPP-40",
    imgUrl: "11463637237790.jpg",
    description:
      "Fuga accusantium dolores expedita eos. Rerum itaque et debitis eligendi qui et.",
    categories: ["Unbranded", "Tasty"],
    price: "2354.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "TV LG 24TK410V TV+MONITOR",
    imgUrl: "11480918229022.jpg",
    description:
      "Eveniet perspiciatis odit aperiam consequatur voluptatibus delectus. Est et aut voluptatem.",
    categories: ["Generic", "Licensed", "Small"],
    price: "1902.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "Monitor SAMSUNG LS24F350FHUXEN",
    imgUrl: "11462578667550.jpg",
    description: "Sed id et. Sed id totam voluptates.",
    categories: ["Handmade"],
    price: "486.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "TV SANG LE-32Z10 LED",
    imgUrl: "11479176249374.jpg",
    description: "Sit libero sed. Voluptas aspernatur dolorem ab et.",
    categories: ["Practical", "Tasty", "Handcrafted"],
    price: "1242.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "TV TELEFUNKEN 32HB5500 LED",
    imgUrl: "11471256748062.jpg",
    description:
      "Quia assumenda ut cupiditate occaecati. Voluptas harum vel sed quaerat architecto necessitatibus voluptatem quis.",
    categories: ["Handcrafted", "Gorgeous", "Awesome", "Fantastic"],
    price: "452.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "TV LG 28TK410V TV+MONITOR",
    imgUrl: "11480290787358.jpg",
    description:
      "Corrupti inventore quasi consectetur vero. Sit quis natus sint amet molestias ad optio veritatis.",
    categories: ["Intelligent", "Incredible"],
    price: "119.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "Soundbar PANASONIC SC-HTB488EGK",
    imgUrl: "11471479996446.jpg",
    description:
      "Minima est aut et ratione incidunt. Consequuntur quidem aut est enim quisquam nesciunt qui.",
    categories: ["Fantastic", "Small"],
    price: "4374.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  },
  {
    title: "TV TELEFUNKEN 39FB4000 LED",
    imgUrl: "11481972998174.jpg",
    description:
      "Doloremque reiciendis minus vel. Neque voluptatem vel aspernatur et impedit labore illo placeat.",
    categories: ["Small"],
    price: "4367.00",
    inStock: Math.round(Math.random() * 15),
    productSales: Math.round(Math.random() * 100)
  }
];
