function sendRequest() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;

    if(name === "" || id === "") {
        document.getElementById("msg").innerText = "❌ عمر جميع الخانات";
    } else {
        document.getElementById("msg").innerText = "✅ تم إرسال الطلب بنجاح";
    }
}
