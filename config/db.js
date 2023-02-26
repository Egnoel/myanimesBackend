import Mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await Mongoose.connect(
      'mongodb+srv://blue:bluestorm1845@mern.jhpko.mongodb.net/anime?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

export default connectDB;
