import React from "react";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open dark:bg-slate-900 dark:text-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mt-4"
        >
          Open
        </label>
        <p className="text-2xl text-red-600 py-10">Dashboard Incomplete Due to Short Time!</p>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        >
        </label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content dark:bg-slate-800 ">
          {/* Sidebar content here */}
          <h1 className="text-center text-2xl font-bold text-slate-600 dark:text-white mt-20 lg:mt-4">Instructor Dashboard</h1>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
