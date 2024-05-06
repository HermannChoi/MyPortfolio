import React from "react";
import FirstInfo from "./projectTemplates/FirstInfo";
import MiddleInfo from "./projectTemplates/MiddleInfo";
import Footer from "./projectTemplates/Footer";
import { flexColumnCenter } from "@/app/styles/commonStyles/commonStyles";
import {
  zacFirstInfo,
  zacFooter,
  zacInfo,
} from "@/app/constants/projectInfos/zac";

const Zac = () => {
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={zacFirstInfo} />
      <MiddleInfo info={zacInfo} />
      <Footer info={zacFooter} />
    </div>
  );
};

export default Zac;
