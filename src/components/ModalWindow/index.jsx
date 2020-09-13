import React from "react";

import FormCostIncome from "../../components/FormCostIncome/containerCostIncome";
import { overlay, modal, modalHeader } from "./ModalWindow.module.css";

const ModalWindow = ({changeIsModalOpen,actionType}) => {

const handleClickModalClose = (e) => {
    if (e.currentTarget.className === e.target.className) {
        changeIsModalOpen();
    }
}

  return (
    <div className={overlay} onClick={handleClickModalClose}>
      <div className={modal}>
        <h3 className={modalHeader}>{`ADD ${actionType}`}</h3>
        <FormCostIncome actionType={actionType} changeIsModalOpen={changeIsModalOpen} />
      </div>
    </div>
  );
};

export default ModalWindow;
