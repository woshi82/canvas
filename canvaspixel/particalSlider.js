var psParticle=function(a){
	this.ps=a,
	this.ttl=null,
	this.color=a.colorArr,
	this.next=null,
	this.prev=null,
	this.gravityX=0,
	this.gravityY=0,
	this.x=Math.random()*a.cw,
	this.y=Math.random()*a.ch,
	this.velocityX=10*Math.random()-5,
	this.velocityY=10*Math.random()-5    //

};

psParticle.prototype.move=function(){
	var a=this.ps,
		b=this;
	if(null!=this.ttl && this.ttl--<=0)
		a.swapList(b,a.pxlBuffer,a.recycleBuffer),
		this.ttl=null;

	else{
		var c=this.gravityX+a.swipeOffset-this.x,
		d=this.gravityY-this.y,
		e=Math.sqrt(Math.pow(c,2)+Math.pow(d,2)),
		f=Math.atan2(d,c),
		g=.01*e;
		1==a.restless
			?g+=.1*Math.random()-.05
			:.01>g
				&&(this.x=this.gravityX+.25,
				this.y=this.gravityY+.25);
		var h=0,i=0;
		if(a.mx>=0&&a.mouseForce){
			var j=this.x-a.mx,
				k=this.y-a.my;
			h=Math.min(a.mouseForce/(Math.pow(j,2)+Math.pow(k,2)),a.mouseForce),
			i=Math.atan2(k,j),
			"function"==typeof this.color&&(i+=Math.PI,h*=.001+.1*Math.random()-.05)
		}
		else h=0,i=0;
		this.velocityX+=g*Math.cos(f)+h*Math.cos(i),
		this.velocityY+=g*Math.sin(f)+h*Math.sin(i),
		this.velocityX*=.92,
		this.velocityY*=.92,
		this.x+=this.velocityX,
		this.y+=this.velocityY
	}
},


// {ptlGap:0,ptlSize:1,mouseForce:5e3,showArrowControls:!1,height:d}


ParticleSlider.prototype.Particle=psParticle,

//b.swapList(b.recycleBuffer.first,b.recycleBuffer,b.pxlBuffer)
// a.swapList(b,a.pxlBuffer,a.recycleBuffer),
// b.pxlBuffer={
// 	first:null,
// },
// b.recycleBuffer={
// 	first:null,
// },

1 (this.recycleBuffer.first == null) 

true this.recycleBuffer.first = new this.Particle(this);

false (this.recycleBuffer.first == this.recycleBuffer.first)
	true this.recycleBuffer.first.next != null
		false this.recycleBuffer.first = null

2 (this.pxlBuffer.first == null)

true this.pxlBuffer.first = this.recycleBuffer.first
	 this.recycleBuffer.first.prev = null
	 this.recycleBuffer.first.next = null

ParticleSlider.prototype.swapList=function(a,b,c){
	var d=this;
	null==a
		?a=new d.Particle(d)
		:b.first==a
			?null!=a.next
				?(a.next.prev=null,b.first=a.next)
				:b.first=null
			:null==a.next
				?a.prev.next=null
				:(a.prev.next=a.next,a.next.prev=a.prev),
	null==c.first
		?(c.first=a,a.prev=null,a.next=null)
		:(	a.next=c.first,
			c.first.prev=a,
			c.first=a,
			a.prev=null)

	// if(null==a){
	// 	a=new d.Particle(d);
	// }
	// else if(b.first==a){
	// 	if(null!=a.next){
	// 		a.next.prev=null,
	// 		b.first=a.next
	// 	}
	// 	else{
	// 		b.first=null
	// 	}
	// }
	// else if(null==a.next){
	// 	if(a.prev.next=null){
	// 		a.prev.next=a.next,a.next.prev=a.prev;
	
	// 	}
	// }
	// 		if(null==c.first){
	// 			c.first=a,a.prev=null,a.next=null
	// 		}
	// 		else{
	// 			a.next=c.first,c.first.prev=a,c.first=a,a.prev=null
	// 		}

},


ParticleSlider.prototype.parseColor=function(a){
	var b,a=a.replace(" ","");
	if(b=/^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(a))
		b=[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)];

	else if(b=/^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(a))
		b=[17*parseInt(b[1],16),17*parseInt(b[2],16),17*parseInt(b[3],16)];

	else if(b=/^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(a))
		b=[+b[1],+b[2],+b[3],+b[4]];

	else{
		if(!(b=/^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(a)))
			return null;
		b=[+b[1],+b[2],+b[3]]
	}
	return isNaN(b[3])&&(b[3]=1),b[3]*=255,b
},


ParticleSlider.prototype.loadingStep=function(){
	var a=this;
	a.imagesLoaded++,  //0
	(a.imagesLoaded>=3||0==a.showArrowControls)
	&&
	( a.resize(),
		a.slideDelay>0  //10
		&& (
			a.nextSlideTimer=setTimeout(function(){
				a.nextSlide()
			},1e3*a.slideDelay)  //10*1e3
			)
	)

},


ParticleSlider.prototype.$=function(a,b,c){
	var d=this;
	if("."==a[0]){
		var e=a.substr(1);
		b||(b=d.$$children);
		for(var f=[],g=0,h=b.length;h>g;g++)
			b[g].className&&b[g].className==e&&f.push(b[g]);

		return 0==f.length?null:1!=f.length||c?f:f[0]
	}

	return document.getElementById(a.substr(1))
},


ParticleSlider.prototype.nextFrame=function(){
	var a=this;
	a.swipeOffset = 1==a.mouseDownRegion&&a.mx<a.cw/2||-1==a.mouseDownRegion&&a.mx>a.cw/2?a.mx-a.cw/2:0;

	for(var b=a.pxlBuffer.first,c=null;null!=b;)
		c = b.next, 
		b.move(), 
		b=c;

	if(a.drawParticles(),a.frame++%25==0&&(a.cw!=a.getCw()||a.ch!=a.getCh())){
		var d=a.getCh(),e=a.getCw();
		a.ch!=e&&"function"==typeof a.onWidthChange&&a.onWidthChange(a,e),
		a.ch!=d&&"function"==typeof a.onHeightChange&&a.onHeightChange(a,d),
		"function"==typeof a.onSizeChange&&a.onSizeChange(a,e,d),
		a.resize()
	}

	setTimeout(function(){
		a.requestAnimationFrame(function(){
			a.nextFrame()
		})
	},15)
},


ParticleSlider.prototype.nextSlide=function(a){
	var b=this;
	null!=b.nextSlideTimer&& 
	b.imgs.length>1
	?(	b.currImg = ( b.currImg+b.imgs.length+(a?a:1) )%b.imgs.length, 
		b.resize(), 
		b.slideDelay>0&&( 
			b.nextSlideTimer=setTimeout(function(){
				b.nextSlide()
			},1e3*b.slideDelay) 
		)
	)

	:b.slideDelay>0&&
		(b.nextSlideTimer=setTimeout(function(){
			b.nextSlide()},1e3*b.slideDelay)
		),
	
	"function"==typeof b.onNextSlide&&b.onNextSlide(b.currImg)

},


ParticleSlider.prototype.drawParticles=function(){
	for(var a,b,c,d,e,f,g=this,h=g.ctx.createImageData(g.cw,g.ch),i=h.data,j=g.pxlBuffer.first;
	null!=j;){
										//1
		for(b=~~j.x,c=~~j.y,d=b;d<b+g.ptlSize&&d>=0&&d<g.cw;d++) 

			for(e=c;e<c+g.ptlSize&&e>=0&&e<g.ch;e++) 
				a=4*(e*h.width+d),
				f= "function"==typeof j.color?j.color():j.color,
				i[a+0]=f[0],
				i[a+1]=f[1],
				i[a+2]=f[2],
				i[a+3]=f[3];

		j=j.next
	}

	h.data=i,
	g.ctx.putImageData(h,0,0)
},


ParticleSlider.prototype.getPixelFromImageData=function(a,b,c){
	for(var d=this,e=[],f=0;f<a.width;f+=d.ptlGap+1)
		for(var g=0;g<a.height;g+=d.ptlGap+1)
			i=4*(g*a.width+f),
			a.data[i+3]>0&&e.push({
	x:b+f,y:c+g,color:1==d.monochrome?[d.colorArr[0],d.colorArr[1],d.colorArr[2],d.colorArr[3]]:[a.data[i],a.data[i+1],a.data[i+2],a.data[i+3]]});
	return e
},


ParticleSlider.prototype.init=function(a){
	var b=this;
	if(b.imgs.length>0){


		b.$srcCanv.width=b.imgs[b.currImg].width,
		b.$srcCanv.height=b.imgs[b.currImg].height,
		b.srcCtx.clearRect(0,0,b.$srcCanv.width,b.$srcCanv.height),
		b.srcCtx.drawImage(b.imgs[b.currImg],0,0);

		var c=b.getPixelFromImageData(
				b.srcCtx.getImageData(0,0,b.$srcCanv.width,b.$srcCanv.height),
				~~(b.cw/2-b.$srcCanv.width/2),
				~~(b.ch/2-b.$srcCanv.height/2)
			);

		if(1==b.showArrowControls){

			b.prevCtx.clearRect(0,0,b.$prevCanv.width,b.$prevCanv.height),
			b.prevCtx.drawImage(b.imgControlPrev,0,0);

			for(
				var d=b.getPixelFromImageData(
					b.prevCtx.getImageData(0,0,b.$prevCanv.width,b.$prevCanv.height),
					b.arrowPadding,
					~~(b.ch/2-b.$prevCanv.height/2)
				),
				e=0,f=d.length;f>e;e++)

				d[e].color=function(){

					return b.mx>=0&&b.mx<2*b.arrowPadding+b.$prevCanv.width?b.hoverColorArr:b.colorArr
				},
				c.push(d[e]);

			b.nextCtx.clearRect(0,0,b.$nextCanv.width,b.$nextCanv.height),
			b.nextCtx.drawImage(b.imgControlNext,0,0);
			
			for(var g=b.getPixelFromImageData(b.nextCtx.getImageData(0,0,b.$nextCanv.width,b.$nextCanv.height),b.cw-b.arrowPadding-b.$nextCanv.width,~~(b.ch/2-b.$nextCanv.height/2)),e=0,f=g.length;f>e;e++)

				g[e].color=function(){
					return b.mx>0&&b.mx>b.cw-(2*b.arrowPadding+b.$nextCanv.width)?b.hoverColorArr:b.colorArr
				},

				c.push(g[e])
		}
										//洗牌
		(b.currImg!=b.lastImg||1==a)&&(c.shuffle(),b.lastImg=b.currImg);

		for(var h=b.pxlBuffer.first,e=0,f=c.length;f>e;e++){
			var i=null;
			null!=h
				?(i=h,   //i=this.pxlBuffer.first
					h=h.next  //this.pxlBuffer.first = this.pxlBuffer.first.next
					)
				:( 
					b.swapList(b.recycleBuffer.first,b.recycleBuffer,b.pxlBuffer),
					i=b.pxlBuffer.first
				),

			i.gravityX=c[e].x,  //this.pxlBuffer.first.gravityX = newData[e].x
			i.gravityY=c[e].y,	//this.pxlBuffer.first.gravityY = newData[e].y
			i.color=c[e].color  //this.pxlBuffer.first.color = newData[e].color
		}
		for(;null!=h;)
			h.ttl=~~(10*Math.random()),
			h.gravityY=~~(b.ch*Math.random()),
			h.gravityX=~~(b.cw*Math.random()),
			h=h.next;

		b.$overlay.innerHTML=b.$$slides[b.currImg].innerHTML
	}

},


ParticleSlider.prototype.getCw=function(){
	var a=this;
	return Math.min(document.body.clientWidth,a.width,a.$container.clientWidth)
},


ParticleSlider.prototype.getCh=function(){
	var a=this;
	return Math.min(document.body.clientHeight,a.height,a.$container.clientHeight)
},


ParticleSlider.prototype.resize=function(){
	var a=this;
	a.cw=a.getCw(),
	a.ch=a.getCh(),
	a.$canv.width=a.cw,
	a.$canv.height=a.ch,
	a.init(!0)
},


ParticleSlider.prototype.setColor=function(a){
	var b=this;
	b.colorArr=b.parseColor(a)
},


ParticleSlider.prototype.setHoverColor=function(a){
	var b=this;
	b.hoverColorArr=b.parseColor(a)
},
ParticleSlider.prototype.requestAnimationFrame=function(a){
	var b=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)};
	b(a)
};
