import parse from "html-react-parser";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs, postJob, jobSlice } from "../stores/jobSlice";
import Field from "../components/Field";
import Button from "../components/Button";
import Dialog from "../components/Dialog";
import Alert from "../components/Alert";
import { obj_text_dialog, obj_text_alert } from "../utils/text";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, jobs, error } = useSelector((state) => state.job);

  const [init, setInit] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState([]);
  const [fileName, setFileName] = useState("");
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
          title:
            obj_text_alert?.[objDialog?.action]?.error?.title ||
            "Terjadi kesalahan",
          text: obj_text_alert?.[objDialog?.action]?.error?.text || error,
          is_error: true,
        });
        setObjDialog(null);
      }
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

  const formReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setFile([]);
    setFileName("");
    setIsCanError(false);
    setArrError([]);
  };

  const fetchPostJob = () => {
    if (init && !loading) {
      const data = {
        displayName: name,
        subject: selectedJob.title,
        email: email,
        phone: phone,
        message: message,
        ptJobApplyType: "APPLICATION",
        isActive: selectedJob.isActive,
        ptJobPost: { id: selectedJob.id },
      };
      formReset();
      dispatch(postJob(data)).then((ok) => {
        if (ok) {
          setObjAlert({
            title: obj_text_alert[objDialog.action].success.title,
            text: obj_text_alert[objDialog.action].success.text,
            is_error: false,
          });
          setObjDialog(null);
        }
      });
    }
  };

  return (
    <>
      <Navbar />
      <ul
        className={[
          "grid grid-cols-2 gap-4 p-4",
          "max-md:grid-cols-1",
          "[&>li]:flex [&>li]:shadow-lg [&>li]:bg-[#f0ede5] [&>li]:items-start [&>li]:justify-between [&>li]:rounded-lg [&>li]:py-3 [&>li]:px-6 [&>li]:gap-x-2",
          "[&>li>div]:min-h-[36px] [&>li>div]:flex [&>li>div]:items-center",
          "[&>li>div>p]:text-[#4b9741] [&>li>div>p]:font-bold",
        ].join(" ")}
      >
        {jobs.map((o) => (
          <li key={o.id}>
            <div>
              <p>{o.title}</p>
            </div>
            <Button
              className="bg-[#f09506] text-white py-1.5 whitespace-nowrap"
              text="See Job"
              onClick={() => setSelectedJob(o)}
            />
          </li>
        ))}
      </ul>
      {selectedJob ? (
        <section className="flex z-10 absolute top-0 left-0 w-full h-full overflow-y-auto items-center justify-center bg-black/20">
          <div className="flex flex-col max-w-[1152px] w-full bg-[#f0ede5] m-auto rounded-lg border border-black/10 divide-y divide-black/10">
            <div className="flex items-center justify-between py-3 px-6">
              <p className="font-bold">{selectedJob.title}</p>
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="flex"
              >
                <span className="material-icons-outlined">close</span>
              </button>
            </div>
            <div className="flex flex-col p-6 gap-y-4">
              <p className="text-[#4b9741] mb-2 font-bold text-3xl">
                {selectedJob.title}
              </p>
              <div
                className={[
                  "flex flex-col gap-y-2",
                  "[&>h5]:text-xl [&>h5]:font-bold",
                  "[&_ul]:mb-2 [&_ul]:list-disc [&_ul]:pl-10 [&_ul]:flex [&_ul]:flex-col",
                ].join(" ")}
              >
                {parse(selectedJob.description.txt)}
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-bold">Send Your Job Application</p>
                <form
                  onSubmit={(e) => onSubmit(e)}
                  className="flex flex-col gap-y-4"
                >
                  <div
                    className={[
                      "grid grid-cols-2 gap-4",
                      "max-md:grid-cols-1",
                    ].join(" ")}
                  >
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
                  <div
                    className={[
                      "grid grid-cols-2 gap-4",
                      "max-md:grid-cols-1",
                    ].join(" ")}
                  >
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
                    fileName={fileName}
                    setFileName={(v) => setFileName(v)}
                    multiple={true}
                    disabled={false}
                    onChange={(e) => setFile([...e.target.files])}
                  />
                  <Button
                    className="bg-[#4b9741] mt-2 text-white whitespace-nowrap place-self-start"
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

export default Home;
