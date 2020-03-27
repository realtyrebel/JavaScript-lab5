//Lab5 - Working with the Document Object Model
var mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML = "Learning about the Document Object Model";//#1
mainTitle.setAttribute("align","center");//#2

var image = document.getElementsByTagName("img");
image[0].setAttribute("title","JavaScript 1");//#3

image = document.getElementById("image1");
image.setAttribute("align","right");//#4

var listItems = document.getElementsByTagName("li");//gets array of all <li>
var newListElement = document.createElement("li");//creates new <li>
var newListText = document.createTextNode("August 1996");//#5

listItems[0].appendChild(newListElement);//creates new list element after the first <li>
listItems[1].appendChild(newListText);//adds text to the newly created <li>

var ulList = document.getElementById("list");
var lastListText = document.createTextNode("1.8.2 June 22, 2009");//#6

newListElement = document.createElement("li");//creates new <li>
ulList.appendChild(newListElement);
ulList.lastChild.appendChild(lastListText);

//listItems[4].remove();//#7
//listItems[4].innerHTML = "1.6 November 2005";
listItems[5].textContent="1.6 November 2005";//#7

var num = listItems.length;
document.write("There are " + num + " list elements on the page.");//#8