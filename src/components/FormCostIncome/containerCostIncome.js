import { connect } from "react-redux";
import { fetchFinance } from "../../redux/reducers/finance/financeOperation";
import * as financeSelectors from "../../redux/reducers/finance/financeSelectors";
import * as sessionSelectors from '../../redux/reducers/session/sessionSelectors';
import FormCostIncome from "./index";

const mapStateToProps = (state) => ({
  balance: financeSelectors.getTotalBalance(state),
  token: sessionSelectors.getToken(state),
  user: sessionSelectors.getUser(state),
});

const mapDispatchToProps = {
  getFinance: fetchFinance,
};

export default connect(mapStateToProps,mapDispatchToProps)(FormCostIncome);
