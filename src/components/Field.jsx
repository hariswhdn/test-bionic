import { useRef } from "react";
import Button from "../components/Button";

const Field = ({
  labelClass = "",
  multiple = false,
  fileName = "",
  isError = false,
  label = "",
  type = "text",
  placeholder = "",
  disabled = false,
  value = "",
  triggerClass = "",
  triggerText = "",
  required = false,
  onInput = () => {},
  onChange = () => {},
  setFileName = () => {},
}) => {
  const inputRef = useRef(null);

  return (
    <label className={["flex flex-col", labelClass].join(" ")}>
      {label ? <p className="font-bold mb-2">{label}</p> : <></>}
      {type === "textarea" ? (
        <textarea
          ref={inputRef}
          rows="1"
          className={[
            "bg-transparent border-transparent py-[7px] px-4 border",
            isError ? "border-b-[#e74c3c] text-[#e74c3c]" : "border-b-black/10",
          ].join(" ")}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onInput={(e) => onInput(e)}
          onChange={(e) => onChange(e)}
          required={required}
          autoComplete="off"
          spellCheck="false"
        ></textarea>
      ) : (
        <>
          <input
            ref={inputRef}
            className={[
              "bg-transparent border-transparent",
              type === "file" ? "w-0 h-0 border-0 p-0" : "py-[7px] px-4 border",
              type !== "file" && isError
                ? "border-b-[#e74c3c] text-[#e74c3c]"
                : "border-b-black/10",
            ].join(" ")}
            multiple={multiple}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            value={value}
            onInput={(e) => onInput(e)}
            onChange={(e) => {
              if (type === "file") {
                setFileName([...e.target.files].map((o) => o.name).join(", "));
              }
              onChange(e);
            }}
            autoComplete="off"
            spellCheck="false"
          />
          {type === "file" ? (
            <div className="flex items-center gap-x-4">
              <Button
                className={triggerClass}
                icon="file_upload"
                text={triggerText}
                onClick={() => inputRef.current.click()}
              />
              {fileName ? <p className="text-bold">{fileName}</p> : <></>}
            </div>
          ) : (
            <></>
          )}
        </>
      )}
      {isError ? (
        <p className="mt-1 text-[#e74c3c]">This field is required</p>
      ) : (
        <></>
      )}
    </label>
  );
};

export default Field;
