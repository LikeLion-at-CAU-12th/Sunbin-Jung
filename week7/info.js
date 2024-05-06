async function getinfoData(currentItem){

  const infolist = document.createElement('div');
  const title = document.getElementById('title');
  infolist.id = 'infolist';
  title.innerText = `*⁀➷♥ ${currentItem.galTitle}˚₊·—̳͟͞͞♥`;

  const image = document.createElement('img');
  image.src = decodeURIComponent(currentItem.galWebImageUrl);

  const time = document.createElement('time');
  const paDate = currentItem.galCreatedtime.slice(0,10);
  const year = paDate.substring(0, 4);
  const month = paDate.slice(4, 6);
  const day = paDate.slice(6, 8);

  const parsedTime = new Date(`${year}/${month}/${day}`);
  time.innerText = parsedTime.toLocaleString();

  const info = document.createElement('span');
  info.innerText = `
  📸 제목 : ${currentItem.galTitle}
  🏝️ 장소 : ${currentItem.galPhotographyLocation}
  📅 날짜 : ${parsedTime.toLocaleString()}`;

  infolist.appendChild(image);
  infolist.appendChild(info);
  infolist.appendChild(time);

  container.appendChild(infolist);
}