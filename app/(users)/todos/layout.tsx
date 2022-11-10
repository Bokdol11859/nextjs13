import React from "react";
import TodosList from "./TodosList";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <main className="flex">
      <div>
        <TodosList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
};

export default RootLayout;
