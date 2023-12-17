import { Int32 } from "mongodb";
import mongoose from "mongoose";

const { Schema } = mongoose;

const templateSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    downloadCount: {
      type: Number,
      default: 0,
      required: false,
    },
    sentCount: {
      type: Number,
      default: 0,
      required: false,
    },
    printCount: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Template ||
  mongoose.model("Template", templateSchema);
