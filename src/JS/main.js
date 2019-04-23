// $(function hideInfo() {
//     $('.button').click(function () {
//         setTimeout(function () {
//             $('.canvas').append('var c = document.getElementById("matrix");\n' +
//                 'var ctx = c.getContext("2d");\n' +
//                 '\n' +
//                 'c.height = document.documentElement.scrollHeight;\n' +
//                 'c.width = document.documentElement.scrollWidth;\n' +
//                 '\n' +
//                 'var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑モク";\n' +
//                 'chinese = chinese.split("");\n' +
//                 '\n' +
//                 'var font_size = 5;\n' +
//                 'var columns = c.width/font_size;\n' +
//                 'var drops = [];\n' +
//                 'for(var x = 0; x < columns; x++)\n' +
//                 '    drops[x] = Math.random()*10000000;\n' +
//                 '\n' +
//                 'function draw()\n' +
//                 '{\n' +
//                 '    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";\n' +
//                 '    ctx.fillRect(0, 0, c.width, c.height);\n' +
//                 '    ctx.fillStyle = "#0F0"; //green text\n' +
//                 '    ctx.font = font_size + "px arial";\n' +
//                 '    for(var i = 0; i < drops.length; i++)\n' +
//                 '    {\n' +
//                 '        var text = chinese[Math.floor(Math.random()*chinese.length)];\n' +
//                 '        ctx.fillText(text, i*font_size, drops[i]*font_size);\n' +
//                 '        if(drops[i]*font_size > c.height && Math.random() > 0.975)\n' +
//                 '            drops[i] = 0;\n' +
//                 '        drops[i]++;\n' +
//                 '    }\n' +
//                 '}\n' +
//                 'setInterval(draw, 50);');
//         },3000);
//
//         function someone(){
//             $('.button, .name, .text').css('display','none');
//         }
//         someone();
//
//         setTimeout(function () {
//             $('#example').animate({opacity: '0'}, 500);
//         },3000);
//
//         function name() {
//             var YouName = $('.name').val();
//             $('#example').css('display','flex').children('p').text('Wake up, '+YouName+'..').append('<a>.</a>');
//         }
//         name();
//
//     });
// });


import {TimelineMax} from 'gsap/TimelineMax';

let tl = new TimelineMax();

var fff = document.getElementById('#name');

tl.to(fff,1,{opacity: 0});