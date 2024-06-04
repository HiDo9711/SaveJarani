import React, { useEffect, useState } from "react";
import "../App.css";

const Map = ({ accidentData }) => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [bicycleChecked, setBicycleChecked] = useState(true);
  const API = process.env.REACT_APP_MAP;
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    

    const my_script = new_script(
      `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${API}`
    );

    my_script.then(() => {
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(
            accidentData[0]?.la_crd,
            accidentData[0]?.lo_crd
          ),
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options);
        setMap(map);

        markers.forEach((marker) => {
          marker.setMap(null);
        });

        const newMarkers = accidentData.map((item) => {
          const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(item.la_crd, item.lo_crd),
          });

          const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="border: 1px solid #000; padding: 10px; width: 300px; height: 50px;"><strong>&lt;${item.spot_nm}&gt;</strong><br></div>`,
          });

          kakao.maps.event.addListener(marker, "click", function () {
            if (infowindow.getMap()) {
              infowindow.close();
            } else {
              infowindow.open(map, marker);
            }
          });

          return marker;
        });

        setMarkers(newMarkers);
      });
    });
  }, [accidentData]);

  useEffect(() => {
    if (!map) return;

    const kakao = window.kakao;
    const mapTypes = {
      bicycle: kakao.maps.MapTypeId.BICYCLE,
    };

    if (bicycleChecked) {
      map.addOverlayMapTypeId(mapTypes.bicycle);
    }
  }, [bicycleChecked, map]);

  const handleLocationClick = (latitude, longitude) => {
    if (map) {
      map.panTo(new window.kakao.maps.LatLng(latitude, longitude));
    }
  };

  return (
    <>
      <div className="App">
        <div id="map" className="map" />
      </div>
      <div className="ddiv">
        <table className="fixed_table">
          <caption>사고다발구간 리스트</caption>
          <tr>
            <td>번호 </td>
            <td>위치 </td>
            <td>사고발생건수 </td>
          </tr>
          {accidentData.map((arraydata, index) => (
            <tr
              key={arraydata.spot_nm}
              onClick={() =>
                handleLocationClick(arraydata.la_crd, arraydata.lo_crd)
              }
            >
              <td>{index + 1}</td>
              <td> {arraydata.spot_nm}</td>
              <td> {arraydata.occrrnc_cnt}</td>
            </tr>
          ))}
        </table>
      </div>
      <h6 className="hh6">
        (*사고다발구간 리스트 내의 항목을 클릭하면 지도가 해당 위치로
        이동합니다)
      </h6>
    </>
  );
};

export default Map;
