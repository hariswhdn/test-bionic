import Button from "../components/Button";

const Dialog = ({
  yes = () => {},
  no = () => {},
  title = "",
  text = "",
  no_text = "",
  yes_text = "",
  isLoading = false,
}) => {
  return (
    <div className="flex z-20 absolute top-0 left-0 w-full h-full overflow-y-auto items-center justify-center bg-black/20">
      {isLoading ? (
        <span className="material-icons-outlined animate-spin text-white">
          refresh
        </span>
      ) : (
        <div className="flex w-full max-w-[360px] flex-col bg-[#f0ede5] rounded-lg border border-black/10 m-auto divide-y divide-black/10">
          <div className="flex items-center justify-between py-3 px-4">
            <p className="font-bold">{title}</p>
            <button type="button" className="flex" onClick={() => no()}>
              <span className="material-icons-outlined">close</span>
            </button>
          </div>
          <div className="flex px-4 py-3">
            <p>{text}</p>
          </div>
          <div className="flex gap-x-4 py-3 justify-end px-4">
            <Button
              className="bg-[#e74c3c] py-1.5 text-white"
              text={no_text}
              onClick={() => no()}
            />
            <Button
              className="bg-[#4b9741] py-1.5 text-white"
              text={yes_text}
              onClick={() => yes()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dialog;
