
const inputText = document.getElementById("inputText")
const select = document.getElementById("select")

const form = document.getElementById("form")

const imageDataArray = [];


form.onsubmit = (event) => {
    event.preventDefault();
    generateimage(inputText.value, select.value);
}



const generateimage = async (inputText, select) => {
    const imageCard = document.querySelector(".image-card")
    imageCard.innerHTML = "<img src='images/Spinner-1s-200px.svg' class='svg-center' />"
    const result = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer <Your API Key Here>"
        },
        body: JSON.stringify(
            {
                "model": "dall-e-2",
                "prompt": inputText,
                "n": parseInt(select),
                "size": "512x512"
            }
        )
    })

    const { data } = await result.json();

    data.map((data) => (
        imageDataArray.push(data.url)
    ))

    imageCard.innerHTML = ""
    imageDataArray.map((data) => {
        const image = document.createElement("img")
        image.classList.add("image")
        image.src = data
        imageCard.appendChild(image)
    })
}






// sk - muSsYpYEorv9gn2H9HMIT3BlbkFJhFiY7mvM2cgtrMDVS0SL
