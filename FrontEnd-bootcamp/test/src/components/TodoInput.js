function TodoInput({ show, setShow, setList, Form, Button }) {
  const addToList = (item) => {
    if (item) {
      setList((last) => {
        const help = [...last];
        help.push({
          id: last.length ? last[last.length - 1].id + 1 : 1,
          text: item,
          editable: false,
          finished: false,
        });
        return help;
      });
      setShow("");
    }
  };

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={show}
          onChange={(e) => {
            setShow(e.target.value);
          }}
          autoFocus
        />
        <button
          
          onClick={() => {
            addToList(show);
          }}
        >
          Add
        </button>
      </Form>
    </div>
  );
}

export default TodoInput;
