'use client';
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import Header from "../Components/Header";
import JSZip from "jszip";
import { saveAs } from "file-saver";

function App() {
  const [html, setHtml] = useState("<h1>Made with Efforts & ❤️ By Saurav Zure</h1>");
  const [css, setCss] = useState("h1 { color: green; }");
  const [js, setJs] = useState("console.log('Hello from JS')");
  const [srcDoc, setSrcDoc] = useState("");
  const [activeTab, setActiveTab] = useState('html');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}<\/script>
          </body>
        </html>
      `);
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const getEditorValue = () => {
    if (activeTab === 'html') return html;
    if (activeTab === 'css') return css;
    if (activeTab === 'js') return js;
  };

  const handleEditorChange = (value) => {
    if (!value) return;
    if (activeTab === 'html') setHtml(value);
    if (activeTab === 'css') setCss(value);
    if (activeTab === 'js') setJs(value);
  };

  const handleDownloadZip = () => {
    const zip = new JSZip();
    zip.file("index.html", html);
    zip.file("style.css", css);
    zip.file("script.js", js);

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "saurav.zip");
    });
  };

  return (
    <div className="bg-black w-screen min-h-screen relative">
      {/* Background Effects */}
      <img
        className="absolute top-0 right-0 -z-0 pointer-events-none"
        src="https://github.com/MiladiCode/3D-startup-app/blob/main/gradient.png?raw=true"
        alt=""
      />
      <div className="absolute top-0 z-10 right-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl opacity-30 pointer-events-none" />

      {/* Header & Title */}
      <Header />
      <div className="md:m-8 m-5">
        <p className="text-white text1 md:text-3xl p-2">HTML, CSS & JS Compiler</p>
        <p className="text-white px-2 text2 text-sm">Made with Love and Efforts By Saurav Zure</p>
      </div>

      {/* Tab Bar + Download Button */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex text-white font-mono space-x-4">
          {['html', 'css', 'js'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-t-md ${
                activeTab === tab
                  ? 'bg-gray-800 border-b-2 border-blue-500'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'html' && 'index.html'}
              {tab === 'css' && 'style.css'}
              {tab === 'js' && 'script.js'}
            </button>
          ))}
        </div>

        <button
          onClick={handleDownloadZip}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
        >
          Download ZIP
        </button>
      </div>

      {/* Editor */}
      <div style={{ height: "50vh", borderTop: "1px solid #333" }}>
        <Editor
          theme="vs-dark"
          language={activeTab === 'js' ? 'javascript' : activeTab}
          value={getEditorValue()}
          onChange={handleEditorChange}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            wordWrap: "on",
          }}
          height="100%"
        />
      </div>

      {/* Output */}
      <div style={{ height: "50vh", borderTop: "1px solid gray" }}>
        <iframe
          srcDoc={srcDoc}
          title="Output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
