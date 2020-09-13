import { connect } from "react-redux";

import { getFinanceData } from "../../../redux/reducers/finance/financeSelectors";
import MainTableDesckop from "./MainTableDesckop";

const mapStateToProps = (state) => ({
  financeData: getFinanceData(state),
});


export default connect(mapStateToProps, null)(MainTableDesckop);
