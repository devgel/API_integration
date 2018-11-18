//preloader
var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
});


//random pictures of dogs
$(document).ready(function(){
    $(".dog-btn").click(function(){
        $.getJSON("https://dog.ceo/api/breeds/image/random", function(dogs){
            var icon = dogs.message;           
                $('.image').attr('src',icon);
            ;
        });
    });
});


//random pictures of cats
$(document).ready(function(){
    $(".cat-btn").click(function(){
        $.getJSON("https://aws.random.cat/meow", function(cats){
            var icon = cats.file;           
                $('.image').attr('src',icon);
            ;
        });
    });
});



//random advice
$(document).ready(function(){
    $(".dog-btn").click(function(){
        $.getJSON("https://api.adviceslip.com/advice", function(data){
            var advices = data.slip.advice;  
            var str = $('.text').text().slice(-1);         
            $('.text').text(str + advices +' ');
            ;
        });
    });
});



//random jokes
$(document).ready(function(){
    $(".cat-btn").click(function(){
        $.getJSON("https://icanhazdadjoke.com/", function(data){
            var advices = data.joke;  
            var str = $('.text').text().slice(-1);         
            $('.text').text(str + advices + ' ');
            ;
        });
    });
});

