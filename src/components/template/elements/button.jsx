export default function Button({ onClick }) {
  return (
    <>
      <button className="editBtn" onClick={onClick}>
        +
      </button>
    </>
  );
}

export function ActionBtn({ onClick }) {
  return (
    <>
      <button className="addBtn" onClick={onClick}>
        <span className="open_action">See actions</span>
      </button>
    </>
  );
}

export function ActionList({ onClick, className, children }) {
  return (
    <button className={`${className} `} onClick={onClick}>
      {children}
    </button>
  );
}

export function ActionButton({ onClick, className, children }) {
  return (
    <button className={`${className} `} onClick={onClick}>
      {children}
    </button>
  );
}
