import { useSelector } from "react-redux";

const Display = () => {
  const comments = useSelector((store) => store.user);

  return (
    <div>
      Display do Chatbox
      <p>{comments.name}</p>
      <p>{comments.comments}</p>
    </div>
  );
};

export default Display;
