import { render, screen } from "@testing-library/react";
import { parseISO, format } from "date-fns";
import dateConfig from "../../config/date";
import Date from "../../components/date";

describe("Date component", () => {
  it("renders formatted date without crashing", () => {
    const date = "2021-01-01T00:00:00";

    render(<Date dateString={date} />);

    const formattedDate = format(parseISO(date), dateConfig.format);

    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });
});
