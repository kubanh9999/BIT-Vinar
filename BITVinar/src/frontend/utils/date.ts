export function isToday(date: Date) {
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}

export function displayTime(date: Date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}h${minutes}`;
}

export function displayHalfAnHourTimeRange(date: Date) {
  const endTime = new Date(date);
  endTime.setMinutes(endTime.getMinutes() + 30);
  return `${displayTime(date)} - ${displayTime(endTime)}`;
}

export function displayDate(date: Date, hint?: boolean) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  if (hint && isToday(date)) {
    return `Hôm nay - ${day}/${month}/${year}`;
  }
  return `${day}/${month}/${year}`;
}

export function displayCustomDate(date: Date, hint?: boolean) {
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  if (hint && isToday(date)) {
    return `Hôm nay - ${day}/${month}/${year}`;
  }
  return `${day} thg ${month} ${year}, ${hours}:${minutes}`;
}

export function displayInputDate(date: Date, hint?: boolean) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  if (hint && isToday(date)) {
    return `Hôm nay - ${day}/${month}/${year}`;
  }
  return `${year}-${month}-${day}`;
}

export function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1); // JavaScript months are 0-based
  return date.toLocaleString("vi-VI", { month: "long" });
}
