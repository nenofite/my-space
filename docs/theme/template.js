const tmpl = module.exports = {
  // base layout ... used by other templates
  base(data) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.title}</title>
  <meta name="description" content="${data.description}">
  ${data.date ? `<meta name="date" content="${new Date(data.date).toString()}">` : ''}
  ${data.tags ? `<meta name="keywords" content="${data.tags.join()}">` : ''}

  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@0;1&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./theme/styles.css">
</head>
<body>
  <header>
    <a href="./index.html">Home</a>
  </header>
  <main>
  ${data.content}
  </main>
</body>
</html>
    `;
  },

  // page layout ...
  page(data) {
    data.content = `
<article>
  ${data.content}
</article>
    `;
    return tmpl.base(data);
  },

  // article layout ...
  article(data) {
    return tmpl.page(data);
    //   data.content = `<article>
    //   ${data.content}
    // </article>`;
    //   return tmpl.base(data);
  },

  // index layout ...
  index(data) {
    data.content = `
<article>
  ${data.content}
  <ul>
  ${data.articles.sort((a, b) => a.title < b.title ? -1 : 1)
        .map(tmpl.articleEntry).join('')}
  </ul>
</article>
    `;
    return tmpl.base(data);
  },

  // article entry layout ... used for article list in index template
  articleEntry(article) {
    const desc = (article.description && article.description !== article.title) ? `&em;${article.description}` : '';
    return `
<li><a href="${article.reluri + '.html'}">${article.title}</a>${desc}</li>
    `;
  },

  // date element layout ... 
  dateElement(date) {
    const d = new Date(date);
    return `<time datetime="${d}">${d.toString().substr(4, 3)} ${d.getDate()}, ${d.getFullYear()}</time>`;
  }

}