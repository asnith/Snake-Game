function func(){
snake=[2,1,0]
dir=1
var countOccurrences= (arr,val)=> arr.reduce((a,v)=> (v=== val ? a+1 :a),0)
var virat=document.querySelector("div.row")
width=10
point=0
br=0
time=0.5
interval=400

 function fun(){
	if(br==0){
	p = document.querySelectorAll("div.x")
	k=snake.pop()
	p[k].classList.remove("snake")
	s=snake[0]+dir
	if(snake[0]<0){
		br=1
		document.querySelector("div.row").innerHTML="<p class='pr'>GAME OVER!!! <br> YOUR SCORE IS " + point + "</p>"
	}else if(snake[0]>99){
		br=1	
     	document.querySelector("div.row").innerHTML="<p class='pr'>GAME OVER!!! <br> YOUR SCORE IS " + point + "</p>"
	}
	snake.unshift(s)
	p[s].classList.add("snake")
	end()
    check()
	
}

}

setInterval(fun,interval)
	
function control(event){
 var key=event.keyCode
 if(key==37&& dir!=1){
 	dir=-1
 }else if(key==39 && dir!=-1){
 	dir=1
 }else if(key==38 && dir!=width){
 	dir=-width
 	
 }else if(key==40 && dir!=-width){
 	dir=width
 	
 }

}

function check(){
	cd=p[snake[0]]
	if(cd.classList.contains("apple")){

		point+=1
		cd.classList.remove("apple")
		x=snake[snake.length-1]-snake[snake.length-2]
		p[snake[snake.length-1]+x].classList.add("snake")
		snake.push(snake[snake.length-1]+x)
		posapp()
		interval*=time

	}
}
document.addEventListener("keyup", control)
function posapp(){
	do {
		ran=Math.floor((Math.random())*(100))
		
	} while(p[ran].classList.contains("snake"))
    p[ran].classList.add("apple")
   }

function end(){
	vk= snake[0]-10
	if(snake[0]%10==0&& dir==1){
		p[snake[0]].classList.remove("snake")
		document.querySelector("div.row").innerHTML="<p class='pr'>GAME OVER!!! <br> YOUR SCORE IS " + point + "</p>"
		console.log(virat)
		br=1
	}else if((snake[0]%10==-1 || snake[0]%10==9)&& dir==-1){
		p[snake[0]].classList.remove("snake")
		document.querySelector("div.row").innerHTML="<p class='pr'>GAME OVER!!! <br> YOUR SCORE IS " + point + "</p>"	
		br=1
	}else if(countOccurrences(snake,snake[0])>1){
		document.querySelector("div.row").innerHTML="<p class='pr'>GAME OVER!!! <br> YOUR SCORE IS " + point + "</p>"
	}
}
}
