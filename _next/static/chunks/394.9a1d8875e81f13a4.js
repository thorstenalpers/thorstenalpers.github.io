(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{2394:function(e){"undefined"!=typeof self&&self,e.exports=(()=>{"use strict";var e={d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function i(){return"undefined"!=typeof navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}e.r(t),e.d(t,{default:()=>V}),Number.prototype.clamp=function(e,t){return Math.min(Math.max(this,e),t)};let n="object"==typeof window,o=n&&window.THREE||{};n&&!window.VANTA&&(window.VANTA={});let s=n&&window.VANTA||{};s.register=(e,t)=>s[e]=e=>new t(e),s.version="0.5.24";let r=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};s.VantaBase=class{constructor(e={}){var t;if(!n)return!1;s.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);let i="function"==typeof this.getDefaultOptions?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},i),(e instanceof HTMLElement||"string"==typeof e)&&(e={el:e}),Object.assign(this.options,e),this.options.THREE&&(o=this.options.THREE),this.el=this.options.el,null==this.el)r('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){let e=this.el;if(this.el=document.querySelector(e),!this.el)return void r("Cannot find element",e)}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(e){return r("Init error",e),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background="number"==typeof(t=this.options.backgroundColor)?"#"+("00000"+t.toString(16)).slice(-6):t))}this.initMouse(),this.resize(),this.animationLoop();let a=window.addEventListener;a("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(a("scroll",this.windowMouseMoveWrapper),a("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(a("touchstart",this.windowTouchWrapper),a("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&a("deviceorientation",this.windowGyroWrapper)}setOptions(e={}){Object.assign(this.options,e),this.triggerMouseMove()}prepareEl(){let e,t;if("undefined"!=typeof Node&&Node.TEXT_NODE)for(e=0;e<this.el.childNodes.length;e++){let t=this.el.childNodes[e];if(t.nodeType===Node.TEXT_NODE){let e=document.createElement("span");e.textContent=t.textContent,t.parentElement.insertBefore(e,t),t.remove()}}for(e=0;e<this.el.children.length;e++)t=this.el.children[e],"static"===getComputedStyle(t).position&&(t.style.position="relative"),"auto"===getComputedStyle(t).zIndex&&(t.style.zIndex=1);"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative")}applyCanvasStyles(e,t={}){Object.assign(e.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(e.style,t),e.classList.add("vanta-canvas")}initThree(){o.WebGLRenderer?(this.renderer=new o.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new o.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){let e=this.getCanvasElement();return!!e&&e.getBoundingClientRect()}windowMouseMoveWrapper(e){let t=this.getCanvasRect();if(!t)return!1;let i=e.clientX-t.left,n=e.clientY-t.top;i>=0&&n>=0&&i<=t.width&&n<=t.height&&(this.mouseX=i,this.mouseY=n,this.options.mouseEase||this.triggerMouseMove(i,n))}windowTouchWrapper(e){let t=this.getCanvasRect();if(!t)return!1;if(1===e.touches.length){let i=e.touches[0].clientX-t.left,n=e.touches[0].clientY-t.top;i>=0&&n>=0&&i<=t.width&&n<=t.height&&(this.mouseX=i,this.mouseY=n,this.options.mouseEase||this.triggerMouseMove(i,n))}}windowGyroWrapper(e){let t=this.getCanvasRect();if(!t)return!1;let i=Math.round(2*e.alpha)-t.left,n=Math.round(2*e.beta)-t.top;i>=0&&n>=0&&i<=t.width&&n<=t.height&&(this.mouseX=i,this.mouseY=n,this.options.mouseEase||this.triggerMouseMove(i,n))}triggerMouseMove(e,t){void 0===e&&void 0===t&&(this.options.mouseEase?(e=this.mouseEaseX,t=this.mouseEaseY):(e=this.mouseX,t=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=e/this.scale,this.uniforms.iMouse.value.y=t/this.scale);let i=e/this.width,n=t/this.height;"function"==typeof this.onMouseMove&&this.onMouseMove(i,n)}setSize(){this.scale||(this.scale=1),i()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(this.mouseX||this.mouseY)&&(this.mouseX!==this.options.minWidth/2||this.mouseY!==this.options.minHeight/2)||(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,"function"==typeof this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),"function"==typeof this.onResize&&this.onResize()}isOnScreen(){let e=this.el.offsetHeight,t=this.el.getBoundingClientRect(),i=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,n=t.top+i;return n-window.innerHeight<=i&&i<=n+e}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);let e=performance.now();if(this.prevNow){let t=(e-this.prevNow)/(1e3/60);t=Math.max(.2,Math.min(t,5)),this.t+=t,this.t2+=(this.options.speed||1)*t,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=e,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&("function"==typeof this.onUpdate&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),"function"==typeof this.afterRender&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);"function"==typeof this.onRestart&&this.onRestart(),this.init()}init(){"function"==typeof this.onInit&&this.onInit()}destroy(){"function"==typeof this.onDestroy&&this.onDestroy();let e=window.removeEventListener;e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper),e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper),e("deviceorientation",this.windowGyroWrapper),e("resize",this.resize),window.cancelAnimationFrame(this.req);let t=this.scene;t&&t.children&&function e(t){for(;t.children&&t.children.length>0;)e(t.children[0]),t.remove(t.children[0]);t.geometry&&t.geometry.dispose(),t.material&&(Object.keys(t.material).forEach(e=>{t.material[e]&&null!==t.material[e]&&"function"==typeof t.material[e].dispose&&t.material[e].dispose()}),t.material.dispose())}(t),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),s.current===this&&(s.current=null)}};let a=s.VantaBase,{Camera:l,ClampToEdgeWrapping:h,DataTexture:d,FloatType:u,Mesh:c,NearestFilter:p,PlaneBufferGeometry:m,RGBAFormat:f,Scene:v,ShaderMaterial:y,WebGLRenderTarget:g}="object"==typeof window&&window.THREE||{},w=function(e,t,i,n){n&&({Camera:l,ClampToEdgeWrapping:h,DataTexture:d,FloatType:u,Mesh:c,NearestFilter:p,PlaneBufferGeometry:m,RGBAFormat:f,Scene:v,ShaderMaterial:y,WebGLRenderTarget:g}=n),this.variables=[],this.currentTextureIndex=0;var o=u,s=new v,r=new l;r.position.z=1;var a={passThruTexture:{value:null}},w=T("uniform sampler2D passThruTexture;\n\nvoid main() {\n\n	vec2 uv = gl_FragCoord.xy / resolution.xy;\n\n	gl_FragColor = texture2D( passThruTexture, uv );\n\n}\n",a),b=new c(new m(2,2),w);function x(i){i.defines.resolution="vec2( "+e.toFixed(1)+", "+t.toFixed(1)+" )"}function T(e,t){var i=new y({uniforms:t=t||{},vertexShader:"void main()	{\n\n	gl_Position = vec4( position, 1.0 );\n\n}\n",fragmentShader:e});return x(i),i}s.add(b),this.setDataType=function(e){return o=e,this},this.addVariable=function(e,t,i){var n={name:e,initialValueTexture:i,material:this.createShaderMaterial(t),dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:p,magFilter:p};return this.variables.push(n),n},this.setVariableDependencies=function(e,t){e.dependencies=t},this.init=function(){if(!i.capabilities.isWebGL2&&!i.extensions.get("OES_texture_float"))return"No OES_texture_float support for float textures.";if(0===i.capabilities.maxVertexTextures)return"No support for vertex shader textures.";for(var n=0;n<this.variables.length;n++){var o=this.variables[n];o.renderTargets[0]=this.createRenderTarget(e,t,o.wrapS,o.wrapT,o.minFilter,o.magFilter),o.renderTargets[1]=this.createRenderTarget(e,t,o.wrapS,o.wrapT,o.minFilter,o.magFilter),this.renderTexture(o.initialValueTexture,o.renderTargets[0]),this.renderTexture(o.initialValueTexture,o.renderTargets[1]);var s=o.material,r=s.uniforms;if(null!==o.dependencies)for(var a=0;a<o.dependencies.length;a++){var l=o.dependencies[a];if(l.name!==o.name){for(var h=!1,d=0;d<this.variables.length;d++)if(l.name===this.variables[d].name){h=!0;break}if(!h)return"Variable dependency not found. Variable="+o.name+", dependency="+l.name}r[l.name]={value:null},s.fragmentShader="\nuniform sampler2D "+l.name+";\n"+s.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){for(var e=this.currentTextureIndex,t=0===this.currentTextureIndex?1:0,i=0,n=this.variables.length;i<n;i++){var o=this.variables[i];if(null!==o.dependencies)for(var s=o.material.uniforms,r=0,a=o.dependencies.length;r<a;r++){var l=o.dependencies[r];s[l.name].value=l.renderTargets[e].texture}this.doRenderTarget(o.material,o.renderTargets[t])}this.currentTextureIndex=t},this.getCurrentRenderTarget=function(e){return e.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(e){return e.renderTargets[0===this.currentTextureIndex?1:0]},this.addResolutionDefine=x,this.createShaderMaterial=T,this.createRenderTarget=function(i,n,s,r,a,l){return new g(i=i||e,n=n||t,{wrapS:s=s||h,wrapT:r=r||h,minFilter:a=a||p,magFilter:l=l||p,format:f,type:o,stencilBuffer:!1,depthBuffer:!1})},this.createTexture=function(){var i=new Float32Array(e*t*4);return new d(i,e,t,f,u)},this.renderTexture=function(e,t){a.passThruTexture.value=e,this.doRenderTarget(w,t),a.passThruTexture.value=null},this.doRenderTarget=function(e,t){var n=i.getRenderTarget();b.material=e,i.setRenderTarget(t),i.render(s,r),b.material=w,i.setRenderTarget(n)}},b="object"==typeof window&&window.THREE,x=!i(),T=32,M=1024,z=(e={})=>{let t=new b.BufferGeometry,i=[];function n(t,n,o){let s=1.5*(e.birdSize||1);i.push(new b.Vector3(t*s,n*s,o*s))}n(5,0,0),n(-5,-1,1),n(-5,0,0),n(-5,-2,-1),n(0,2,-6),n(0,2,6),n(2,0,0),n(-3,0,0),t.setFromPoints(i);let o=[];return o.push(0,2,1),o.push(4,7,6),o.push(5,6,7),t.setIndex(o),t};class S{constructor(e){var t,i,n=new b.Vector3,o=500,s=500,r=200;this.position=new b.Vector3,this.velocity=new b.Vector3,t=new b.Vector3,this.setGoal=function(e){i=e},this.setWorldSize=function(e,t,i){o=e,s=t,r=i},this.run=function(e){n.set(-o,this.position.y,this.position.z),(n=this.avoid(n)).multiplyScalar(5),t.add(n),n.set(o,this.position.y,this.position.z),(n=this.avoid(n)).multiplyScalar(5),t.add(n),n.set(this.position.x,-s,this.position.z),(n=this.avoid(n)).multiplyScalar(5),t.add(n),n.set(this.position.x,s,this.position.z),(n=this.avoid(n)).multiplyScalar(5),t.add(n),n.set(this.position.x,this.position.y,-r),(n=this.avoid(n)).multiplyScalar(5),t.add(n),n.set(this.position.x,this.position.y,r),(n=this.avoid(n)).multiplyScalar(5),t.add(n),Math.random()>.5&&this.flock(e),this.move()},this.flock=function(e){i&&t.add(this.reach(i,.005)),t.add(this.alignment(e)),t.add(this.cohesion(e)),t.add(this.separation(e))},this.move=function(){this.velocity.add(t);var e=this.velocity.length();e>2.5&&this.velocity.divideScalar(e/2.5),this.position.add(this.velocity),t.set(0,0,0)},this.checkBounds=function(){this.position.x>o&&(this.position.x=-o),this.position.x<-o&&(this.position.x=o),this.position.y>s&&(this.position.y=-s),this.position.y<-s&&(this.position.y=s),this.position.z>r&&(this.position.z=-r),this.position.z<-r&&(this.position.z=r)},this.avoid=function(e){var t=new b.Vector3;return t.copy(this.position),t.sub(e),t.multiplyScalar(1/this.position.distanceToSquared(e)),t},this.repulse=function(e){var i=this.position.distanceTo(e);if(i<150){var n=new b.Vector3;n.subVectors(this.position,e),n.multiplyScalar(.5/i),t.add(n)}},this.reach=function(e,t){var i=new b.Vector3;return i.subVectors(e,this.position),i.multiplyScalar(t),i},this.alignment=function(t){var i,n,o=new b.Vector3,s=0;let r=100*e.alignment/20;for(var a=0,l=t.length;a<l;a++)Math.random()>.6||(n=(i=t[a]).position.distanceTo(this.position))>0&&n<=r&&(o.add(i.velocity),s++);if(s>0){o.divideScalar(s);var h=o.length();h>.1&&o.divideScalar(h/.1)}return o},this.cohesion=function(t){var i,n,o=new b.Vector3,s=new b.Vector3,r=0;let a=100*e.cohesion/20;for(var l=0,h=t.length;l<h;l++)Math.random()>.6||(n=(i=t[l]).position.distanceTo(this.position))>0&&n<=a&&(o.add(i.position),r++);r>0&&o.divideScalar(r),s.subVectors(o,this.position);var d=s.length();return d>.1&&s.divideScalar(d/.1),s},this.separation=function(t){var i,n,o=new b.Vector3,s=new b.Vector3;let r=100*e.separation/20;for(var a=0,l=t.length;a<l;a++)Math.random()>.6||(n=(i=t[a]).position.distanceTo(this.position))>0&&n<=r&&(s.subVectors(this.position,i.position),s.normalize(),s.divideScalar(n),o.add(s));return o}}}class C extends a{static initClass(){this.prototype.defaultOptions={backgroundColor:465199,color1:16711680,color2:53759,colorMode:"varianceGradient",birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5}}constructor(e){b=e.THREE||b,super(e)}initComputeRenderer(){this.gpuCompute=new w(T,T,this.renderer,b);let e=this.gpuCompute.createTexture(),t=this.gpuCompute.createTexture();(function(e){let t=e.image.data,i=0,n=t.length;(()=>{let e=[];for(;i<n;){let n=800*Math.random()-400,o=800*Math.random()-400,s=800*Math.random()-400;t[i+0]=n,t[i+1]=o,t[i+2]=s,t[i+3]=1,e.push(i+=4)}})()})(e),function(e){let t=e.image.data,i=0,n=t.length;(()=>{let e=[];for(;i<n;){let n=Math.random()-.5,o=Math.random()-.5,s=Math.random()-.5;t[i+0]=10*n,t[i+1]=10*o,t[i+2]=10*s,t[i+3]=1,e.push(i+=4)}})()}(t),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity","uniform float time;\nuniform float testing;\nuniform float delta; // about 0.016\nuniform float separationDistance; // 20\nuniform float alignmentDistance; // 40\nuniform float cohesionDistance;\nuniform float speedLimit;\nuniform float freedomFactor;\nuniform vec3 predator;\n\nconst float width = resolution.x;\nconst float height = resolution.y;\n\nconst float PI = 3.141592653589793;\nconst float PI_2 = PI * 2.0;\n// const float VISION = PI * 0.55;\n\nfloat zoneRadius = 40.0;\nfloat zoneRadiusSquared = 1600.0;\n\nfloat separationThresh = 0.45;\nfloat alignmentThresh = 0.65;\n\nconst float UPPER_BOUNDS = BOUNDS;\nconst float LOWER_BOUNDS = -UPPER_BOUNDS;\n\nfloat rand(vec2 co){\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvoid main() {\n\n  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;\n  separationThresh = separationDistance / zoneRadius;\n  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;\n  zoneRadiusSquared = zoneRadius * zoneRadius;\n\n\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec3 birdPosition, birdVelocity;\n\n  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;\n  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;\n\n  float dist;\n  vec3 dir; // direction\n  float distSquared;\n\n  float separationSquared = separationDistance * separationDistance;\n  float cohesionSquared = cohesionDistance * cohesionDistance;\n\n  float f;\n  float percent;\n\n  vec3 velocity = selfVelocity;\n\n  float limit = speedLimit;\n\n  dir = predator * UPPER_BOUNDS - selfPosition;\n  dir.z = 0.;\n  // dir.z *= 0.6;\n  dist = length( dir );\n  distSquared = dist * dist;\n\n  float preyRadius = 150.0;\n  float preyRadiusSq = preyRadius * preyRadius;\n\n  // move birds away from predator\n  if (dist < preyRadius) {\n\n    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;\n    velocity += normalize( dir ) * f;\n    limit += 5.0;\n  }\n\n  // if (testing == 0.0) {}\n  // if ( rand( uv + time ) < freedomFactor ) {}\n\n  // Attract flocks to the center\n  vec3 central = vec3( 0., 0., 0. );\n  dir = selfPosition - central;\n  dist = length( dir );\n\n  dir.y *= 2.5;\n  velocity -= normalize( dir ) * delta * 5.;\n\n  for (float y=0.0;y<height;y++) {\n    for (float x=0.0;x<width;x++) {\n\n      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;\n      birdPosition = texture2D( texturePosition, ref ).xyz;\n\n      dir = birdPosition - selfPosition;\n      dist = length(dir);\n\n      if (dist < 0.0001) continue;\n\n      distSquared = dist * dist;\n\n      if (distSquared > zoneRadiusSquared ) continue;\n\n      percent = distSquared / zoneRadiusSquared;\n\n      if ( percent < separationThresh ) { // low\n\n        // Separation - Move apart for comfort\n        f = (separationThresh / percent - 1.0) * delta;\n        velocity -= normalize(dir) * f;\n\n      } else if ( percent < alignmentThresh ) { // high\n\n        // Alignment - fly the same direction\n        float threshDelta = alignmentThresh - separationThresh;\n        float adjustedPercent = ( percent - separationThresh ) / threshDelta;\n\n        birdVelocity = texture2D( textureVelocity, ref ).xyz;\n\n        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;\n        velocity += normalize(birdVelocity) * f;\n\n      } else {\n\n        // Attraction / Cohesion - move closer\n        float threshDelta = 1.0 - alignmentThresh;\n        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;\n\n        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;\n\n        velocity += normalize(dir) * f;\n\n      }\n    }\n  }\n\n  // this make tends to fly around than down or up\n  // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);\n\n  // Speed Limits\n  if ( length( velocity ) > limit ) {\n    velocity = normalize( velocity ) * limit;\n  }\n\n  gl_FragColor = vec4( velocity, 1.0 );\n\n}",t),this.positionVariable=this.gpuCompute.addVariable("texturePosition","uniform float time;\nuniform float delta;\n\nvoid main() {\n\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec4 tmpPos = texture2D( texturePosition, uv );\n  vec3 position = tmpPos.xyz;\n  vec3 velocity = texture2D( textureVelocity, uv ).xyz;\n\n  float phase = tmpPos.w;\n\n  phase = mod( ( phase + delta +\n    length( velocity.xz ) * delta * 3. +\n    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );\n\n  gl_FragColor = vec4( position + velocity * delta * 15. , phase );\n\n}",e),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:1},this.velocityUniforms.cohesionDistance={value:1},this.velocityUniforms.speedLimit={value:1},this.velocityUniforms.freedomFactor={value:1},this.velocityUniforms.predator={value:new b.Vector3},this.velocityVariable.material.defines.BOUNDS="800.00",this.velocityVariable.wrapS=b.RepeatWrapping,this.velocityVariable.wrapT=b.RepeatWrapping,this.positionVariable.wrapS=b.RepeatWrapping,this.positionVariable.wrapT=b.RepeatWrapping;let i=this.gpuCompute.init();null!==i&&console.error(i)}initGpgpuBirds(){let e=(e=>{let t=new b.BufferGeometry;e.quantity&&(M=(T=Math.pow(2,e.quantity))*T);let i=3*M,n=3*i,o=new b.BufferAttribute(new Float32Array(3*n),3),s=new b.BufferAttribute(new Float32Array(3*n),3),r=new b.BufferAttribute(new Float32Array(2*n),2),a=new b.BufferAttribute(new Float32Array(n),1);t.setAttribute||(t.setAttribute=t.addAttribute),t.setAttribute("position",o),t.setAttribute("birdColor",s),t.setAttribute("reference",r),t.setAttribute("birdVertex",a);let l=0,h=function(){for(let e=0;e<arguments.length;e++)o.array[l++]=arguments[e]},d=e.wingSpan||20,u=e.birdSize||1;for(let e=0;e<M;e++)h(0,-0,-20*u,0,4*u,-20*u,0,0,30*u),h(0,0,-15*u,-d*u,0,0,0,0,15*u),h(0,0,15*u,d*u,0,0,0,0,-15*u);let c={};for(l=0;l<3*i;l++){let t;let i=~~(l/3),n=i%T/T,o=~~(i/T)/T,h=~~(l/9)/M,d=h.toString(),u=-1!=e.colorMode.indexOf("Gradient");t=!u&&c[d]?c[d]:e.effect.getNewCol(h),u||c[d]||(c[d]=t),s.array[3*l+0]=t.r,s.array[3*l+1]=t.g,s.array[3*l+2]=t.b,r.array[2*l]=n,r.array[2*l+1]=o,a.array[l]=l%9}return t.scale(.2,.2,.2)})(Object.assign({},this.options,{effect:this}));this.birdUniforms={color:{value:new b.Color(16720384)},texturePosition:{value:null},textureVelocity:{value:null},time:{value:1},delta:{value:0},birdSize:{value:this.options.birdSize}};let t=new b.ShaderMaterial({uniforms:this.birdUniforms,vertexShader:"attribute vec2 reference;\nattribute float birdVertex;\n\nattribute vec3 birdColor;\n\nuniform sampler2D texturePosition;\nuniform sampler2D textureVelocity;\n\nvarying vec4 vColor;\nvarying float z;\n\nuniform float time;\nuniform float birdSize;\n\nvoid main() {\n\n  vec4 tmpPos = texture2D( texturePosition, reference );\n  vec3 pos = tmpPos.xyz;\n  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);\n\n  vec3 newPosition = position;\n\n  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {\n    // flap wings\n    newPosition.y = sin( tmpPos.w ) * 5. * birdSize;\n  }\n\n  newPosition = mat3( modelMatrix ) * newPosition;\n\n  velocity.z *= -1.;\n  float xz = length( velocity.xz );\n  float xyz = 1.;\n  float x = sqrt( 1. - velocity.y * velocity.y );\n\n  float cosry = velocity.x / xz;\n  float sinry = velocity.z / xz;\n\n  float cosrz = x / xyz;\n  float sinrz = velocity.y / xyz;\n\n  mat3 maty =  mat3(\n    cosry, 0, -sinry,\n    0    , 1, 0     ,\n    sinry, 0, cosry\n  );\n\n  mat3 matz =  mat3(\n    cosrz , sinrz, 0,\n    -sinrz, cosrz, 0,\n    0     , 0    , 1\n  );\n  newPosition =  maty * matz * newPosition;\n  newPosition += pos;\n  z = newPosition.z;\n\n  vColor = vec4( birdColor, 1.0 );\n  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );\n}",fragmentShader:"varying vec4 vColor;\nvarying float z;\nuniform vec3 color;\nvoid main() {\n  // Fake colors for now\n  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;\n  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;\n  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;\n  gl_FragColor = vec4( rr, gg, bb, 1. );\n}",side:b.DoubleSide}),i=new b.Mesh(e,t);return i.rotation.y=Math.PI/2,i.matrixAutoUpdate=!1,i.updateMatrix(),this.scene.add(i)}getNewCol(e){let t,i;let n=this.options,o=null!=n.color1?n.color1:4456448,s=null!=n.color2?n.color2:6684672,r=new b.Color(o),a=new b.Color(s);if(i=-1!=n.colorMode.indexOf("Gradient")?Math.random():e,0==n.colorMode.indexOf("variance")){let e=(r.r+Math.random()*a.r).clamp(0,1),i=(r.g+Math.random()*a.g).clamp(0,1),n=(r.b+Math.random()*a.b).clamp(0,1);t=new b.Color(e,i,n)}else t=0==n.colorMode.indexOf("mix")?new b.Color(o+i*s):r.lerp(a,i);return t}onInit(){let e,t;this.camera=new b.PerspectiveCamera(75,this.width/this.height,1,3e3),this.camera.position.z=350,this.fog=new b.Fog(16777215,100,1e3),this.mouseX=this.mouseY=0;let i=this.birds=[],n=this.boids=[],o=this.options;if(x)try{this.initComputeRenderer(),this.valuesChanger=this.valuesChanger.bind(this),this.valuesChanger(),this.initGpgpuBirds()}catch(e){console.error("[vanta.js] birds init error: ",e)}else{let l=6*Math.pow(2,o.quantity);for(var s=0;s<l;s++){(e=n[s]=new S(o)).position.x=400*Math.random()-200,e.position.y=400*Math.random()-200,e.position.z=400*Math.random()-200,e.velocity.x=2*Math.random()-1,e.velocity.y=2*Math.random()-1,e.velocity.z=2*Math.random()-1,e.setWorldSize(500,500,300);let h=-1!=o.colorMode.indexOf("Gradient"),d=z(o),u=d.attributes.position.length,c=new b.BufferAttribute(new Float32Array(u),3);if(h)for(var r=0;r<d.index.array.length;r+=3)for(var a=0;a<=2;a++){let e=d.index.array[r+a],t=this.getNewCol();c.array[3*e]=t.r,c.array[3*e+1]=t.g,c.array[3*e+2]=t.b}else{let e=this.getNewCol(s/l);for(r=0;r<c.array.length;r+=3)c.array[r]=e.r,c.array[r+1]=e.g,c.array[r+2]=e.b}d.setAttribute("color",c),(t=i[s]=new b.Mesh(d,new b.MeshBasicMaterial({color:16777215,side:b.DoubleSide,vertexColors:b.VertexColors}))).phase=Math.floor(62.83*Math.random()),t.position.x=n[s].position.x,t.position.y=n[s].position.y,t.position.z=n[s].position.z,this.scene.add(t)}}}valuesChanger(){this.velocityUniforms&&(this.velocityUniforms.separationDistance.value=this.options.separation,this.velocityUniforms.alignmentDistance.value=this.options.alignment,this.velocityUniforms.speedLimit.value=this.options.speedLimit,this.velocityUniforms.cohesionDistance.value=this.options.cohesion)}onUpdate(){this.now=performance.now(),this.last||(this.last=this.now);let e=(this.now-this.last)/1e3;if(e>1&&(e=1),this.last=this.now,x)this.positionUniforms.time.value=this.now,this.positionUniforms.delta.value=e,this.velocityUniforms.time.value=this.now,this.velocityUniforms.delta.value=e,this.birdUniforms.time.value=this.now,this.birdUniforms.delta.value=e,this.velocityUniforms.predator.value.set(this.mouseX,-this.mouseY,0),this.mouseX=1e4,this.mouseY=1e4,this.gpuCompute.compute(),this.birdUniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.birdUniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;else{let e,n;let o=this.birds,s=this.boids;for(var t=0,i=o.length;t<i;t++)(e=s[t]).run(s),(n=o[t]).rotation.y=Math.atan2(-e.velocity.z,e.velocity.x),n.rotation.z=Math.asin(e.velocity.y/e.velocity.length()),n.phase=(n.phase+(Math.max(0,n.rotation.z)+.1))%62.83,n.geometry.attributes.position.array[16]=n.geometry.attributes.position.array[13]=5*Math.sin(n.phase)*this.options.birdSize,n.geometry.attributes.position.needsUpdate=!0,n.geometry.computeVertexNormals(),n.position.x=s[t].position.x,n.position.y=s[t].position.y,n.position.z=s[t].position.z}}onMouseMove(e,t){if(this.mouseX=e-.5,this.mouseY=t-.5,!x){let e;let t=this.boids;for(var i=new b.Vector3(this.mouseX*this.width,-this.mouseY*this.height,0),n=0,o=t.length;n<o;n++)e=t[n],i.z=e.position.z,e.repulse(i)}}onDestroy(){}onResize(){}}C.initClass();let V=s.register("BIRDS",C);return t})()}}]);