export default function list() {
  return (
    <>
      <div class="tasks_list_section">
        <ul class="tasks_list"></ul>
      </div>
    </>
  );
}

export function ListElement() {
  return (
    <li class="task_">
      <span class="square"></span>
      Providing quality assistance to management
    </li>
  );
}
