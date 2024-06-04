import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const AccidentChart = ({ accidentData }) => {
  if (!Array.isArray(accidentData)) {
    return <div>Loading...</div>;
  }

  const casualtiesCount = accidentData.reduce(
    (total, item) => total + parseInt(item.caslt_cnt),
    0
  );

  const deathCount = accidentData.reduce(
    (total, item) => total + parseInt(item.dth_dnv_cnt),
    0
  );
  const seriousInjuryCount = accidentData.reduce(
    (total, item) => total + parseInt(item.se_dnv_cnt),
    0
  );
  const slightInjuryCount = accidentData.reduce(
    (total, item) => total + parseInt(item.sl_dnv_cnt),
    0
  );

  const data = [
    { name: "사상자수", num: casualtiesCount, fill: "#FF5733" },
    { name: "사망자수", num: deathCount, fill: "#FFC300" },
    { name: "중상자수", num: seriousInjuryCount, fill: "#C70039" },
    { name: "경상자수", num: slightInjuryCount, fill: "#900C3F" },
  ];
  return (
    <>
      <div className="chart_div">
        <h2 className="text_chart">자전거 사고 차트(사상자 관련 정보)</h2>
        <div className="hhh">
          <BarChart
            height={300}
            width={500}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="num" fill="#8884d8" name=" " />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default AccidentChart;
