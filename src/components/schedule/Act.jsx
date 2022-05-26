// import BandInfo from "./BandInfo";

export default function Act(props) {
  // console.log(props);
  // mAct={mAct} jAct={jAct} vAct={vAct}
  return (
    <>
      {/* <BandInfo/> */}
      <tr className="artist">
        <th>
          {props.act.start}-{props.act.end}
        </th>
        <td>
          {props.act.act !== "break" ? (
            <button
            // onClick={()=>{showBandDetails(act); setStage("Jotunheim");}
            >
              {props.act.act}
            </button>
          ) : (
            "Break"
          )}
        </td>

        <th>
          {props.jAct.start}-{props.jAct.end}
        </th>
        <td>
          {props.jAct.act !== "break" ? (
            <button
            // onClick={()=>{showBandDetails(jAct); setStage("Jotunheim");}
            >
              {props.jAct.act}
            </button>
          ) : (
            "Break"
          )}
        </td>

        <th>
          {props.vAct.start}-{props.vAct.end}
        </th>
        <td>
          {props.vAct.act !== "break" ? (
            <button
            // onClick={()=>{showBandDetails(vAct); setStage("Vanaheim");}
            >
              {props.vAct.act}
            </button>
          ) : (
            "Break"
          )}
        </td>
      </tr>
    </>
  );
}
