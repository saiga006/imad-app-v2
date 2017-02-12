console.log('Loaded!');
console.log('my webpage is deployed');
// changing the html content by using javascript
var elem=document.getElementById('new');// getting the text
var elem2=document.getElementById('imag');//getting my image
elem.innerHTML="changed the text using javascript";
var margi1=0; 
function moveRight () {
    margi1=margi1+40;
elem2.style.marginLeft=margi1 +'px';    
}
elem2.onclick=function() //function executes on clicking the image 
{
  var interval= setInterval(moveRight,100);
 // elem2.style.marginRight='120px';  
};