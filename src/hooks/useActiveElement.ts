import { useState, useEffect } from "react";

const useActiveElement = () => {
  const [active, setActive] = useState(document.activeElement);
  const handleFocusIn = (e: FocusEvent) => {
    setActive(document.activeElement);
  };
  useEffect(() => {
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusIn);

    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusIn);
    };
  }, []);

  return active;
};
export default useActiveElement;
