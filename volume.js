class Volume{
    constructor(){
        this.audio=document.getElementById("audio");
        this.volumerange=document.getElementById("volrange");
        this.speedrange=document.getElementById("speedrange");
        this.audio.volume=50/100;
        this.volumerange.addEventListener("change",()=>{
            this.audio.volume=this.volumerange.value/100;
        })
      this.audio.playbackRate=1;
      this.speedrange.addEventListener("change",()=>{
        this.audio.playbackRate=this.speedrange.value/100;
      })
    }
}
onload=new Volume();
class Color{
    constructor(){
        this.color1=document.getElementById("color1");
        this.color1.addEventListener("click",()=>{
          this.getcolor("color1")
        });
        this.color2=document.getElementById("color2");
        this.color2.addEventListener("click",()=>{
          this.getcolor("color2")
        });
        this.color3=document.getElementById("color3");
        this.color3.addEventListener("click",()=>{
          this.getcolor("color3")
        });
        this.color4=document.getElementById("color4");
        this.color4.addEventListener("click",()=>{
          this.getcolor("color4")
        });
        if(localStorage.getItem("gardecolor")==null){
            document.body.style.backgroundColor="red";
            document.getElementById("main").style.backgroundColor="red";
            document.getElementById("box").style.backgroundColor="white";
        }
         this.getcolor(localStorage.getItem("gardecolor"));

    }
    getcolor(color){
    if(color=="color1"){
   document.body.style.backgroundColor="rgb(105, 102, 102)";
   document.getElementById("main").style.backgroundColor="rgb(105, 102, 102)";
   document.getElementById("box").style.backgroundColor="white";
    }else if(color=="color2"){
        document.body.style.backgroundColor="red";
        document.getElementById("main").style.backgroundColor="red";
        document.getElementById("box").style.backgroundColor="white";
    }else if(color=="color3"){
        document.body.style.backgroundColor="blue";
        document.getElementById("main").style.backgroundColor="blue";
        document.getElementById("box").style.backgroundColor="white";
    }else if(color=="color4"){
        document.body.style.backgroundColor="orange";
        document.getElementById("main").style.backgroundColor="orange";
        document.getElementById("box").style.backgroundColor="white";
    }
    localStorage.setItem("gardecolor",color);
    }
}
onload=new Color();