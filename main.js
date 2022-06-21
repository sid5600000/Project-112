Webcam.set({
    width:350,
    height:300,
    img_format:"png",
    png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'/>"
    });
}

console.log("ML5 Version : " , ml5.version);

function modelLoaded(){
    console.log('modelLoaded');
};

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bvt3O0OxX/model.json',modelLoaded);



function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
};

function gotResult(error,results){
    if(error){
        console.error(error);
    }

    
    else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        speak();

        if(results[0].label = "Amazing"){
            document.getElementById("update_gesture").innerHTML = "Amazing :" + "&#128076;";
        }

        if(results[0].label = "Best"){
            document.getElementById("update_gesture").innerHTML = "Best :" + "&#128077;";
        }

        if(results[0].label = "Victory"){
            document.getElementById("update_gesture").innerHTML = "Victory :"+ "&#9996;";
        }
        
    }
}

function speak(){
    if(results[0].label = "Amazing"){
        var synth = window.speechSynthesis;
        speak_data_1 = "The gesture is amazing . This gesture means causing great surprise or wonder; astonishing.";
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    }

    if(results[0].label = "Best"){
        var synth = window.speechSynthesis;
        speak_data_1 = "The gesture is best . This gesture means of the most excellent or desirable type or quality.";
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    }

    if(results[0].label = "Victory"){
        var synth = window.speechSynthesis;
        speak_data_1 = "The gesture is victory . This gesture an act of defeating an enemy or opponent in a battle, game, or other competition.";
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    }
}
