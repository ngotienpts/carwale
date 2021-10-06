document.addEventListener("DOMContentLoaded", function () {
  //search
  var searchHeaderPC = document.querySelector(".header-search");
  var dropdownSearchHeaderPC = document.querySelector(".search-form-header");
  var dropdownContentSearchHeader = document.querySelector(".search-dropdown");

  // change tab
  var featured = document.querySelectorAll(".featured-car");

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
                });
              }
            }
          };

        });
      });
    },
    tabActiveDefault:function(){
      $(".tab-panes.active").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
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

