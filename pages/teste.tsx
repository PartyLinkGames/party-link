import React from "react";
// import {}
import { useFetchHunts } from "./../hooks/useFetchHunts";
type Props = {};

const teste = (props: Props) => {
  const { hunt } = useFetchHunts();
  if (hunt) {
    console.log(hunt);
  }
  return <div>teste</div>;
};

export default teste;
