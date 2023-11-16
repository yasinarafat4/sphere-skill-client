import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Nav</h1>
      <div className="min-h-[calc(100vh-436px)] lg:pt-20">
        <Outlet />
      </div>
      <h1>Footer</h1>
    </div>
  );
};

export default Main;
