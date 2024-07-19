window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      switch (window.location.pathname) {
          case '/main.html': // 현재 페이지가 main1.html이면
              window.location.href = 'main2.html'; // main2.html로 이동
              break;
          case '/main2.html': // 현재 페이지가 main2.html이면
              window.location.href = 'main3.html'; // main3.html로 이동
              break;
          // main3.html에서는 다음 페이지가 없으므로 아무 작업도 수행하지 않음
          default:
              break;
      }
  }
});
