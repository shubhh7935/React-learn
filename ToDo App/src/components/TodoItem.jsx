const TodoItem = ({ todoName, todoDate }) => {
  return (
    <>
      <div class="row ss-row">
        <div class="col-6 ">{todoName}</div>
        <div class="col-4 ">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger ss-button">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
