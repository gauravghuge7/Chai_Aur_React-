function Todo({TodoData}) {

    return(
        <div>
            <input type="checkbox" checked={true} />
             {TodoData}
            <button>edit</button>
            <button>delete</button>
        </div>
    );
}

export default Todo;