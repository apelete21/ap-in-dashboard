import React, { useEffect } from "react";
import { teams } from "../../service/icons";
import { usersReqs } from "../../requests/users";
import { useState } from "react";

export default function ProfileList() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { users, message } = await usersReqs({}, "");
      console.log({ users, message });
      setIsLoading(false);
    })();
  }, [data]);

  return (
    <div className="tab-lists">
      <div className="users-number">
        <span>{data?.length} users</span>
      </div>
      <div className="list-body">
        {data?.map((e, i) => {
          return (
            <>
              <div className="user-card">
                <div className="left-side">
                  <div className="user-profile">
                    <img src={teams.TeamMember6} alt="profile" />
                  </div>
                  <div className="user-name-email">
                    <b className="user-name">John Doe</b> <br />
                    <span className="user-email">johndoe@gmail.com</span>
                  </div>
                </div>
                <div className="right-side">
                  <div className="user-card-actions">
                    <span title={`view`}>
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
                    <span title="edit">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2792 7.0653L11.9146 3.7403L13.0229 2.63197C13.3264 2.32849 13.6993 2.17676 14.1415 2.17676C14.5833 2.17676 14.9559 2.32849 15.2594 2.63197L16.3677 3.7403C16.6712 4.04377 16.8295 4.41005 16.8427 4.83913C16.8559 5.26769 16.7108 5.6337 16.4073 5.93717L15.2792 7.0653ZM3.16667 16.6247C2.94236 16.6247 2.75447 16.5487 2.603 16.3967C2.451 16.2452 2.375 16.0573 2.375 15.833V13.5965C2.375 13.491 2.39479 13.3889 2.43438 13.2902C2.47396 13.1909 2.53333 13.1018 2.6125 13.0226L10.7667 4.86842L14.1312 8.23301L5.97708 16.3872C5.89792 16.4663 5.80899 16.5257 5.71029 16.5653C5.61107 16.6049 5.50868 16.6247 5.40312 16.6247H3.16667Z"
                          fill="#AAAAAA"
                        />
                      </svg>
                    </span>
                    <span title="delete" onClick={() => {}}>
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
  );
}
