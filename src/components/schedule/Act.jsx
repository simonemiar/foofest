import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BandDataContext } from "../../contexts/BandDataContext";

export default function Act(props) {
  const { bandData, setBandData } = useContext(BandDataContext);
  const [bandId, setBandId] = useState("");

  useEffect(() => {
    // Find the acts that matches with a band name
    const result = bandData.filter((band) => band.name === props.act.act);

    // If that act not is undefined, set the id
    if (result.length !== 0) {
      setBandId(result[0].id);
    }
  }, [bandData, props.act.act]);

  function addAct(act) {
    const addActToBand = bandData.map((old) => {
      return { ...old, act: props.act, stage: props.stage, day: props.day };
    });

    setBandData(addActToBand);
  }

  return (
    <>
      <td className="artist">
        {props.act.act !== "break" ? (
          <>
            <div className="artist_name">{props.sceneAct.act}</div>
            <div className="artist_time">
              {props.act.start}-{props.act.end}
            </div>
            <div className="artist_readmore">
              <Link to={`/artist/${bandId}`} onClick={addAct}>
                Read more
              </Link>
            </div>
          </>
        ) : null}
      </td>
    </>
  );
}
