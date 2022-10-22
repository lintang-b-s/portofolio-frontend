import { useEffect } from "react";

function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
  }, []);
}

export default useScrollToTop;