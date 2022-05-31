export default function Act(props) {
  return (
    <>
      <tr className="artists">
        <th>
          {props.act.start}-{props.act.end}
        </th>
        <td className="artist">
        <div className="artist_name">{props.act.act}</div>
        <div className="artist_time">{props.act.start}-{props.act.end}</div>
          <div className="artist_readmore">{props.act.act !== "break" ? (
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
          )}</div>
          
        </td>

        <td className="artist">
        <div className="artist_name">{props.jAct.act}</div>
        <div className="artist_time">{props.jAct.start}-{props.jAct.end}</div>
        <div className="artist_readmore">{props.jAct.act !== "break" ? (
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
          )}</div>
          
        </td>

        <td className="artist">
        <div className="artist_name">{props.vAct.act}</div>
        <div className="artist_time">{props.vAct.start}-{props.vAct.end}</div>
        <div className="artist_readmore">{props.vAct.act !== "break" ? (
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
          )}</div>
          
        </td>
      </tr>
    </>
  );
}
