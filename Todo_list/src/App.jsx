import { useState } from "react";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(null); // Store the index of the task in edit mode

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleAdd = () => {
    setTasks([...tasks, inputVal]);
    setInputVal("");
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setEditMode(null); // Exit edit mode if deleting a task
  };

  const handleEdit = (index) => {
    setEditMode(index);
    setInputVal(tasks[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = inputVal;
    setTasks(updatedTasks);
    setInputVal("");
    setEditMode(null); // Exit edit mode after saving
  };

  return (
    <>
      <h1 className="text-bg-primary text-center mb-5 text-red-600">
        There is A Simple Todo List With React
      </h1>

      <div className="form-outlined w-25 m-0 m-auto pt-5 d-flex flex-row">
        <input
          type="text"
          className="border-2 border-green-500 w-100 outline-emerald-300"
          id="todo"
          value={inputVal}
          onChange={handleChange}
        />

        <button
          type="button"
          className="btn btn-primary d-flex"
          onClick={handleAdd}
        >
          ADD
        </button>
      </div>

      <div className="container pb-5 pt-5">
        <div className="w-25 m-0 m-auto">
          {tasks.map((item, index) => (
            <div key={index} className="d-flex justify-content-between align-items-center mb-2">
              {editMode === index ? (
                <input
                  type="text"
                  value={inputVal}
                  onChange={handleChange}
                  className="w-100"
                />
              ) : (
                <span>{item}</span>
              )}

              {editMode === index ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => handleSaveEdit(index)}
                >
                  Save
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
