import React, { useEffect, useState } from "react";
import db from "../Firebase";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// const Logs =[
//     {
//         DateTime: "2022-06-27 02:06",
//         Name: "Mrunmayee",
//         Status: "ended",
//         Emotion: "Happy",
//         City: "Indore",
//         Report: "Here's my report"
//     },
//     {
//         DateTime: "2022-06-27 02:06",
//         Name: "Mrunmayee",
//         Status: "ended",
//         Emotion: "Happy",
//         City: "Indore",
//         Report: "Here's my report"
//     },
//     {
//         DateTime: "2022-06-27 02:06",
//         Name: "Mrunmayee",
//         Status: "ended",
//         Emotion: "Happy",
//         City: "Indore",
//         Report: "Here's my report"
//     },
//     {
//         DateTime: "2022-06-27 02:06",
//         Name: "Mrunmayee",
//         Status: "ended",
//         Emotion: "Happy",
//         City: "Indore",
//         Report: "Here's my report"
//     },
//     {
//         DateTime: "2022-06-27 02:06",
//         Name: "Mrunmayee",
//         Status: "ended",
//         Emotion: "Happy",
//         City: "Indore",
//         Report: "Here's my report"
//     },

// ]

function CallLogs() {
  const [Logs, setCallLogs] = useState([]);
  //const ref = db.collection("Call-Logs");

  useEffect(() => {
    // const ref = collection(db, "Call-Logs");
    // const info = [];
    // function getLogs() {
    //   query(getDocs(ref)).then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       info.push(doc.data());
    //       console.log("hello");
    //     });
    //   });

    //   setCallLogs(info);
    // }
    // getLogs();
    async function fetchInfo() {
      const ref = collection(db, "Call-Logs");
      const info = [];
      const data = await query(getDocs(ref));
      data.forEach((doc) => {
        info.push(doc.data());
      });
      setCallLogs(info);
    }
    fetchInfo();
    console.log("hi");
  }, []);

  return (
    <div className="Call-Logs">
      <div className="Nav-Bar">
        <div className="Searchbar">Search</div>
        <div className="Emotion-Filter">Emotion Filter</div>
        <div className="City-Filter">City Filter</div>
      </div>
      <ul className="Logs-List">
        {console.log(Logs)}
        {Logs.map((val) => {
          return (
            <li className="Log">
              <div className="DateTime">{val.City}</div>
              <div className="City">{val.City}</div>
              <div className="Person-Name">Mrun</div>
              <div className="Call-Status">{val.Duration}</div>
              <div className="Emotion">{val.Emotion}</div>
              <div className="Report">Report</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CallLogs;