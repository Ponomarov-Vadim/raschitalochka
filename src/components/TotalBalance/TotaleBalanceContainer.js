import { connect } from "react-redux";
import TotalBalance from "./TotalBalance";

const mapStateToProps = (state) => ({
  totalBalance: state.finance.totalBalance,
});

export default connect(mapStateToProps)(TotalBalance);
