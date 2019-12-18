import React from "react";

export default ({ reviews }) => {
  if (!reviews) {
    return null;
  }
  return (
    <ul>
      {reviews
        .filter(item => item.text)
        .map(review => (
          <li key={review.text} style={{ textAlign: "left", paddingBottom: 8 }}>
            {review.text}
          </li>
        ))}
    </ul>
  );
};
