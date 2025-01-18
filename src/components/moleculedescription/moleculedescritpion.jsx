import React from "react";
import fire from "../../assets/images/fire.png";
import leaf from "../../assets/images/leaf.svg";

import wheat from "../../assets/images/wheat.svg";

function MoleculeDesctiption({
  name,
  text,
  pcal,
  pcf,
  temp,
  newprice,
  oldprice,
  leafid,
  fireid,
  wheatid,
}) {
  return (
    <>
      <div className="firstline">
        <p className="name">{name}</p>
        <div className="iconsdiv">
          <div className="leafdiv" id={leafid}>
            <img src={leaf} alt="" className="fire" />
          </div>
          <div className="firediv" id={fireid}>
            <img src={fire} alt="" className="fire" />
          </div>
          <div className="wheatdiv" id={wheatid}>
            <img src={wheat} alt="" className="fire" />
          </div>
        </div>
      </div>
      <p className="text">{text}</p>
      <div className="thirdline">
        <p className="smallinfo">{pcal}</p>
        <p className="smallinfo">{pcf}</p>
        <p className="smallinfo">{temp}</p>
      </div>
      <div className="lastline">
        <p className="newprice">{newprice}</p>
        <p className="oldprice">{oldprice}</p>
        <div className="button">ORDER</div>
      </div>
    </>
  );
}
export default MoleculeDesctiption;
