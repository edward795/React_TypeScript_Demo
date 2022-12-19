import React from "react";

type personListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
export const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <div>
          <p>
            <li>{name.first}</li>
            <li>{name.last}</li>
          </p>
        </div>
      ))}
    </div>
  );
};
