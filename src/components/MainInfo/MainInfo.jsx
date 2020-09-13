import React from "react";
import { Switch, Route} from 'react-router-dom';
import Currency from '../../components/Currency/Currency';

import Filter from '../../components/Filter/FilterContainer';
import Main from '../../components/Main/Main';


const MainInfo = () => {
  return (
    <>
      <Switch>
        <Route path="/home/currency" component={Currency} />
        <Route path="/home/diagram" component={Filter} />
        <Route path="/home" component={Main} />
      </Switch>
    </>
  );
};

export default MainInfo;
