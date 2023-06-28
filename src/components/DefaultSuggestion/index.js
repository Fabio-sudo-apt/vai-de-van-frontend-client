import React from "react";
import { SelectPicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export const SelectSuggestion = ({ placeholder, label}) => {

  const data = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
  ].map((item) => ({ label: item, value: item }));
  return (
    <>
      <SelectPicker
        placeholder={placeholder}
        label={label}
        data={data}
        size="lg"
        style={{ width: 224, paddingLeft: 5 }}
      />
    </>
  );
};
