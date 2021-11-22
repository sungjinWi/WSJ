// readline 모듈은 데이터를 읽기위한 인터페이스를 제공해주는 모듈
const readline = require('readline');
const rl = readline.createInterface({
  // 표준 입출력
  input: process.stdin,
  output: process.stdout
});

// 입력값 들어가는 빈배열
let input = [];

// 입력되는 값을 line에서 한줄씩 읽어들이게 하기
rl.on('line', function (line) {
    // map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
    // 이때 parseint는 10진수의 정수로 변환해준듯 원래는 항상 10진수가 아니라 지정해주는게 좋다고 함
    input = line.split(' ').map((el) => parseInt(el));
  })
  // 입력된 값으로 함수 처리 close처리가 없으면 계속 입력되고 프로세스 종료가 안된다
  .on('close', function () {   
    // 2개의 값을 입력받는데 하나는 년도 하나는 월이라고 선언함
    let year = input[0];
    let month = input[1];
    //윗줄 출력
    console.log(year + "년, " + month + "월");
    console.log("일 월 화 수 목 금 토");

    //그 달의 마지막날 날짜 찾기
    var lday = new Date(year, month, 0).getDate();
    
    //1~lday까지 한 array로 묶기
    var dayarr = [];
    var i = 1;
    while(i <= lday)
    {
        dayarr.push(String(i).padStart(2, '0')); 
        // 01 이런식으로 적게해서 자릿수 맞춰주기 -> 달력 꼴 맞추기
        i++;
    };

    //array 요일에 맞게 재배치 위한 공백 주기
    var fday = new Date(year, month-1, 1).getDay();
    var j = 0;
    while (j < fday)
    {
        dayarr.unshift('  ');
        j++;
    };

    //기왕 이런거 달력 칸수 가장 많을때 42칸이니까 array 인덱스 42개로 맞춰주기
    if((dayarr.length%7) != 0)
    {
        var l = 7 - (dayarr.length%7);
        while (l > 0)
        {
            dayarr.push('  ');
            l--;
        }
    };

    //day array의 index들 7개씩 잘라서 출력하기
    var m = 0; 
    var dayarrs = [];
    while(m < 6)
    {
        var dayarrs = dayarr.slice((m*7), (m+1)*7);
        console.log(dayarrs.join(' ') );
        m++;
    };
    // Node.js 프로세스를 즉시 중지하고 종료하는 데 사용
    // 오류가 발생하면 Node.js 응용 프로그램을 완전히 중지시킬 수 있으므로 위험한 작업이라고 한다
    process.exit();
  });



