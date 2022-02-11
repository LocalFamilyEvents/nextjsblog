import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  const formattedDate = format(date, "LLLL d, yyyy");

  return <div dateTime={dateString}>{formattedDate}</div>;
}
