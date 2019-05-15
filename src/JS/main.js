import 'jquery/src/jquery';
import {welcome} from "./intro";
import {TweenLite} from 'gsap';



welcome();


$(document).ready(function(){
    $('.button').mouseenter( function() {
        $('.form__message').animate({'opacity':'1'},500);
    });
    $('.button').mouseleave( function() {
        $('.form__message').animate({'opacity':'0'},500);
    });

});