import { parseISO, format } from "date-fns";

export default function Date({ dateString, ...props }) {
  const date = parseISO(dateString);
  return (
    <time {...props} dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
