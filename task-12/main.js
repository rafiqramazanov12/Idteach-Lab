const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const newsList = document.getElementById('newsList');
const apiKey = "52c3671de4a445a28dc49cba0357d5bd";

async function fetchNews() {
    const searchTerm = searchInput.value.trim();
    const category = categoryFilter.value.toLowerCase();
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&q=${searchTerm}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        if (data.status !== "ok") {
            throw new Error("API-dən düzgün cavab alınmadı");
        }
        displayNews(data.articles);
    } catch (error) {
        console.error('Xəbərləri yükləyərkən səhv baş verdi:', error);
        newsList.innerHTML = "<p>Xəbərləri yükləmək mümkün olmadı. Zəhmət olmasa, sonra yenidən cəhd edin.</p>";
    }
}

function displayNews(articles) {
    newsList.innerHTML = "";
    if (!articles || articles.length === 0) {
        newsList.innerHTML = "<p>Heç bir xəbər tapılmadı.</p>";
        return;
    }

    articles.forEach(article => {
        const defaultImage = 'https://via.placeholder.com/300x200?text=No+Image';
        const newsCard = document.createElement('div');
        newsCard.className = "news-card";

        newsCard.innerHTML = `
            <img src="${article.urlToImage ? article.urlToImage : defaultImage}" alt="${article.title}" />
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p>${article.description || "Təsvir mövcud deyil"}</p>
            <div class="date">${new Date(article.publishedAt).toLocaleDateString()}</div>
        `;

        newsList.appendChild(newsCard);
    });
}

searchInput.addEventListener('input', fetchNews);
categoryFilter.addEventListener('change', fetchNews);

fetchNews();
