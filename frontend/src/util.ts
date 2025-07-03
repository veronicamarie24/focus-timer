export const SECONDS_PER_MINUTE = 60;

/** Truncates any trailing seconds */
export function secondsToMinutes(seconds: number) {
  return Math.floor(seconds / SECONDS_PER_MINUTE);
}

export function minutesToSeconds(minutes: number) {
  return minutes * SECONDS_PER_MINUTE;
}
