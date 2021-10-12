document.addEventListener("DOMContentLoaded", function () {
  //search
  var searchHeaderPC = document.querySelector(".header-search-pc");
  var dropdownSearchHeaderPC = document.querySelector(".search-form-header-pc");
  var dropdownContentSearchHeader = document.querySelector(".search-dropdown-pc");

  // change tab
  var featured = document.querySelectorAll(".featured-car");

  // show popup
  var openLogin = document.querySelector('.header-user');
  var popupLogin = document.querySelector('.login-popup');
  var closeLogin = document.querySelector('.login-popup-close');
  var popupField = document.querySelector('.login-popup-field');

  // show menu mb
  var openMenuMb = document.querySelector('.header-icon__bar');
  var popupMenu = document.querySelector('.menu-mobile');
  var menuField = document.querySelector('.menu-mb-field');
  var subMenu = document.querySelectorAll('.is-show');

  // show search mobile
  var openSearchMobile = document.querySelector('.header-icon__search');
  var popupSearchMobile = document.querySelector('.search-mobile');
  var dropdownSearchHeaderMb = document.querySelector(".search-form-header-mb");
  var dropdownContentSearchMb = document.querySelector(".search-dropdown-mb");
  var searchMenuField = document.querySelector(".search-menu-field");

  //show search range
  var openRange = document.querySelector('.search-banner-top-range__text');
  var inputRange = document.querySelector('.search-banner-top-range-dropdown');

  // chang tab detail right
  var listTabDetailRight = document.querySelectorAll('.detail-right-tab-item');
  var listTabDetailContent = document.querySelectorAll('.detail-right-pane-items');

  // show read more car used
  var readMore = document.querySelector('.read-more');
  var tableUsedCar = document.querySelector('.seo-descript__table-div');


  const app = {
    handleEvent: function () {
      const _this = this;

      // show search content header
      if(dropdownSearchHeaderPC){
        dropdownSearchHeaderPC.onclick = function () {
          dropdownContentSearchHeader.classList.add("show");
        };
      }

      // change tab
      if(featured){
        featured.forEach(function (el) {
          var items = el.querySelectorAll(".tab-item");
          var tabs = el.querySelectorAll(".tab-panes");
          var textTabs = el.querySelectorAll(".text-panes");
          var choiceTabs = el.querySelectorAll(".tab-content-item");
          items.forEach(function (item, index) {
            item.onclick = function(){
              var pane = tabs[index];
              var text = textTabs[index];
              var choice = choiceTabs[index];
              if(el.querySelector(".tab-item.active")){
                el.querySelector(".tab-item.active").classList.remove("active");
              }
              if(el.querySelector(".tab-panes.active")){
                el.querySelector(".tab-panes.active").classList.remove("active");
              }
              if(el.querySelector(".text-panes.active")){
                el.querySelector(".text-panes.active").classList.remove("active");
              }
              if(el.querySelector(".tab-content-item.active")){
                el.querySelector(".tab-content-item.active").classList.remove("active");
              }
              // ----------------------------------------------------------------------
              if(item){
                item.classList.add("active");
              }
              if(pane){
                pane.classList.add("active");
              }
              if(text){
                text.classList.add("active");
              }
              if(choice){
                choice.classList.add("active");
              }
              /**------------------------------------------------------------------------- */
              if(pane){
                if($(pane).hasClass('active') && !$(pane).hasClass('actived')) {
                  $(pane).addClass('actived');
                  $(pane).not('.slick-initialized').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    infinite: false,
                    responsive:[
                      {breakpoint:991,
                      settings:{
                        slidesToShow:1.5,
                        arrows:false,
                      }},
                    ],
                  });
                }
              }
            };
  
          });
        });
      }

      // show login
      if(openLogin){
        openLogin.onclick = function(){
          popupLogin.classList.add('show');
        };
      }

      // close login
      if(closeLogin){
        closeLogin.onclick = function(){
          popupLogin.classList.remove('show');
        };
      }
      
      // show menu mobile
      if(openMenuMb){
        openMenuMb.onclick = function(){
          popupMenu.classList.add('show');
          menuField.classList.add('show');
        };
      }

      // show input range
      if(openRange){
        openRange.onclick = function(){
          if(inputRange){
            inputRange.classList.toggle('show')
          }
        };
      }

      if(subMenu){
        subMenu.forEach(function(a){
          a.onclick = function(){
            a.nextElementSibling.classList.toggle('show');
            var getName = a.lastElementChild.lastElementChild;
            if(getName.getAttribute('name') == 'chevron-down-outline'){
              getName.setAttribute('name','chevron-up-outline')
            }else {
              getName.setAttribute('name','chevron-down-outline')
            }
          }
        });
      }

      // change tab detail right
      if(listTabDetailRight){
        listTabDetailRight.forEach(function(a,b){
          if(listTabDetailContent){
            var tabDetail = listTabDetailContent[b];
          }
          a.onclick = function(){
            if(document.querySelector('.detail-right-tab-item.active')){
              document.querySelector('.detail-right-tab-item.active').classList.remove('active');
            }
            if(document.querySelector('.detail-right-pane-items.active')){
              document.querySelector('.detail-right-pane-items.active').classList.remove('active');
            }

            a.classList.add('active');
            tabDetail.classList.add('active');

          }
        })
      }

      // show search mobile
      if(openSearchMobile){
        openSearchMobile.onclick = function(){
          popupSearchMobile.classList.add('show');
        }
      }
      if(dropdownSearchHeaderMb){
        dropdownSearchHeaderMb.onclick = function(){
          dropdownContentSearchMb.classList.add('show');
        }
      }

      // show read more used car
      if(readMore){
        readMore.onclick = function(){
          if(tableUsedCar){
            tableUsedCar.classList.add('active')
          }
        }
      }

      // Khi click ra ngoai thì sẽ ẩn những element đã show
      document.addEventListener("click", function (e) {
        if (!searchHeaderPC.contains(e.target)) {
          dropdownContentSearchHeader.classList.remove("show");
        }

        if(!popupField.contains(e.target) && !e.target.matches('.header-icon__user')){
          popupLogin.classList.remove('show');
        }

        if(!menuField.contains(e.target) && !e.target.matches('.header-icon__bar')){
          popupMenu.classList.remove('show')
        }

        if(!searchMenuField.contains(e.target) && !e.target.matches('.header-icon__search')){
          popupSearchMobile.classList.remove('show')
        }

        if(inputRange){
          if(!inputRange.contains(e.target) && !e.target.matches('.search-banner-top-range__text')){
            inputRange.classList.remove('show')
          }
        }
      });


    },
    tabActiveDefault:function(){
      $(".tab-panes.active").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        responsive:[
          {breakpoint:991,
          settings:{
            slidesToShow:1.5,
            arrows:false,
          }},
        ],
      });
    },
    detailSlideTop:function(){
      $(".detail-left-silde").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        responsive:[
          {breakpoint:991,
          settings:{
            slidesToShow:1,
            arrows:false,
          }},
        ],
      });
    },
    detailSlideRight:function(){
      $(".detail-right-pane-item-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        responsive:[
          {breakpoint:991,
          settings:{
            slidesToShow:1,
            arrows:false,
          }},
        ],
      });
    },
    start: function () {
      // slider
      this.tabActiveDefault();
      // xử lý sự kiện
      this.handleEvent();
      // slider detail top
      this.detailSlideTop();
      // slider detail right
      this.detailSlideRight();
    },
  };
  app.start();
});

