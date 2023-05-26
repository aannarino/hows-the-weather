export interface CompleteTime {
  hours: number;
  minutes: number;
  seconds: number;
}
export const getCompleteUTCTime = (time: number): CompleteTime => {
  const date = new Date(time);
  const hours = Number(date.getUTCHours().toPrecision(2));
  const minutes = Number(date.getUTCMinutes().toPrecision(2));
  const seconds = Number(date.getUTCSeconds().toPrecision(2));
  return { hours, minutes, seconds };
};

export const prependZerosForTime = (value: number): string => {
  const absVal = Math.abs(value);
  const normalizedVal = Math.round(absVal);
  if (normalizedVal < 10) {
    return `0${normalizedVal}`;
  } else {
    return String(normalizedVal);
  }
};

export const get24HrFormattedString = (
  args: CompleteTime & { displaySeconds?: boolean }
): string => {
  const { hours, minutes, seconds, displaySeconds = false } = args;
  const prependedHours = prependZerosForTime(hours);
  const prependedMinutes = prependZerosForTime(minutes);
  const prependedSeconds = prependZerosForTime(seconds);
  if (displaySeconds) {
    return `${prependedHours}:${prependedMinutes}:${prependedSeconds}`;
  } else {
    return `${prependedHours}:${prependedMinutes}`;
  }
};
