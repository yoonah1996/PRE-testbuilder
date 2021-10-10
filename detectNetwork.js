/**
 * 아래의 detectNetwork 함수는 어떤 카드 번호를 input으로 받아,
 * 카드 회사의 이름('MasterCard', 'American Express)을 return 하는 함수입니다.
 *
 * 예) detectNetwork('343456789012345') // 'American Express'
 *
 * 그럼 어떻게 카드 번호만 가지고, 카드회사를 알 수 있을까요?
 *
 * 2가지 방법이 있습니다.
 *  1. 앞 자리 숫자들 (이번 과제에서는 prefix라 부릅니다.)
 *  2. 숫자들의 길이 (이번 과제에서는 lenght라고 부릅니다.)
 */

function detectNetwork(cardNumber) {
  /**
   * 주의사항: 'cardNumber'는 항상 문자열입니다.
   * 'Diner's Club' 카드 번호는 항상 38이나 39로 시작을하고, 14 자리 숫자입니다.
   * 'American Express' 카드 번호는 항상 34 나 37로 시작하고, 15 자리 숫자입니다.
   * 이 글을 읽으셨다면, detectNetwork함수가 'Diner's Club', 'American Express'를
   * 정확히 검사할 수 있도록 만들고 브라우저 console 화면으로 돌아가세요.
   */
  
  let prefix1 = parseInt(cardNumber.substring(0, 1)); //한자리
  let prefix = parseInt(cardNumber.substring(0, 2)); //두자리
  let prefix4 = parseInt(cardNumber.substring(0, 4)); //네자리
  let lenght = cardNumber.length;

  if((prefix === 38 || prefix === 39) && lenght === 14){
    return "Diner's Club";
  }else if((prefix === 34 || prefix === 37) && lenght === 15){
    return "American Express";
  }else if(prefix1 === 4 && (lenght === 13 || lenght === 16 || lenght === 19)){
    return "Visa";
  }else if(( 51 <= prefix && prefix <= 55 ) && lenght === 16){
    return "MasterCard";
  }else if(prefix4 === 6011 && (lenght === 16 || lenght === 19)){
    return "Discover";
  }else{
    
  }

}

// you don't have to worry about this code. keep this code.

if (typeof window === "undefined") {
  module.exports = detectNetwork;
}
