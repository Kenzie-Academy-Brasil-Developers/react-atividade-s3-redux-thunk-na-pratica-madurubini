import { useSelector } from "react-redux";
import fotoPerfil from "../../assets/caradesenho.jpg";

const Display = ({ hour }) => {
  const comments = useSelector((store) => store.user);

  return (
    <div className="Display">
      <div className="BoxPersonalInfo">
        <img src={fotoPerfil} alt={comments.name}></img>
        <p> {comments.name}</p>
      </div>
      <ul>
        {comments.comments.map((comment, index) => (
          <li key={index}>
            {comment} <span>Sent {hour}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
