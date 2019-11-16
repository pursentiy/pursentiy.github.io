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

    let clickedLink = false;
    $(".sidebar").on("click", "div", function (event) {
        if (clickedLink) return;
        GetGamesDivPos(games);
        event.preventDefault();
        const ids = $(this).attr('class');
        ScrollDisplayToGame(ids)
    });

    function ScrollDisplayToGame(ids){
        if (ids.length >= 25) {
            const id = ids.split(" ");
            var gameBlock = document.getElementById(id[0].slice(1)).getBoundingClientRect();
            clickedLink = true;
            $('body,html').animate({ scrollTop: GetScroll(gameBlock.top), }, 1000);
            setTimeout(function () {
                clickedLink = false;
                SetSideBarGame(document.documentElement.scrollTop) 
            }, 1000);
            
        }
    }


    function GetScroll(amount) {
        let displayScroll = document.documentElement.scrollTop;
        displayScroll += amount;
        if (displayScroll < 0) displayScroll = 0;
        return displayScroll;
    }

    $(window).resize(function () {
        setTimeout(function () { settingCss() }, 1000);
    });

    const gamePosArr = [];
    const sideBarGames = [];

    const games = document.getElementsByClassName("game");


    function GetGamesDivPos(gamesDiv) {
        gamePosArr.length = 0;
        for (let i = 0; i < gamesDiv.length; i++) {
            let gamePos = $(gamesDiv[i]).position();
            gamePosArr.push(gamePos.top);
        }
    }

    function GetSidebarGames(sidGames) {
        for (let i = 0; i < sidGames.length; i++) {
            sideBarGames.push(sidGames[i]);
        }
    }

    const sidebarGames = document.getElementsByClassName("sidebarGame")

    function SetSideBarGame(offset) {
        let gameIndex = GetSidebarIndex(offset);

        if (offset + 1 < gamePosArr[0]) {
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
            if (pageYOffset + 1 >= gamePosArr[i]) {
                return i;
            }
        }
    }

    function removeActiveClassSidebarGames() {
        for (let i = 0; i < sideBarGames.length; i++) {
            sideBarGames[i].classList.remove("activeSidebar");
        }
    }

    GetSidebarGames(sidebarGames);
    GetGamesDivPos(games);
    SetSideBarGame(window.pageYOffset);

    window.onscroll = function () {
        SetSideBarGame(document.documentElement.scrollTop);
    }

    $(window).resize(function () {
        gamePosArr.length = 0;
        GetGamesDivPos(games);
        SetSideBarGame($(document).scrollTop());
    });

    $(window).load(function () {
        settingCss();
    });

    $(window).on('beforeunload', function () {
        $('body').hide();
        $(window).scrollTop(0);
    });

});


