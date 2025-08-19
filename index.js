const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example route
app.get('/', (req, res) => {
  res.send('Music Distribution Backend Running');
});

// Your other routes (revenue, corrections, payments, etc.) yaha add karo
// e.g. app.use('/api/revenue', revenueRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
