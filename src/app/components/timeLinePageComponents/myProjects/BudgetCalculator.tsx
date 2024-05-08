"use client";
/** @jsxImportSource @emotion/react */

import { flexColumnCenter } from "@/app/styles/commonStyles/commonStyles";
import FirstInfo from "./projectTemplates/FirstInfo";
import MiddleInfo from "./projectTemplates/MiddleInfo";
import Footer from "./projectTemplates/Footer";
import {
  budgetCalculatorFirstInfo,
  budgetCalculatorFooter,
  budgetCalculatorInfo,
} from "@/app/constants/projectInfos/budgetCalculator";

const BudgetCalculator = () => {
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={budgetCalculatorFirstInfo} />
      <MiddleInfo info={budgetCalculatorInfo} />
      <Footer info={budgetCalculatorFooter} />
    </div>
  );
};

export default BudgetCalculator;
