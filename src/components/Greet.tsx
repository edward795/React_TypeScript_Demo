import React from "react";

type GreetProps = {
  name: string;
  count: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}! You are now a team lead & has {props.count}
          members in ur team!
        </h2>
      ) : (
        <h2>Hi Guest</h2>
      )}
    </div>
  );
};
