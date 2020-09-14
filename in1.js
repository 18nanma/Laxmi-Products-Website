
var height = $(document).height();
var width = $(document).width();

$(document).ready(function () {
    var imageFile = ["house1.jpg", "house.jpg", "bg1.jpg", "bg5.jpeg"];
    var currentIndex = 0;
    setInterval(function () {
        if (currentIndex == imageFile.length) {
            currentIndex = 0;
        }
        $("body").css({
            'background-image': 'url("' + imageFile[currentIndex++] + '") ',
            

    });
    }, 3000);
});
    /*
    3rd try
    
    var imgbackgrounds = [];
    imgbackgrounds[0] = 'house.jpg';
    imgbackgrounds[1] = 'house1.jpg';
    


    function changeimage() {
        imagebackground++;
        if(imagebackground > 1) imagebackground = 0;

        $('body').fadeToggle("slow",function() {
            $('body').css({
                'background-image' : "url('" + imgbackgrounds[imagebackground] + "')"
            });
            $('body').fadeToggle("slow");
        });  


        setTimeout(changeimage, 3000);
    }  

    $(document).ready(function() {
        setTimeout(changeimage, 1000);        
    }); 
    */



/*
2nd try
$('body').delay(5000).css({
    'background': 'url("house1.jpg") no-repeat center center fixed',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
    'background-position-x': '8rem',
    'overflow-x': 'hidden'
}).delay(3000).css({
    'background': 'url("house.jpg") no-repeat center center fixed',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
    'background-position-x': '8rem',
    'overflow-x': 'hidden'
}).delay(3000).css({
    'background': 'url("house1.jpg") no-repeat center center fixed',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
    'background-position-x': '8rem',
    'overflow-x': 'hidden'
}).delay(3000).css({
    'background': 'url("house.jpg") no-repeat center center fixed',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
    'background-position-x': '8rem',
    'overflow-x': 'hidden'
})
*/



/*1st and 4th try

$('body').css({
    'background': 'url("house1.jpg") no-repeat center center fixed',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
    'background-position-x': '8rem',
    'overflow-x': 'hidden'
}).hide('slide', {direction: 'left'}, 6000);
$('body').css({
    'background': 'url("house.jpg") no-repeat center center fixed',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
    'background-position-x': '8rem',
    'overflow-x': 'hidden'
});
*/

