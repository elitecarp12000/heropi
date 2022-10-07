// 292p
const badgeEl = document.querySelector('.badges');

window.addEventListener('scroll',function(){
   console.log(window.scrollY); 
   if(760 <window.scrollY){
        gsap.to(badgeEl,0.6,{
            opacity:0,
            display:'none'   
        })
        gsap.to(topBtnEl,0.6,{
            opacity:1,
            display:'block'
        
        });
        
   }
   else{
    gsap.to(badgeEl,0.6,{
        opacity:1,
        display:'block'
    })
    gsap.to(topBtnEl,0.6,{
        opacity:0,
        display:'none'
    
    });
   }
});


const topBtnEl = document.querySelector('.top_btn');

topBtnEl.addEventListener('click',function(){
    
    gsap.to(window,.6,{
        scrollTo:0,
    })
})

// gsap.to(요소,시간,속성)

const fadeEl = document.querySelectorAll('.fadein');

fadeEl.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay:(index+1)*0.7, //0.7초 씩 느리게 시간을 추가
        opacity:1
    });
});

//커피 프로모션 토글 아이콘 클릭시 박스 숨기기/나타내기

const promotionEL = document.querySelector('section.promotion');
const toggleBtnEL = document.querySelector('.toggle_btn');


toggleBtnEL.addEventListener('click',function(){
    if(promotionEL.classList.contains('hide')){
        //만약 프로모션 클래스에 하이드 서식이 있다면 높이가 0이 되어야함
        promotionEL.classList.remove('hide');
    }
    else{
        //높이가 다시 원래대로 나와야함
        promotionEL.classList.add('hide');
    }
})

gsap.to('.m_img1', 1.5, {
    delay: 1, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
    y: 15, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
    repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
    yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
    ease: Power1.easeInOut // Easing 함수 적용.
  });
  gsap.to('.m_img2', 2, {
    delay: .5,
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
  });
  gsap.to('.m_img3', 2.5, {
    delay: 1.5,
    y: 20,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
  });

  //6,7,8,10 콘텐츠가 화면의 80%지점에 보일 떄 동작하는 스크립트

  const spyEl = document.querySelectorAll('section.scroll-spy');

  spyEl.forEach(function(spyEl){
    new ScrollMagic
    .Scene({//감시할 장면을 추가
        triggerElement:spyEl,
        triggerHook:0.8 //화면의 80%지점에서 동작
    })
    .setClassToggle(spyEl, 'show')//show클래스를 적용하거나 해제하기
    .addTo(new ScrollMagic.Controller());
  })
  new Swiper('.awards .swiper', {
    autoplay: true, 
    loop: true, 
    spaceBetween: 30,
    slidesPerView: 5, 
    navigation: { 
      prevEl: '.awards .swiper-button-prev', 
      nextEl: '.awards .swiper-button-next' 
    }
  });

  const thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear();