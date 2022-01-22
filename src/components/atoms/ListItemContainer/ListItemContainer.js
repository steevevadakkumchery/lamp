import "./ListItemContainer.css";

function ListItemContainer({ children, selectable }) {
  return (
    <div className={`list-item-container ${selectable && "selectable"}`}>
      {children}
    </div>
  );
}

export default ListItemContainer;
