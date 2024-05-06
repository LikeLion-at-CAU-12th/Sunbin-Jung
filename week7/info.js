const getinfoData = async (data) => {
  const container = document.getElementById('info-container');
  const infolist = document.createElement('div');
  infolist.id = 'infolist';
  title.innerText = `*⁀➷♥ ${data.galTitle}˚₊·—̳͟͞͞♥`;
  
  const queryString = `?galTitle=${encodeURIComponent(data.galTitle)}
  &galPhotographyLocation=${encodeURIComponent(data.galPhotographyLocation)}
  &galWebImageUrl=${encodeURIComponent(data.galWebImageUrl)}
  &galCreatedtime=${encodeURIComponent(data.galCreatedtime)}
  &galPhotographer=${encodeURIComponent(data.galPhotographer)}
  &galSearchKeyword=${encodeURIComponent(data.galSearchKeyword)}`;
  
  const image = document.createElement('img');
  image.src = data.galWebImageUrl;

  const time = document.createElement('time');
  const paDate = data.galCreatedtime.slice(0, 10);
  const year = paDate.substring(0, 4);
  const month = paDate.slice(4, 6);
  const day = paDate.slice(6, 8);

  const parsedTime = new Date(`${year}/${month}/${day}`);
  time.innerText = parsedTime.toLocaleDateString();

  const info = document.createElement('span');
  info.innerText = `
    🏝️ 장소 : ${data.galPhotographyLocation}
    📅 날짜 : ${parsedTime.toLocaleDateString()}
    📸 촬영자 : ${data.galPhotographer}
    🗝️ 키워드 : ${data.galSearchKeyword}`;

  const button = document.createElement('button');
  button.innerText = "돌아가기";
  button.addEventListener('click', () => {
    // 이전 페이지로 돌아가기
    window.history.back();
  });
  container.appendChild(infolist);
  infolist.appendChild(image);
  infolist.appendChild(info);
  // infolist.appendChild(button);

  
};

// 페이지가 로드될 때 쿼리스트링 파라미터를 추출하여 데이터 가져오기
window.onload = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const galTitle = urlParams.get('galTitle');
  const galPhotographyLocation = urlParams.get('galPhotographyLocation');
  const galWebImageUrl = urlParams.get('galWebImageUrl');
  const galCreatedtime = urlParams.get('galCreatedtime');
  const galPhotographer = urlParams.get('galPhotographer');
  const galSearchKeyword = urlParams.get('galSearchKeyword');

  const data = {
    galTitle: galTitle,
    galPhotographyLocation: galPhotographyLocation,
    galWebImageUrl: galWebImageUrl,
    galCreatedtime: galCreatedtime,
    galPhotographer: galPhotographer,
    galSearchKeyword: galSearchKeyword
  };
  getinfoData(data);
  /*
  if (galTitle && galPhotographyLocation && galWebImageUrl && galCreatedtime) {
    getinfoData(data);
  } else {
    // 쿼리스트링 파라미터가 유효하지 않을 경우 예외 처리
    console.error('Invalid query parameters.');
  }
  */
};
