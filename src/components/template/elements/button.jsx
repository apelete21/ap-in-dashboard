export default function Button({ onClick }) {
  return (
    <>
      <button className="editBtn" onClick={onClick}>
        +
      </button>
    </>
  );
}

export function AddBtn({onClick}) {
  return (
    <>
      <button className="addBtn" onClick={onClick}>
        add
      </button>
    </>
  );
}
