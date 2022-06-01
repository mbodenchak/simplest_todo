const ToDoItem = (props) => {
  return (
    <div onClick={() => props.onCheck(props.id)}>
      <li>{props.text}</li>
    </div>
  );
};

export default ToDoItem;
