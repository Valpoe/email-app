import mongoose from "mongoose";
import Template from "./models/Template";
import { emailComponentRenders } from "../../components/EmailComponents";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDBee");
  } catch (err) {
    console.log(err);
  }
};
// const emailTemplates = [{ title: "Testi" }];
const initializeDatabase = async () => {
  console.log("initializing database..");

  try {
    await connectMongoDB();

    for (const templateData of emailComponentRenders) {
      console.log(templateData.editValues.title);
      let titles = templateData.editValues.title;
      console.log("title " + titles);
      // Check if the template already exists in the database
      const existingTemplate = await Template.findOne({
        title: titles,
      });

      if (!existingTemplate) {
        // If the template doesn't exist, insert it into the database
        const newTemplate = new Template({ title: titles });
        await newTemplate.save();
        console.log(`Template "${titles}" added to the database.`);
      } else {
        console.log(`Template "${titles}" already exists in the database.`);
      }
    }

    console.log("Initialization complete.");
  } catch (error) {
    console.error("Error initializing the database:", error);
  }
};

export { connectMongoDB, initializeDatabase };
