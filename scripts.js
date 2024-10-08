const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayNews(data.articles);
  } catch (error) {
    console.error("There was an error!", error);
  }
}

fetchNews();

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
      const articleDiv = document.createElement("div");
      articleDiv.className = 'newsdiv';
      articleDiv.addEventListener('click', () => {
        window.open(article.url, '_blank');
        });
      // Display title
      const title = document.createElement("h4");
      title.textContent = article.title;
      articleDiv.appendChild(title);
      // Display publication date
      const date = document.createElement("p");
      date.textContent = article.publishedAt;
      articleDiv.appendChild(date);
      newsDiv.appendChild(articleDiv);
      // Display image
      const image = document.createElement("IMG");
      image.src = article.urlToImage;
      image.width = 400;
      articleDiv.appendChild(image);
      // Display description
      const brief = document.createElement("p");
      brief.textContent = article.description;
      articleDiv.appendChild(brief);
}