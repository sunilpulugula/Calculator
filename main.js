window.onload = function (){
	var div = document.getElementById("calDiv")
	var calculator = new Calculator(div);
};



// Here is the code to change background color of window for every one milliseconds.
function BgColorTransition()
{
   var intervals = setInterval(setBgColor, 100);
   var ran = Math.floor(Math.random() * (111111 + 999999) - 111111);
   function setBgColor()
   {
      document.getElementsByTagName("body")[0].style.background = '#'+ran;
      document.getElementsByTagName("body")[0].style.transition = '20s ease-in-out';
   }

}
BgColorTransition();