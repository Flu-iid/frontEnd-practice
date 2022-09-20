value={text}
            type="text"
            onChange={(event) => setText(event.target.value)}


            onClick={() => {
                setShow(text);
                setText("");
            }}>add</button>





