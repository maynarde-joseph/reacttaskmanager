import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    email: String,
    name: String,
    password: String,
    watched_stocks: [String],
    curr_investments: [
      {
        stock: String,
        amount: Number,
        buy_date: String,
        stock_value: Number,
        currency: String,
      },
    ],
    prev_investments: [
      {
        stock: String,
        amount: Number,
        buy_date: String,
        sell_date: String,
        stock_value: Number,
        currency: String,
      },
    ],
    balance: {
      currency: String,
      total: Number,
      month: Number,
    },
    settings: {
      mode: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
