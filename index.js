import articles from './data.js'

function createArticlesList (articles){
  let articlesList = []

  articles.map((article) => {
    articlesList += `
      <div class="article">
        <div class="article-image" style="background-image: url(${article.image})">
        </div>
        <p class="article-date">${article.date}</p>
        <h2 class="article-title">${article.title}</h2>
        <p class="article-description">${article.description}</p>
      </div>
    `
  })

  articlesList += `<button type="button" class="more-btn">View More</button>`

  displayArticles(articlesList)
}

function displayArticles (articlesList){
  document.getElementById('article-listing').innerHTML = articlesList
}

createArticlesList(articles)