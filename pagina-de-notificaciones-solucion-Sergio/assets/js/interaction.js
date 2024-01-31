var _notifs_notRead = $('.notifications .notification');

initElements();
loadEventListeners();

//Functions
function initElements() {
    $(_notifs_notRead).addClass('not-read');
    $('.notification.not-read').find('.content-post .point-not-read').show();

    //Descomentar si se quiere solo iniciar con las 3 primeras notificaciones no leídas
   /*  $('.point-not-read').hide();
    $('#count-notif').text(_notifs_notRead.length);
    //Select only the first three
    for (let index = 0; index < 3; index++) {
        $(`.notification:nth(${index})`).addClass('not-read'); 
    }
    $('.notification.not-read').find('.content-post .point-not-read').show(); */
    updateCount();
}

function loadEventListeners(){

    //Mark all as read
    $('#mark_all').click(function() {
        $('#count-notif').text('0');
        $('.notification.not-read .content-post .point-not-read').hide();
        $(_notifs_notRead).removeClass('not-read');
    });

    //View a notification
    $('.notification').click(function(){
        if ($(this).hasClass('not-read')) {
            var element = $(this);
            $(element).removeClass('not-read');
            $(element).find('.content-post .point-not-read').hide();
            updateCount();
        }
    })
}

function updateCount() {
    var count = $('.notification.not-read').length;
    $('#count-notif').text(count);
}

//End functions