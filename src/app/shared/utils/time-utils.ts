export function hmsToSeconds(timeHMS: string): number {
  if (!timeHMS) return 0;

  // If input is just a number (e.g., '23'), treat as hours
  if (/^\d+$/.test(timeHMS.trim())) {
    return Number(timeHMS) * 60 * 60;
  }

  const parts = timeHMS.split(':').map(n => Number(n) || 0);

  // If input is mm:ss (e.g., '23:00'), treat as minutes:seconds
  if (parts.length === 2) {
    const [hours, minutes] = parts;
    return hours * 60 * 60 + minutes *60;
  }

  // Pad to [hh, mm, ss]
  while (parts.length < 3) {
    parts.unshift(0);
  }

  const [hours, minutes, seconds] = parts;
  return hours * 3600 + minutes * 60 + seconds;
}

export function secondsToHM(seconds: number): string {
  if (seconds < 0) return '00:00:00';

  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return [
    String(hours).padStart(2, '0'),
    String(minutes).padStart(2, '0')
  ].join(':');
}