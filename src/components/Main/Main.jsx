import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { scrollToUp } from "../../helpers/format";

// Components
import MainTableMobile from "../../components/MainTable/Mobile/MainTableMobileContainer";
import MainTableDesckop from "../../components/MainTable/TabletOrDesktop/MainTableDesckopContainer";

import { button } from "./Button.module.css";

import ModalWindow from "../../components/ModalWindow";
import CostIncome from "./../../Pages/CostIncome/CostIncome";

const Main = () => {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 767px)",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState("COST");
  const changeIsModalOpen = (e) => {
    if (!isModalOpen) {
      setActionType(e.target.name);
    }
    setIsModalOpen(!isModalOpen);
  };
  const [isFormOpen, setIsFormOpen] = useState(false);
  const changeIsFormOpen = (e) => {
    scrollToUp();
    if (!isFormOpen) {
      setActionType(e.target.name);
    }
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      {isMobileDevice ? (
        <MainTableMobile>
          <button className={button} onClick={changeIsFormOpen} name="INCOME">
            Add Income
          </button>
          <button className={button} onClick={changeIsFormOpen} name="COST">
            Add Cost
          </button>
        </MainTableMobile>
      ) : (
        <MainTableDesckop>
          <button className={button} onClick={changeIsModalOpen} name="INCOME">
            Add Income
          </button>
          <button className={button} onClick={changeIsModalOpen} name="COST">
            Add Cost
          </button>
        </MainTableDesckop>
      )}
      {isFormOpen && (
        <CostIncome
          actionType={actionType}
          changeIsFormOpen={changeIsFormOpen}
        />
      )}
      {isModalOpen && (
        <ModalWindow
          changeIsModalOpen={changeIsModalOpen}
          actionType={actionType}
        />
      )}
    </>
  );
};

export default Main;
