import React from "react";
import { useCallback } from "react";

const UseFocusHook = () => {
  const ref = useRef(null);
  const focus = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);
  return [ref, focus];
};

export default UseFocusHook;
