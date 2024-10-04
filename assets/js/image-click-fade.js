// 이미지 클릭 이벤트 핸들러
document.querySelector('.welcome-image').addEventListener('click', function() {
    // 클릭 시 서서히 사라지게 만들기 위해 fade-out 클래스 추가
    this.classList.add('fade-out');
    
     // 1초 후에 새로운 사이트로 이동
  setTimeout(() => {
    window.location.href = 'daisy.html';  // 원하는 사이트로 이동
  }, 1000);  // 1초 후 이동
});
  
