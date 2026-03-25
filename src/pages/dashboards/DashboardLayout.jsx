import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const style = "bg-blue-400 rounded px-2 cursor-pointer text-white"
const container = {
    margin: '50px',
    position: 'relative',
    top: '20px',
    background: "orange",
    padding: '20px'

}

function DashboardLayout() {
  return (
    <div>
        <h3 className='text-center'>Dashboard</h3>
        <div className='flex justify-center gap-2 mt-4'>
            <Link className={style} to="/dashboard">Home</Link>
            <Link className={style} to="/dashboard/stats">Stats</Link>
            <Link className={style} to="/dashboard/settings">Settings</Link>
        </div>

        <main style={container}>
            <Outlet />
        </main>

    </div>
  );
}

export default DashboardLayout;