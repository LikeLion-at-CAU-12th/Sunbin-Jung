const baseURL = "https://apis.data.go.kr/B551011/PhotoGalleryService1";

const container = document.getElementById('container');

const option = {
    serviceKey:
      "b2OeYGgxuEBrmCA5rHwiL7PKTn0Z3IcQs97DKh9ZszZLUMp%2B93lwFIHutfHDDCT1pW0Sohagp8kFomEdpHNIZg%3D%3D",
    numofRows: 6,
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
    pageNo:33
  };

  let count = -1;

async function getData(){
    // const random = Math.floor(Math.random()*100 +1);
    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${option.pageNo}&serviceKey=${option.serviceKey}`;

    count ++;
    const fetchData = await fetch(url);
    //console.log(fetchData);

    const toJson = await fetchData.json();
    //console.log(toJson);

    const datas = await toJson.response.body.items.item;
    //console.log(datas);

    datas.map((data,i)=>{
        const list = document.createElement('div');
        list.id = 'list';

        const image = document.createElement('img');
        image.src = data.galWebImageUrl;

        const info = document.createElement('span');
        info.innerText = `
        📍 ${i+1 + 5*count}번째 사진
        📸 제목 : ${data.galTitle}
        🏝️ 장소 : ${data.galPhotographyLocation}`;

        const button = document.createElement('button');
        button.innerText = "더보기";
        button.addEventListener('click', () => {
          // 현재 아이템의 정보를 가져오기
          const currentItem = datas[i];
          // 가져온 정보를 이용하여 쿼리스트링을 생성
          const queryString = `?galTitle=${encodeURIComponent(currentItem.galTitle)}
          &galPhotographyLocation=${encodeURIComponent(currentItem.galPhotographyLocation)}
          &galWebImageUrl=${encodeURIComponent(currentItem.galWebImageUrl)}
          &galCreatedtime=${encodeURIComponent(currentItem.galCreatedtime)}`;
          // info.html로 이동
          window.location.href = `info.html${queryString}`;
          getinfoData(datas[i]);
        });

        list.appendChild(image);
        list.appendChild(info);
        list.appendChild(button);

        container.appendChild(list);
    })
}