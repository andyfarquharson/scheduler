import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  const formatSpots = () => {
    let string = "";
    if (props.spots === 0) {
      string = `no spots remaining`;
    } else if (props.spots === 1) {
      string = `${props.spots} spot remaining`;
    } else {
      string = `${props.spots} spots remaining`;
    }
    return string;
  };

  return (
    <li
      className={dayClass}
      onClick={() => props.setDays(props.name)}
      selected={props.selected}
    >
      <h2>{props.name}</h2>
      <h3>{formatSpots(props.spots)}</h3>
    </li>
  );
}
