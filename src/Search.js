// This is my custom search component
const MySearch = (props) => {
  let input;
  const handleClick = () => {
    props.onSearch(input.value);
  };
  return (
    <div>
      <input
        className="form-control"
        style={{ backgroundColor: "pink" }}
        ref={(n) => (input = n)}
        type="text"
      />
      <button className="btn btn-warning" onClick={handleClick}>
        Click to Search!!
      </button>
    </div>
  );
};

export const MyTable = () => (
  <ToolkitProvider keyField="id" data={products} columns={columns} search>
    {(props) => (
      <div>
        <BootstrapTable {...props.baseProps} />
        <MySearch {...props.searchProps} />
        <br />
      </div>
    )}
  </ToolkitProvider>
);
