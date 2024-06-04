import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LawNewsList.css";

const LawAbout = () => {
  const navigate = useNavigate();

  const newsData = [
    {
      id: 1,
      category: "음주",
      title: "음주운전 반복…자전거 추돌해 사망 사고 낸 60대 징역형",
      newsUrl:
        "https://www.msn.com/ko-kr/news/other/%EC%9D%8C%EC%A3%BC%EC%9A%B4%EC%A0%84-%EB%B0%98%EB%B3%B5-%EC%9E%90%EC%A0%84%EA%B1%B0-%EC%B6%94%EB%8F%8C%ED%95%B4-%EC%82%AC%EB%A7%9D-%EC%82%AC%EA%B3%A0-%EB%82%B8-60%EB%8C%80-%EC%A7%95%EC%97%AD%ED%98%95/ar-BB1mXvch?ocid=BingNewsSearch",
      imageUrl:
        "https://www.bing.com/th?id=OVFT.paqFgGujqm8qvINvw0L8Qy&pid=News&w=234&h=132&c=14&rs=2&qlt=90",
    },
    {
      id: 2,
      category: "음주",
      title:
        "자전거·PM, 사고·부상·사망자수 모두 지속 증가… “음주운전 절대 하지 않아야",
      newsUrl:
        "https://www.safetynews.co.kr/news/articleView.html?idxno=229849",
      imageUrl:
        "https://www.bing.com/th?id=OVFT.mjBH4AH7FYVagBwylzvyeC&pid=News&w=234&h=132&c=14&rs=2&qlt=90",
    },
    {
      id: 3,
      category: "음주",
      title:
        "대구지법, 음주운전으로 자전거 운전자 충격 사망케하고도 도주 징역 3년",
      newsUrl:
        "https://www.lawissue.co.kr/view.php?ud=2024053008351223139a8c8bf58f_12",
      imageUrl:
        "https://cliimage.commutil.kr/phpwas/restmb_allidxmake.php?pp=002&idx=3&simg=202311231631430500113kpm_00.jpg&nmt=12",
    },
    {
      id: 4,
      category: "음주",
      title: "교내서 나체로 자전거 탄 유학생…하루만 숨진채 발견",
      newsUrl:
        "https://www.msn.com/ko-kr/news/national/%EA%B5%90%EB%82%B4%EC%84%9C-%EB%82%98%EC%B2%B4%EB%A1%9C-%EC%9E%90%EC%A0%84%EA%B1%B0-%ED%83%84-%EC%9C%A0%ED%95%99%EC%83%9D-%ED%95%98%EB%A3%A8%EB%A7%8C-%EC%88%A8%EC%A7%84%EC%B1%84-%EB%B0%9C%EA%B2%AC/ar-BB1n13zj?ocid=BingNewsSearch",
      imageUrl:
        "https://www.bing.com/th?id=OVFT.7RiUiHfWDxY6aFX6yk_UOC&pid=News&w=234&h=132&c=14&rs=2&qlt=90",
    },
    {
      id: 5,
      category: "음주",
      title: "자전거 음주운전은 경찰에 안 걸린다고?…지난해 580명 단속 된 울산",
      newsUrl: "https://www.mk.co.kr/article/10992671",
      imageUrl:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F009%2F2024%2F04%2F17%2F5289562.jpg&type=f200_200&expire=2&refresh=true",
    },
    {
      id: 6,
      category: "교통법",
      title: "자전거 퇴근길 사고, 교통법규 위반시 산재 불인정",
      newsUrl:
        "https://search.naver.com/p/crd/rd?m=1&px=438&py=2695&sx=438&sy=295&vw=960&vh=919&p=iDmbrsqps8wssim0gshssssssT8-222764&q=%EC%9E%90%EC%A0%84%EA%B1%B0+%EB%B2%95%EA%B7%9C&ie=utf8&rev=1&ssc=tab.news.all&f=news&w=news&s=uHzLj6rvT8Ek%2Fqi4Utl29Hm5&time=1717061307823&abt=%5B%7B%22eid%22%3A%222%22%2C%22vid%22%3A%2214%22%7D%2C%7B%22eid%22%3A%22NCO-CARINS2%22%2C%22vid%22%3A%2215%22%7D%2C%7B%22eid%22%3A%22SRCH-CR-SENDBEACON%22%2C%22vid%22%3A%2211%22%7D%5D&a=nws*e.tit&r=23&i=88127058_000000000000000000973094&g=366.0000973094&u=https%3A%2F%2Fbiz.chosun.com%2Ftopics%2Flaw_firm%2F2024%2F02%2F26%2FIZWYTHLXXBFYPACCZMZJHIZR3E%2F%3Futm_source%3Dnaver%26utm_medium%3Doriginal%26utm_campaign%3Dbiz",
      imageUrl:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F366%2F2024%2F02%2F26%2F973094.jpg&type=f200_200&expire=2&refresh=true",
    },
    {
      id: 7,
      category: "교통법",
      title: "車보다 자전거 교통 법규 위반 적어…자전거 인프라 구축 중요",
      newsUrl:
        "https://www.digitaltoday.co.kr/news/articleView.html?idxno=501592",
      imageUrl:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5137%2F2024%2F01%2F12%2F151555.jpg&type=ofullfill208_208_empty&expire=2&refresh=true",
    },
    {
      id: 8,
      category: "교통법",
      title: "버스 전용차로 쌩쌩… ‘얌체’ 오토바이·자전거 운전자들",
      newsUrl: "http://www.knnews.co.kr/news/articleView.php?idxno=1431787",
      imageUrl:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5202%2F2024%2F05%2F08%2F293470.jpg&type=f200_200&expire=2&refresh=true",
    },
    {
      id: 9,
      category: "교통법",
      title: "공주서, '두바퀴 차 교통법규 지키기' 캠페인",
      newsUrl: "http://www.jbnews.com/news/articleView.html?idxno=1435463",
      imageUrl:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5283%2F2024%2F05%2F08%2F426965.jpg&type=ofullfill208_208_empty&expire=2&refresh=true",
    },
    {
      id: 10,
      category: "교통법",
      title: "자라니 더이상 안 봐줘”…‘자전거 천국’ 日 결단 내리나",
      newsUrl: "http://news.heraldcorp.com/view.php?ud=20230804000678",
      imageUrl:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F016%2F2023%2F08%2F05%2F2179409.jpg&type=f200_200&expire=2&refresh=true",
    },
    {
      id: 11,
      category: "관련행사",
      title: "세종 연양초, 2회 자전거 축제 개최",
      newsUrl:
        "https://www.ccdailynews.com/news/articleView.html?idxno=2275997",
      imageUrl:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5116%2F2024%2F05%2F27%2F927417.jpg&type=ofullfill208_208_empty&expire=2&refresh=true",
    },
    {
      id: 12,
      category: "관련행사",
      title: "자전거 7000대 도심·한강 누빈다…19일 서울자전거대행진",
      newsUrl:
        "https://www.newsis.com/view/?id=NISX20240512_0002731864&cID=10801&pID=14000",
      imageUrl:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F003%2F2024%2F05%2F13%2F12542412.jpg&type=f200_200&expire=2&refresh=true",
    },
    {
      id: 13,
      category: "관련행사",
      title: "안성시자전거연맹, 내달 2일 '자전거 대행진' 행사 갖는다",
      newsUrl: "https://www.newspim.com/news/view/20240529000643",
      imageUrl:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5002%2F2024%2F05%2F29%2F2609219.jpg&type=f200_200&expire=2&refresh=true",
    },
  ];

  const [showMore, setShowMore] = useState({});

  const maxNewsPerCategory = 3;

  const groupedNews = {};
  newsData.forEach((news) => {
    if (!groupedNews[news.category]) {
      groupedNews[news.category] = [];
    }
    groupedNews[news.category].push(news);
  });

  const showMoreNews = (category) => {
    setShowMore({ ...showMore, [category]: true });
  };

  const goLawHome = () => {
    navigate("/LawHome", { replace: true });
  };

  return (
    <div>
      <div className="law_div">
        <h1>관련 뉴스</h1>
        <button onClick={goLawHome} className="law_bt1">
          자전거 이용 활성화에 관한 법률 조회 페이지로 이동
        </button>
        {Object.keys(groupedNews).map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {groupedNews[category]
                .slice(
                  0,
                  showMore[category]
                    ? groupedNews[category].length
                    : maxNewsPerCategory
                )
                .map((news) => (
                  <div
                    key={news.id}
                    style={{
                      cursor: "pointer",
                      margin: "5px",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      width: "30%",
                    }}
                  >
                    <a
                      href={news.newsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        src={news.imageUrl}
                        alt={news.title}
                        style={{
                          width: "100%",
                          height: "auto",
                          marginBottom: "10px",
                        }}
                      />
                      <span>{news.title}</span>
                    </a>
                  </div>
                ))}
            </div>
            {!showMore[category] &&
              groupedNews[category].length > maxNewsPerCategory && (
                <button
                  onClick={() => showMoreNews(category)}
                  className="news_bt"
                >
                  더 보기
                </button>
              )}
          </div>
        ))}
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default LawAbout;
