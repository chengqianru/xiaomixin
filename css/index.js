{
	const imgs=document.querySelectorAll(".imgbox li");
	const pagers=document.querySelectorAll(".pagebox li");
	const banner=document.querySelector("#dbanner");
	const next=document.querySelector(".next");
	const prev=document.querySelector(".prev");
	// console.log(imgs);
	// console.log(pagers);
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			imgs[n].classList.add("active");
			pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
		
	}
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
		
	};
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}
	};
	imgs.forEach(function(ele,imdex){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
}
// 单品部分
{
	// function star(parent){
		const prev=document.querySelector(".star_prev");
		const next=document.querySelector(".star_next");
		const inner=document.querySelector(".star_inner");
		// console.log(prev);
		// console.log(next);
		let n=0;
		next.onclick=function(){
			n++;
			prev.classList.remove("disable");
			if(n===3){
				next.classList.add("disable");
			}
			if(n===4){
				n=3;
				return;
			}
			inner.style.marginLeft=-992*n+"px";
		}
		prev.onclick=function(){
			n--;
			next.classList.add("disable");
			if(n===-1){
				n=0;
				return;
			}
			if(n===0){
				prev.classList.add("disable");
			}
			inner.style.marginLeft=-992*n+"px";
		}
	// }
}
{
		const prev=document.querySelector(".star_prev2");
		const next=document.querySelector(".star_next2");
		const inner=document.querySelector(".star_inner2");
		// console.log(prev);
		// console.log(next);
		let n=0;
		next.onclick=function(){
			n++;
			prev.classList.remove("disable");
			if(n===3){
				next.classList.add("disable");
			}
			if(n===4){
				n=3;
				return;
			}
			inner.style.marginLeft=-992*n+"px";
		}
		prev.onclick=function(){
			n--;
			next.classList.add("disable");
			if(n===-1){
				n=0;
				return;
			}
			if(n===0){
				prev.classList.add("disable");
			}
			inner.style.marginLeft=-992*n+"px";
		}
}
// 内容部分
{
	function dapei(parent){
		const types=parent.querySelectorAll(".type");
		const goods=parent.querySelectorAll(".goodlist");
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("active");
					goods[i].classList.remove("active");
				}
				this.classList.add("active");
				goods[index].classList.add("active");
			}
		})
	}
	const contentlist=document.querySelectorAll(".dapei");
	contentlist.forEach(function(ele){
		dapei(ele);
	})
}