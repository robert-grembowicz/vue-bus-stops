export function sortTime(departureTimes: string[]) {
  return departureTimes.sort((a, b) => {
    const [aHours, aMinutes] = a.split(":").map(Number);
    const [bHours, bMinutes] = b.split(":").map(Number);

    const aTotalMinutes = aHours * 60 + aMinutes;
    const bTotalMinutes = bHours * 60 + bMinutes;

    return aTotalMinutes - bTotalMinutes;
  });
}
