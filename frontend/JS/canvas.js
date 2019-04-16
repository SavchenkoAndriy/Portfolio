var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = document.documentElement.scrollHeight ;
c.width = document.documentElement.scrollWidth;

var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑モク";
chinese = chinese.split("");

var font_size = 5;
var columns = c.width/font_size;
var drops = [];
for(var x = 0; x < columns; x++)
    drops[x] = 1;

function draw()
{
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#0F0"; //green text
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


// function go() {
//  setTimeout(bla, 50);
// }

//module.exports = go;