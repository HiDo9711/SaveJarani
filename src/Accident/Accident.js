import axios from "axios";
import React, { useEffect, useState } from "react";
import Map from "./Map";
import AccidentChart from "./AccidentChart";
import "../App.css";

const Accident = () => {
  const years = ["2018", "2019", "2020", "2021", "2022"];
  const [year, setYear] = useState(years[0]);
  const [siDo, setSiDo] = useState("11");
  const guguns = [
    { gugunname: "강남구", guguncode: 680 },
    { gugunname: "강동구", guguncode: 740 },
    { gugunname: "강북구", guguncode: 305 },
    { gugunname: "강서구", guguncode: 500 },
    { gugunname: "관악구", guguncode: 620 },
    { gugunname: "광진구", guguncode: 215 },
    { gugunname: "구로구", guguncode: 530 },
    { gugunname: "금천구", guguncode: 545 },
    { gugunname: "노원구", guguncode: 350 },
    { gugunname: "도봉구", guguncode: 320 },
    { gugunname: "동대문구", guguncode: 230 },
    { gugunname: "동작구", guguncode: 590 },
    { gugunname: "마포구", guguncode: 440 },
    { gugunname: "서대문구", guguncode: 410 },
    { gugunname: "서초구", guguncode: 650 },
    { gugunname: "성동구", guguncode: 200 },
    { gugunname: "성북구", guguncode: 290 },
    { gugunname: "송파구", guguncode: 710 },
    { gugunname: "양천구", guguncode: 470 },
    { gugunname: "영등포구", guguncode: 560 },
    { gugunname: "용산구", guguncode: 170 },
    { gugunname: "은평구", guguncode: 380 },
    { gugunname: "종로구", guguncode: 110 },
    { gugunname: "중구", guguncode: 140 },
    { gugunname: "중랑구", guguncode: 260 },
  ];

  const [guGun, setGuGun] = useState("680");
  const [accidentData, setAccidentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const accident_api_key = process.env.REACT_APP_ACCIDENT;
      try {
        const response = await axios.get(
          `http://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?ServiceKey=${accident_api_key}&searchYearCd=${year}&siDo=${siDo}&guGun=${guGun}&type=json&numOfRows=20&pageNo=1`
        );
        if (response.data && response.data.items) {
          setAccidentData(response.data.items.item);
        } else {
          console.error("No data found in the response");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [year, siDo, guGun]);

  return (
    <>
      <div className="accident_main">
        <div className="accident_title">
          <h4 className="text_accident">
            사고다발 구간을 조회하려는 연도(2018~2022)와 서울시의 행정구를
            선택해주세요
          </h4>
          <div className="select">
            <label>
              연도 :
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option selected disabled>
                  -연도-
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
            <label>
              시 :
              <select value={siDo} onChange={(e) => setSiDo(e.target.value)}>
                <option value="11">서울</option>
              </select>
            </label>
            <label>
              구 :
              <select value={guGun} onChange={(e) => setGuGun(e.target.value)}>
                <option selected disabled>
                  -구/군-
                </option>
                {guguns.map((gugun) => (
                  <option key={gugun.guguncode} value={gugun.guguncode}>
                    {gugun.gugunname}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <Map accidentData={accidentData} className="map_map" />
          <AccidentChart accidentData={accidentData} />
          <img src="/desc.png" className="map_img" />
        </div>
      </div>
    </>
  );
};

export default Accident;
