import { model, Schema } from "mongoose";

const TODO = new Schema({
  title: { type: String, required: true, },
  description: { type: String, required: true, },
  status: { type: String, required: true, },
  boardID: { type: Number },
})

export default model('Todo', TODO);
