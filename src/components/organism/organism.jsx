import React from "react";
import AtomPicture from "../atompicture/atompicture";
import MoleculeDesctiption from "../moleculedescription/moleculedescritpion";
function Organism({
  imgsrc,
  name,
  text,
  pcal,
  pcf,
  temp,
  newprice,
  oldprice,
  leafid,
  wheatid,
  fireid,
}) {
  return (
    <>
      <div className="container">
        <AtomPicture imgsrc={imgsrc} />
        <MoleculeDesctiption
          leafid={leafid}
          name={name}
          text={text}
          pcal={pcal}
          pcf={pcf}
          temp={temp}
          newprice={newprice}
          oldprice={oldprice}
          fireid={fireid}
          wheatid={wheatid}
        />
      </div>
    </>
  );
}
export default Organism;
