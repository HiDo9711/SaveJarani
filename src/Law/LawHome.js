import React from "react";
import "./LawHome.css";

function LawHome() {
  return (
    <div className="lawHome_div">
      <h1>자전거 이용 활성화에 관한 법률</h1>
      <iframe
        title="External Page"
        src="https://www.law.go.kr/lsInfoP.do?lsId=000993&ancYnChk=0#J24:0"
        style={{ width: "80%", height: "800px", border: "none" }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  );
}

export default LawHome;
