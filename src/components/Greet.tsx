import React from "react";

type GreetProps = {
  name: string;
  count?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { count = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}! You are now a team lead & has {count}
          members in ur team!
        </h2>
      ) : (
        <h2>Hi Guest</h2>
      )}
    </div>
  );
};
