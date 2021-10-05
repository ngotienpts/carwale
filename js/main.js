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

        items.forEach(function (item, index) {
          item.addEventListener("click", showContent);
          var pane = tabs[index];
          function showContent() {
            el.querySelector(".tab-item.active").classList.remove("active");
            el.querySelector(".tab-panes.active").classList.remove("active");

            item.classList.add("active");
            pane.classList.add("active");
          }
        });
      });
    },
    start: function () {
      // xử lý sự kiện
      this.handleEvent();
    },
  };
  app.start();
});
// slider
$(document).ready(function () {
  $(".tab-panes.active").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
  });
  var filtered = false;

  $(".js-filter").on("click", function () {
    if (filtered === false) {
      $(".filtering").slick("slickFilter", ":even");
      $(this).text("Unfilter Slides");
      filtered = true;
    } else {
      $(".filtering").slick("slickUnfilter");
      $(this).text("Filter Slides");
      filtered = false;
    }
  });
});
