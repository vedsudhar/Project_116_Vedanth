function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Q1c1_6QCG/model.json', modelReady);
}
function modelReady()
{

}

function gotResults(error, results)
{

}