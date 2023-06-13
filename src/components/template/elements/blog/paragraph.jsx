export function Paragraph({children}) {
  return (
    <>
      <div class="block--paragraph">
        <p class="default-paragraph">
          {children}
        </p>
      </div>
    </>
  );
}
