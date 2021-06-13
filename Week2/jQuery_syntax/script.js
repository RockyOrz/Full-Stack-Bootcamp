$(document).ready(function() {

    // document.getElementsByClassName('.MyClass') // equal to $('.MyDiv')
    // document.getElementsById('#myId')           // equal to $('#myid')
    // document.getElementsByTag('h1')             // equal $('h1')



    // // jQuery style
    // $(document).ready(function() {
    //     $('.MyDiv').hide();
    // });

    // // JS style
    // let myDiv = document.getElementByclassName('MyDiv');
    // myDiv.style.display = 'none';

    function fact(n) {
        if (n == 1) {
            return 1;
        }else {
            return n * fact(n-1);
        }
    }

    $('#btn').click(function() {
        console.log(fact(3));
    });

})