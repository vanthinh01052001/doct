import React from "react";
import CardHeader from "./components/CardHeader";

const HeaderOverview = () => {
  return (
    <>
      <div className="grid xl:grid-cols-4 grid-rows-1 gap-5">
        <CardHeader />
      </div>
    </>
  );
};

export default HeaderOverview;
