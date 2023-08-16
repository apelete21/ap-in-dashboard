import React, { useEffect } from "react";
import { teams } from "../../service/icons";
import { usersReqs } from "../../requests/users";
import { useState } from "react";
import { LoadingComp } from "../loading";
import { useContext } from "react";
import { AppContext } from "../../Contexts/AppContext";
import { createPortal } from "react-dom";
import UserView from "./userView";
import { PromptPopUp } from "../template/elements/prompt";

export default function ProfileList({ loading, setloading }) {
  const { setStatusMessage } = useContext(AppContext);
  const [data, setdata] = useState([]);
  const [itemInView, setItemInView] = useState({})
  const [inView, setInView] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [todelete, setTodelete] = useState("")
  const [prompt, setPrompt] = useState(false)

  useEffect(() => {
    (async () => {
      const { users, message, ok } = await usersReqs({}, "");
      if (ok) {
        setdata(users);
      } else {
        setStatusMessage(message ?? message);
      }
      setIsLoading(false);
    })();
  }, [isLoading]);

  const deleteUser = async (item) => {
    const { message, ok } = await usersReqs({ email: todelete }, `delete`);
    if (ok) {
      setStatusMessage("deleted successfully!");
    } else {
      setStatusMessage(message ?? message);
    }
    setIsLoading(true);
    setPrompt(false)
  }

  if (isLoading)
    return (
      <>
        <LoadingComp scale={0.3} />
      </>
    );
  else
    return (
      <> {
        inView ? createPortal(<>
          <UserView item={itemInView} close={() => {
            setInView(false)
          }} />
        </>, document.body) : ""
      }
        {
          prompt ? createPortal(<>
            <PromptPopUp action={() => {
              deleteUser(todelete)
            }} setSubmitPrompt={setPrompt} />
          </>, document.body) : ""
        }
        <div className="tab-lists">
          <div className="users-number">
            <span>{data?.length} utilisateurs</span>
          </div>
          <div className="list-body">
            {data?.map((e, i) => {
              return (
                <>
                  <div className="user-card">
                    <div className="left-side">
                      <div className="icon-letter">
                        <span>{e?.fullName?.charAt(0)?.toUpperCase()}</span>
                      </div>
                      <div className="user-name-email">
                        <b className="user-name">{e?.fullName}</b> <br />
                        <span className="user-email">{e?.email}</span>
                      </div>
                    </div>
                    <div className="right-side">
                      <div className="user-card-actions">
                        <span title={`view`}
                          onClick={() => {
                            setItemInView(e)
                            setInView(true)
                          }}
                        >
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.49935 3.5625C5.54102 3.5625 2.1606 6.02458 0.791016 9.5C2.1606 12.9754 5.54102 15.4375 9.49935 15.4375C13.4577 15.4375 16.8381 12.9754 18.2077 9.5C16.8381 6.02458 13.4577 3.5625 9.49935 3.5625ZM9.49935 13.4583C7.31435 13.4583 5.54102 11.685 5.54102 9.5C5.54102 7.315 7.31435 5.54167 9.49935 5.54167C11.6844 5.54167 13.4577 7.315 13.4577 9.5C13.4577 11.685 11.6844 13.4583 9.49935 13.4583ZM9.49935 7.125C8.18518 7.125 7.12435 8.18583 7.12435 9.5C7.12435 10.8142 8.18518 11.875 9.49935 11.875C10.8135 11.875 11.8744 10.8142 11.8744 9.5C11.8744 8.18583 10.8135 7.125 9.49935 7.125Z"
                              fill="#AAAAAA"
                            />
                          </svg>
                        </span>
                        <span title="delete" onClick={() => {
                          setTodelete(e?.email)
                          setPrompt(true)
                         }}>
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0423 3.16667H12.2715L11.4798 2.375H7.52149L6.72982 3.16667H3.95898V4.75H15.0423M4.75065 15.0417C4.75065 15.4616 4.91747 15.8643 5.2144 16.1613C5.51133 16.4582 5.91406 16.625 6.33398 16.625H12.6673C13.0872 16.625 13.49 16.4582 13.7869 16.1613C14.0838 15.8643 14.2507 15.4616 14.2507 15.0417V5.54167H4.75065V15.0417Z"
                              fill="#AAAAAA"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
}
