export function generateTrackingId(prefix = "TRK") {
  const today = new Date();
  const [year, month, day] = today
    .toISOString()
    .split("T")[0]
    .split("-"); // ['2025', '07', '02']
  const dateStr = `${year}${month}${day}`; // '20250702'
  const randomStr = Math.random()
    .toString(36)
    .substring(2, 7)
    .toUpperCase(); // 5-char alphanumeric
  return `${prefix}-${dateStr}-${randomStr}`;
}
