import mongoose from "mongoose";

async function connectMongo() {
    await mongoose.connect('mongodb+srv://dotran260:123123Do@shopshoe.dxody6q.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Kết nối MongoDB thành công!');
            // ONLY ADD DATA ONE TIME
            // User.insertMany(dataUser);
            // Product.insertMany(dataProduct);
            // ProductStat.insertMany(dataProductStat);
        })
        .catch((err) => {
            console.error('Lỗi kết nối MongoDB:', err);
        })
}
export default connectMongo;