import React, { useEffect } from "react";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainInfo from "../../components/MainInfo/MainInfo";
import { mainWrapper } from "./Home.module.css";
import withAuth from "../../hoc/withAuth";
import { load } from "../../services/localStorage";

const Home = (props) => {
  useEffect(() => {
    const data = load("session");
    if (data) {
      props.userSession(data);
    }
    props.getFinance();
  }, []);
  return (
    <>
      <Header {...props} />
      <div className={mainWrapper}>
        <Sidebar />
        <MainInfo />
      </div>
    </>
  );
};

export default withAuth(Home);
