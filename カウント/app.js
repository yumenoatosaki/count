
for (let i = 1; i < 51; i++) {
if(i % 10 === 0){
  let resultA ="今" + i + "回ループしました。";
  console.log(resultA);
}
if(i % 4 === 0){
  let resultB ="4で割れる数です。" + i;
  console.log(resultB);
}
if(i === 50 ){
  alert('50回カウントが終わりました。')
}
}