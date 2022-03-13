let userInfo = localStorage.getItem("Authorization");

function FetchPostQuestion(item){
    fetch("https://4700-140-0-18-112.ngrok.io/postAuth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": JSON.parse(userInfo),
        },
        body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
        alert("pertanyaan berhasil dibuat")
    })
    .catch((error) => {
        console.log(error);
        alert("pertanyaan gagal dibuat")
    })
}

export default FetchPostQuestion;