import React from "react";
type placeHolderProps = {
  children: string;
};

export const PlaceHolder = (props: placeHolderProps) => {
  return <div>{props.children}</div>;
};
