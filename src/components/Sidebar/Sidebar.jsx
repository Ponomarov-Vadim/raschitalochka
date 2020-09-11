import React from "react";
import { useMediaQuery } from "react-responsive";

import Navigation from "../Navigation/Navigation";
import Currency from "../Currency/Currency";

const Sidebar = () => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 1224 });
  return (
    <div>
      <Navigation />
      {isDesktop ? <Currency /> : null}
    </div>
  );
};

export default Sidebar;
