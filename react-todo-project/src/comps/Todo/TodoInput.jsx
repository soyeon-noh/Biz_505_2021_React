import "../../css/TodoInput.css";
import { useTodoContext, useUserContext } from "../../context";
import { CompButton } from "..";
import { useHistory } from "react-router";

function TodoInput() {
  const { todo, onChange, onClick, onKeyPress, inputId } = useTodoContext();
  const { setUser } = useUserContext();

  const history = useHistory();

  const onLogout = async () => {
    await setUser([]);
    history.replace("/login");
  };

  return (
    <div className="form">
      <input
        value={todo.t_text}
        ref={inputId}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div className="btn_insert" onClick={onClick}>
        추가
      </div>
      <CompButton onClick={onLogout}>로그아웃</CompButton>
    </div>
  );
}

export default TodoInput;
