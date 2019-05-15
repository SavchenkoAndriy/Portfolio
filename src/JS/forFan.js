export function forFan() {


    let width = 100;//$('.pol1').width();
    let height = 100; // $('.pol1').height();


    function draw() {


        let radius = Math.random()*2;

        if (radius < 1){
            radius = 1;
        }

        let left = width-radius-3;
        let right = height-radius-3;

        // if (left > width){
        //     left = width-radius+1;
        // }
        // if (right > height){
        //     right = height-radius+1;
        // }
        // if (left <radius){
        //     left = radius-1;
        // }
        // if (right <radius){
        //     right = radius-1;
        // }


        setTimeout(function () {
            $('.pol1').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol2').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol3').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol4').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol5').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol6').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol7').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol8').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol9').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol10').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol11').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol12').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol13').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol14').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
            $('.pol15').css({
                'clip-path': 'circle(' + (radius+Math.random()) + '% at ' + right * Math.random() + '% ' + left * Math.random() + '%)',
                'background-color': 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')'
            });
        });
    }

    function render(){
        draw();

        setTimeout(function () {
             render();
        },3000);

    }

    render();
}
