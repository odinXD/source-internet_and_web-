
var xhr = new XMLHttpRequest();
var result;
var robjects;
var object;
var xx;
var yy;


xhr.withCredentials = true;
xhr.addEventListener("readystatechange",function(){
    if(this.readyState === 4) {
        console.log(this.response);
    }    
})

function displayResponse(){
    document.getElementById("resultlist").innerHTML = "" //dom 활용하여 innerhtml 조작
    var name = document.getElementById("searchname").value; //dom 써서 value 활용
    console.log(name)
    url = "http://localhost:3000/kakao?"
    xhr.open("GET",("http://localhost:3000/kakao?name="+name))//+encodeURI("연제구"))
    xhr.send();
    xhr.responseType='json';
    xhr.addEventListener("readystatechange",function(){
        if(this.readyState === 4) {
            document.getElementById("resultlist").innerHTML = "" //dom 활용하여 innerhtml 조작
            console.log(this.response);
            result = this.response;
            console.log(result)
            var max = result.meta.pageable_count
            robjects = new Object();
            console.log(robjects)

            for (k = 0; k<max&&k<5; k= k+1){
                var place = result.documents[k].place_name;
                var address = result.documents[k].address_name;
                var xx = result.documents[k].x;
                var yy = result.documents[k].y;

                console.log(place + address + xx + yy)

                object = {}
                object = {place:place, address:address, x : xx, y : yy}
                console.log(object.place, object.address)
                robjects[k+1] = object
                console.log(object)
                console.log(robjects)
                
                var onSpan=document.createElement('p') //dom 활용하여 요소생성 객체

                onSpan.innerHTML=(k+1) +". "+ place+ "<br>" + address+"<br>(" + xx+" " + yy+")"

                onSpan.classList.add('results')

                document.getElementById('resultlist').appendChild(onSpan); //dom 활용하여 자식 요소 추가
    
        }    
    }
    
    
})


}
var rawnavi;
var duration;
var weather;
var temp; 

function resduration(){
    var num = document.getElementById("searchnum").value
    console.log(num)
    console.log(robjects)
    console.log(robjects[num].x)
    console.log(robjects[num].y)

    var getDuration = {
        url: "http://localhost:3000/navi?desx="+robjects[num].x+'&desy='+robjects[num].y,
        type: "GET",
        datatype:"json"
        }
        $.ajax(getDuration).done(function (response) {
            console.log(response);
            var obj = JSON.parse(response);
            console.log(obj)
            duration = obj.routes[0].summary.duration;
            console.log(duration)
            var hour = parseInt(duration / 3600)
            var minute = parseInt((duration)%3600 / 60)
            var second = duration % 60
            console.log(hour,minute,second)
            document.getElementById("duration").innerHTML = "예상 소요시간 : <br>" + hour + "시간 " + minute + "분 " + second + "초"  //dom 활용해서 inner 조작

          });
          var getWeather = {
            "url": "https://api.openweathermap.org/data/2.5/weather?lang=kr&lat="+robjects[num].y+"&lon="+robjects[num].x+"&appid=158f25abf75b71b8735858c38a273a2b",
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(getWeather).done(function (response) { //ajax, jquery 활용해서 api 호출후 받은 json 파일을 파싱함.
            console.log(response);
            weather = response.weather[0].description;
            temp = parseInt(response.main.temp - 273.15);
            document.getElementById("weather").innerHTML = "날씨 : " + weather;
            document.getElementById("temp").innerHTML = "기온 : " + temp + "도" ;

            var container = document.getElementById('map2'); //지도를 담을 영역의 DOM 레퍼런스
            var options = { //지도를 생성할 때 필요한 기본 옵션
                center: new kakao.maps.LatLng(robjects[num].y,robjects[num].x), //지도의 중심좌표.
                level: 4 //지도의 레벨(확대, 축소 정도)
            };

            var map2 = new kakao.maps.Map(container, options);

            var markerPosition  = new kakao.maps.LatLng(robjects[num].y,robjects[num].x); 

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map2);

            // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
            // marker.setMap(null);  
            
            document.getElementById("roadview").href = "https://map.kakao.com/link/roadview/"+robjects[num].y+","+robjects[num].x;

          });

      };
      
      

