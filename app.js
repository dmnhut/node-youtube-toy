const express = require('express');
const request = require('request');
const app = express();
let html;
request('https://www.youtube.com/results?search_query=' + 'song xa anh chang de dang'.split(' ').join('+'), function(error, res, body) {
  html = body;
  html = html.replace(/(href="[/])/gi, 'href="https://www.youtube.com/');
  html = html.replace(/(src="[/])/gi, 'src="https://www.youtube.com/');
  html += '<script>';
  html += 'window.location = document.querySelectorAll(".yt-lockup-thumbnail")[0].firstChild.href';
  html += '</script>';
});
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(html);
});
app.listen(3000, () => console.log('http://127.0.0.1:3000/'));
