const products = [
   {
      name: 'Velcro Ballerinas For Girls  (Pink)',
      image: '/images/6.png',
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 89,
      category: '64880cf20db35710c25dbd80',
      countInStock: 3,
      rating: 4,
      numReviews: 4,
   },
   {
      name: 'Velcro Sneakers For Boys & Girls  (Blue)',
      image: '/images/5.png',
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 599,
      category: '64880cf20db35710c25dbd80',
      countInStock: 10,
      rating: 2,
      numReviews: 2,
   },
   {
      name: 'Sesame Street Unisex-Child ELMO Puppet Slipper',
      image: '/images/4.png',
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 929,
      category: '64880cf20db35710c25dbd81',
      countInStock: 0,
      rating: 3.5,
      numReviews: 3,
   },
   {
      name: 'Lace Casual Boots For Boys & Girls  (Tan)',
      image: '/images/3.png',
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 399,
      category: '64880cf20db35710c25dbd83',
      countInStock: 10,
      rating: 5,
      numReviews: 9,
   },
   {
      name: 'Lace Walking Shoes For Boys & Girls  (Pink)',
      image: '/images/2.png',
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 49,
      category: '64880cf20db35710c25dbd83',
      countInStock: 7,
      rating: 2,
      numReviews: 2,
   },
   {
      name: 'Women Red Heels Sandal',
      image: '/images/1.png',
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 29,
      category: '64880cf20db35710c25dbd80',
      countInStock: 0,
      rating: 0,
      numReviews: 0,
   },
]

// const products = [
//    {
//       name: 'Velcro Ballerinas For Girls  (Pink)',
//       image: '/images/6.png',
//       description:
//          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
//       price: 89,
//       category: '64880cf20db35710c25dbd80',
//       countInStock: {
//          size: ['S', 'M', 'L', 'XL'],
//          color: ['Red', 'Blue', 'Green'],
//          quantity: 10,
//       },
//       rating: 4,
//       numReviews: 4,
//    },
//    {
//       name: 'Velcro Sneakers For Boys & Girls  (Blue)',
//       image: '/images/5.png',
//       description:
//          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
//       price: 599,
//       category: '64880cf20db35710c25dbd80',
//       countInStock: {
//          size: ['S', 'M', 'L', 'XL'],
//          color: ['Red', 'Blue', 'Green'],
//          quantity: 10,
//       },
//       rating: 2,
//       numReviews: 2,
//    },
//    {
//       name: 'Sesame Street Unisex-Child ELMO Puppet Slipper',
//       image: '/images/4.png',
//       description:
//          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
//       price: 929,
//       category: '64880cf20db35710c25dbd81',
//       countInStock: {
//          size: ['S', 'M', 'L', 'XL'],
//          color: ['Red', 'Blue', 'Green'],
//          quantity: 10,
//       },
//       rating: 3.5,
//       numReviews: 3,
//    },
//    {
//       name: 'Lace Casual Boots For Boys & Girls  (Tan)',
//       image: '/images/3.png',
//       description:
//          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
//       price: 399,
//       category: '64880cf20db35710c25dbd83',
//       countInStock: {
//          size: ['S', 'M', 'L', 'XL'],
//          color: ['Red', 'Blue', 'Green'],
//          quantity: 10,
//       },
//       rating: 5,
//       numReviews: 9,
//    },
//    {
//       name: 'Lace Walking Shoes For Boys & Girls  (Pink)',
//       image: '/images/2.png',
//       description:
//          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
//       price: 49,
//       category: '64880cf20db35710c25dbd83',
//       countInStock: {
//          size: ['S', 'M', 'L', 'XL'],
//          color: ['Red', 'Blue', 'Green'],
//          quantity: 10,
//       },
//       rating: 2,
//       numReviews: 2,
//    },
//    {
//       name: 'Women Red Heels Sandal',
//       image: '/images/1.png',
//       description:
//          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
//       price: 29,
//       category: '64880cf20db35710c25dbd80',
//       countInStock: {
//          size: ['S', 'M', 'L', 'XL'],
//          color: ['Red', 'Blue', 'Green'],
//          quantity: 10,
//       },
//       rating: 0,
//       numReviews: 0,
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
