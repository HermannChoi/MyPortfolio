"use client";
/** @jsxImportSource @emotion/react */

import { flexColumnCenter } from "@/app/styles/commonStyles/commonStyles";
import FirstInfo from "./projectTemplates/FirstInfo";
import MiddleInfo from "./projectTemplates/MiddleInfo";
import Footer from "./projectTemplates/Footer";
import {
  toDoWithJSFirstInfo,
  toDoWithJSFooter,
  toDoWithJSInfo,
} from "@/app/constants/projectInfos/toDoWithJS";

const ToDoWithJS = () => {
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={toDoWithJSFirstInfo} />
      <MiddleInfo info={toDoWithJSInfo} />
      <Footer info={toDoWithJSFooter} />
    </div>
  );
};

export default ToDoWithJS;
