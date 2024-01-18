// controllers/bikeController.js
exports.getAllBikes = (req, res) => {
  res.send('List of all bikes');
};

exports.createBike = (req, res) => {
  // Logic to create a new bike
  res.send('Bike created successfully');
};
