(function	(){

var delay=10,
		i=0,
		startTimer=function() {
//console.log('функция startTimer сработала')

var elem=document.getElementById('circle');
		bottom=elem.offsetTop;
if (i < 10){
	//console.log('функция startTimer'+(i+1)+'сработала');
	setTimeout(startTimer, delay);
elem.style.top = bottom + 20+'px';

}
i++;
};

var timer =setTimeout(startTimer,delay);


})();