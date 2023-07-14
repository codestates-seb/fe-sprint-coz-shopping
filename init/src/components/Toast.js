import { useEffect } from "react";
import { ToastAlert } from "./ToastStyle";

function Toast({ setToastState, msg }) {
  useEffect(() => {
    let timer = setTimeout(() => {
      setToastState(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ToastAlert>
      <p>{msg}</p>
    </ToastAlert>
  );
}

export default Toast;
