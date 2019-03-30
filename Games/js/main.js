$(document).ready(function () {

    $(this).scrollTop(0);

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




    function settingCss(e) {
        sideBarWidth();
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

    settingCss();

    const gamePosArr = [];
    const sideBarGames = [];

    const games = document.getElementsByClassName("game");
    GetGamesDivPos(games);

    function GetGamesDivPos(gamesDiv) {
        for (let i = 0; i < gamesDiv.length; i++) {
            let gamePos = gamesDiv[i].getBoundingClientRect();
            gamePosArr.push(gamePos.top);
        }
    }

    const sidebarGames = document.getElementsByClassName("sidebarGame")
    GetSidebarGames(sidebarGames);
    function GetSidebarGames(sidGames) {
        for (let i = 0; i < sidGames.length; i++) {
            sideBarGames.push(sidGames[i]);
        }
    }

    window.onscroll = function () {
        SetSideBarGame(GetSidebarIndex);
    }

    function SetSideBarGame(CheckScrollPos) {
        const gameIndex = GetSidebarIndex(window.pageYOffset );
        if (window.pageYOffset < gamePosArr[0]){
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

});


