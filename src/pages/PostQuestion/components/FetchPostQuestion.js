function FetchPostQuestion(item){
    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
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