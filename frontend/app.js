async function getMessage() {
    try {
        const res = await fetch("http://localhost:3000/api/message");
        const data = await res.json();
        document.getElementById("output").innerText = data.message;
    } catch (error) {
        console.error(error);
    }
}