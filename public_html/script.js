/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
   $(".CoolJam").css("background-color", 'yellow');
   
   $("p:nth-child(2)").css("background-color", 'red');
   
   $("p:nth-child(3)").css("background-color", 'pink'); 
   
   $("p:nth-child(4)").css("background-color", 'green');
   
   $("p:gt(1)").css("border-style", 'solid');
   
});