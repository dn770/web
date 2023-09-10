const searchButton = document.getElementById("searchButton");

searchButton.addEventListener('click', function(){
        const searchQuery = document.getElementById('searchInput').value;
    if (searchQuery) {
        // הפנייה לדף התוצאות ב-Google עם החיפוש שהוזן
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.location.href = googleSearchUrl;
    }
})