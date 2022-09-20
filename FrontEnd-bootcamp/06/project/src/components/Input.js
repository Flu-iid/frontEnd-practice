import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Input = ({ text, setText, todo, setTodo, toastify }) => {
  const addTodo = (addedValue) => {
    if (addedValue) {
      setTodo((last) => {
        return [
          ...last,
          {
            id: todo.length ? todo[todo.length - 1].id + 1 : 1,
            value: addedValue,
            isCompleted: false,
            isEditable: false,
          },
        ];
      });
      setText("");
    }
  };

  return (
    <Form id="form" onSubmit={(e) => e.preventDefault()}>
      <Form.Control
        id="input"
        placeholder="Input"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        autoFocus
      />
      <Button
        variant="primary"
        onClick={() => {
            if (text) {
          addTodo(text);
          toastify();
            }
        }}
        type="submit"
      >
        Add
      </Button>
    </Form>
  );
};

export default Input;
