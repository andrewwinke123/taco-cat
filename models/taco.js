import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  commenter: { type: Schema.Types.ObjectId, ref: "Profile"},
})

const tacoSchema = new Schema({
  name: String,
  tasty: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  comments: [commentSchema]
}, {
  timestamps: true
})

const Taco = mongoose.model('Taco', tacoSchema)

export {
  Taco
}