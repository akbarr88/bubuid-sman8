import React from "react";
import { useParams } from "react-router-dom";

function ReportDetails() {
  const { id } = useParams();
  const report = reports.find((report) => report.no === parseInt(id));

  if (!report) {
    return <div>Report not found</div>;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Report Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">No:</p>
          <p className="font-semibold">From:</p>
          <p className="font-semibold">Date:</p>
          <p className="font-semibold">Report:</p>
          <p className="font-semibold">Status:</p>
        </div>
        <div>
          <p>{report.no}</p>
          <p>{report.from}</p>
          <p>{report.date}</p>
          <p>{report.report}</p>
          <p>{report.status}</p>
        </div>
      </div>
    </div>
  );
}

const reports = [
  {
    no: 1,
    from: "Agus",
    date: "2022-01-01",
    report: "Lorem ipsum dolor sit amet.",
    status: "Diterima",
  },
  // other reports
];

export default ReportDetails;