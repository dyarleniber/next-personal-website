import { parseISO, format } from "date-fns";
import dateConfig from "../config/date";

export default function Date({ dateString, ...props }) {
  const date = parseISO(dateString);
  return (
    <time {...props} dateTime={dateString}>
      {format(date, dateConfig.format)}
    </time>
  );
}
