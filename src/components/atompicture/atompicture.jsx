import React from "react";
import infoicon from "../../assets/images/info.svg";
function AtomPicture({ imgsrc }) {
  return (
    <>
      <div className="imgdiv">
        <img src={imgsrc} alt="" />
        <div className="infodiv">
          <img src={infoicon} alt="" />
        </div>
      </div>
    </>
  );
}
export default AtomPicture;
