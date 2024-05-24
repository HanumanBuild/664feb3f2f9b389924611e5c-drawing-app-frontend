import React from 'react';

function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* User's drawings and gallery of other people's drawings will be displayed here */}
      </div>
    </div>
  );
}

export default Dashboard;