$(function () {
    // ハンバーガ―メニュー
    //     ===================================================*/
    // ハンバーガーメニューをクリックした時
    $(".hamburger").on("click", function () {
        $("header").toggleClass("open");
    });
    // メニューのリンクをクリックした時
    $(".nav-menu-box a").on("click", function () {
        $("header").toggleClass("open");
    });

    $(".slide-items").slick({
        // autoplay: true, // 自動再生
        // autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
        // infinite: true, // 無限スライド
        centerMode: false,
        slidesToShow: 3,
        centerPadding: "100px",
        // arrows: true,
        prevArrow: '<img src="img/arrow left.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="img/arrow right.png" class="slide-arrow next-arrow">',
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            }
        }]

    });

    $(window).scroll(function () {
        // 画面がスクロールされた時に実行する

        $(".concept").each(function () {
            // fadeinクラスに対して順に処理を行う
            // .each()：個別に処理を行うためのメソッド。繰り返し処理を行いながら各要素に対して操作を実行することができる。

            // スクロールした距離
            let scroll = $(window).scrollTop();
            // 現在のスクロール位置を取得する。
            // scrollTop()：要素のスクロール位置を取得

            // fadeinクラスの要素までの距離
            let target = $(this).offset().top;

            // 画面の高さ
            let windowHeight = $(window).height();

            // fadeinクラスの要素が画面内にきたタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {

                // 条件が満たされた場合、要素の不透明度（opacity）を1に設定し、Y軸方向に移動（translateY）させます。
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });

        $(".menu").each(function () {
            let scroll = $(window).scrollTop();

            let target = $(this).offset().top;

            let windowHeight = $(window).height();

            if (scroll > target - windowHeight + 200) {

                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });

        $(".hairstyle").each(function () {
            let scroll = $(window).scrollTop();

            let target = $(this).offset().top;

            let windowHeight = $(window).height();

            if (scroll > target - windowHeight + 200) {

                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });

        $(".blog-news").each(function () {
            let scroll = $(window).scrollTop();

            let target = $(this).offset().top;

            let windowHeight = $(window).height();

            if (scroll > target - windowHeight + 200) {

                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });

        $(".access").each(function () {
            let scroll = $(window).scrollTop();

            let target = $(this).offset().top;

            let windowHeight = $(window).height();

            if (scroll > target - windowHeight + 200) {

                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });

        $(".reserve").each(function () {
            let scroll = $(window).scrollTop();

            let target = $(this).offset().top;

            let windowHeight = $(window).height();

            if (scroll > target - windowHeight + 200) {

                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });

    });


});
