function TodoInput({show, setShow, setItem}) {
    
  return (
    <div>
        <form onSubmit={(e) => { e.preventDefault() }}>
            <input type="text" value={show} onChange={(e) => { setShow(e.target.value) }}/>
            <button onClick={setItem(show)}>Add</button>
        </form>
    </div>
  )
}

export default TodoInput