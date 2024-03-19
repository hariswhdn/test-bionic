import Navbar from "../components/Navbar";

const Rwd = () => {
  return (
    <div
      className={[
        "w-full min-w-[360px] min-h-dvh",
        "[&_.item]:flex [&_.item]:p-4 [&_.item]:items-center [&_.item]:justify-center [&_.item]:border [&_.item]:rounded",
      ].join(" ")}
    >
      <Navbar />
      <div className="flex gap-y-4 flex-col p-4">
        <div className="item bg-blue-50 border-blue-200">1</div>
        <div
          className={["grid grid-cols-2 gap-4", "max-md:grid-cols-1"].join(" ")}
        >
          <div className="item bg-blue-50 border-blue-200">2</div>
          <div className="item bg-blue-50 border-blue-200">3</div>
        </div>
        <div
          className={["grid grid-cols-3 gap-4", "max-md:grid-cols-1"].join(" ")}
        >
          <div className={["flex flex-col gap-y-4", "md:col-span-2"].join(" ")}>
            <div className="item bg-red-50 border-red-200 ">4</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="item bg-blue-50 border-blue-200">5</div>
              <div className="item bg-blue-50 border-blue-200">6</div>
              <div className="item bg-blue-50 border-blue-200">7</div>
            </div>
          </div>
          <div
            className={["grid grid-cols-1 gap-4", "max-md:grid-cols-3"].join(
              " "
            )}
          >
            <div className="item bg-red-50 border-red-200">8</div>
            <div className="item bg-red-50 border-red-200">9</div>
            <div className="item bg-red-50 border-red-200">10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rwd;
