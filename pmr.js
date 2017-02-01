var boton = $( '.js-moments-tab' );
boton.hide();
setTimeout(function() { 
    $( '.dm-nav' ).after( "<li><a role='button' href='/i/moments' class='js-nav js-tooltip js-dynamic-tooltip' data-component-context='moments_nav' data-nav='moments' data-placement='bottom'> <span class='Icon Icon--lightning Icon--large'></span><span class='text'>Momentos</span></a></li>" );
    //Intenté que esto fuese un boton.wrap( "<li></li>" ); pero no terminaba de dar el resultado deseado
}, 1);