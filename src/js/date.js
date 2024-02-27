function copyrightYear() {
    const data = new Date();
    document.getElementById("copySys").innerText = data.getFullYear();
    document.getElementById("copy").innerText = data.getFullYear();
}

copyrightYear();