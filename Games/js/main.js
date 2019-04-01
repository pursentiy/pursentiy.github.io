$(document).ready(function () {

    $('body').scrollTop(0);

    $('.button_toggle').on('click', function () {
        $('.sidebar').toggleClass('scroll');
        $('.wrapper').toggleClass('wrapper_small');
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        center: true,
        margin: 100,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            // breakpoint from 0 up
            1000: {
                items: 1
            }
        }
    });

    $(".sidebar").on("click", "div", function (event) {
        event.preventDefault();
        const ids = $(this).attr('class');
        if (ids.length >= 25) {
            const id = ids.split(" ");
            const top = $(id[0]).offset().top;
            $('body,html').animate({ scrollTop: top }, 1000);
        }
    });


    function scrollPage(event) {

    }



    function settingCss(e) {
        if (window.innerWidth > 1051) {
            sideBarWidth();
        }

        function sideBarWidth() {
            const bioBlock = $(".bio .mainContent .description .title");
            const bioBlockPosition = bioBlock[0].getBoundingClientRect();
            const sidebarWidth = bioBlockPosition.left - 30;
            $(".sidebar").css({
                width: sidebarWidth + "px"
            });
        }
    }

    $(window).resize(function () {
        setTimeout(function () { settingCss() }, 1000);
    });

    const gamePosArr = [];
    const sideBarGames = [];

    const games = document.getElementsByClassName("game");


    function GetGamesDivPos(gamesDiv) {
        for (let i = 0; i < gamesDiv.length; i++) {
            let gamePos = gamesDiv[i].getBoundingClientRect();
            gamePosArr.push(gamePos.top);
        }
    }

    const sidebarGames = document.getElementsByClassName("sidebarGame")
   
    GetSidebarGames(sidebarGames);
    GetGamesDivPos(games);
    SetSideBarGame(window.pageYOffset);

    function GetSidebarGames(sidGames) {
        for (let i = 0; i < sidGames.length; i++) {
            sideBarGames.push(sidGames[i]);
        }
    }

    window.onscroll = function () {
        SetSideBarGame(window.pageYOffset)
    }


    function SetSideBarGame(offset) {
        const gameIndex = GetSidebarIndex(offset);

        if (offset < gamePosArr[0]) {
            removeActiveClassSidebarGames();
            return;
        }
        if (gameIndex != null && !sideBarGames[gameIndex].classList.contains("activeSidebar")) {
            removeActiveClassSidebarGames();
            sideBarGames[gameIndex].classList.add("activeSidebar");
        }
    }

    function GetSidebarIndex(pageYOffset) {
        for (let i = gamePosArr.length; i >= 0; i--) {
            if (pageYOffset >= gamePosArr[i]) {
                return i;
            }
        }
    }

    function removeActiveClassSidebarGames() {
        for (let i = 0; i < sideBarGames.length; i++) {
            sideBarGames[i].classList.remove("activeSidebar");
        }
    }



    $(window).load(function () {
        settingCss();


    });

    $(window).on('beforeunload', function () {
        $('body').hide();
        $(window).scrollTop(0);
    });
});


