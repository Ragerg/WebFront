import TodoInput from "./TodoInput";
import TodoTeamplate from "./TodoTemplate";

function App() {
  return (
    <TodoTeamplate name>
      <TodoInput />
      Todo 목록...
    </TodoTeamplate>
  );
}

export default App;
