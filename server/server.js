const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('./models/user');
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/shreejiDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
  name: String,
  service: String,
  date: String,
  time: String
});

// Appointment Model
const Appointment = mongoose.model("Appointment", appointmentSchema);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend working");
});

// Save Appointment
app.post("/api/book", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();

    console.log("Saved to MongoDB:", req.body);

    res.send("Appointment saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving appointment");
  }
});

// Get All Appointments
app.get("/api/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).send("Error fetching appointments");
  }
});
//
app.put("/api/appointments/:id", async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).send("Error updating appointment");
  }
});
//
app.delete("/api/appointments/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.send("Appointment deleted successfully");
  } catch (error) {
    res.status(500).send("Error deleting appointment");
  }
});
//
app.delete("/api/appointments/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.send("Appointment deleted successfully");
  } catch (error) {
    res.status(500).send("Error deleting appointment");
  }
});
//
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || "Error registering user");
  }
});
//
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send("User not found");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send("Invalid password");
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      "mysecretkey",
      { expiresIn: "1d" }
    );

    // Return token
    res.json({
      message: "Login successful",
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in");
  }
});
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
