import { UseSelector, useSelector } from "react-redux";
const SecretTask = (props) => {
  const tasks = useSelector((state) => state.todos);
  return (
    <>
      <h1>SecretTask</h1>
      {tasks.map((task) => {
        return <div>{task.text}</div>;
      })}
    </>
  );
};

export default SecretTask;
