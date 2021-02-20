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

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tufte-css/1.7.2/tufte.min.css" integrity="sha512-cG7Z4degp9718dDjGjeJmar0+g7RtE/olDe0VRKEFDtOEkm91JSvE7ZxN2+sijkU0AAK3e2xzu7bafBGC/uiqA==" crossorigin="anonymous">
  <link rel="stylesheet" href="./theme/styles.css">
</head>
<body>
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
  ${data.articles.sort((a, b) => a.date < b.date ? 1 : -1)  // sort decending ..
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