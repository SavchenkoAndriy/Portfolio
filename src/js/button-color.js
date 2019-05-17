import {forFan} from "./forFan";

export function colorChange(){
    $('.colorClickGreen').click(function () {
        $('.button-color button').removeClass('clicked').addClass('no-clicked');
        $('.colorClickGreen').removeClass('no-clicked').addClass('clicked');
        $('.page').css('color','rgba(10, 255, 19,1)');
        $('button').css({
            animation: 'pulseGreen 2s infinite',
            textShadow: '0 0 15px #0aff13'
        });
        $('button').removeClass('button_hover_red button_hover_blue').addClass('button_hover_green');
        $('a').removeClass('linkBlue linkRed').addClass('linkGreen');
        TweenLite.fromTo('.section__main', 1.5,
            {background: 'linear-gradient(to right, rgba(10, 255, 19, 0) 0%, rgba(10, 255, 19, 0) 30%, rgba(10, 255, 19, 0) 30%, rgba(10, 255, 19, 0) 70%, rgba(10, 255, 19,0) 70%, rgba(10, 255, 19,0) 100%)'},
            {background: 'linear-gradient(to right, rgba(10, 255, 19, 0) 0%, rgba(10, 255, 19, 0.6) 30%, rgba(10, 255, 19, 0.6) 30%, rgba(10, 255, 19, 0.6) 70%, rgba(10, 255, 19,0.6) 70%, rgba(10, 255, 19,0) 100%)'}
        );
        setTimeout(function () {
            TweenLite.fromTo('.section__main', 1.5,
                {background: 'linear-gradient(to right, rgba(10, 255, 19, 0) 0%, rgba(10, 255, 19, 0.6) 30%, rgba(10, 255, 19, 0.6) 30%, rgba(10, 255, 19, 0.6) 70%, rgba(10, 255, 19,0.6) 70%, rgba(10, 255, 19,0) 100%)'},
                {background: 'linear-gradient(to right, rgba(10, 255, 19, 0) 0%, rgba(10, 255, 19, 0) 30%, rgba(10, 255, 19, 0) 30%, rgba(10, 255, 19, 0) 70%, rgba(10, 255, 19,0) 70%, rgba(10, 255, 19,0) 100%)'}
            );
        },2000);
        $('.page').find('canvas').remove();
        $('.page').css('text-shadow','0 0 15px #0aff13');
        $('.page').prepend('<canvas id="matrix"></canvas>');
        var c = document.getElementById("matrix");
        var ctx = c.getContext("2d");
        c.height = $(window).height();
        c.width = $(window).width();
        var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑モク";
        chinese = chinese.split("");
        var font_size = 5;
        var columns = c.width/font_size + 1;
        var drops = [];
        for(var x = 0; x < columns; x++)
            drops[x] = Math.random()*10000000;
        function draw()
        {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.fillStyle = "#0aff13";
            ctx.font = font_size + "px arial";
            for(var i = 0; i < drops.length; i++)
            {
                var text = chinese[Math.floor(Math.random()*chinese.length)];
                ctx.fillText(text, i*font_size, drops[i]*font_size);
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(draw, 50);
    });

    $('.colorClickRed').click(function () {
        $('.button-color button').removeClass('clicked').addClass('no-clicked');
        $('.colorClickRed').removeClass('no-clicked').addClass('clicked');
        TweenLite.fromTo('.section__main', 0.5,
            {background: 'linear-gradient(to right, rgba(255,0, 0, 0) 0%, rgba(255,0, 0, 0) 30%, rgba(255,0, 0, 0) 30%, rgba(255,0, 0, 0) 70%, rgba(255,0, 0,0) 70%, rgba(255,0, 0,0) 100%)'},
            {background: 'linear-gradient(to right, rgba(255,0, 0, 0) 0%, rgba(255,0, 0, 0.6) 30%, rgba(255,0, 0, 0.6) 30%, rgba(255,0, 0, 0.6) 70%, rgba(255,0, 0,0.6) 70%, rgba(255,0, 0,0) 100%)'}
        );
        //$('.section__main').css('background','linear-gradient(to right, rgba(255,0, 0, 0) 0%, rgba(255,0, 0, 0.6) 30%, rgba(255,0, 0, 0.6) 30%, rgba(255,0, 0, 0.6) 70%, rgba(255,0, 0,0.6) 70%, rgba(255,0, 0,0) 100%)');
        setTimeout(function () {
            TweenLite.fromTo('.section__main', 1.5,
                {background: 'linear-gradient(to right, rgba(255,0, 0, 0) 0%, rgba(255,0, 0, 0.6) 30%, rgba(255,0, 0, 0.6) 30%, rgba(255,0, 0, 0.6) 70%, rgba(255,0, 0,0.6) 70%, rgba(255,0, 0,0) 100%)'},
                {background: 'linear-gradient(to right, rgba(255,0, 0, 0) 0%, rgba(255,0, 0, 0) 30%, rgba(255,0, 0, 0) 30%, rgba(255,0, 0, 0) 70%, rgba(255,0, 0,0) 70%, rgba(255,0, 0,0) 100%)'}
            );
        },2000);
        $('button').css({
            animation: 'pulseRed 2s infinite',
            textShadow: '0 0 15px red'
        });
        $('button').removeClass('button_hover_green button_hover_blue').addClass('button_hover_red');
        $('a').removeClass('linkBlue linkGreen').addClass('linkRed');
        $('.page').css('color','rgba(255, 0, 0,1)');
        $('.page').css('text-shadow','0 0 15px red');
        $('.page').find('canvas').remove();
        $('.page').prepend('<canvas id="matrix"></canvas>');
        var c = document.getElementById("matrix");
        var ctx = c.getContext("2d");
        c.height = $(window).height();
        c.width = $(window).width();
        var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑モク";
        chinese = chinese.split("");
        var font_size = 5;
        var columns = c.width/font_size + 1;
        var drops = [];
        for(var x = 0; x < columns; x++)
            drops[x] = Math.random()*10000000;
        function draw()
        {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.fillStyle = "red";
            ctx.font = font_size + "px arial";
            for(var i = 0; i < drops.length; i++)
            {
                var text = chinese[Math.floor(Math.random()*chinese.length)];
                ctx.fillText(text, i*font_size, drops[i]*font_size);
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(draw, 50);
    });

    $('.colorClickBlue').click(function () {
        $('.button-color button').removeClass('clicked').addClass('no-clicked');
        $('.colorClickBlue').removeClass('no-clicked').addClass('clicked');
        TweenLite.fromTo('.section__main', 0.5,
            {background:'linear-gradient(to right, rgba(0,0,255, 0) 0%, rgba(0,0,255, 0) 30%, rgba(0,0,255, 0) 30%, rgba(0,0,255, 0) 70%, rgba(0,0,255,0) 70%, rgba(0,0,255,0) 100%)'},
            {background: 'linear-gradient(to right, rgba(0,0,255, 0) 0%, rgba(0,0,255, 0.6) 30%, rgba(0,0,255, 0.6) 30%, rgba(0,0,255, 0.6) 70%, rgba(0,0,255,0.6) 70%, rgba(0,0,255,0) 100%)'}
        );
        setTimeout(function () {
            TweenLite.fromTo('.section__main', 1.5,
                {background: 'linear-gradient(to right, rgba(0,0,255, 0) 0%, rgba(0,0,255, 0.6) 30%, rgba(0,0,255, 0.6) 30%, rgba(0,0,255, 0.6) 70%, rgba(0,0,255,0.6) 70%, rgba(0,0,255,0) 100%)'},
                {background:'linear-gradient(to right, rgba(0,0,255, 0) 0%, rgba(0,0,255, 0) 30%, rgba(0,0,255, 0) 30%, rgba(0,0,255, 0) 70%, rgba(0,0,255,0) 70%, rgba(0,0,255,0) 100%)'}
            );
        },2000);
        $('button').css({
            animation: 'pulseBlue 2s infinite',
            textShadow: '0 0 15px blue'
        });
        $('button').removeClass('button_hover_red button_hover_green').addClass('button_hover_blue');
        $('a').removeClass('linkGreen linkRed').addClass('linkBlue');
        $('.page').css('color','rgba(0, 0, 255,1)');
        $('.page').css('text-shadow','0 0 15px blue');
        $('.page').find('canvas').remove();
        $('.page').prepend('<canvas id="matrix"></canvas>');
        var c = document.getElementById("matrix");
        var ctx = c.getContext("2d");
        c.height = $(window).height();
        c.width = $(window).width();
        var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑モク";
        chinese = chinese.split("");
        var font_size = 5;
        var columns = c.width/font_size + 1;
        var drops = [];
        for(var x = 0; x < columns; x++)
            drops[x] = Math.random()*10000000;
        function draw()
        {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.fillStyle = "blue";
            ctx.font = font_size + "px arial";
            for(var i = 0; i < drops.length; i++)
            {
                var text = chinese[Math.floor(Math.random()*chinese.length)];
                ctx.fillText(text, i*font_size, drops[i]*font_size);
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(draw, 50);
    });

    $('.color-hide').click(function () {
        $('.button-color').animate({'left':'100vw'},1000);
        $('.color-show').animate({'left':'93vw'},1000);
        $('.button-color button').css('animation','none');
    });

    forFan();


    $('.color-show').click(function () {
        $('.button-color').animate({'left':'93vw'},1000);
        $('.color-show').animate({'left':'100vw'},1000);

        if ($('.colorClickRed').hasClass('clicked')){
            $('.button-color button').css('animation','pulseRed 2s infinite');
        }
        else
            if ($('.colorClickBlue').hasClass('clicked')){
                $('.button-color button').css('animation','pulseBlue 2s infinite');
            }
        else
            $('.button-color button').css('animation','pulseGreen 2s infinite');


        setTimeout(function () {
            $('.color-hide').trigger('click');
        },7000);
    });

    $('.sectionOne__button').click(function () {
        $('.sectionOne').animate({'top':'-100%'},1000);
        $('.sectionTwo').animate({'top':'0'},1000);
    });

    $('.sectionTwo_button_app').click(function () {
        $('.sectionOne').animate({'top':'0'},1000);
        $('.sectionTwo').animate({'top':'100%'},1000);
    });

    $('.sectionTwo_button_down').click(function () {
        $('.sectionTwo').animate({'top':'-100%'},1000);
        $('.sectionThree').animate({'top':'0'},1000);
    });

    $('.sectionThree_button_app').click(function () {
        $('.sectionTwo').animate({'top':'0'},1000);
        $('.sectionThree').animate({'top':'100%'},1000);
    });

    $('.sectionThree_button_down').click(function () {
        $('.sectionThree').animate({'top':'-100%'},1000);
        $('.sectionFour').animate({'top':'0'},1000);
    });

    $('.sectionFour_button').click(function () {
        $('.sectionThree').animate({'top':'0'},1000);
        $('.sectionFour').animate({'top':'100%'},1000);
    });
}