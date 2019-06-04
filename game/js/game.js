$(".rules").click(function () {
    /*$(".introduce").css("display" , "block");*/
    $(".introduce").stop().fadeIn(100);
});
$(".introduce>a").click(function () {
    /*$(".introduce").css("display" , "none");*/
    $(".introduce").stop().fadeOut(100);
});
$(".star").click(function () {
    /*$(".star").css("display" , "none");*/
    $(".star").stop().fadeOut(100);
    reduce();
    randoms();
});
$(".restar").click(function () {
   /* $(".gameover").css("display" , "none");*/
    $(".gameover").stop().fadeOut(100);
    $(".time").css("width" , "180px");
    $(".star").stop().fadeIn(100);
});
var timer2;

function reduce() {
    var timer = setInterval(function () {

        var width = $(".time").css("width");
        var newWidth = parseInt(width) - 1;
        $(".time").css("width" , newWidth);
        if(newWidth <= 0){
            clearInterval(timer);
            $(".gameover").stop().fadeIn(100);
            stopTimer2();

        }
    } , 100);
}

function randoms() {
    //设置img数组
    var wolf_1 =['./img/h0.png','./img/h1.png','./img/h2.png','./img/h3.png',
        './img/h4.png','./img/h5.png','./img/h6.png','./img/h7.png','./img/h8.png',
        './img/h9.png'];
    var wolf_2 =['./img/x0.png','./img/x1.png','./img/x2.png','./img/x3.png',
        './img/x4.png','./img/x5.png','./img/x6.png','./img/x7.png','./img/x8.png',
        './img/x9.png'];
    //设置位置数组
    var arrPos = [
        {left:"100px",top:"115px"},
        {left:"20px",top:"160px"},
        {left:"190px",top:"142px"},
        {left:"105px",top:"193px"},
        {left:"19px",top:"221px"},
        {left:"202px",top:"212px"},
        {left:"120px",top:"275px"},
        {left:"30px",top:"295px"},
        {left:"209px",top:"297px"}
    ];

    var $img = $("<img src='' class='newImg'> ");
    var ab = Math.round(Math.random());
    var ac = Math.round(Math.random() * 8);
    $img.css({
        position:"absolute",
        left: arrPos[ac].left,
        top: arrPos[ac].top
    });
    var posIndex = ab == 0 ? wolf_1 : wolf_2;
    window.index = 0;
    window.indexend = 5;
    timer2 = setInterval(function () {
        if(window.index > window.indexend){
            $($img).remove();
            clearInterval(timer2);
            randoms()
        }
        $($img).attr("src" , posIndex[index])
        window.index++;
    } , 150);

    $(".container").append($img);

    gameRules($img);

    };
    function stopTimer2() {
        $(".newImg").remove();
        clearInterval(timer2);
    };
    function gameRules($img) {
        $($img).one("click", function () {

            window.index = 5;
            window.indexend = 9;

            var $src = $(this).attr("src");
            var res = $src.indexOf("h") >= 0;
            if(res){
                $(".score").text(parseInt($(".score").text()) + 10);
            }else{
                $(".score").text(parseInt($(".score").text()) - 10);
            }
        });


    };


