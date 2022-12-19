import React from "react";
type statusTextProps = {
  status: "loading" | "success" | "error";
};
export const Status = (props: statusTextProps) => {
  let message;
  if (props.status === "loading") {
    message = "loading";
  } else if (props.status === "error") {
    message = "error fetching!!";
  } else if (props.status === "success") {
    message = "successfully fetched!";
  }

  return <h2>{message}</h2>;
};
