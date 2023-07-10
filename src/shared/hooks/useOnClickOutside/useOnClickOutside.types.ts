export enum OutsideClickEvent {
  MOUSEDOWN = 'mousedown',
  TOUCHSTART = 'touchstart',
}

export type HandledEvents = [OutsideClickEvent.MOUSEDOWN, OutsideClickEvent.TOUCHSTART];
type HandledEventsType = HandledEvents[number];
export type PossibleEvent = { [T in HandledEventsType]: HTMLElementEventMap[T] }[HandledEventsType];
export type Handler = (event: PossibleEvent) => void;
