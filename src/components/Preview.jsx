// src/components/Preview.jsx
import React from "react";
import { marked } from "marked";

function Preview({ markdownText }) {
  const html = marked.parse(markdownText || "");

  return (
    <section className="w-full md:w-1/2 h-1/2 md:h-full p-4">
      <h2 className="font-bold mb-2">Preview</h2>
      <div
        className="w-full h-full p-2 border rounded font-mono bg-gray-50 prose prose-sm max-w-none overflow-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}

export default Preview;
