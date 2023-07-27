const products = [
   {
      name: 'Nike Air Max 270',
      image: '/images/6.png',
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 89,
      category: '64b3a3da8373c45fc81b1a84',
      countInStock: 3,
      rating: 4,
      numReviews: 4,
   },
   {
      name: 'Nike Air Max 271',
      image: '/images/5.png',
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 599,
      category: '64b3a3da8373c45fc81b1a84',
      countInStock: 10,
      rating: 2,
      numReviews: 2,
   },
   {
      name: 'Nike Air Max 272',
      image: '/images/4.png',
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 929,
      category: '64b3a3da8373c45fc81b1a84',
      countInStock: 0,
      rating: 3.5,
      numReviews: 3,
   },
   {
      name: 'Nike Air Max 273',
      image: '/images/3.png',
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 399,
      category: '64b3a3da8373c45fc81b1a83',
      countInStock: 10,
      rating: 5,
      numReviews: 9,
   },
   {
      name: 'Nike Air Max 274',
      image: '/images/2.png',
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 49,
      category: '64b3a3da8373c45fc81b1a83',
      countInStock: 7,
      rating: 2,
      numReviews: 2,
   },
   {
      name: 'Nike Air Max 275',
      image: '/images/1.png',
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 29,
      category: '64880cf20db35710c25dbd80',
      countInStock: 0,
      rating: 0,
      numReviews: 0,
   },
   {
      name: 'Nike Air Max 276',
      image: '/images/7.png',
      description:
         "The Nike Air Max 276 is the epitome of comfort and style. Its innovative design combines a lightweight, breathable upper with a cushioned midsole for ultimate support. Whether you're hitting the gym or running errands, these sneakers will keep your feet feeling fresh all day long.",
      price: 149,
      category: '64880cf20db35710c25dbd80',
      countInStock: 5,
      rating: 4.5,
      numReviews: 6,
   },
   {
      name: 'Nike Air Max 277',
      image: '/images/8.png',
      description:
         "Step up your sneaker game with the Nike Air Max 277. Featuring a sleek and modern design, these shoes are perfect for any occasion. The premium materials ensure durability, while the cushioned insole provides maximum comfort. Whether you're hitting the streets or heading to the office, these sneakers will elevate your style.",
      price: 199,
      category: '64880cf20db35710c25dbd81',
      countInStock: 2,
      rating: 3,
      numReviews: 2,
   },
   {
      name: 'Nike Air Max 278',
      image: '/images/9.png',
      description:
         "Experience the ultimate in comfort and style with the Nike Air Max 278. These sneakers feature a plush cushioning system that provides unparalleled support and responsiveness. The sleek design and premium materials make them a versatile choice for any occasion. Whether you're hitting the gym or meeting up with friends, these shoes will keep you looking and feeling great.",
      price: 119,
      category: '64880cf20db35710c25dbd82',
      countInStock: 8,
      rating: 4,
      numReviews: 5,
   },
   {
      name: 'Nike Air Max 279',
      image: '/images/10.png',
      description:
         "Take your style to new heights with the Nike Air Max 279. These sneakers feature a bold and eye-catching design that is sure to turn heads. The cushioned insole and responsive midsole provide all-day comfort, while the durable outsole offers excellent traction. Whether you're hitting the streets or hanging out with friends, these shoes will take your look to the next level.",
      price: 249,
      category: '64880cf20db35710c25dbd82',
      countInStock: 6,
      rating: 4.5,
      numReviews: 8,
   },
   {
      name: 'Nike Air Max 280',
      image: '/images/11.png',
      description:
         "Stay ahead of the game with the Nike Air Max 280. These sneakers feature a sleek and modern design that is perfect for any occasion. The lightweight construction and cushioned insole provide maximum comfort, while the durable outsole offers excellent traction. Whether you're hitting the gym or running errands, these shoes will keep you looking stylish and feeling great.",
      price: 299,
      category: '64b3a3da8373c45fc81b1a83',
      countInStock: 4,
      rating: 4,
      numReviews: 7,
   },
   {
      name: 'Nike Air Max 281',
      image: '/images/1.png',
      description:
         "Stay ahead of the game with the Nike Air Max 280. These sneakers feature a sleek and modern design that is perfect for any occasion. The lightweight construction and cushioned insole provide maximum comfort, while the durable outsole offers excellent traction. Whether you're hitting the gym or running errands, these shoes will keep you looking stylish and feeling great.",
      price: 299,
      category: '64b3a3da8373c45fc81b1a82',
      countInStock: 4,
      rating: 4,
      numReviews: 7,
   },
]

// const products = [
//    {
//       name: 'Nike Air Max 270',
//       image: '/images/6.png',
//       description:
//          "The Nike Air Max 276 is the epitome of comfort and style. Its innovative design combines a lightweight, breathable upper with a cushioned midsole for ultimate support. Whether you're hitting the gym or running errands, these sneakers will keep your feet feeling fresh all day long.",
//       price: 149,
//       category: '64880cf20db35710c25dbd80',
//       countInStock: {
//          sizes: [39, 40, 41, 42],
//          colors: ['Red', 'Blue', 'Green'],
//          quantities: {
//             Red: {
//                39: ...,
//                40: 3,
//                41: 4,
//                42: 5,
//             },
//             Blue: {
//                39: 2,
//                40: 3,
//                41: 4,
//                42: 5,
//             },
//             Green: {
//                39: 2,
//                40: 3,
//                41: 4,
//                42: 5,
//             },
//          },
//          totalCountInStock: 32,
//       },
//       rating: 4,
//       numReviews: 4,
//    },
// ]

// Hàm tạo slug từ tên sản phẩm
function createSlug(name) {
   return name
      .toLowerCase()
      .replace(/ /g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
      .replace(/[^\w-]+/g, '') // Loại bỏ các ký tự không hợp lệ
}

// Thêm trường "slug" vào mỗi sản phẩm
products.forEach((product) => {
   product.slug = createSlug(product.name)
})

export default products
