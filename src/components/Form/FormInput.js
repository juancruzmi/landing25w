import React, { useState } from "react";
import "../Form/FormInput.css";

export default function FormInput(props) {
  const { label, onChange, errorMessage, id, ...inputProps } = props;
  const [focus, setFocus] = useState(false);
  const handleFocus = (e) => setFocus(true);

  return (
    <div>
      <label hidden>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focus={focus.toString()}
      />
      <span className="form__error">{errorMessage}</span>
    </div>
  );
}
