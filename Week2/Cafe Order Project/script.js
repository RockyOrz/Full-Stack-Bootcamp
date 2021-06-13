$(document).ready(() => {
    $('#orderBtn').click(() => {

        // select input element by its name attribute

        // return the value of input that the name is 'name'
        let name = $('input[name=name]').val();
        // return the value of input that the name is coffeeType and checked
        let coffeeType = $('input[name=coffeeType]:checked').val();

        let extras = [];
        $('input[name=extras]:checked').each(function(){
            extras.push($(this).val());
        });

        let total = 0;
        if (coffeeType == 'turkish') {
            total += 3;
        }else if(coffeeType == 'american') {
            total += 5;
        }else if(coffeeType == 'iced_latte') {
            total += 7;
        }

        for (let i = 0; i < extras.length; i++) 
        {
            let extra = extras[i];

            if (extra == 'extra_coffee') {
                total += 1.5;
            }else if (extra == 'whipped_cream') {
                total += 2;
            }else if (extra == 'extra_caramel') {
                total += 3;
            }
        }

        let output = `Name: ${name} <br>`;
        output += `Total: $${total}`;

        $('#result').html(output);
    });
});