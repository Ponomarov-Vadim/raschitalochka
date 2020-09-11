import { connect } from "react-redux";
import { fetchFinance } from "../../redux/reducers/finance/financeOperation";

import Home from "./Home";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getFinance: fetchFinance,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
