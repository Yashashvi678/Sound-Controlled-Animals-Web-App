function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classfier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sHzFOMBwc/model.json', modelReady);
}

function modelReady()
{
    classfier.classify(gotResults);
}

function gotResults(error, results)
{
if(error)
{
    console.error(error);
}
else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2) + "%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('Image');

    if(results[0].label == "Cat")
    {
        img.src = 'Cat Image.png';
    } else if (results[0].label == "Dog")
    {
        img.src = 'dog.jpg';
    } else if (results[0].label == "Rooster")
    {
        img.src = 'Rooster.jpg';
    }else if (results[0].label == "Rat")
    {
        img.src = 'Rat.jpg';
    }else
    {
        img.src = 'Background_Noise.jpg';
    }   
}

}
