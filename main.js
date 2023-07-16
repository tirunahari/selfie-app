var SpeechRecongnition = window.webkitSpeechRecongnition;
var recognition = new SpeechRecongnition();

function start()
{
    document.getElementById("textbox").innerHtml = "";
    recognition.start();
}

recongnition.onresult = function(event){

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
    
}

function speak()
{
    var synth = window.SpeechSynthesis;
    speak_data = "Taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_selfie();
        save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:280,
    image_format : 'jpg',
    jpg_quality:90

});
camera = document.getElementById("camera");

function take_selfie()
{
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="+data_url+"/>';
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}