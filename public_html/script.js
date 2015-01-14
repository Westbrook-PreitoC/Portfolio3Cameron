/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $(".background").css("background-image", "url(http://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Fresno_State_Bulldogs_Logo.svg/496px-Fresno_State_Bulldogs_Logo.svg.png)");
    
   $(".CoolJam").css("background-color", 'white');
   
   $('p:last').css({"background-color": "purple", "color": "white"});
   
   $("h1").bind("mouseover", mouseOverMe).bind('mouseout', mouseOutMe);
   
   $('h1').bind('click', mouseClick);
   
   $('#replaceWText').text('Replaced!');
   
   $('#randPara').bind('click', addAPara);
   
   $('#removePara').bind('click', removeAPara);
   
    $('#show').css('visibility', 'hidden');
   
   $('#hide').bind('click', hideThePage);
   
   $('#show').bind('click', showThePage);
   
   $('#toggleText').bind('click', toggleTheText);
});

function mouseOutMe(){
    
}

function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText(){
    $('#replaceWText').text('Replaced!');
}

function mouseOverMe(){
    $("h1").html("This is easy");
}

function moseOverMe(){
    $("h1").html("CamTron is cool");
}

function mouseClick(){
    
    $("p").html("jadoifjadoia[dhgiuakguishfuisadshdfgiushfgi");
}

function toggleTheText() {
    $('#h4')
}