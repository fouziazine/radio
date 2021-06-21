class Player{
    constructor(){
     var heightmain=document.getElementById("main");
     heightmain.style.height=screen.height+"px";
     if(screen.width<500){
       heightmain.style.width=screen.width+"px";
     }
     var heightbox=document.getElementById("box");
     heightbox.style.height=screen.height-300 +"px";
    }
}
onload=new Player();
class Playradio{
  constructor(){
 this.audio=document.getElementById("audio");
 this.playpause=document.getElementById("playpause");
 this.titleradio=document.getElementById("title");
 this.isplay;
 this.playpause.addEventListener("click",()=>{
   this.metoplay();
 })
 this.nameaudio=[];
 this.nameaudio[0]="Radio bejaia";
 this.nameaudio[1]="Radio bba";
 this.nameaudio[2]="Radio jijel";
 this.nameaudio[3]="Radio aintemouchent";
 this.nameaudio[4]="Radio medea";
 this.nameaudio[5]="Radio sidibelabbes";
 this.srcaudio=[];
 this.srcaudio[0]="https://bejaia.ice.infomaniak.ch/06.aac";
 this.srcaudio[1]="https://bba.ice.infomaniak.ch/34.aac";
 this.srcaudio[2]="https://jijel.ice.infomaniak.ch/18.aac";
 this.srcaudio[3]="https://aintemouchent.ice.infomaniak.ch/46.aac";
 this.srcaudio[4]="https://medea.ice.infomaniak.ch/26.aac";
 this.srcaudio[5]="https://sidibelabbes.ice.infomaniak.ch/22.aac";
 this.i=0;
 this.metosrcaudio();
 document.getElementById("next").addEventListener("click",()=>{
    if(this.i<this.srcaudio.length-1){
     ++this.i;
     this.isplay=false;
    }else{
      this.i=0;
      this.isplay=false;
    }
    localStorage.setItem("saveposition",this.i);
    this. metosrcaudio();
    
 })
 document.getElementById("back").addEventListener("click",()=>{
 if(this.i>0){
 --this.i;
 this.isplay=false;
 }else{
   this.i=this.srcaudio.length-1;
   this.isplay=false;
 }
 localStorage.setItem("saveposition",this.i);
 this. metosrcaudio();
 
 })
  }
  metosrcaudio(){
    if(localStorage.getItem("saveposition")!=null){
      this.i=localStorage.getItem("saveposition");
    }
    this.audio.src=this.srcaudio[this.i];
    this.titleradio.innerHTML=this.nameaudio[this.i];
    this.metoplay();

  }
  metoplay(){
    if(this.isplay==false){
      this.audio.play();
      this.isplay=true;
      this.playpause.src="img/pause.png";
    }else{
      this.audio.pause();
      this.isplay=false;
      this.playpause.src="img/play.png";
    }

  }

}
onload=new Playradio();