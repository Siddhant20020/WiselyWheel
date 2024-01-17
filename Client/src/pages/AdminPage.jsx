// AdminPage.js
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function AdminPage() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Fetch or load your dashboard data here
    // Example: Fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("your_dashboard_api_endpoint");
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []); // Run the effect only once on mount

  return (
    <div className="App">
      <Header />
      <h2>Admin Page</h2>
      {/* Add your admin-related components and logic here */}

      {/* Dashboard Section */}
      <div className="dashboard">
        <h3>Dashboard Section</h3>
        {dashboardData ? (
          // Render dashboard content using the fetched data
          <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
        ) : (
          // Render loading indicator or other content while data is being fetched
          <p>Loading dashboard data...</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default AdminPage;
