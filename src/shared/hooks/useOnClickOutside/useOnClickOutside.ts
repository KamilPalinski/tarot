import { RefObject, useEffect, useRef } from 'react';

import { OutsideClickEvent, Handler, HandledEvents, PossibleEvent } from './useOnClickOutside.types';

const events: HandledEvents = [OutsideClickEvent.MOUSEDOWN, OutsideClickEvent.TOUCHSTART];

export const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: Handler | null) => {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (!handler) {
      return () => {};
    }

    const listener = (event: PossibleEvent) => {
      if (!ref.current || !handlerRef.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handlerRef.current(event);
    };

    events.forEach(event => {
      document.addEventListener(event, listener);
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, listener);
      });
    };
  }, [handler, ref]);
};
