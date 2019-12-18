import React from "react";

export default ({ openingHours }) => {
  if (!openingHours) {
    return null;
  }
  return (
    openingHours && (
      <ul>
        {openingHours.weekday_text.map(a => (
          <li key={a} style={{ textAlign: "left", paddingBottom: 8 }}>
            {a}
          </li>
        ))}
      </ul>
    )
  );
};
