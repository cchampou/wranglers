import {renderToStaticMarkup} from "react-dom/server";
import {createElement} from "react";

async function handleRequest(request) {

  const html = renderToStaticMarkup(createElement('h1', { children: 'Hello worker!' }))

  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})