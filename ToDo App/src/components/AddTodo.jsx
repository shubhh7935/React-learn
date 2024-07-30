const AddTodo = () => {
  return (
    <>
      <div class="row ss-row">
        <div class="col-6">
          <input type="text" placeholder="Enter TODO here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success ss-button">
            Add
          </button>
        </div>
      </div>
    </>
  );
};
export default AddTodo;
