const headers = new Headers({
  "Content-Type": "text/xml",
});
var innerContent = "";

var clickFilter = function () {
  // reset innerHtml of contents
  document.querySelector(".contents").innerHTML = "";

  // getJson by fetch function
  const data = fetch("js/shop_contents.json", { headers })
    .then((response) => response.json())
    .then((data) => {
      var parent = document.querySelector("ul.side_menu");
      var liOn = document.querySelector("li.on");
      var liIndex = [].indexOf.call(parent.children, liOn);

      // if menu is show all,
      if (liIndex === 0) {
        innerContent = `    <section class="sec1"></section>
        <section class="sec2"></section>
        <section class="sec3"></section>
        <section class="sec4"></section>
        <section class="sec5"></section>
        <section class="sec6"></section>
        <section class="sec7"></section>`;

        document.querySelector(".contents").innerHTML += innerContent;
        showProd(data, 66, 67, 68, 69, 70, 71, 1);
        showRandProd(data, 1, 3, 5, 2);
        showProd(data, 12, 13, 14, 15, 16, 17, 3);
        showRandProd(data, 7, 8, 9, 4);
        showProd(data, 20, 24, 25, 29, 30, 31, 5);
        showRandProd(data, 2, 4, 8, 6);
        showProd(data, 32, 35, 41, 42, 43, 49, 7);
      } else {
        for (var i = 0; i < data.length; i++) {
          if (data[i].category == liIndex) {
            innerContent =
              `<div class="contentBox">
                    <a href="#">
                      <div class="imgBox">
                        <img
                          src="` +
              data[i].img +
              `"
                          alt="` +
              data[i].name +
              `"
                        />
                      </div>
                      <div class="txtBox">
                        <p>` +
              data[i].brand +
              `</p>
                        <h5>` +
              data[i].name +
              `</h5>
                      </div>
                    </a>
                  </div>`;

            document.querySelector(".contents").innerHTML += innerContent;
          }
        }
      }
    })
    .catch((err) => console.log(error));
};
var showProd = function (data, n1, n2, n3, n4, n5, n6, secNum) {
  innerContent =
    `<div class="contentBox">
        <a href="#">
          <div class="imgBox">
            <img
              src="` +
    data[n1].img +
    `"
              alt="` +
    data[n1].name +
    `"
            />
          </div>
          <div class="txtBox">
            <p>` +
    data[n1].brand +
    `</p>
            <h5>` +
    data[n1].name +
    `</h5>
          </div>
        </a>
      </div>
      <div class="contentBox">
        <a href="#">
          <div class="imgBox">
            <img
              src="` +
    data[n2].img +
    `"
              alt="` +
    data[n2].name +
    `"
            />
          </div>
          <div class="txtBox">
            <p>` +
    data[n2].brand +
    `</p>
            <h5>` +
    data[n2].name +
    `</h5>
          </div>
        </a>
      </div>
      <div class="contentBox">
        <a href="#">
          <div class="imgBox">
            <img
              src="` +
    data[n3].img +
    `"
              alt="` +
    data[n3].name +
    `"
            />
          </div>
          <div class="txtBox">
            <p>` +
    data[n3].brand +
    `</p>
            <h5>` +
    data[n3].name +
    `</h5>
          </div>
        </a>
      </div>
      <div class="contentBox">
        <a href="#">
          <div class="imgBox">
            <img
              src="` +
    data[n4].img +
    `"
              alt="` +
    data[n4].name +
    `"
            />
          </div>
          <div class="txtBox">
            <p>` +
    data[n4].brand +
    `</p>
            <h5>` +
    data[n4].name +
    `</h5>
          </div>
        </a>
      </div>
      <div class="contentBox">
        <a href="#">
          <div class="imgBox">
            <img
              src="` +
    data[n5].img +
    `"
              alt="` +
    data[n5].name +
    `"
            />
          </div>
          <div class="txtBox">
            <p>` +
    data[n5].brand +
    `</p>
            <h5>` +
    data[n5].name +
    `</h5>
          </div>
        </a>
      </div>
      <div class="contentBox">
        <a href="#">
          <div class="imgBox">
            <img
              src="` +
    data[n6].img +
    `"
              alt="` +
    data[n6].name +
    `"
            />
          </div>
          <div class="txtBox">
            <p>` +
    data[n6].brand +
    `</p>
            <h5>` +
    data[n6].name +
    `</h5>
          </div>
        </a>
      </div>`;

  switch (secNum) {
    case 1:
      document.querySelector(".sec1").innerHTML = innerContent;
      return;
    case 3:
      document.querySelector(".sec3").innerHTML = innerContent;
      return;
    case 5:
      document.querySelector(".sec5").innerHTML = innerContent;
      return;
    case 7:
      document.querySelector(".sec7").innerHTML = innerContent;
      return;
    default:
      return;
  }
};
// input Random products in popular contentBox
var showRandProd = function (data, n1, n2, n3, secNum) {
  // shows random popular products
  var i = Math.floor((Math.random() + n1) * 7);
  var j = Math.floor((Math.random() + n2) * 7);
  var k = Math.floor((Math.random() + n3) * 7);
  var l = Math.floor(Math.random() * 6);
  // show all inner html
  if (secNum === 4) {
    innerContent =
      `  <div class="popularBox">
    <div class="popContentBox">
      <div class="contentBox">
        <a href="#">
          <div class="imgBox">
            <img
              src="` +
      data[l].img +
      `"
              alt="` +
      data[l].name +
      `"
            />
          </div>
          <div class="txtBox">
            <p>` +
      data[l].brand +
      `</p>
            <h5>` +
      data[l].name +
      `</h5>
          </div>
        </a>
      </div>
      <div class="contentBox">
        <a href="#">
          <div class="imgBox">
            <img
              src="` +
      data[i].img +
      `"
              alt="` +
      data[i].name +
      `"
            />
          </div>
          <div class="txtBox">
            <p>` +
      data[i].brand +
      `</p>
            <h5>` +
      data[i].name +
      `</h5>
          </div>
        </a>
      </div>
      <div class="contentBox">
        <a href="#">
          <div class="imgBox">
            <img
              src="` +
      data[j].img +
      `"
              alt="` +
      data[j].name +
      `"
            />
          </div>
          <div class="txtBox">
            <p>` +
      data[j].brand +
      `</p>
            <h5>` +
      data[j].name +
      `</h5>
          </div>
        </a>
      </div>
    </div>
  </div>`;
    document.querySelector(".sec4").innerHTML = innerContent;
  } else {
    innerContent =
      ` 
  <div class="popularBox">
  <h2><span>Most </span>Popular</h2>
  <div class="popContentBox">
  <div class="contentBox">
  <a href="#">
  <div class="imgBox">
    <img
      src="` +
      data[i].img +
      `"
      alt="FLAT PADDED LEATHER SANDALS"
    />
  </div>
  <div class="txtBox">
    <p>` +
      data[i].brand +
      `</p>
    <h5>` +
      data[i].name +
      `</h5>
  </div>
</a>
  </div>
  <div class="contentBox">
  <a href="#">
  <div class="imgBox">
    <img
      src="` +
      data[j].img +
      `"
      alt="FLAT PADDED LEATHER SANDALS"
    />
  </div>
  <div class="txtBox">
    <p>` +
      data[j].brand +
      `</p>
    <h5>` +
      data[j].name +
      `</h5>
  </div>
</a>
</div>
  <div class="contentBox">
  <a href="#">
  <div class="imgBox">
    <img
      src="` +
      data[k].img +
      `"
      alt="FLAT PADDED LEATHER SANDALS"
    />
  </div>
  <div class="txtBox">
    <p>` +
      data[k].brand +
      `</p>
    <h5>` +
      data[k].name +
      `</h5>
  </div>
</a>
  </div>
  </div>
  <p>Shop This Season's Must Have Pieces</p>
  </div>`;
    if (secNum === 2) {
      document.querySelector(".sec2").innerHTML = innerContent;
    } else {
      document.querySelector(".sec6").innerHTML = innerContent;
    }
  }
  return innerContent;
};

// change contents when click menu
var menuClick = function (self) {
  var list = document.getElementsByTagName("li");
  for (var i = 0; i < list.length; i++) {
    list[i].classList.remove("on");
  }
  self.classList.add("on");
  clickFilter();
};

// click default menu
menuClick(document.getElementsByTagName("li")[0]);

// make side Menu sticky
var stckyMenu = function () {
  var menu = document.querySelector(".side_menu_box");
  const clientRect = menu.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
  const relativeTop = clientRect.top; // Viewport의 시작지점을 기준으로한 상대좌표 Y 값.
  const scrolledTopLength = window.pageYOffset; // 스크롤된 길이
  const absoluteTop = scrolledTopLength + relativeTop; // 절대좌표

  window.onscroll = function () {
    if (window.outerWidth < 800) {
      return;
    }
    if (window.pageYOffset > absoluteTop) {
      menu.classList.add("sticky");
      if (
        document.body.scrollHeight > 1500 &&
        window.pageYOffset + window.innerHeight >= document.body.scrollHeight
      ) {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    } else {
      menu.classList.remove("sticky");
    }
  };
};
stckyMenu();
