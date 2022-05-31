export default function Act(props) {
  return (
    <>
      <tr className="artists">
        <th>
          {props.act.start}-{props.act.end}
        </th>
        <td className="artist">
        <span>{props.act.act}</span>
        <span>{props.act.start}-{props.act.end}</span>
          {props.act.act !== "break" ? (
            <button
              onClick={() => {
                props.findBandDetails(props.act);
                props.setStage("Midgard");
              }}
            > 
              read more
            </button>
          ) : (
            ""
          )}
          
        </td>

        <td className="artist">
        <span>{props.jAct.act}</span>
        <span>{props.jAct.start}-{props.jAct.end}</span>
        {props.jAct.act !== "break" ? (
            <button
              onClick={() => {
                props.findBandDetails(props.jAct);
                props.setStage("Jotunheim");
              }}
            >
              read more
            </button>
          ) : (
            ""
          )}
          
        </td>

        <td className="artist">
        <span>{props.vAct.act}</span>
        <span>{props.vAct.start}-{props.vAct.end}</span>
        {props.vAct.act !== "break" ? (
            <button
              onClick={() => {
                props.findBandDetails(props.vAct);
                props.setStage("Vanaheim");
              }}
            >
              read more
            </button>
          ) : (
            ""
          )}
          
        </td>
      </tr>
    </>
  );
}
