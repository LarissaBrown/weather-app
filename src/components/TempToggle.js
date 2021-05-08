import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row } from "react-grid";

export default function TempToggle() {
  const isCheckedTemp = useSelector((state) => state.isCheckedTemp);
  const dispatch = useDispatch();

  return (
    <Row className="radio">
      <label>
        <input
          type="radio"
          value="fahrenheit"
          checked={isCheckedTemp}
          onChange={() => dispatch({ type: "IS_CHECKED_TEMP" })}
        />
        Fahrenheit
      </label>

      <label>
        <input
          type="radio"
          value="celcius"
          checked={!isCheckedTemp}
          onChange={() => dispatch({ type: "IS_CHECKED_TEMP" })}
        />
        Celcius
      </label>
    </Row>
  );
}
