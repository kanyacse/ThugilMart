// Logo
import logo from './logo/logo.png';

// Icons
import iconWebp from './icons/icon.webp';
import blueKurti from './icons/shortkurti-01.jpeg';
import securityicon from './icons/security_icon.jpeg';
import deliceryicon from './icons/delicery_icon.jpeg';
import exchangeicon from './icons/Exchange_icon.webp';
import supporticon from './icons/Support_icon.jpeg';
import searchicon from './icons/search.png'
import crossicon from './icons/cross.png'

// Product images
import shortKurti01 from './products/shortkurti_03.jpeg';
import blueKurti02 from './products/blue_kurti_02.jpeg';
import blueKurti01 from './products/blue_kuti_01.jpeg';
import boyPant from './products/boy_pant.jpeg';
import girlJeanMaroon from './products/girl_jean_maroon.jpeg';
import girlJeanPant1 from './products/girl_jean_pant1.jpeg';
import girlJeans from './products/girl_jeans.jpeg';
import girlPant from './products/girl_pant.jpeg';
import greenBoyShirt from './products/green_shirt_boy.jpeg';
import greenShirtBoy from './products/green_shirt_boy.jpeg';
import yellowKurti from './products/yellow_kurti.jpeg';
import whiteBoyShirt from './products/white_Boy_shirt.jpeg';
import violetKurti from './products/violet_kurti.jpeg';
import skyBlueKurti from './products/sky_blue_kurti.jpeg';
import shortKurti03 from './products/shortkurti_03.jpeg';
import shortKurti04 from './products/shortkurti_04.jpeg';
import shortKurti02 from './products/shortkurti_02.jpeg';
import shortKurti01Img from './products/shortkurti_01.jpeg';
import shortKurtiImg from './products/short_kurti.jpeg';
import maroonKurti from './products/marroon_kurti.jpeg';
import marroonShirtBoy from './products/marron_shirt_boy.jpeg';
import kurtiRed from './products/kurti_red.jpeg';
import jeansGirl from './products/jeans_girll.jpeg';
import jeansGirl2 from './products/jeans _gitl.jpeg';
import kurtiblue from './products/kurti_red2.webp'

const assets = {
  logos: {
    main: logo,
  },
  icons: {
    webp: iconWebp,
    blueKurti: blueKurti,
    securityicon,
    deliceryicon,
    exchangeicon,
    supporticon,
    searchicon,
    crossicon,
  },
  products: [
    { _id: "1", name: "Short Kurti", description: "Elegant short kurti with floral patterns.", price: 1000, image: [shortKurti01], category: "Women", subCategory: "topwear", sizes: ["S", "M", "L", "XL"], date: "2025-09-10", bestseller: true },
    { _id: "2", name: "Blue Kurti 02", description: "Stylish blue kurti for casual and festive wear.", price: 1200, image: [blueKurti02, kurtiblue], category: "Women", subCategory: "topwear", sizes: ["M", "L"], date: "2025-09-05", bestseller: false },
    { _id: "3", name: "Blue Kurti 01", description: "Classic blue kurti blending modern and traditional styles.", price: 1100, image: [blueKurti01], category: "Women", subCategory: "topwear", sizes: ["S", "M", "L"], date: "2025-09-01", bestseller: true },
    { _id: "4", name: "Men Pant", description: "Comfortable men pant perfect for daily wear.", price: 900, image: [boyPant], category: "Men", subCategory: "bottomwear", sizes: ["M", "L"], date: "2025-08-20", bestseller: false },
    { _id: "5", name: "Women Jean Maroon", description: "Trendy maroon jeans for women.", price: 1300, image: [girlJeanMaroon], category: "Women", subCategory: "bottomwear", sizes: ["S", "M"], date: "2025-08-15", bestseller: true },
    { _id: "6", name: "Women Jean Pant 1", description: "Stylish women jean pant with modern look.", price: 1250, image: [girlJeanPant1], category: "Women", subCategory: "bottomwear", sizes: ["S", "M", "L"], date: "2025-08-10", bestseller: false },
    { _id: "7", name: "Women Jeans", description: "Classic women jeans ideal for casual outings.", price: 1400, image: [girlJeans], category: "Women", subCategory: "bottomwear", sizes: ["M", "L", "XL"], date: "2025-08-05", bestseller: true },
    { _id: "8", name: "Women Pant", description: "Comfortable and fashionable women pant.", price: 1350, image: [girlPant], category: "Women", subCategory: "bottomwear", sizes: ["S", "M", "L"], date: "2025-07-30", bestseller: false },
    { _id: "9", name: "Green Men Shirt", description: "Fresh green men shirt with casual style.", price: 1200, image: [greenBoyShirt], category: "Men", subCategory: "topwear", sizes: ["M", "L"], date: "2025-07-25", bestseller: true },
    { _id: "10", name: "Green Shirt Men", description: "Classic green shirt for men with good fabric.", price: 1100, image: [greenShirtBoy], category: "Men", subCategory: "topwear", sizes: ["S", "M"], date: "2025-07-20", bestseller: false },
    { _id: "11", name: "Yellow Kurti", description: "Bright yellow kurti for festive occasions.", price: 1150, image: [yellowKurti], category: "Women", subCategory: "topwear", sizes: ["S", "M", "L"], date: "2025-06-15", bestseller: true },
    { _id: "12", name: "White Men Shirt", description: "Formal white shirt for men.", price: 1300, image: [whiteBoyShirt], category: "Men", subCategory: "topwear", sizes: ["M", "L", "XL"], date: "2025-06-10", bestseller: false },
    { _id: "13", name: "Violet Kurti", description: "Elegant violet kurti for women.", price: 1250, image: [violetKurti], category: "Women", subCategory: "topwear", sizes: ["S", "M", "L"], date: "2025-05-30", bestseller: true },
    { _id: "14", name: "Sky Blue Kurti", description: "Trendy sky blue kurti.", price: 1200, image: [skyBlueKurti], category: "Women", subCategory: "topwear", sizes: ["M", "L"], date: "2025-05-20", bestseller: false },
    { _id: "15", name: "Short Kurti 03", description: "Beautiful short kurti with modern design.", price: 1100, image: [shortKurti03], category: "Women", subCategory: "topwear", sizes: ["S", "M"], date: "2025-04-30", bestseller: true },
    { _id: "16", name: "Short Kurti 04", description: "Casual short kurti perfect for daily wear.", price: 1050, image: [shortKurti04], category: "Women", subCategory: "topwear", sizes: ["S", "M", "L"], date: "2025-04-25", bestseller: false },
    { _id: "17", name: "Short Kurti 02", description: "Stylish short kurti with floral prints.", price: 1000, image: [shortKurti02], category: "Women", subCategory: "topwear", sizes: ["S", "M", "L"], date: "2025-04-20", bestseller: true },
    { _id: "18", name: "Short Kurti 01", description: "Comfortable short kurti for everyday wear.", price: 950, image: [shortKurti01Img], category: "Women", subCategory: "topwear", sizes: ["S", "M"], date: "2025-04-15", bestseller: false },
    { _id: "19", name: "Short Kurti", description: "Modern design short kurti.", price: 1000, image: [shortKurtiImg], category: "Women", subCategory: "topwear", sizes: ["S", "M", "L"], date: "2025-04-10", bestseller: true },
    { _id: "20", name: "Maroon Kurti", description: "Trendy maroon kurti with embroidery.", price: 1150, image: [maroonKurti], category: "Women", subCategory: "topwear", sizes: ["S", "M", "L"], date: "2025-04-05", bestseller: true },
    { _id: "21", name: "Marroon Shirt Men", description: "Marroon casual shirt for men.", price: 1250, image: [marroonShirtBoy], category: "Men", subCategory: "topwear", sizes: ["M", "L"], date: "2025-03-30", bestseller: false },
    { _id: "22", name: "Kurti Red", description: "Red kurti perfect for parties.", price: 1300, image: [kurtiRed], category: "Women", subCategory: "topwear", sizes: ["S", "M", "L"], date: "2025-03-25", bestseller: true },
    { _id: "23", name: "Jeans Girl", description: "Stylish jeans for girls.", price: 1200, image: [jeansGirl], category: "Women", subCategory: "bottomwear", sizes: ["S", "M", "L"], date: "2025-03-20", bestseller: false },
    { _id: "24", name: "Jeans Girl 2", description: "Comfortable jeans for girls.", price: 1250, image: [jeansGirl2], category: "Women", subCategory: "bottomwear", sizes: ["S", "M"], date: "2025-03-15", bestseller: true },
  ]
};

export default assets;
