import React, { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainInfo from "../../components/MainInfo/MainInfo";
import Currency from '../../components/Currency/Currency';
import { mainWrapper } from "./Home.module.css";
import withAuth from "../../hoc/withAuth";
import { load } from "../../services/localStorage";

const Home = ( props ) => {

  const isTablet = useMediaQuery({
    query: "(min-device-width: 768px) and (max-device-width: 1023px)",
  });

  useEffect( () => {
    const data = load( "session" );
    if( data ) {
      props.userSession( data );
    }
    props.getFinance();
  },[]);

  const isDiagramPage = props.location.pathname==="/home/diagram";

  return (
    <>
      <Header {...props} />
      <div className={mainWrapper}>
        <Sidebar />
        <MainInfo />
      </div>
      {isTablet && !isDiagramPage ? <Currency /> : null}

    </>
  );
};

export default withAuth( Home );
