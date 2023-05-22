import { icons } from "../../../service/icons";

export function EditBtn({ deleteFunc, editFunc, children, className }) {
  return (
    <div className={`editBtn ${className}`}>
      <button className="" onClick={editFunc}>
        {<img src={icons.feather} alt="" width={"100%"} height={"100%"} /> ||
          children}
      </button>
      <button className="" onClick={deleteFunc}>
        {<img src={icons.trashIcon} alt="" width={"100%"} height={"100%"} /> ||
          children}
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
