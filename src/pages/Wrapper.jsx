import { cloneElement } from "react";

const Dashboard = ({ children }) => {
  return (
    <main className="relative min-h-dvh w-full flex flex-col">
      {cloneElement(children)}
    </main>
  );
};

export default Dashboard;
