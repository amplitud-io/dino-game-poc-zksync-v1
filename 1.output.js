(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(t,e,o){"use strict";o.r(e);const{applyVelocityToPosition:a,Velocity:n}=o(2);class i{constructor(t,e,o,a){this._movements_array=t,this._position=o,this._velocity=a,this._movement_delay=e}clone(){return new i([...this._movements_array],this._movement_delay,this._position.clone(),this._velocity.clone())}}class c{constructor(t){this._character_meta=t,this._tick_counter=0,this._movement_delay_counter=0}tick(){this._movement_delay_counter++,this._movement_delay_counter>this._character_meta._movement_delay&&(this._movement_delay_counter=0,this._tick_counter+=1,this.set_position(a(this._character_meta._position,this._character_meta._velocity)))}get_layout(){return this._character_meta._movements_array[this._tick_counter%this._character_meta._movements_array.length]}get_position(){return this._character_meta._position}set_position(t){this._character_meta._position=t}get_velocity(){return this._character_meta._velocity}}class l{constructor(){this._character_array=[]}add_character(t,e){return this._character_array.push([t,e]),this}}class r{constructor(t,e,o){this._allocator_character_array=t,this._min_gap=e,this._gap_random_max=o,this._pending_gap=0}tick(){this._pending_gap-=1}get_character(){if(this._pending_gap>0)return!1;const t=Math.random();for(let e=0;e<this._allocator_character_array._character_array.length;e++)if(t>=this._allocator_character_array._character_array[e][1]){const t=new c(this._allocator_character_array._character_array[e][0].clone());return this._pending_gap=this._min_gap+Math.ceil(Math.random()*this._gap_random_max),t}}}var _=o(3),s=o(2);const d=document.getElementById("board"),h=d.getContext("2d");let u=1e3;const y=new s.Velocity(0,-7);let w=20;screen.width<u&&(u=screen.width,y.add(new s.Velocity(0,2)),w=50);const m=new s.Velocity(-11,0),p=new s.Velocity(-.6,0),g=new s.Position(200,10);let f=new s.Velocity(0,0),x=!0,P=null,S=!0,V=null,v=0,b=null,k=null,A=null,T=new s.Velocity(0,-.1),M=null,j=null,E={1:"#ffba08",2:"#f48c06",3:"#e85d04",4:"#dc2f02",5:"#6a040f"},C=null,R=null,D=[new r((new l).add_character(new i([_.stone_layout.large],0,new s.Position(240,u),y),.9).add_character(new i([_.stone_layout.medium],0,new s.Position(243,u),y),.75).add_character(new i([_.stone_layout.small],0,new s.Position(241,u),y),.6),2,0),new r((new l).add_character(new i([_.cloud_layout],0,new s.Position(100,u),new s.Velocity(0,-1)),.9).add_character(new i([_.cloud_layout],0,new s.Position(135,u),new s.Velocity(0,-1)),.85).add_character(new i([_.cloud_layout],0,new s.Position(150,u),new s.Velocity(0,-1)),.8),350,300),new r((new l).add_character(new i([_.star_layout.small_s1],0,new s.Position(90,u),new s.Velocity(0,-.3)),.9).add_character(new i([_.star_layout.small_s2],0,new s.Position(125,u),new s.Velocity(0,-.3)),.85).add_character(new i([_.star_layout.small_s1],0,new s.Position(140,u),new s.Velocity(0,-.3)),.8),350,250),new r((new l).add_character(new i([_.pit_layout.large],0,new s.Position(223,u),y),.97).add_character(new i([_.pit_layout.up],0,new s.Position(227,u),y),.9).add_character(new i([_.pit_layout.down],0,new s.Position(230,u),y),.85),100,50)],L=[new r((new l).add_character(new i([_.cactus_layout.small_d1],0,new s.Position(201,u),y),.8).add_character(new i([_.cactus_layout.small_s1],0,new s.Position(201,u),y),.7).add_character(new i([_.cactus_layout.small_s2],0,new s.Position(201,u),y),.6).add_character(new i([_.cactus_layout.medium_d1],0,new s.Position(193,u),y),.5).add_character(new i([_.cactus_layout.medium_s1],0,new s.Position(193,u),y),.4).add_character(new i([_.cactus_layout.medium_s2],0,new s.Position(193,u),y),.3),w,100),new r((new l).add_character(new i(_.bird_layout.fly,0,new s.Position(170,u),y.clone().add(new s.Velocity(0,-1))),.98).add_character(new i(_.bird_layout.fly,0,new s.Position(190,u),y.clone().add(new s.Velocity(0,-1))),.9),500,50)];function I(t){return t>=500?5:t>=250?4:t>=100?3:t>=50?2:1}function O(t,e){for(let o=0;o<t.length;o++)for(let a=0;a<t[o].length;a++)if(j.layout[t[o][a]]){(t===_.dino_layout.stand||t===_.dino_layout.jump||t===_.dino_layout.run[0]||t===_.dino_layout.run[1]||t===_.dino_layout.dead)&&2===t[o][a]?h.fillStyle=E[k]:h.fillStyle=j.layout[t[o][a]];let n=e[1]+2*a,i=e[0]+2*o;h.fillRect(n,i,2,2)}}function B(){if(v+=.15,v>1){v-=1,V++;let t=Math.max(V,b);A=Math.max(0,Math.floor(t/100))+1,k=I(t),M=new s.Velocity(0,-1*A)}h.clearRect(0,0,d.width,d.height),h.fillStyle=j.background,h.fillRect(0,0,d.width,d.height),h.beginPath();for(let t=0;t<d.width;t++)h.fillStyle=j.road,h.fillRect(0,232,d.width,.4);if(h.font="20px Arcade",h.fillStyle=j.score_text,h.fillText("H I G H         "+Math.floor(b).toString().padStart(4,"0").split("").join(" "),d.width-200,20),h.font="20px Arcade",h.fillStyle=j.score_text,h.fillText(`L E V E L    ${k.toString().split("").join(" ")} `,d.width-200,40),h.font="20px Arcade",h.fillStyle=j.score_text,h.fillText(`S P E E D    ${A.toString().split("").join(" ")} `,d.width-200,60),h.font="20px Arcade",h.fillStyle=j.score_text,h.fillText("S C O R E     "+V.toString().padStart(4,"0").split("").join(" "),d.width-200,80),S)return S=!1,O(_.dino_layout.stand,R[0].get_position().get()),P=Date.now(),h.textBaseline="middle",h.textAlign="center",h.font="25px Arcade",h.fillStyle=j.info_text,void h.fillText("J     U     M     P             T     O             S     T     A     R     T",d.width/2,d.height/2-50);[[D,C],[L,R]].forEach(t=>{for(let e=0;e<t[0].length;e++){const o=t[0][e];o.tick();const a=o.get_character();a&&(a.get_velocity().add(M),t[1].push(a))}}),[C,R].forEach((t,e)=>{for(let o=t.length-1;o>=0;o--){1==e&&0==o||V%100!=0||t[o].get_velocity().add(T),t[o].tick();let a=t[o].get_layout();x||1!=e||0!=o||(a=_.dino_layout.stand);const n=t[o].get_position().get();n[1]<-150?t.splice(o,1):O(a,n)}});let t=R[0],e=t.get_position(),o=t.get_layout();for(let t=R.length-1;t>0;t--){const a=R[t].get_position(),n=R[t].get_layout();if(Object(s.isCollided)(e.get()[0],e.get()[1],o.length,o[0].length,a.get()[0],a.get()[1],n.length,n[0].length))return h.textBaseline="middle",h.textAlign="center",h.font="25px Arcade",h.fillStyle=j.info_text,h.fillText("G     A     M     E             O     V     E     R",d.width/2,d.height/2-50),O(_.retry_layout,new s.Position(d.height/2-_.retry_layout.length,d.width/2-_.retry_layout[0].length).get()),O(_.dino_layout.dead,R[0].get_position().get()),P=Date.now(),void(localStorage.getItem("project.github.chrome_dino.high_score")<V&&localStorage.setItem("project.github.chrome_dino.high_score",V))}t.set_position(Object(s.applyVelocityToPosition)(t.get_position(),f)),t.get_position().get()[0]>g.get()[0]&&(t.set_position(g.clone()),x=!0),f.sub(p),requestAnimationFrame(B)}function J(){j=_.themes.classic,P=!1,V=0,b=localStorage.getItem("project.github.chrome_dino.high_score")||0,A=Math.max(0,Math.floor(b/100))+1,k=I(b),M=new s.Velocity(0,-1*A),d.height=300,d.width=u,C=[],R=[new c(new i(_.dino_layout.run,4,g.clone(),new s.Velocity(0,0)))],document.ontouchstart=()=>{P&&Date.now()-P>1e3?J():x&&(x=!1,f=m.clone())},document.body.onclick=()=>{P&&document.ontouchstart()},document.body.onkeydown=t=>{32!==t.keyCode&&" "!==t.key||document.ontouchstart()},B()}document.fonts.load('1rem "Arcade"').then(()=>{J()})},function(t,e,o){"use strict";o.r(e),o.d(e,"Position",(function(){return a})),o.d(e,"Velocity",(function(){return n})),o.d(e,"applyVelocityToPosition",(function(){return i})),o.d(e,"isCollided",(function(){return c}));class a{constructor(t,e){this._y_pos=t,this._x_pos=e}get(){return[this._y_pos,this._x_pos]}clone(){return new a(this._y_pos,this._x_pos)}}class n{constructor(t,e){this._y_speed=t,this._x_speed=e}get(){return[this._y_speed,this._x_speed]}sub(t){return this._y_speed-=t._y_speed,this._x_speed-=t._x_speed,this}add(t){return this._y_speed+=t._y_speed,this._x_speed+=t._x_speed,this}clone(){return new n(this._y_speed,this._x_speed)}}function i(t,e){return new a(t._y_pos+e._y_speed,t._x_pos+e._x_speed)}function c(t,e,o,a,n,i,c,l){return t<n+c&&t+o>n&&e+a>i&&e<i+l}},function(t,e){const o=[[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,1,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,1,0,0],[2,1,0,0,0,0,0,1,2,2,2,2,2,2,1,1,1,1,1,0,0],[2,1,0,0,0,0,1,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[2,2,1,0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0],[2,2,2,1,1,2,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0],[1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0],[0,1,1,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0],[0,0,1,1,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,2,1,2,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,1,1,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,1,1,1,1,2,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,1,1,2,2,1,0,0,0,0,0,0,0,0]],a=[[0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0],[0,0,0,0,4,4,0,4,4,4,0,0,0,0,0,0,0,0],[0,0,0,4,4,4,0,0,4,4,4,0,0,0,0,0,0,0],[0,0,4,4,4,4,0,0,4,4,4,4,0,0,0,0,0,0],[0,4,4,4,4,4,4,0,4,4,4,4,4,0,0,0,0,0],[4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0],[0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0],[0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,0,0,0],[0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,0,0,4,4,4,4,4,0,0,0,0]],n=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0],[0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0],[4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0],[0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0],[0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,0,0,0],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0],[0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0]];CACTUS_SMALL_D1=[[0,0,0,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1],[0,0,0,1,2,2,2,2,1,1,2,1,1,1,2,1,1,2,2,2,2,1,1,1,1],[0,0,0,1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,1,2,1],[0,0,0,1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,2,2,2],[1,1,1,1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,2,2,2],[1,2,1,1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,1,2,2,2],[1,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2],[1,1,1,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,1],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,2,1,1,1],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,1,1,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0]];t.exports={dino_layout:{stand:o,dead:[[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,1],[0,0,0,0,0,0,0,0,0,1,2,1,1,1,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,1,2,1,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,1,1,1,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,1,0,0],[2,1,0,0,0,0,0,1,2,2,2,2,2,2,1,1,1,1,1,0,0],[2,1,0,0,0,0,1,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[2,2,1,0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0],[2,2,2,1,1,2,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0],[1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0],[0,1,1,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0],[0,0,1,1,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,2,1,2,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,1,1,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,1,1,1,1,2,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,1,1,2,2,1,0,0,0,0,0,0,0,0]],run:[[[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,1,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,1,0,0],[2,1,0,0,0,0,0,1,2,2,2,2,2,2,1,1,1,1,1,0,0],[2,1,0,0,0,0,1,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[2,2,1,0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0],[2,2,2,1,1,2,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0],[1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0],[0,1,1,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0],[0,0,1,1,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,2,1,1,2,2,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,1,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,1,1,1,1,1,1],[1,1,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,1,0,0],[2,1,0,0,0,0,1,1,2,2,2,2,2,2,1,1,1,1,1,0,0],[2,1,0,0,0,1,1,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0],[2,2,2,1,1,2,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0],[1,1,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0],[0,1,1,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0],[0,0,1,1,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,1,2,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,2,2,1,1,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,2,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,2,2,1,0,0,0,0,0,0,0,0]]],jump:o},road_layout:[[2,2,2]],cloud_layout:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,3,3,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,3,0,3,3,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,3,3,3,0,0,0],[0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0],[0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0],[0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3],[0,3,3,0,3,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,3,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],stone_layout:{large:[[2,2,2,2]],medium:[[2,2]],small:[[2]]},pit_layout:{large:[[1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,2,2,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,2,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2,2],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,1]],up:[[1,2,2,2,2,2,1,1,1,1,2,2,2,1],[2,2,1,1,1,1,2,2,2,2,1,1,2,2],[2,1,1,1,1,1,1,1,1,1,1,1,1,2]],down:[[2,1,1,1,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,2,2,2,2,2,1,1,1,2],[1,2,2,2,2,1,1,1,1,1,2,2,2,1]]},bird_layout:{fly:[a,a,a,a,a,a,a,n,n,n,n,n,n,n]},cactus_layout:{small_s1:[[0,0,0,1,1,2,2,1,1,1,1,1],[0,0,0,1,2,2,2,2,1,1,2,1],[0,0,0,1,2,2,2,2,1,2,2,2],[0,0,0,1,2,2,2,2,1,2,2,2],[1,1,1,1,2,2,2,2,1,2,2,2],[1,2,1,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,1],[2,2,2,2,2,2,2,2,2,1,1,1],[1,2,2,2,2,2,2,2,1,1,0,0],[1,1,1,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0]],small_s2:[[1,1,1,1,1,2,2,1,1,0,0,0],[1,2,1,1,2,2,2,2,1,1,1,1],[2,2,2,1,2,2,2,2,1,1,2,1],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,1,2,2,2],[1,2,2,2,2,2,2,2,1,2,2,2],[1,1,2,2,2,2,2,2,1,2,2,2],[0,1,1,1,2,2,2,2,1,2,2,2],[0,0,0,1,2,2,2,2,2,2,2,2],[0,0,0,1,2,2,2,2,2,2,2,1],[0,0,0,1,2,2,2,2,2,1,1,1],[0,0,0,1,2,2,2,2,1,1,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0]],small_d1:CACTUS_SMALL_D1,medium_s1:[[0,0,0,1,1,2,2,1,1,1,1,1],[0,0,0,1,2,2,2,2,1,1,2,1],[0,0,0,1,2,2,2,2,1,2,2,2],[0,0,0,1,2,2,2,2,1,2,2,2],[0,0,0,1,2,2,2,2,1,2,2,2],[1,2,1,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,1],[2,2,2,2,2,2,2,2,2,1,1,1],[1,2,2,2,2,2,2,2,1,1,0,0],[1,1,1,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0]],medium_s2:[[1,1,1,1,1,2,2,1,1,0,0,0],[1,2,1,1,2,2,2,2,1,0,0,0],[2,2,2,1,2,2,2,2,1,0,0,0],[2,2,2,1,2,2,2,2,1,0,0,0],[2,2,2,1,2,2,2,2,1,0,0,0],[2,2,2,1,2,2,2,2,1,1,2,1],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,1,2,2,2],[1,2,2,2,2,2,2,2,2,2,2,2],[1,1,1,2,2,2,2,2,2,2,2,2],[0,0,1,1,2,2,2,2,2,2,2,1],[0,0,0,1,2,2,2,2,1,1,1,1],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0]],medium_d1:[[0,0,0,1,1,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,2,2,2,2,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,1,1,1,1,1],[1,2,1,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,1,1,2,1,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,1,2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0,1,2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,2,1,1,1,1,0,0,1,1,1,0,0,0,1,2,2,2,1,2,2,2,2,2,2,2,2],[1,2,2,2,2,2,2,2,1,1,0,0,1,0,1,1,2,1,1,0,0,1,2,2,2,1,2,2,2,2,2,2,2,2],[1,1,1,1,2,2,2,2,1,0,0,1,1,1,1,2,2,2,1,0,0,1,2,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,1,2,2,2,2,1,0,0,1,2,2,1,2,2,2,1,0,0,1,2,2,2,2,2,2,2,2,2,1,1,1],[0,0,0,1,2,2,2,2,1,0,0,1,2,2,1,2,2,2,1,1,1,1,1,2,2,2,2,2,2,2,1,1,0,0],[0,0,0,1,2,2,2,2,1,0,0,1,2,2,1,2,2,2,1,2,2,1,1,1,1,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,1,2,2,2,2,2,2,1,2,2,1,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,1,1,1,1,2,2,2,1,2,2,1,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,1,2,2,2,1,2,2,1,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,1,2,2,2,2,2,1,1,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,1,2,2,2,1,1,1,0,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,1,2,2,2,1,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0]]},star_layout:{small_s1:[[0,0,0,0,5,0,0,0,0],[0,0,5,0,5,0,5,0,0],[0,5,0,0,5,0,0,5,0],[0,0,0,5,5,5,0,0,0],[5,5,5,5,5,5,5,5,5],[0,0,0,5,5,5,0,0,0],[0,5,0,0,5,0,0,5,0],[0,0,5,0,5,0,5,0,0],[0,0,0,0,5,0,0,0,0]],small_s2:[[0,0,0,5,0,0,0],[0,0,0,5,0,0,0],[0,0,5,5,5,0,0],[5,5,5,5,5,5,5],[0,0,5,5,5,0,0],[0,0,0,5,0,0,0],[0,0,0,5,0,0,0]]},retry_layout:[[1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1],[1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],[1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,1,1,1,1,2,2,2,2,2],[2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,2,1,1,2,2,2,2,2,2,2,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,2,1,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],[2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1]],themes:{classic:{id:1,background:"#ffffff",road:"#535353",score_text:"#747474",info_text:"#535353",layout:[!1,"#ffffff","#535353","#dadada","#535353",!1]},dark:{id:2,background:"#202225",road:"#acacac",score_text:"#909191",info_text:"#acacac",layout:[!1,"#202225","#acacac","#3e3f3f","#acacac","#3e3f3f"]}}}}]]);