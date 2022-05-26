export default function Act(props) {
  return (
    <>
      <tr className="artist">
        <th>
          {props.act.start}-{props.act.end}
        </th>
        <td>
          {props.act.act !== "break" ? (
            <button
              onClick={() => {
                props.findBandDetails(props.act);
                props.setStage("Jotunheim");
              }}
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

        <th>
          {props.vAct.start}-{props.vAct.end}
        </th>
        <td>
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
