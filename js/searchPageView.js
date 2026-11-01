function searchPageController() {
    let searchText = '';

    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>Søk etter turer</h1>

        <input
            type="text"
            id="searchInput"
            placeholder="Skriv navnet på en tur..."
            oninput="searchText = this.value; updateSearchResults()"
        />

        <div id="searchResults"></div>
    `;

    updateSearchResults();

    function updateSearchResults() {
        const results = document.getElementById('searchResults');

        if (!results) return;

        const search = searchText.toLowerCase().trim();

        const filteredHikes = hikes.filter(hike =>
            hike.name.toLowerCase().includes(search)
        );

        if (filteredHikes.length === 0) {
            results.innerHTML = '<p>Ingen turer funnet.</p>';
            return;
        }

        results.innerHTML = filteredHikes.map(hike => /*HTML*/ `
            <div class="hike-card">
                <h2>${hike.name}</h2>
                <p>${hike.description}</p>
            </div>
        `).join('');
    }
}
