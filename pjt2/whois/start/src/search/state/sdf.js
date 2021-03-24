function* minchang() {
  const myMsgList = [
    '안녕 나는 민창이야',
    '만나서 반가워',
    '내일 영화 볼래?',
    '시간 안 되니?',
    '내일모레는 어때?',
  ];
  for (const msg of myMsgList) {
    console.log('유정:', yield msg);
  }
}
function suji() {
  const myMsgList = ['', '안녕 나는 유정이야', '그래 반가워', '쫗앙'];
  const gen = minchang();
  for (const msg of myMsgList) {
    console.log('민창:', gen.next(msg).value);
  }
}
suji();


const generatorFunction = function* () {
    console.log("반환:",yield 1);
    console.log("반환:",yield 2);
    console.log("반환:",yield 3);
    console.log("반환:",yield 4);
  }
  const generator = generatorFunction();
  console.log(generator.next());
  // {value: 1, done: false}