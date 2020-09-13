import { connect } from "react-redux";
import { fetchFinance } from "../../redux/reducers/finance/financeOperation";

import Home from "./Home";

const mapDispatchToProps = {
  getFinance: fetchFinance,
};

export default connect(null, mapDispatchToProps)(Home);
