// Funkcija koja se izvršava kada se klikne gumb "Traži"
function search() {
  var searchInput = document.getElementById("search-input");
  var searchTerm = searchInput.value;
  
  // Provjerava jesu li uneseni podaci za pretragu
  if (searchTerm === "") {
    alert("Unesite pojam za pretragu.");
    return;
  }
  
  // Generiranje URL-a za Google pretragu
  var searchUrl = "https://duckduckgo.com/?q=" + encodeURIComponent(searchTerm);
  
  // Otvaranje pretraženog URL-a u novom prozoru
  window.open(searchUrl, "_blank");
  
  // Poništenje sadržaja polja za pretragu
  searchInput.value = "";
}

// Dodavanje događaja klikanja na gumb "Traži"
var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", search);
