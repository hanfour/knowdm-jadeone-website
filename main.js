// ========== Navbar Sticky on Scroll (Desktop only) ==========
$(function() {
    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();
        if (scrollVal <= 60) {
            $(".navbar").removeClass("Sticky");
        } else {
            $(".navbar").addClass("Sticky");
        }
    });
});

// ========== AOS Attributes ==========
$(".bannerArea .txt").attr("data-aos", "zoom-out-up").attr("data-aos-delay", "100");
$(".page01 .txt b").attr("data-aos", "zoom-out-up").attr("data-aos-delay", "100");
$(".page01 .txt p").attr("data-aos", "zoom-out-up").attr("data-aos-delay", "200");
$(".page01 .txt h4").attr("data-aos", "zoom-out-up").attr("data-aos-delay", "300");
$(".page02 .txt-box").attr("data-aos", "zoom-out-down").attr("data-aos-delay", "100");
$(".page02 .img-box").attr("data-aos", "fade-down").attr("data-aos-delay", "100");
$(".page03 .txt-box").attr("data-aos", "zoom-out-down").attr("data-aos-delay", "100");
$(".page03 .img-box").attr("data-aos", "fade-down").attr("data-aos-delay", "100");
$(".page04 .txt").attr("data-aos", "zoom-out-up").attr("data-aos-delay", "100");
$(".page05 .txt-box").attr("data-aos", "zoom-out-down").attr("data-aos-delay", "100");
$(".page05 .img-box").attr("data-aos", "fade-down").attr("data-aos-delay", "100");
$(".page06 .txt-box").attr("data-aos", "zoom-out-down").attr("data-aos-delay", "100");
$(".page06 .img-box").attr("data-aos", "fade-down").attr("data-aos-delay", "100");
$(".page07 .title").attr("data-aos", "fade-right").attr("data-aos-delay", "200");
$(".page07 h2").attr("data-aos", "fade-down").attr("data-aos-delay", "100");
$(".page07 h5").attr("data-aos", "fade-down").attr("data-aos-delay", "100");
$(".page07 p").attr("data-aos", "fade-up").attr("data-aos-delay", "100");
$(".page09 .txt__deco").attr("data-aos", "fade-down").attr("data-aos-delay", "100");
$(".page09 .img-box").attr("data-aos", "fade-down").attr("data-aos-delay", "100");
$(".page09 .txt-box").attr("data-aos", "zoom-out-down").attr("data-aos-delay", "100");
$(".page10 .img-box").attr("data-aos", "fade-down").attr("data-aos-delay", "100");
$(".page10 .txt-box").attr("data-aos", "zoom-out-down").attr("data-aos-delay", "100");
$(".page10 .col-lg-7").attr("data-aos", "fade-down").attr("data-aos-delay", "100");
$(".page11 .title").attr("data-aos", "fade-right").attr("data-aos-delay", "100");
$(".page11 .txt > h2:not(.title h2)").attr("data-aos", "fade-down").attr("data-aos-delay", "100");
$(".page11 p").attr("data-aos", "fade-up").attr("data-aos-offset", "-100");

// ========== AOS Init ==========
AOS.init({
    duration: 1200,
    offset: 0,
    anchorPlacement: 'top-center',
    easing: 'ease-out-cubic',
    once: true,
    startEvent: 'DOMContentLoaded'
});

// ========== Slick Carousel ==========
document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll('.img-slick');
    sliders.forEach(function (slider) {
        $(slider).slick({
            infinite: true,
            speed: 600,
            easing: 'ease-in-out',
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            pauseOnFocus: false,
            fade: true
        });
        $(slider).slick('slickPause');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const $target = $(entry.target);
            if (entry.isIntersecting) {
                $target.slick('slickPlay');
            } else {
                $target.slick('slickPause');
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.img-slick').forEach(slider => {
        observer.observe(slider);
    });
});

// ========== Page 10 Tab Switching ==========
$(function() {
    var $buttons = $('.btn-box .btn'),
        currentIndex = 0,
        intervalTime = 3000,
        interval,
        hasStarted = false;

    function switchTo(index) {
        $buttons.removeClass('active');
        var $currentBtn = $buttons.eq(index).addClass('active');
        var btnId = $currentBtn.attr('id');
        var imgId = btnId.replace('item', 'img');
        $('.img-item').hide();
        $('#' + imgId).fadeIn(600);
        currentIndex = index;
    }

    function startAutoSwitch() {
        if (hasStarted) return;
        hasStarted = true;
        interval = setInterval(function() {
            var nextIndex = (currentIndex + 1) % $buttons.length;
            switchTo(nextIndex);
        }, intervalTime);
    }

    function stopAutoSwitch() {
        clearInterval(interval);
    }

    $buttons.on('click', function(e) {
        e.preventDefault();
        stopAutoSwitch();
        hasStarted = false;
        var index = $buttons.index(this);
        switchTo(index);
        startAutoSwitch();
    });

    switchTo(0);

    var target = document.querySelector('.btn-box');
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                startAutoSwitch();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    if (target) {
        observer.observe(target);
    }
});

// ========== Text Animation ==========
document.addEventListener("DOMContentLoaded", function () {
    function animateText(targetId, delayOffset) {
        const el = document.getElementById(targetId);
        if (!el) return;

        const text = el.textContent.trim();
        el.textContent = "";

        for (let i = 0; i < text.length; i++) {
            const span = document.createElement("span");
            span.textContent = text[i];
            span.classList.add("char");
            span.style.animationDelay = `${i * 0.05}s`;

            if (targetId === "target-txt" && i < 14) {
                span.style.fontFamily = `"Cormorant Garamond", serif`;
                span.style.fontSize = window.innerWidth < 1500 ? "2rem" : "2.5rem";
                if (i === 1 || i === 13 || i === 8) {
                    span.style.letterSpacing = "1px";
                } else {
                    span.style.letterSpacing = "1px";
                }
            }

            if (targetId === "target-txt" && i === 16) {
                span.style.letterSpacing = "18px";
            }

            if (targetId === "target-txt02") {
                span.style.fontFamily = `"Cormorant Garamond", serif`;
                span.style.letterSpacing = "2px";
                if (i === 1 || i === 13 || i === 8) {
                    span.style.letterSpacing = "6px";
                } else {
                    span.style.letterSpacing = "1px";
                }
            }

            if (targetId === "target-txt03") {
                if (i === 1) {
                    span.style.letterSpacing = "14px";
                } else {
                    span.style.letterSpacing = "3px";
                }
            }

            el.appendChild(span);
        }

        let lastScrollY = window.scrollY,
            scrollDirection = "down";

        window.addEventListener("scroll", () => {
            const currentY = window.scrollY;
            scrollDirection = currentY > lastScrollY ? "down" : "up";
            lastScrollY = currentY;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && scrollDirection === "down") {
                    el.querySelectorAll('.char').forEach((char) => {
                        char.classList.remove("animate");
                    });
                    void el.offsetWidth;
                    setTimeout(() => {
                        el.querySelectorAll('.char').forEach((char, i) => {
                            setTimeout(() => {
                                char.classList.add("animate");
                            }, i * 20);
                        });
                    }, delayOffset);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(el);
    }

    animateText("target-txt", 1200);
    animateText("target-txt02", 1200);
    animateText("target-txt03", 2400);
});

// ========== Current URL for Form ==========
window.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('current_url');
    if (input) {
        input.value = window.location.href;
    }
});
