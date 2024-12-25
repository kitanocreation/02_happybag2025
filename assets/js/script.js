$(function() {

    // console.log('test');
    
    $('.fb-accordion_btn').on('click', function() {
        $(this).parent($('.fb-copy')).find($('.fb-accordion')).toggleClass('fb-accordion_open');
        if($(this).parent($('.fb-copy')).find($('.fb-accordion')).hasClass('fb-accordion_open')) {
            $(this).parent($('.fb-copy')).find($('.fb-accordion_btn p')).text('閉じる');
            $(this).parent($('.fb-copy')).find($('.fb-accordion_btn-border')).addClass('fb-accordion_btn-border_close');
        } else {
            $(this).parent($('.fb-copy')).find($('.fb-accordion_btn p')).text('商品内容を見る');
            $(this).parent($('.fb-copy')).find($('.fb-accordion_btn-border')).removeClass('fb-accordion_btn-border_close');
        }
    });
});
