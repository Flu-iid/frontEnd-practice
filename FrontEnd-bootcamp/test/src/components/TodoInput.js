function TodoInput({ show, setShow, setList }) {
  const addToList = (item) => {
    if (item) {
      setList((last) => [
        ...last,
        { id: 0, text: item, editable: false, finished: false },
      ]);
      setShow("");
    }
  };

  return (
    <div>
      <form
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
        />
        <button
          onClick={() => {
            addToList(show);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
