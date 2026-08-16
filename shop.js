let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if(currentUser){
    // const product = {
    //     id: 1,
    //     title: "Jockey socks (3-pack)",
    //     price: 12.99,
    //     description: "Everyday perfect, comfortable socks",
    //     category: "men's clothing",
    //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     rating: {rate: 3.9, count: 120}
    // }
    
    if(localStorage.getItem("products")){
        let products = JSON.parse(localStorage.getItem("products"));
        console.log("products", products);
    } 
    else{
        fetch("https://fakestoreapi.com/products").then((req) => req.json()).then((data) => {
        console.log("dataa",data);

        let newData = data.map((item) => {
            item.colors = colors.slice(Math.floor(Math.random() * 4));
            item.sizes = sizes.slice(Math.floor(Math.random() * 4));
            return item;
        }) 
        console.log("newData", newData);
        localStorage.setItem("products", JSON.stringify(newData));
    })
    }
}

let products = [
    {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Mens",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    sizes: [],
    colors: ["Black", "White"],
    rating: 4
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "Mens",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "White", "Blue", "Red"],
    rating: 4
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "Mens",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    sizes: ["S","M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    rating: 3
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "Mens",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White","Green", "Blue"],
    rating: 3.5
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "Jewellery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: 4,
    sizes: ["M", "L"],
    colors: ["Gold", "Silver"],
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "Jewellery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    rating: 3,
    sizes: ["M", "L"],
    colors: ["Gold", "Silver"]
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "Jewellery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    rating: 3,
    sizes: ["M", "L"],
    colors: ["White", "Gold"],
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "Jewellery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    rating: 2,
    sizes: ["S", "M", "L"],
    colors: ["Rose Gold", "Silver"],
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    rating: 3.5,
    sizes: ["S", "M", "L"],
    colors: ["Black", "Silver"]
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    rating: 2,
    sizes: ["S", "M", "L"],
    colors: ["Black", "Silver"]
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "Electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    rating: 5,
    sizes: ["M", "L"],
    colors: ["Black", "Silver"]
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    rating: 4.8,
    sizes: ["M", "L"],
    colors: ["Black", "Silver"]
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "Electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    rating: 2.9,
    sizes: ["M", "L"],
    colors: ["Black", "Silver"]
  },
  {
    id: 14,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "Electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    rating: 5,
    sizes: ["M", "L"],
    colors: ["Black", "White"]
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "Womens",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    rating: 3,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue", "Red"]
  },
  {
    id: 16,
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denims style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "Womens",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    rating: 3,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Green", "Blue"]
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "Womens",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    rating: 4,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "White", "Blue"]
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "Womens",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    rating: 4.7,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Blue"]
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "Womens",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    rating: 4.5,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Green", "Blue"]
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "Womens",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    rating: 3,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Red"]
  }
   
];

let productContainer = document.getElementById("productContainer");
let searchInput = document.getElementById("searchInput");
let categoryTitle = document.getElementById("categoryTitle");
let categoryButtons = document.querySelectorAll(".category-btn");

// DISPLAY PRODUCTS

function displayProducts(productList) {
    productContainer.innerHTML = "";

    if (productList.length === 0) {
        productContainer.innerHTML =
            `<div class="no-products">
                No products found.
            </div>`;
        return;
    }

    productList.forEach((product) => {
        let colorsHTML = "";

        product.colors.forEach((color) => {
            colorsHTML += `
                <span
                    class="color-dot"
                    style="background-color: ${color.toLowerCase()};"
                ></span>
            `
        });

        let sizes = product.sizes.length > 0
            ? product.sizes.join(", ")
            : "N/A";

        let stars = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= product.rating) {
                stars += "★";
            } else {
                stars += "☆";
            }
        }

        productContainer.innerHTML += `
            <div class="product-card">
                <img
                    src="${product.image}"
                    alt="${product.title}"
                    class="product-image"
                >
                <div class="product-info">

                    <div class="product-top">

                        <span class="product-price">
                            $${product.price}
                        </span>

                        <span class="product-size">
                            ${sizes}
                        </span>
                    </div>

                    <div class="product-detail">
                        <strong>${product.title}</strong>
                    </div>

                    <div class="product-detail">
                        Colors:
                        <div class="colors">
                            ${colorsHTML}
                        </div>
                    </div>

                    <div class="product-detail">
                        Rating:
                        <span class="rating">
                            ${stars}
                        </span>
                    </div>

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        `;
    });
}

// CATEGORY FILTER

categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {
        categoryButtons.forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");

        let category = button.dataset.category;

        if (category === "all") {
            categoryTitle.textContent = "All Products";
            displayProducts(products);  
        } 
        else {
            categoryTitle.textContent =
                category + " Clothing";

            let filteredProducts =
                products.filter((product) => {
                    return product.category === category;
                });
            displayProducts(filteredProducts);
        }
    });
});

// SEARCH

searchInput.addEventListener("input", () => {
    let searchValue =
        searchInput.value.toLowerCase().trim();

    let filteredProducts =
        products.filter((product) => {

            return product.title
                .toLowerCase()
                .includes(searchValue);

        });
    displayProducts(filteredProducts);
});

// ADD TO CART

function addToCart(productId) {
    let product =
        products.find((product) => product.id === productId);

    if (!product) {
        return;
    }
    let cart =
        JSON.parse(localStorage.getItem("cart")) ?? [];

    // Check if product already exists
    let existingProduct =
        cart.find((item) => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
    console.log("Cart:", cart);
    alert("Product added to cart!");
}

// SIDEBAR FILTER

document
    .getElementById("applyFilter")
    .addEventListener("click", applyFilters);

function applyFilters() {

    let selectedColors =
        [...document.querySelectorAll(".color-filter:checked")]
            .map((checkbox) => checkbox.value);

    let selectedSizes =
        [...document.querySelectorAll(".size-filter:checked")]
            .map((checkbox) => checkbox.value);

    let selectedPrices =
        [...document.querySelectorAll(".price-filter:checked")]
            .map((checkbox) => checkbox.value);

    let rating =
        Number(document.getElementById("ratingFilter").value);

    let filteredProducts =
        products.filter((product) => {
            // Color
            if (selectedColors.length > 0) {
                let hasColor =
                    product.colors.some((color) => {
                        return selectedColors.includes(color);
                    });

                if (!hasColor) {
                    return false;
                }
            }

            // Size
            if (selectedSizes.length > 0) {
                let hasSize =
                    product.sizes.some((size) => {
                        return selectedSizes.includes(size);
                    });

                if (!hasSize) {
                    return false;
                }
            }

            // Rating
            if (product.rating < rating) {
                return false;
            }

            // Price
            if (selectedPrices.length > 0) {
                let priceMatch = false;
                selectedPrices.forEach((range) => {
                    if (range === "0-25" && product.price >= 0 && product.price <= 25) {
                        priceMatch = true;
                    }
                    if (range === "25-50" && product.price > 25 && product.price <= 50) {
                        priceMatch = true;
                    }

                    if (range === "50-100" && product.price > 50 && product.price <= 100) {
                        priceMatch = true;
                    }

                    if (range === "100" && product.price >= 100) {
                        priceMatch = true;
                    }
                });

                if (!priceMatch) {
                    return false;
                }
            }
            return true;
        });
    displayProducts(filteredProducts);
}

// RATING DISPLAY

document
    .getElementById("ratingFilter")
    .addEventListener("input", (event) => {
        document.getElementById("ratingValue").textContent =
            event.target.value;
    });

// INITIAL PRODUCTS

displayProducts(products);