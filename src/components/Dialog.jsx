const Dialog = ({ yes, no, title, text, no_text, yes_text, isLoading }) => {
  return (
    <div className="flex z-20 absolute top-0 left-0 w-full h-full overflow-y-auto items-center justify-center bg-black/20">
      {isLoading ? (
        <span className="material-icons-outlined animate-spin text-white">
          refresh
        </span>
      ) : (
        <div className="flex w-full max-w-[360px] flex-col bg-[#f0ede5] rounded-xl border border-black/20 m-auto divide-y divide-black/20">
          <div className="flex items-center justify-between py-4 px-6">
            <p className="font-bold">{title}</p>
            <button type="button" className="flex" onClick={() => no()}>
              <span className="material-icons-outlined">close</span>
            </button>
          </div>
          <div className="flex px-6 py-4">
            <p>{text}</p>
          </div>
          <div className="flex gap-x-4 py-4 justify-end px-6">
            <button
              type="button"
              className="flex px-4 py-[5px] text-white border border-transparent font-bold rounded-lg bg-[#e74c3c]"
              onClick={() => no()}
            >
              {no_text}
            </button>
            <button
              type="button"
              className="flex px-4 py-[5px] text-white border border-transparent font-bold rounded-lg bg-[#4b9741]"
              onClick={() => yes()}
            >
              {yes_text}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dialog;
