$(document).ready(function() {
    let content = $('#content').html();
    console.log(content);

    // Manipulate CSS
    $('#content').css('background-color', 'lightblue').css('color', 'red');

    // Same as above
    $('#content').css({
        'background-color': 'lightblue',
        'color' : 'red'
    })

    $('.item').css({
        'background-color' : 'lightgreen'
    })

});