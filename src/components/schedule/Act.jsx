export default function Act(props) {
  return (
    <>
      <tr className="artists">
        <th>
          {props.act.start}-{props.act.end}
        </th>
        <td className="artist">
          {props.act.start}-{props.act.end}
          {props.act.act !== "break" ? (
            <button
              onClick={() => {
                props.findBandDetails(props.act);
                props.setStage("Midgard");
              }}
            >
              {props.act.act}
            </button>
          ) : (
            "Break"
          )}
        </td>

        <td className="artist">
          {props.jAct.start}-{props.jAct.end}
          {props.jAct.act !== "break" ? (
            <button
              onClick={() => {
                props.findBandDetails(props.jAct);
                props.setStage("Jotunheim");
              }}
            >
              {props.jAct.act}
            </button>
          ) : (
            "Break"
          )}
        </td>

        <td className="artist">
          {props.vAct.start}-{props.vAct.end}
          {props.vAct.act !== "break" ? (
            <button
              onClick={() => {
                props.findBandDetails(props.vAct);
                props.setStage("Vanaheim");
              }}
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
