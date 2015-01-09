/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
   $(".CoolJam").css("background-color", 'yellow');
   
   $('p:last').css({"background-color": "purple", "color": "white"});
   
   $("h1").bind("mouseover", mouseOverMe).bind('mouseout', mouseOutMe);
   
   $('h1').bind('click', mouseClick);
  
});

function mouseOverMe(){
    $("h1").html("This is easy");
}

function moseOverMe(){
    $("h1").html("CamTron is cool");
}

function mouseClick(){
    
    $("p").html("jadoifjadoia[dhgiuakguishfuisadshdfgiushfgi");
}