import {colorChange} from './button-color';


export function welcome(){
    $(function hideInfo() {
        $('.button').click(function () {
            setTimeout(function size() {
                var c = document.getElementById("matrix");
                var ctx = c.getContext("2d");
                c.height = document.documentElement.scrollHeight;
                c.width = document.documentElement.scrollWidth;
                var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑モク";
                chinese = chinese.split("");
                var font_size = 5;
                var columns = 300;
                var drops = [];
                for(var x = 0; x < columns; x++)
                    drops[x] = Math.random()*10000000;
                function draw()
                {
                    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
                    ctx.fillRect(0, 0, c.width, c.height);
                    ctx.fillStyle = "#0F0";
                    ctx.font = font_size + "px arial";
                    for(var i = 0; i < drops.length; i++) {
                        var text = chinese[Math.floor(Math.random() * chinese.length)];
                        ctx.fillText(text, i * font_size, drops[i] * font_size);
                        if (drops[i] * font_size > c.height && Math.random() > 0.975)
                            drops[i] = 0;
                        drops[i]++;
                    }
                }
                setInterval(draw, 50);
            }, 3000);


            function someone(){
                $('.button, .name, .text, .form__message').css('display','none');
            }
            someone();

            setTimeout(function () {
                $('#example').animate({opacity: '0'}, 500);
            },3000);

            function name() {
                var YouName = $('.name').val();
                $('#example').css('display','flex').children('p').text('Wake up, '+YouName+'...');
                TweenLite.fromTo("#example", 1.5, {left:-100},{left:'20px'});

            }
            name();

            setTimeout(function () {
                function gsap() {
                    TweenLite.to(".container", 0.1, {css:{height:"100%", display:'flex'}, ease:Power2.easeOut});
                    TweenLite.to(".myPage", 0.1, {css:{width:"100%", height:"100%"}, ease:Power2.easeOut});
                    TweenLite.to(".sectionOne", 2, {css:{ width:"100%", display:'flex'}, ease:Power2.easeOut});
                    $('.colorClickRed,.colorClickBlue,.colorClickGreen, .color-hide').css('display','grid');
                    setTimeout(function () {
                        $('.sectionTwo,.sectionThree,.sectionFour').css({'display':'flex','width':'100%','height':'100%'});
                        $('.section__main p').animate({'opacity':'1'},1000);
                        $('.section__main__wrap').animate({'opacity':'1'},1000);
                        setTimeout(function () {
                            $('.color-hide').trigger('click');
                            $('.sectionOne__button').addClass('clicked');
                        },1000);
                    },2000);
                    setTimeout(function () {
                        $('.sectionOne__button').animate({'opacity':'1'},1000);
                        $('.button-color').animate({'opacity':'1'},1000);
                        TweenLite.fromTo('.section__main', 3,
                            {background:'linear-gradient(to right, rgba(10, 255, 19, 0) 0%, rgba(10, 255, 19, 0.6) 30%, rgba(10, 255, 19, 0.6) 30%, rgba(10, 255, 19, 0.6) 70%, rgba(10, 255, 19,0.6) 70%, rgba(10, 255, 19,0) 100%)'},
                            {background:'linear-gradient(to right, rgba(10, 255, 19, 0) 0%, rgba(10, 255, 19, 0) 30%, rgba(10, 255, 19, 0) 30%, rgba(10, 255, 19, 0) 70%, rgba(10, 255, 19,0) 70%, rgba(10, 255, 19,0) 100%)'}
                            );
                    },4000)
                }
                gsap();
            },3000);
        });


        colorChange();


        $('.show-prompt').mouseover(function () {
            $('.prompt').animate({'opacity': '1'},100);
        });

        $('.show-prompt').mouseout(function () {
            $('.prompt').animate({'opacity': '0'},100);
        });



        // !!!!!!!!!!!!!!!!!!!1 робоче. доробить вних вверх а не кольори
        document.onwheel = function(event) {
            if (event.deltaY > 0 && event.deltaY < 150) {
                if ($('.sectionOne__button').hasClass('clicked')) {
                    $('.sectionOne__button').trigger('click');
                    $('.sectionOne__button').addClass('no-clicked').removeClass('clicked');
                    setTimeout(function () {
                        $('.sectionTwo_button_down, .sectionTwo_button_app').addClass('clicked').removeClass('no-clicked');
                    },1000);
                }
                else if ($('.sectionTwo_button_down').hasClass('clicked')) {
                    $('.sectionTwo_button_down').trigger('click');
                    $('.sectionTwo_button_down,.sectionTwo_button_app').addClass('no-clicked').removeClass('clicked');
                    setTimeout(function () {
                        $('.sectionThree_button_down,.sectionThree_button_app').addClass('clicked').removeClass('no-clicked');
                    },1000);
                }
                else if ($('.sectionThree_button_down').hasClass('clicked')) {
                    $('.sectionThree_button_down').trigger('click');
                    $('.sectionThree_button_down,.sectionThree_button_app').addClass('no-clicked').removeClass('clicked');
                    setTimeout(function () {
                        $('.sectionFour_button').addClass('clicked').removeClass('no-clicked');
                    },1000);
                }
            }

            if (event.deltaY < 0 && event.deltaY > -150) {
                if ($('.sectionFour_button').hasClass('clicked')) {
                    $('.sectionFour_button').trigger('click');
                    $('.sectionFour_button').addClass('no-clicked').removeClass('clicked');
                    setTimeout(function () {
                        $('.sectionThree_button_app,.sectionThree_button_down').addClass('clicked').removeClass('no-clicked');
                        },1000);
                    }
                else if ($('.sectionThree_button_app').hasClass('clicked')) {
                    $('.sectionThree_button_app').trigger('click');
                    $('.sectionThree_button_app,.sectionThree_button_down').addClass('no-clicked').removeClass('clicked');
                    setTimeout(function () {
                        $('.sectionTwo_button_app,.sectionTwo_button_down').addClass('clicked').removeClass('no-clicked');
                    },1000);
                }
                else if ($('.sectionTwo_button_app').hasClass('clicked')) {
                    $('.sectionTwo_button_app').trigger('click');
                    $('.sectionTwo_button_app,.sectionTwo_button_down').addClass('no-clicked').removeClass('clicked');
                    setTimeout(function () {
                        $('.sectionOne__button').addClass('clicked').removeClass('no-clicked');
                    },1000);
                }
            }
        }


    });
}