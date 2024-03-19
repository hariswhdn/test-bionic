import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs, postJob } from "../stores/jobSlice";
import Field from "../components/Field";
import Button from "../components/Button";
import Dialog from "../components/Dialog";
import Alert from "../components/Alert";
import { obj_text_dialog, obj_text_alert } from "../utils/text";

const Test = () => {
  const dispatch = useDispatch();

  const { loading, jobs, error } = useSelector((state) => state.job);

  const [init, setInit] = useState(false);
  const [selectedObj, setSelectedObj] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState([]);
  const [isCanError, setIsCanError] = useState(false);
  const [arrError, setArrError] = useState([]);
  const [objDialog, setObjDialog] = useState(null);
  const [objAlert, setObjAlert] = useState(null);

  useEffect(() => {
    if (!init) {
      setInit(true);
    }
  }, []);

  useEffect(() => {
    if (init) {
      fetchGetJobs();
    }
  }, [init]);

  const fetchGetJobs = () => {
    if (init && !loading) {
      dispatch(getJobs());
    }
  };

  useEffect(() => {
    if (init) {
      if (error) {
        setObjAlert({
          title: obj_text_alert[objDialog.action].error.title,
          text: obj_text_alert[objDialog.action].error.text,
          is_error: true,
        });
        setObjDialog(null);
      }
      console.log("error", error);
    }
  }, [error]);

  const checkIsError = () => {
    const will_arr_error = [];
    if (!(name.length > 0)) {
      will_arr_error.push("name");
    }
    if (!(phone.length > 0)) {
      will_arr_error.push("phone");
    }
    if (!(email.length > 0)) {
      will_arr_error.push("email");
    }
    if (!(file.length > 0)) {
      will_arr_error.push("file");
    }
    setArrError(will_arr_error);
  };

  useEffect(() => {
    if (isCanError) {
      checkIsError();
    }
  }, [name, phone, email, file]);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsCanError(true);
    if (
      !(name.length > 0) ||
      !(phone.length > 0) ||
      !(email.length > 0) ||
      !(file.length > 0)
    ) {
      checkIsError();
      return false;
    }
    setObjDialog({
      action: "post",
    });
  };

  const fetchPostJob = () => {
    if (init && !loading) {
      dispatch(
        postJob({
          displayName: name,
          subject: selectedObj.title,
          email: email,
          phone: phone,
          message: message,
          // file: file,
          ptJobApplyType: "APPLICATION",
          isActive: selectedObj.isActive,
          ptJobPost: selectedObj,
        })
      ).then((ok) => {
        if (ok) {
          setObjAlert({
            title: obj_text_alert[objDialog.action].success.title,
            text: obj_text_alert[objDialog.action].success.text,
            is_error: false,
          });
          setObjDialog(null);
          // resetThisPage();
        }
      });
    }
  };

  return (
    <>
      <ul
        className={[
          "grid grid-cols-2 gap-4 p-4",
          "[&>li]:flex [&>li]:shadow-lg [&>li]:bg-[#f0ede5] [&>li]:items-center [&>li]:justify-between [&>li]:rounded-lg [&>li]:py-3 [&>li]:px-6",
          "[&>li>p]:text-[#4b9741] [&>li>p]:font-bold",
          "[&>li>button]:text-[#fff] [&>li>button]:rounded-md [&>li>button]:px-4 [&>li>button]:py-1.5 [&>li>button]:bg-[#f09506] [&>li>button]:border-0 [&>li>button]:font-bold [&>li>button]:whitespace-nowrap",
        ].join(" ")}
      >
        {jobs.map((o) => (
          <li key={o.id}>
            <p>{o.title}</p>
            <button type="button" onClick={() => setSelectedObj(o)}>
              See Job
            </button>
          </li>
        ))}
      </ul>
      {selectedObj ? (
        <section className="flex z-10 absolute top-0 left-0 w-full h-full overflow-y-auto items-center justify-center bg-black/20">
          <div className="flex flex-col max-w-[1152px] w-full bg-[#f0ede5] m-auto rounded-xl border border-black/20 divide-y divide-black/20">
            <div className="flex items-center justify-between py-4 px-6">
              <p className="font-bold">{selectedObj.title}</p>
              <button
                type="button"
                onClick={() => setSelectedObj(null)}
                className="flex"
              >
                <span className="material-icons-outlined">close</span>
              </button>
            </div>
            <div className="flex flex-col py-4 px-6 gap-y-4">
              <p className="text-[#4b9741] mb-2 font-bold text-3xl">
                {selectedObj.title}
              </p>
              <div
                className={[
                  "flex flex-col gap-y-2",
                  "[&>h5]:text-xl [&>h5]:font-bold",
                  "[&_ul]:mb-2 [&_ul]:list-disc [&_ul]:pl-10 [&_ul]:flex [&_ul]:flex-col",
                ].join(" ")}
              >
                {parse(selectedObj.description.txt)}
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-bold">Send Your Job Application</p>
                <form
                  onSubmit={(e) => onSubmit(e)}
                  className="flex flex-col gap-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      isError={arrError.indexOf("name") > -1}
                      label="Full name"
                      placeholder="Enter your name"
                      value={name}
                      disabled={false}
                      onInput={(e) => setName(e.target.value)}
                    />
                    <Field
                      isError={arrError.indexOf("phone") > -1}
                      label="Mobile number"
                      placeholder="Enter your mobile number"
                      type="number"
                      value={phone}
                      disabled={false}
                      onInput={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      isError={arrError.indexOf("email") > -1}
                      label="Email address"
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      disabled={false}
                      onInput={(e) => setEmail(e.target.value)}
                    />
                    <Field
                      label="Message"
                      placeholder="Write your message"
                      type="textarea"
                      value={message}
                      disabled={false}
                      onInput={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <Field
                    isError={arrError.indexOf("file") > -1}
                    labelClass="place-self-start"
                    triggerClass="bg-[#f09506] text-white"
                    triggerText="Upload CV/Resume"
                    type="file"
                    multiple={true}
                    disabled={false}
                    onChange={(e) => setFile([...e.target.files])}
                  />
                  <Button
                    className="bg-[#4b9741] text-white whitespace-nowrap"
                    type="submit"
                    text="Submit Application"
                    disabled={false}
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
      {objDialog ? (
        <Dialog
          isLoading={objDialog?.isProceed || false}
          title={obj_text_dialog[objDialog.action].title}
          text={obj_text_dialog[objDialog.action].text}
          no_text={obj_text_dialog[objDialog.action].no}
          yes_text={obj_text_dialog[objDialog.action].yes}
          yes={() => {
            setObjDialog((v) => ({
              ...v,
              isProceed: true,
            }));
            fetchPostJob();
          }}
          no={() => setObjDialog(null)}
        />
      ) : (
        <></>
      )}
      {objAlert ? (
        <Alert
          title={objAlert.title}
          text={objAlert.text}
          is_error={objAlert.is_error}
          onEnd={() => {
            if (objAlert.is_error) {
              dispatch(jobSlice.actions.setError(null));
            }
            setObjAlert(null);
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Test;
