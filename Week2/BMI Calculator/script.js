$(document).ready(function(){
    $('.calculate').click(() => {
        let weight = $('input[name=weight]').val();
        let height = $('input[name=height]').val();

        let result = weight / height ** 2;

        if (result < 30) {
            if (result > 18.5) {
                if (result > 24.9) { result = 'over weight'; }

                else { result = 'normal weight'; }
            }
            else { result = 'under weight'; }
        }
        else { result = 'obese'; }

        $('.result').append(`<p class="fs-3 text-center">${result}</p>`);

    });

    // $('.reset').click(() => {
    //     $('.result').html('');
    // });
});