import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

const connectMongo = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB");
  }
};

export default connectMongo;
