// BrowseBikes.js
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function BrowseBikes() {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch two-wheeler data from an API or another data source
    // For simplicity, I'm using a mock data fetch function
    fetchTwoWheelerData();
  }, []);

  const fetchTwoWheelerData = () => {
    // Mock API call (replace with your actual API endpoint)
    // For now, using a simple array as mock data
    const mockTwoWheelers = [
      { id: 1, name: 'Honda Activa', company: 'Honda', type: 'Scooter' },
      { id: 2, name: 'Bajaj Pulsar', company: 'Bajaj', type: 'Motorbike' },
      { id: 3, name: 'TVS Apache', company: 'TVS', type: 'Motorbike' },
      { id: 4, name: 'Yamaha FZ', company: 'Yamaha', type: 'Motorbike' },
      // Add more two-wheelers as needed
    ];

    setBikes(mockTwoWheelers);
    setFilteredBikes(mockTwoWheelers);
  };

  const handleFilterChange = (event) => {
    const newFilter = event.target.value.toLowerCase();
    setFilter(newFilter);

    // Apply filter to the list of two-wheelers
    const filtered = bikes.filter((bike) =>
      bike.name.toLowerCase().includes(newFilter) ||
      bike.company.toLowerCase().includes(newFilter)
    );
    setFilteredBikes(filtered);
  };

  return (
    <div className="App">
      <Header />
      <h2>Browse Two-Wheelers</h2>

      {/* Filter input */}
      <input
        type="text"
        placeholder="Filter by name or company"
        value={filter}
        onChange={handleFilterChange}
      />

      {/* Two-wheelers grid with filters */}
      <div>
        {filteredBikes.map((bike) => (
          <div key={bike.id}>
            <p>{bike.name}</p>
            <p>{bike.company}</p>
            <p>{bike.type}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default BrowseBikes;


// import React from 'react';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';

// function BrowseBikes() {
//   return (
//     <div className="App">
//       {<Header />}
//       <h2>Browse Bikes</h2>
//       {/* Bikes grid with filters goes here */}
//       {<Footer />}
//     </div>
//   );
// }

// export default BrowseBikes;
