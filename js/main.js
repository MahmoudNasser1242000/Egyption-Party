$(function () {
    // ===========loading===========
    $(".sk-folding-cube").fadeOut(1000);
    $(".loading").slideUp(1500);
    // ===========loading===========

    // ===========navbar===========
    $(".menu").on("click", ()=> {
        if ($("nav").css("width") === "0px") {
            // $("nav").animate({width: 250}, 500);
            $("nav").css("cssText", "width: 250px");
        }
    })
    
    $(".close-sidebar").on("click", ()=> {
        if ($("nav").css("width") !== "0px") {
            // $("nav").animate({width: 0}, 500);
            $("nav").css("cssText", "width: 0 !important");
        }
    })

    $(window).on("scroll", ()=> {
        const {top: navbarTop} = $("header").offset();
        const scrollTop = $(window).scrollTop();

        if (scrollTop > (navbarTop + $("header").innerHeight()/2)-$(".menu").innerHeight()) {
            $(".menu").fadeOut(500);
        } else {
            $(".menu").fadeIn(500);
        }
    })

    $(".links li a").on("click", (e)=> {
        let elmAttr = $(e.target).attr("href");
        let {top: elmScroll} = $(elmAttr).offset();
        $("html, body").animate({scrollTop: elmScroll}, 500);

        $(e.target).addClass("active-link").parent().siblings("li").find("a").removeClass("active-link");
    })
    // ===========navbar===========
    
    // ===========duration===========
    $(".duration").on("click", (e)=> {
        if ($(e.target).hasClass("head")) {
            $(e.target).parent(".duration").siblings(".duration").find("p").removeClass("active-duration");
            $(e.target).next("p").toggleClass("active-duration");
        }
    });
    // ===========duration===========

    // ===========details===========
    const invitationCounter = ()=> {
        const dateNext = new Date("oct 5, 2024 18:30:25").getTime();

        const getTimeCounter = setInterval(() => {
            const dateNow = new Date().getTime();
            const timeCounter = dateNext - dateNow;

            const days = Math.floor(timeCounter / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeCounter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeCounter % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeCounter % (1000 * 60)) / 1000);

            $(".counter").html(`<div class="col-lg-3 col-md-4 col-sm-6 mb-3 mb-lg-0">
                                    <main>
                                        <span>${timeCounter === 0? "00" : days}</span>
                                        <p>${days <= 1? "Day" : "Days" }</p>
                                    </main>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6 mb-3 mb-lg-0">
                                    <main>
                                        <span>${timeCounter === 0? "00" : hours}</span>
                                        <p>${hours <= 1? "Hour" : "Hours" }</p>
                                    </main>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6 mb-3 mb-lg-0">
                                    <main>
                                        <span>${timeCounter === 0? "00" : minutes}</span>
                                        <p>${minutes <= 1? "Minute" : "Minutes" }</p>
                                    </main>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6 mb-3 mb-lg-0">
                                    <main>
                                        <span>${timeCounter === 0? "00" : seconds}</span>
                                        <p>${seconds <= 1? "Second" : "Seconds" }</p>
                                    </main>
                                </div>`);

            if (timeCounter === 0) {
                clearInterval(getTimeCounter);
            }
        }, 1000);
    } 
    invitationCounter();
    // ===========details===========

    // ===========contact===========
    const regex = /^\w{0,100}$/im;

    const messageValidation = ()=> {
        const message = $("textarea").val();
        return regex.test(message);
    }

    const testValidation = ()=> {
        if (messageValidation()) {
            $(".char-num").text(`${100 - Number($("textarea").val().length)}`);
        } else {
            $(".char-num").text(`your available character finished`);
        }

        $(".progress-bar").css("width", `${100 - $("textarea").val().length}%`);
        $(".progress-bar").text(`${100 - $("textarea").val().length}%`)
    }

    $("textarea").on("keyup", ()=> {
        testValidation();
    })
    // ===========contact===========
})