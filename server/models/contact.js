const mongoose = require("mongoose");

// Define the schema for contact form submission
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name is required
    },
    email: {
      type: String,
      required: true, // Email is required
      lowercase: true, // Convert email to lowercase for consistency
      trim: true, // Remove extra spaces
    },
    message: {
      type: String,
      required: true, // Message is required
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the creation time
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Create and export the model
module.exports = mongoose.model("Contact", contactSchema);
