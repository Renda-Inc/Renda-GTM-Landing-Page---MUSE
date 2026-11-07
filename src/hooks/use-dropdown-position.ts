import { useLayoutEffect, useRef, useState } from "react";

type DropdownPosition = { left: number; top: number; width: number };

export function useDropdownPosition(activeLabel: string | null, singleColumn: boolean) {
  const headerRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef(new Map<string, HTMLButtonElement>());
  const [position, setPosition] = useState<DropdownPosition | null>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    const trigger = activeLabel ? triggerRefs.current.get(activeLabel) : undefined;
    if (!header || !trigger) {
      setPosition(null);
      return;
    }

    const measure = () => {
      const headerRect = header.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();
      const navRect = header.parentElement?.getBoundingClientRect();
      if (!navRect) return;
      const styles = getComputedStyle(header);
      const minLeft = headerRect.left + parseFloat(styles.paddingLeft);
      const maxRight = headerRect.right - parseFloat(styles.paddingRight);
      const availableWidth = maxRight - minLeft;
      const width = singleColumn ? Math.min(576, availableWidth) : availableWidth;
      const centeredLeft = triggerRect.left + triggerRect.width / 2 - width / 2;
      // Keep the full-width Product panel inside its existing content margins.
      const left = Math.max(minLeft, Math.min(centeredLeft, maxRight - width)) - navRect.left;
      const next = { left, top: headerRect.bottom - navRect.top, width };
      setPosition((previous) =>
        previous?.left === next.left && previous.top === next.top && previous.width === next.width
          ? previous
          : next,
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    observer.observe(trigger);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [activeLabel, singleColumn]);

  return { headerRef, triggerRefs, position };
}