import { useEffect, useState } from "react";

const Alert = ({
  time,
  onEnd = () => {},
  title,
  className,
  text,
  is_error,
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!init) {
      setInit(true);
    }
    return () => {
      setInit(false);
    };
  }, []);

  // useEffect(() => {
  //   if (init) {
  //     setTimeout(() => {
  //       onEnd();
  //       setInit(false);
  //     }, time || 3000);
  //   }
  // }, [init]);

  return (
    <div
      className={[
        "flex-col py-3 px-4 w-full max-w-[300px] bg-[#f0ede5] z-20 absolute absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-start gap-y-2 border border-black/20 rounded-xl",
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-x-4">
        <span
          className={[
            "material-icons-outlined",
            is_error ? "text-[#e74c3c]" : "text-[#4b9741]",
          ].join(" ")}
        >
          help
        </span>
        <p
          className={[
            "font-bold",
            is_error ? "text-[#e74c3c]" : "text-[#4b9741]",
          ].join(" ")}
        >
          {title}
        </p>
      </div>
      <p
        className={[
          "ml-[32px] text-sm",
          is_error ? "text-[#e74c3c]" : "text-[#4b9741]",
        ].join(" ")}
      >
        {text}
      </p>
    </div>
  );
};

export default Alert;
