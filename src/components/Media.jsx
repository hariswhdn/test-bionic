import { useState } from "react";
import favorite from "../assets/svg/favorite.svg";

const Media = ({ media, isFavourite }) => {
  const [idx, setIdx] = useState(0);

  return (
    <div className="flex relative justify-center overflow-hidden aspect-[270/257] w-full rounded-xl">
      <img src={media[idx]} className="object-cover max-w-[unset]" />
      <div className="flex items-start z-10 absolute top-0 left-0 w-full p-3">
        {isFavourite ? (
          <p className="py-[5px] font-semibold text-black rounded-[28px] bg-white shadow-[0_4px_10px_rgba(0,0,0,.16)] px-2.5">
            Guest favorite
          </p>
        ) : (
          <></>
        )}
        <div
          className={[
            "flex ml-auto items-center justify-center w-7 h-7 cursor-pointer",
            "[&>img]:block [&>img]:w-6 [&>img]:h-6",
            "[&>span]:hidden [&>span]:text-[28px] [&>span]:text-[#FF385C]",
            "[&:hover>img]:hidden",
            "[&:hover>span]:inline-block",
          ].join(" ")}
        >
          <img src={favorite} />
          <span className="material-icons-outlined">favorite</span>
        </div>
      </div>
      <div
        className={[
          "hidden justify-between p-3 absolute top-0 h-full left-0 w-full items-center",
          "[&>button]:flex [&>button]:w-7 [&>button]:h-7 [&>button]:items-center [&>button]:justify-center [&>button]:bg-white [&>button]:rounded-full",
          "[&>button:hover]:w-8 [&>button:hover]:h-8",
        ].join(" ")}
      >
        {idx > 0 ? (
          <button type="button" onClick={() => setIdx((v) => v - 1)}>
            <span className="material-icons-outlined">chevron_left</span>
          </button>
        ) : (
          <br />
        )}
        {idx < media.length - 1 ? (
          <button type="button" onClick={() => setIdx((v) => v + 1)}>
            <span className="material-icons-outlined">chevron_right</span>
          </button>
        ) : (
          <br />
        )}
      </div>
      <ul
        className={[
          "absolute bottom-0 left-0 w-full h-2 items-center justify-center p-3 flex gap-x-1.5",
          "[&>li]:rounded-full [&>li]:w-1.5 [&>li]:h-1.5",
        ].join(" ")}
      >
        {media.map((o, i) => (
          <li
            key={i}
            className={[idx === i ? "bg-white" : "bg-white/50"].join(" ")}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Media;
