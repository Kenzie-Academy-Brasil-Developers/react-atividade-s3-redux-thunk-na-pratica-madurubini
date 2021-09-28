import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { useState } from "react";

const Chatbox = ({ setHour }) => {
  const dispatch = useDispatch();

  const [newComment, setNewComment] = useState("");

  const getDataClick = () => {
    const data = new Date();
    let hours = "";

    let hora = data.getHours();
    let min = data.getMinutes();

    min = min < 10 ? "0" + min : min;
    hora = hora < 10 ? "0" + hora : hora;

    hours = `${hora}:${min}`;
    setHour(hours);
  };

  const handleClick = () => {
    dispatch(addCommentThunk(newComment));
    getDataClick();
    setNewComment("");
  };

  return (
    <div className="SendComponent">
      <input
        type="text"
        placeholder="Novo Comentário"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default Chatbox;
