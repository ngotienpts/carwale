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


  const app = {
    handleEvent: function () {
      const _this = this;

      // show search content header
      dropdownSearchHeaderPC.onclick = function () {
        dropdownContentSearchHeader.classList.add("show");
      };

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

      });

      // change tab
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

      // show login
      openLogin.onclick = function(){
        popupLogin.classList.add('show');
      }

      // close login
      closeLogin.onclick = function(){
        popupLogin.classList.remove('show');
      }
      
      // show menu mobile
      openMenuMb.onclick = function(){
        popupMenu.classList.add('show');
        menuField.classList.add('show');
      }
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

      // show search mobile
      openSearchMobile.onclick = function(){
        popupSearchMobile.classList.add('show');
      }
      dropdownSearchHeaderMb.onclick = function(){
        dropdownContentSearchMb.classList.add('show');
      }

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
    start: function () {
      // slider
      this.tabActiveDefault();
      // xử lý sự kiện
      this.handleEvent();
    },
  };
  app.start();
});

