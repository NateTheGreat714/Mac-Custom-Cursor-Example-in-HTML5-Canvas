(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Mac OS Color Wheel Spinner Mouse Cursor_atlas_", frames: [[0,0,1553,1553]]},
		{name:"Mac OS Color Wheel Spinner Mouse Cursor_atlas_2", frames: [[0,0,1488,1492]]},
		{name:"Mac OS Color Wheel Spinner Mouse Cursor_atlas_3", frames: [[0,0,1332,1332],[58,1334,44,48],[0,1334,56,56]]}
];


// symbols:



(lib.CachedBmp_34 = function() {
	this.initialize(ss["Mac OS Color Wheel Spinner Mouse Cursor_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["Mac OS Color Wheel Spinner Mouse Cursor_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.InnerShadowColorWheel4x = function() {
	this.initialize(ss["Mac OS Color Wheel Spinner Mouse Cursor_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MacOSCatalinaMouseCursor = function() {
	this.initialize(ss["Mac OS Color Wheel Spinner Mouse Cursor_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.MacOSCatalinaWaitCursor = function() {
	this.initialize(ss["Mac OS Color Wheel Spinner Mouse Cursor_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WheelOutlineMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_34();
	this.instance.setTransform(-192.95,-192.95,0.2899,0.2899);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WheelOutlineMC, new cjs.Rectangle(-192.9,-192.9,386.1,386.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.InnerShadowColorWheel4x();
	this.instance.setTransform(0,0,0.2504,0.2506);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,372.6,373.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image();
	this.instance.setTransform(-186.3,-186.3,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-186.3,-186.3,372.70000000000005,372.70000000000005), null);


(lib.NormalMouseCursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.MacOSCatalinaMouseCursor();
	this.instance.setTransform(-6,-6,0.4626,0.5594);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NormalMouseCursor, new cjs.Rectangle(-6,-6,20.4,26.9), null);


(lib.ColorSpinnerMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ColorSpinnerMC, new cjs.Rectangle(-186.3,-186.3,372.70000000000005,372.70000000000005), null);


(lib.MyColorWheel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(0.3,-0.1,1,1,0,0,0,186.3,186.9);
	this.instance.cache(-2,-2,377,378);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:18,x:0.35},0).wait(1).to({rotation:36,x:0.3},0).wait(1).to({rotation:54},0).wait(1).to({rotation:72,x:0.25,y:-0.05},0).wait(1).to({rotation:90,x:0.3,y:-0.1},0).wait(1).to({rotation:108,y:-0.05},0).wait(1).to({rotation:126,y:-0.1},0).wait(1).to({rotation:144},0).wait(1).to({rotation:162,x:0.25,y:-0.15},0).wait(1).to({rotation:180,x:0.3,y:-0.1},0).wait(1).to({rotation:198,x:0.25},0).wait(1).to({rotation:216,x:0.3},0).wait(1).to({rotation:234},0).wait(1).to({rotation:252,x:0.35,y:-0.15},0).wait(1).to({rotation:270,x:0.3,y:-0.1},0).wait(1).to({rotation:288,y:-0.15},0).wait(1).to({rotation:306,y:-0.1},0).wait(1).to({rotation:324},0).wait(1).to({rotation:342,x:0.35,y:-0.05},0).wait(1).to({rotation:360,x:0.3,y:-0.1},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.ColorSpinnerMC();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

	// Layer_1
	this.instance_2 = new lib.WheelOutlineMC();
	this.instance_2.setTransform(0,0,1.15,1.15);
	this.instance_2.shadow = new cjs.Shadow("rgba(153,153,153,1)",0,2,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.5,-260.9,521.6,521.5999999999999);


// stage content:
(lib.MacOSColorWheelSpinnerMouseCursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/* Custom Mouse Cursor
		            Replaces the default mouse cursor with the specified symbol instance.
		            */
		stage.canvas.style.cursor = "none";
		_this.NormalMouseCursor.mouseEnabled = false;
		_this.addEventListener("tick", positionCustomMouseCursor.bind(_this));
		//var colorWheel = this.MyColorWheel;
		var normCursor = _this.NormalMouseCursor;
		var wheel = _this.colorWheel;
		//wheel.scale = 0.85;
		var cursorBounds = normCursor.getBounds();
		//_this.colorWheel.scaleY = 0.25;
		function positionCustomMouseCursor() {
			normCursor.x = stage.mouseX;
			normCursor.y = stage.mouseY;
			wheel.x = (stage.mouseX + cursorBounds.width + 5);
			wheel.y = (stage.mouseY + cursorBounds.height + 5);
			//wheel.set({y:(stage.mouseY + _this.NormalMouseCursor.height)});
		}
		//To restore the default mouse pointer, uncomment the following lines:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(NormalMouseCursor);
		//stage.canvas.style.cursor = "default";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// OriginalCursors
	this.colorWheel = new lib.MyColorWheel();
	this.colorWheel.name = "colorWheel";
	this.colorWheel.setTransform(301.55,142.6,0.07,0.07,0,0,0,1.4,0);

	this.NormalMouseCursor = new lib.NormalMouseCursor();
	this.NormalMouseCursor.name = "NormalMouseCursor";
	this.NormalMouseCursor.setTransform(267.5,129);

	this.instance = new lib.MacOSCatalinaWaitCursor();
	this.instance.setTransform(53,178,0.5714,0.5714);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.NormalMouseCursor},{t:this.colorWheel}]}).wait(1));

	// Inner_Shadow_Color_Wheel_svg
	this.instance_1 = new lib.MyColorWheel();
	this.instance_1.setTransform(107.85,327.8,0.0623,0.0623,0,0,0,-2.4,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,322.1,1,32.099999999999966);
// library properties:
lib.properties = {
	id: 'CF3859DB11C603468021F53315F0B492',
	width: 550,
	height: 400,
	fps: 34,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mac OS Color Wheel Spinner Mouse Cursor_atlas_.png", id:"Mac OS Color Wheel Spinner Mouse Cursor_atlas_"},
		{src:"images/Mac OS Color Wheel Spinner Mouse Cursor_atlas_2.png", id:"Mac OS Color Wheel Spinner Mouse Cursor_atlas_2"},
		{src:"images/Mac OS Color Wheel Spinner Mouse Cursor_atlas_3.png", id:"Mac OS Color Wheel Spinner Mouse Cursor_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CF3859DB11C603468021F53315F0B492'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;