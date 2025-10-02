import { useEffect, useRef } from "react";
import {DEFAULT_TITLE} from "@/assets/consts.ts";

export default function useTitle(title?: string, prevailOnUnmount = false) {
  const defaultTitleRef = useRef(document.title);
  
  useEffect(() => {
    document.title = title ?? DEFAULT_TITLE;
  }, [title]);
  
  useEffect(() => {
    if (prevailOnUnmount) return;
    
    const defaultTitle = defaultTitleRef.current;
    return () => {
      // Only restore if no other page has set a title
      document.title = defaultTitle;
    };
  }, [prevailOnUnmount]);
}
