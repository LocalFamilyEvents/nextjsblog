import { parseISO, format } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  const formattedDate = format(date, "LLLL d, yyyy");

  return (
      <span>{formattedDate}</span>
  );
}
