const colors = [
   {
      name: 'Black',
      color: '#000000',
   },
   {
      name: 'White',
      color: '#ffffff',
   },
   {
      name: 'Red',
      color: '#ff0000',
   },
]
// Hàm tạo slug
function createSlug(name) {
   return name
      .toLowerCase()
      .replace(/ /g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
      .replace(/[^\w-]+/g, '') // Loại bỏ các ký tự không hợp lệ
}

// Thêm trường "slug" vào mỗi color
colors.forEach((color) => {
   color.slug = createSlug(color.name)
})
export default colors
