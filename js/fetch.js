const GITHUB_API_KEY = "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";


const ghOptions = {
    method:"GET",
    headers: {
        "Authorization": "token" + GITHUB_API_KEY
    }}


async function getUserLastCommitDate (userName) {
    const response = await fetch(`https://api.github.com/users/${userName}/events/public`, ghOptions);


    console.log("2");
    const data = await response.json();
    console.log("3");
    console.log(data);
    console.log((data));
    return getUserLastCommitDate(data);
}

function findPrintLastCommitDate (events) {
    for (let i = 0; i < events.length; i++) {
    if (events[i].type === "pushEvent") {
        return events[i].created_at;}}
        return undefined;}

