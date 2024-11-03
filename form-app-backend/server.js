const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();   

const app = express();
const port = process.env.PORT || 5000;


app.use(cors({
  origin: ["https://advert-frontend.vercel.app"], 
  methods: ['POST', 'GET'],
  credentials: true
}));

// Middleware
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));


const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  emailPassword: String,  
  phone: String,
  address: String,
  city: String,
  state: String,
  country: String,
  zip: String,
});

const FormData = mongoose.model('FormData', formSchema);


app.post('/submit', async (req, res) => {
  const formData = new FormData(req.body);
  try {
    await formData.save();
    res.status(201).send('Form data saved successfully');
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).send('Error saving form data');
  }
});


app.get('/', (req, res) => {
  res.send('Backend server is running!');
});


app.listen(port, () => console.log(`Server running on port ${port}`));

