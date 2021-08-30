const Item = ({ id, note, date, time, deleteData, submittingStatue }) => {

    function deleteItem() {
        submittingStatue.current = true
        deleteData(function(prev) {
            return prev.filter(item => item.id !== id)
        }) 
    }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">Remove</button>
    </div>
  );
};

export default Item;
