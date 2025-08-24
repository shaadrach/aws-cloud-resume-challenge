const counter = document.getElementById("counter");
// Paste your Lambda Function URL here
const apiUrl = "https://xzkysyzeq6sdztt273pdsfhowu0lhalv.lambda-url.us-east-1.on.aws/";
async function updateCounter() {
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    counter.innerText = data.views;  // matches your Lambda return key
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    counter.innerText = "Error";
  }
}
updateCounter();