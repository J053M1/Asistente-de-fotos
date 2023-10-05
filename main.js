var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var textBox=document.getElementById("textbox");
function start(){
    textBox.innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var contenido=event.results[0][0].transcript;
    textBox.innerHTML=contenido;
    console.log(contenido);
    if(contenido=="Toma mi selfie"){
        console.log("tomando selfie");
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speakData="tomando tu selfie en 5 segundos";
    var utterthis=new SpeechSynthesisUtterance(speakData);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        takesnapshot();
        guardar();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie' src="+data_uri+">";

    });
}
function guardar(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();

}