import React from "react";
import { useParams } from "react-router-dom";

function ReportDetails() {
  const { id } = useParams();
  const report = reports.find((report) => report.no === parseInt(id));

  if (!report) {
    return <div>Report not found</div>;
  }

  return (
    <div>
      <h2>Report Details</h2>
      <p>No: {report.no}</p>
      <p>From: {report.from}</p>
      <p>Date: {report.date}</p>
      <p>Report: {report.report}</p>
      <p>Status: {report.status}</p>
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