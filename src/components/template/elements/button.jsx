export default function Button({ onClick }) {
  return (
    <>
      <button className="editBtn" onClick={onClick}>
        +
      </button>
    </>
  );
}
