$(function(){
    $('.box1').click(function(){
        $('.popup').fadeIn();//show()
    });
    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide()
    });
});