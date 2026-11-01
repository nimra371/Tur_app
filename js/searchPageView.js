function searchPageView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="search-page">
            <h1>Søk etter turer</h1>

            <input
                type="text"
                id="searchInput"
                placeholder="Søk etter en tur..."
                oninput="searchPageController(this.value)"
            />

            <div id="searchResults"></div>
        </div>
    `;
}

function searchPageViewResults(hikes) {
    const results = document.getElementById('searchResults');

    if (!results) return;

    if (!hikes || hikes.length === 0) {
        results.innerHTML = '<p>Ingen turer funnet.</p>';
        return;
    }

    results.innerHTML = hikes.map(hike => /*HTML*/ `
        <div class="hike-card">
            <h2>${hike.name}</h2>
            <p>${hike.description}</p>
        </div>
    `).join('');
}
