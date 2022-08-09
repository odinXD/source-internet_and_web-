var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(35.18384455133566,129.10360130281313), //지도의 중심좌표.
	level: 4 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options);

var markerPosition  = new kakao.maps.LatLng(35.18384455133566,129.10360130281313); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);    