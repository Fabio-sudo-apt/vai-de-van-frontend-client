import React from "react";
import { SelectPicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export const SelectSuggestion = ({ placeholder, label, data }) => {
  const dataOptions = data.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  return (
    <>
      <SelectPicker
        placeholder={placeholder}
        label={label}
        data={dataOptions}
        size="lg"
        style={{ width: 224, paddingLeft: 5 }}
      />
    </>
  );
};
