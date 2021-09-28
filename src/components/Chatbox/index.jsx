import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { useState } from "react";

const Chatbox = () => {
  const dispatch = useDispatch();

  const [newComment, setNewComment] = useState("");
  const handleClick = () => {
    dispatch(addCommentThunk(newComment));
  };

  return (
    <div>
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
