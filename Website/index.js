const counter = document.getElementById("counter");
// Paste your Lambda Function URL here
const apiUrl = "https://leva5sv5ilw7j66mfs3p743q6m0cbihn.lambda-url.us-east-1.on.aws/";
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