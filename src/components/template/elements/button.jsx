import { icons } from "../../../service/icons";

export function EditBtn({
  deleteFunc,
  editFunc,
  PasteFunc,
  children1,
  children2,
  className,
}) {
  return (
    <div className={`editBtn ${className}`}>
      <button className="" onClick={editFunc}>
        {children1 === undefined ? (
          <img src={icons.feather} alt="" width={"100%"} height={"100%"} />
        ) : (
          children1
        )}
      </button>
      <button className="" style={{
        width: "fit-content", color: "white"
      }} onClick={PasteFunc}>
        Paste
      </button>
      <button className="" onClick={deleteFunc}>
        {children2 === undefined ? (
          <img src={icons.trashIcon} alt="" width={"100%"} height={"100%"} />
        ) : (
          children2
        )}
      </button>
    </div>
  );
}

export function ActionBtn({ children, className, onClick }) {
  return (
    <>
      <div className={`${className} btn action-btn`} onClick={onClick}>
        {children || "Options"}
      </div>
    </>
  );
}

export function ActionListBtn({ onClick, className, children }) {
  return (
    <button className={`${className} action-list-btn`} onClick={onClick}>
      {children}
    </button>
  );
}
