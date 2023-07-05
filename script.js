function zpracovatForm(event) {
    event.preventDefault(); // Zabraňuje přesměrování po odeslání formuláře
    
    var miestoInput = document.getElementById("miesto").value;
    var miestoOutput = document.getElementById("miestoOutput");
    miestoOutput.textContent = miestoInput;
    
    var casInput = document.getElementById("cas").value;
    var casOutput = document.getElementById("casOutput");
    casOutput.textContent = formatDate(casInput);

    
    var napadyInput = document.getElementById("napady").value;
    var napadyOutput = document.getElementById("napadyOutput");
    napadyOutput.textContent = napadyInput;

    var form = document.getElementById("myForm");
    form.style.display = "none"; // Skryje formulář

    var outputDiv = document.getElementById("outputDiv");
    outputDiv.style.display = "block"; // Zobrazí výstup
}

function formatDate(dateString) {
    const options = {hour: "numeric", minute: "numeric",year: "numeric", month: "numeric", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }