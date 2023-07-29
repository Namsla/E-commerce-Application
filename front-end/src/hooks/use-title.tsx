import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -Bazaar`;
  }, [title]);

  return null;
};
