import { icons } from "../../../service/icons";

export default function Button({ onClick, children }) {
  return (
    <button className="editBtn" onClick={onClick}>
      {<img src={icons.feather} alt="" width={"100%"} height={"100%"} /> || children}
    </button>
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
