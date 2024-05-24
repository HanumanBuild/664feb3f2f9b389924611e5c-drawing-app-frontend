import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

function Dashboard() {
  const [userDrawings, setUserDrawings] = useState([]);
  const [allDrawings, setAllDrawings] = useState([]);

  useEffect(() => {
    const fetchUserDrawings = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.get('/api/drawings/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserDrawings(response.data);
      } catch (error) {
        console.error('Error fetching user drawings', error);
      }
    };

    const fetchAllDrawings = async () => {
      try {
        const response = await axiosInstance.get('/api/drawings/all');
        setAllDrawings(response.data);
      } catch (error) {
        console.error('Error fetching all drawings', error);
      }
    };

    fetchUserDrawings();
    fetchAllDrawings();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <h3 className="text-xl mb-2">Your Drawings</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {userDrawings.map(drawing => (
          <div key={drawing._id} className="border p-2">
            <img src={drawing.imageData} alt="User Drawing" className="w-full h-auto" />
          </div>
        ))}
      </div>
      <h3 className="text-xl mb-2">Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allDrawings.map(drawing => (
          <div key={drawing._id} className="border p-2">
            <img src={drawing.imageData} alt="Gallery Drawing" className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;