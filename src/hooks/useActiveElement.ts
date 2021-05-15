import { useState, useEffect } from "react";

const useActiveElement = () => {
  const [focusedElement, setFocusedElement] = useState(null);
  const handleFocusIn = (e: FocusEvent) => {
    setFocusedElement(document.activeElement);
  };
  const handleFocusOut = (e: FocusEvent) => {
    setFocusedElement(null);
  };

  useEffect(() => {
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);
    handleFocusIn;
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  return [focusedElement];
};
export default useActiveElement;
