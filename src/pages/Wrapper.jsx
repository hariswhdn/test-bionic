import { cloneElement, useState } from "react";
import { useDispatch } from "react-redux";
import { jobSlice } from "../stores/jobSlice";
import Dialog from "../components/Dialog";
import Alert from "../components/Alert";
import { obj_text_dialog } from "../utils/text";

const Dashboard = ({ children }) => {
  const dispatch = useDispatch();

  const [objDialog, setObjDialog] = useState(null);
  const [objAlert, setObjAlert] = useState(null);

  return (
    <main className="relative min-h-dvh w-full">
      {cloneElement(children, {
        objDialog: objDialog,
        setObjDialog: (v) => setObjDialog(v),
        setObjAlert: (v) => setObjAlert(v),
      })}
      {objDialog ? (
        <Dialog
          isLoading={objDialog?.is_proceed || false}
          action={objDialog.action}
          title={obj_text_dialog[objDialog.action].title}
          text={obj_text_dialog[objDialog.action].text}
          no_text={obj_text_dialog[objDialog.action].no}
          yes_text={obj_text_dialog[objDialog.action].yes}
          yes={() =>
            setObjDialog((v) => ({
              ...v,
              is_proceed: true,
            }))
          }
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
    </main>
  );
};

export default Dashboard;
