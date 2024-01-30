function calculateVolume() {
    let raza = parseFloat(document.getElementById("raza").value);
    let inaltime = parseFloat(document.getElementById("inaltime").value);

    let volume = Math.PI * raza**2 * inaltime;

    document.getElementById('rezultat').innerHTML = "Rezultatul este :" + " " + volume.toFixed(2);
}