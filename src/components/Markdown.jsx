// src/components/Markdown.jsx
import { marked } from "marked";
import hljs from "highlight.js";
import { markedHighlight } from "marked-highlight";
import "highlight.js/styles/github.css"; // 👈 theme

marked.use(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

export { marked };
