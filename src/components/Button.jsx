const Button = ({
  type = "button",
  className = "",
  text = "",
  icon = "",
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={[
        "flex items-center gap-x-2 justify-center py-2 px-4 border-0 rounded-md",
        className,
      ].join(" ")}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {icon ? <span className="material-icons-outlined">{icon}</span> : <></>}
      {text ? <p className="font-bold">{text}</p> : <></>}
    </button>
  );
};

export default Button;
