import Item from "./Item";

const List = ({ listData, deleteData , submittingStatue}) => {
  console.log("listData", listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            id={id}
            key={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatue = {submittingStatue}
          />
        );
      })}
    </div>
  );
};

export default List;
