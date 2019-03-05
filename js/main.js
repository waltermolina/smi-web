//#region Vars

//#endregion

//#region Tachuso Tatoo
function tachusoTatoo() {
  console.clear();
  console.log(
    "\n" +
      "                            ,,=ggQ$$$$$$$$$$$$QQg=,,                            \n" +
      "                       ,=Q$$$$$$$$$$$$$$$$$$$$$$$$$$$$Qy,                       \n" +
      "                   ,g$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Q,                   \n" +
      "                =$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$y                \n" +
      "             ,$$$$$$$$$$$$$$$$$$$F$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Qy             \n" +
      "           =$$$$$$$$$$$$$$$$$$$$$  $$$$$$$@ $$$$$$$$$$$$$$$$$$$$$$$$g           \n" +
      "         g$$$$$$$$$$$$$$[5$$$$$$$   5$$$$F  $$$$$$$$$$$$$$$$$$$$$$$$$$g         \n" +
      '       ,$$$$$$$$$$$$$$$$$  "$$$$$    ]$$`   $$$$$$$$$$$$$$$$$$$$$$$$$$$$,       \n' +
      "      g$$$$$$$$$$$$$$$$$$$    5$F     ]     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$Q      \n" +
      '     $$$$$$$$&EE0&$$$$$$$$$                 $$$$$$$$$$E"\'     ""5$$$$$$$$$$     \n' +
      "    $$$$$F`         5$$$$$$$                $$$$$$$$@              5$$$$$$$$    \n" +
      "   $$$$F              ]$$$$$$               $$$$$$$$                 $$$$$$$$   \n" +
      '  $$$$F                ]$$$$$E                   \'""                 ]$$$$$$$$  \n' +
      ' ($$$$                  ]E"                                          ]$$$$$$$$Q \n' +
      " $$$$[                                                              ,$$$$$$$$$$ \n" +
      "]$$$$@                                                           ,g$$$$$$$$$$$$F\n" +
      "[$$$$$k                                                           ]$$$$$$$$$$$$$\n" +
      "$$$$$$$$W,                                                         ]$$$$$$$$$$$$\n" +
      "$$$$$$$$$$$$$$$$                                                    $$$$$$$$$$$$\n" +
      "$$$$$$$$$$$$$$$$                                                    ]$$$$$$$$$$$\n" +
      "]$$$$$$$$$$$$$$F                                                     $$$$$$$$$$[\n" +
      " $$$$$$$$$$$$$$                                                     ]$$$$$$$$$$ \n" +
      " ]$$$$$$$$$$$$$                                                     $$$$$$$$$$$ \n" +
      "  $$$$$$$$$$$$$Q                          ,g$$$$$$Q                /$$$$$$$$$$  \n" +
      "  ]$$$$$$$$$$$$$                          %$$$$$@F`               /$$$$$$$$$$F  \n" +
      "   ]$$$$$$$$$$$$$,                                               g$$$$$$$$$$F   \n" +
      "    ]$$$$$$$$$$$$$Q                                            ,$$$$$$$$$$$F    \n" +
      "      $$$$$$$$$$$$$$Q,                                       =$$$$$$$$$$$$`     \n" +
      "       ]$$$$$$$$$$$$$$$Q,,                                ,g$$$$$$$$$$$$@       \n" +
      "         $$$$$$$$$$$$$$$$$$Qg,,                       ,g$$$$$$$$$$$$$$$`        \n" +
      "          '$$$$$$$$$$$$$$$$$$$$$$$$Qgg=,,,,,,,,==gQ$$$$$$$$$$$$$$$$$$\"          \n" +
      "             9$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$@`            \n" +
      '               "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$F               \n' +
      '                  "9$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$@"                  \n' +
      '                      "5$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$E"                      \n' +
      '                           "*5&$$$$$$$$$$$$$$$$$$@E*"                           \n' +
      "\n"
  );
  console.log("                       -----> facebook.com/tachuso <-----");
}
//#endregion

//#region Home
function buildWelcomeSection() {
  $("#welcome > header > h1 > .typedHeader").typed({
    strings: [
      "Mantenimiento",
      "Reparación",
      "Servicios Industriales",
      "Servicios Mecánicos Industriales"
    ],
    startDelay: 0,
    //backDelay: 500,
    showCursor: true,
    cursorChar: "|",
    contentType: "html",
    typeSpeed: 30,
    onStringTyped: function(e) {
      //console.log("onstringtyped: ", e);
    }
  });

  /*
    $("#continueNavBtn").unbind("click").click(function () {
        
        $("#mainContent").animate({ scrollTop: $("#mainContent").height() }, '500', 'swing', function () {
            
        });
    });
    */
}
//#endregion

function buildBeforeAfterPump() {
  $("#beforeAfterPump1").twentytwenty({
    default_offset_pct: 0.5, // How much of the before image is visible when the page loads
    orientation: "horizontal", // Orientation of the before and after images ('horizontal' or 'vertical')
    before_label: "ANTES", // Set a custom before label
    after_label: "DESPUES", // Set a custom after label
    no_overlay: true, //Do not show the overlay with before and after
    move_slider_on_hover: false, // Move slider on mouse hover?
    move_with_handle_only: false, // Allow a user to swipe anywhere on the image to control slider movement.
    click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
  });
}

function buildEquipmentSwiper() {
  var equipmentSwiper = new Swiper("#equipmentSwiper", {
    paginationClickable: true,
    preventClicksPropagation: false,
    slidesPerView: "auto",
    loopedSlides: 7, //$("#equipmentSwiper").find(".swiper-slide").length,
    initialSlide: 3,
    //spaceBetween: 30,
    runCallbacksOnInit: true,
    //freeModeFluid: true,
    loop: true,
    freeMode: true,
    grabCursor: true,
    navigation: {
      nextEl: "#equipmentSwiper .swiper-button-next",
      prevEl: "#equipmentSwiper .swiper-button-prev"
    }
  });
}

function buildLocationMap() {
  map = new GMaps({
    div: "#locationMap",
    zoom: 15,
    lat: -33.667174,
    lng: -65.4758,
    disableDefaultUI: true,
    gestureHandling: "greedy"
  });
  map.addMarker({
    lat: -33.667174,
    lng: -65.4758,
    title: "Estamos acá",
    infoWindow: {
      content:
        '<a href="https://goo.gl/maps/S5SzJFTKxu42" target="_blank" >Ver en Google Maps</a>'
    }
  });
  var styles = [
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#dd2c00"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels",
      stylers: [
        {
          visibility: "on",
          color: "#dd2c00"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "simplified"
        },
        {
          hue: "#ff0000"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#ff6434"
        },
        {
          saturation: "0"
        },
        {
          lightness: "82"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi.business",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100
        },
        {
          lightness: 45
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#dd2c00"
        },
        {
          visibility: "on"
        }
      ]
    }
  ];

  map.addStyle({
    styledMapName: "Red",
    styles: styles,
    mapTypeId: "map_style"
  });
  map.setStyle("map_style");
}

function loadVideoBg() {
  var video = $("#backgroundVideo");

  if (!/Mobi/.test(navigator.userAgent)) {
    $("source", video).each(function() {
      var el = $(this);
      el.attr("src", el.data("src"));
    });

    video[0].load();
  }
}

function resizeApp() {}

function startApp() {
  loadVideoBg();
  buildWelcomeSection();
  buildBeforeAfterPump();
  buildLocationMap();
  buildEquipmentSwiper();
  window.sr = ScrollReveal();
  sr.reveal(".sr");
}

//#region Document Ready
$(document).ready(function() {
  startApp();
  $(window).resize(resizeApp);

  $(window).scroll(function() {
    $("#gear1").css({
      transform: "rotate(" + window.pageYOffset / 2 + "deg)"
    });
    $("#gear2").css({
      transform: "rotate(-" + window.pageYOffset / 2 + "deg)"
    });
    $("#gear3").css({
      transform: "rotate(-" + window.pageYOffset / 2 + "deg)"
    });
    $("#gear4").css({
      transform: "rotate(" + window.pageYOffset / 2 / 6 + "deg)"
    });
  });
  //tachusoTatoo();
});
//#endregion
