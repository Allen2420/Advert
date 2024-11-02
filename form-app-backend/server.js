const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
// app.use(cors(
//   {
//       origin = ['https://adpage.vercel.app"],
//       methods = ['POST', 'GET'],
//       credentials: true
//   }
// ));

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));


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

// POST endpoint to receive form data
app.post('/submit', async (req, res) => {
  const formData = new FormData(req.body);
  try {
    await formData.save();
    res.status(201).send('Form data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving form data');
  }
});
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});


app.listen(port, () => console.log(`Running on port ${port}`));
