import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    gigId: {
      type: Schema.Types.ObjectId,
      ref: "Gig",
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    payment_intent: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
