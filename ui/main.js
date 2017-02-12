console.log('Loaded!');
console.log('my webpage is deployed');
// changing the html content by using javascript
var elem=document.getElementById('new');// getting the text
var elem2=document.getElementById('imag');//getting my image
elem.innerHTML="changed the text using javascript"; // changes the text content
var margi1=0; 
function moveRight () {
    margi1=margi1+5;                //increments the left margin by 40px for each call
elem2.style.marginLeft=margi1 +'px';    
}
elem2.onclick=function() //function executes on clicking the image 
{
  var interval= setInterval(moveRight,100);//moves the image right by increasing the margin left for each 100ms calls the moveright function
};
// webcounter code
var button=document.getElementById('counter');
//var counter=0;
//CREATING a request to counter endpoint
button.onclick= function(){
var request=new XMLHttpRequest();


//recording the response,STORE IT IN A variable and increment the count value
request.onreadystatechange=function () {
 if(request.readyState === XMLHttpRequest.DONE)
   {
      if (request.status===200)
    { 
      var counter=request.responseText;
      console.log(counter);
      var span=document.getElementById('count');
    //  counter=counter+1;
      span.innerHTML=counter.toString();
    }
      
  }
};
//making a request 
request.open('GET','http://saiga006.imad.hasura-app.io/counter',true);
request.send(null);
};