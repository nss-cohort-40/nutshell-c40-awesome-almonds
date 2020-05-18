const DOM = {
  renderArticles(articles) {
    document.getElementById("newsContainer").innerHTML = ""
    newsContainer.innerHTML = `<button id="createNewsForm">Create News Article</button>`
    articles.forEach(article => {
      document.getElementById("newsContainer").innerHTML += `
        <div id="article-div">
          <h2>${article.title}</h2>
          <p>${article.synopsis}</p>
          <p>${article.url}<p>
          <button id="delete--${article.id}">Delete Article</button>
          <button id="edit--${article.id}">Edit Article</button>
        </div>
      `
    });
  }
}

export default DOM;