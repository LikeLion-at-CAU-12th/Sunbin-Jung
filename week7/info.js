const baseURL = "https://apis.data.go.kr/B551011/PhotoGalleryService1";

const container = document.getElementById('container');

const title = document.getElementById('title');

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
  const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${option.pageNo}&serviceKey=${option.serviceKey}`;
  count ++;
  const fetchData = await fetch(url);
  const toJson = await fetchData.json();
  const infodatas = await toJson.response.body.items.item;

  infodatas.forEach((data,i)=>{
    const infolist = document.createElement('div');
    infolist.id = 'infolist';
    title.innerText = `*⁀➷♥ ${data.galTitle}˚₊·—̳͟͞͞♥`

    const image = document.createElement('img');
    image.src = data.galWebImageUrl;

    const time = document.createElement('time');
    const paDate = data.galCreatedtime.slice(0,10);
    const year = paDate.substring(0, 4);
    const month = paDate.slice(4, 6);
    const day = paDate.slice(6, 8);

    const parsedTime = new Date(`${year}-${month}-${day}`);
    //time.innerText = parsedTime.toLocaleString();

    const info = document.createElement('span');
    info.innerText = `
    📍 ${i+1 + 5*count}번째 사진
    제목 : ${data.galTitle}
    장소 : ${data.galPhotographyLocation}
    날짜 : ${parsedTime.toLocaleString()}`;

    infolist.appendChild(image);
    infolist.appendChild(info);
    container.appendChild(infolist);
    infolist.appendChild(time);

  });
}