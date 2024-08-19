document.addEventListener("DOMContentLoaded", function() {
    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach(card => {
        card.addEventListener("click", () => {
            alert("Mais detalhes sobre o filme em breve!");
        });
    });
});
