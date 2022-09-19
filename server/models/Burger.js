import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const BurgerSchema = new Schema(
  {
    type: { type: String },
    id: { type: Number },
    name: { type: String },
    price: { type: Number }
    // NOTE If you wish to add additional properties do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
