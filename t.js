var unsortedNumbers = [234,132,12, 400];
var sortedNumbers = [12,132,234,400];
var letter = ["F", "I", "V", "E"];
var dropTargetDiv1 = '';
var dropTargetDiv2 = '';

/*wrappers for numbered and empty elements */
dropTargetDiv1 = "<li><div ondrop = 'drop(event)' ondragover = 'allowDrop(event)' class = 'drop-target1' id = 'drtarget1' >";
dropTargetDiv2 = "<li><div class = 'drop-target2' id = 'drtarget2'>";


function createNumberedElements()
{
    var div = '';
    var image = '';
    var label = '';
    var list = $('#drag-drop');
    
    for (var i = 0; i < unsortedNumbers.length; i++) 
    { 
        div += "<div draggable = 'true' ondragstart = 'drag(event)'  id = 'drag" + i + "' class = 'drag '>";
        image = "<img src = 'star.png' class = 'img1' draggable = 'false'><br>";
        label = "<label class = 'number-label'> "+ unsortedNumbers[i] + " </label></div>";
       div += image + label;                          
    } 

    dropTargetDiv1 += div + "</div></li>";
    list.append(dropTargetDiv1);
}

function createEmptyElements()
{
    var div = '';
    var image = '';
    var label = '';
    var list = $('#drag-drop');
    
    for (var i = 0; i < unsortedNumbers.length; i++) 
    { 
        div += "<div draggable = 'false'  id = 'drop" + i + "' ondrop = 'drop(event)' ondragover = 'allowDrop(event)' class = 'drop'>";
        image = "<img src = 'star.png' class = 'img1' draggable = 'false'><br>";
        label = "<label class = 'number-label'> </label></div>";
        div += image + label;                    
    } 

    dropTargetDiv2 += div + "</div></li>";   
    list.append(dropTargetDiv2); 
}

function allowDrop(ev) 
{
    ev.preventDefault();
   // $(ev.target).removeClass('swing');   
}

function drag(ev) 
{
    ev.dataTransfer.setData("text", ev.target.id);
    var data = ev.dataTransfer.getData("text");

   /* var i = (ev.target.id).substr((ev.target.id).length-1, (ev.target.id).length);
    $('#'+ data).removeClass('drop-drtarget1'); 
    $("#" + data + " .img1").css({"opacity":"0.2"});*/
}

function drop(ev) 
{
    ev.preventDefault();    
    var data = ev.dataTransfer.getData("text");    
    ev.target.appendChild(document.getElementById(data));
}

$(document).ready(function() 
{ 
    createNumberedElements();
    createEmptyElements();
});