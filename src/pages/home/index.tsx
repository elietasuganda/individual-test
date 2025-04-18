import React from 'react';

type HomeProps = {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
};

const Home: React.FC<HomeProps> = ({ user, onLogout }) => {
  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome, {user.name} 👋</h1>
      <p>Email: {user.email}</p>

      <div style={{ marginTop: 20 }}>
        <button onClick={onLogout}>Logout</button>
      </div>

      <div style={{ marginTop: 40 }}>
        <h2>Dashboard</h2>
        <ul>
          <li>📦 Order Baru</li>
          <li>📊 Statistik Penjualan</li>
          <li>⚙️ Pengaturan Akun</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
