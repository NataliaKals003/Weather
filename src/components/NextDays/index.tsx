import "./styles.css";
import { NextDaysItem, NextDaysItemProps } from "../NextDaysItem";

interface Props {
  data: NextDaysItemProps[];
}

export function NextDays({ data }: Props) {
  return (
    <section className="next-days">
      <h1>5-Day Forecast</h1>

      <div className="next-next-detail">
        {data.map((item) => (
          <NextDaysItem key={item.day} data={item} />
        ))}
      </div>
    </section>
  );
}
