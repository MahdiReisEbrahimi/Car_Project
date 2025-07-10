import { useEffect, RefObject } from "react";

type EventType = "mousedown" | "click" | "touchstart";

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  eventType: EventType = "mousedown"
) {
  useEffect(() => {
    function handleEvent(event: MouseEvent | TouchEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    }

    document.addEventListener(eventType, handleEvent);
    return () => {
      document.removeEventListener(eventType, handleEvent);
    };
  }, [ref, handler, eventType]);
}
