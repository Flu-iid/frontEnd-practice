function TodoInput({ show, setShow, setList }) {
  const addToList = (item) => {
    if (item) {
      setList((last) => {
        const help = [...last];
        help.push({
          id: last.length ? (last[last.length-1].id + 1) : 1,
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
