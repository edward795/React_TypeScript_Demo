import React from "react";
type PersonProps = {
  personDetails: {
    name: string;
    age: number;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.personDetails.name} - {props.personDetails.age}
    </div>
  );
};
