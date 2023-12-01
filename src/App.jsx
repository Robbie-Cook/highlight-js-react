import "./styles.css";
import { marked } from "marked";
import { useEffect } from "react";
import hljs from "highlight.js";

// THIS IS VERY IMPORTANT.
// In Next.js, put this in your _app.js file
import "highlight.js/styles/github.css";

const markdown = `
  \`\`\`typescript
    const variable = 'hello';

    function getProfile(id: string): {
      name: string; address: string, photo: string
    } {
      return {
        name: 'ben', address: "ben's house", photo: "/ben.png"
      };
    }
  \`\`\`
`;

export default function App() {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <div className="App">
      {/* Example with raw JS */}
      <pre>
        <code className="language-typescript">const variable = 'raw';</code>
      </pre>

      {/* Example with marked */}
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
    </div>
  );
}
