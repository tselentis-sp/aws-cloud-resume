const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://coy2bha4ejncqc7vm7usd24qcy0illix.lambda-url.eu-central-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = 'views: ${data}';
}

updateCounter();