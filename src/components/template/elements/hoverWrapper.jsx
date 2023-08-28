import { useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function HoverEdit({ children, className }) {

  // const elem = useRef(null)
  // const [context, setcontext] = useState(false)

  // // document.addEventListener("DOMContentLoaded", ()=>{
  //   document.querySelector(".detailsContainer").addEventListener("contextmenu", (e) => {
  //     e.preventDefault()
  //   })
  // // })
  // const oncontextmenu = (e) => {
  //   e.preventDefault()
  // }

  // const showMenu = (e) => {
  //   e.preventDefault()
  //   let menu = document.querySelector(".contextMenu")
  //   menu.style.top = `${e.clientY - 20}px`
  //   menu.style.left = `${e.clientX - 20}px`
  // }

  return (
    <> {
      // context ? createPortal(<>
      //   <div className="menu-bg">
      //     <div className="menu">
      //       <span>Cut</span>
      //       <span>Copy</span>
      //       <span>Paste</span>
      //     </div>
      //   </div>
      // </>, document.body) : ""
    }
      <span
        className={`onhover ${className}`}
        // ref={elem}
        // oncontextmenu={oncontextmenu}
      >{children}</span>
    </>
  );
}
