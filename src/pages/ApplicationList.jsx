import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { icons } from "../service/icons";
import JobCard from "../components/JobCard";
import { getOneJob } from "../requests/jobs";
import ApplicationsTable from "../components/ApplicationsTable";

export default function ApplicationList() {
  const { title } = useParams();

  const [job, setJob] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (isDataLoading) {
        const response = await getOneJob(title);
        if (response.ok) {
          setJob(response.data);
          return setIsDataLoading(false);
        } else {
          setError("Something went wrong");
        }
        setIsDataLoading(false);
      }
    };
    getData();
  }, [job, isDataLoading]);

  return (
    <>
      <div className="list-of-application">
        {job !== {} ? (
          <JobCard className="mb-5" data={job} />
        ) : (
          <div> {error} </div>
        )}

        <ApplicationsTable />

        <div className="add-application-btn">
          <Link className="btn cs_btn btn_secondary" to="/jobs/new">
            <span className="">
              <img src={icons.feather} alt="" />
            </span>
            <span>Add a new job</span>
          </Link>
        </div>
      </div>
    </>
  );
}

// const ApplicationList = () => {
//     return (
//         <>
//             <div className="right-popup">
//                 <div className="job-application-details">

//                     <div className="details-top-sections">
//                         <a href="#" className="close-popup">
//                             <img src="../assets/media/images/icons/outline-arrow-back.svg" alt="" />
//                         </a>
//                         <h1>
//                             Applications details
//                         </h1>
//                     </div>

//                     <div className="details-specifications">
//                         <div className="detail-item flex-basis-45">
//                             <div className="detail-item-name">
//                                 Full name
//                             </div>
//                             <div className="detail-item-value">
//                                 Sam Smith
//                             </div>
//                         </div>
//                         <div className="detail-item flex-basis-45">
//                             <div className="detail-item-name">
//                                 Location
//                             </div>
//                             <div className="detail-item-value">
//                                 Lomé
//                             </div>
//                         </div>
//                         <div className="detail-item">
//                             <div className="detail-item-name">
//                                 E-mail
//                             </div>
//                             <div className="detail-item-value">
//                                 samsmith@mybusiness.com
//                             </div>
//                         </div>
//                         <div className="detail-item">
//                             <div className="detail-item-name">
//                                 Phone number
//                             </div>
//                             <div className="detail-item-value">
//                                 +228 90654322
//                             </div>
//                         </div>
//                         <div className="detail-item">
//                             <div className="detail-item-name">
//                                 Resume
//                             </div>
//                             <div className="detail-item-value resume">

//                                 <div>
//                                     <div className="document-picture">
//                                         <img src="../assets/media/images/icons/pdf-icon.svg" alt="" />
//                                     </div>
//                                     <div className="document-name">
//                                         resume-samsmith.pdf
//                                     </div>
//                                 </div>

//                                 <a href="">
//                                     Download
//                                 </a>

//                             </div>
//                         </div>
//                         <div className="detail-item">
//                             <div className="detail-item-name">
//                                 Cover letter
//                             </div>
//                             <div className="detail-item-value">
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
//                                 interdum, ac aliquet odio mattis. ipsum dolor sit amet, consectetur adipiscing elit.
//                                 Nunc vulputate libero et velit interdum, ac aliquetmattis.
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
