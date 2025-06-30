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
    <div className="bg-black w-full min-h-screen relative overflow-x-hidden">
      {/* Background Effects */}
      <img
        className="absolute top-0 right-0 -z-0 pointer-events-none w-full max-w-[600px]"
        src="https://github.com/MiladiCode/3D-startup-app/blob/main/gradient.png?raw=true"
        alt=""
      />
      <div className="absolute top-0 z-10 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl opacity-30 pointer-events-none" />

      {/* Header & Title */}
      <Header />
      <div className="md:m-8 m-3">
        <p className="text-white text1 text-xl md:text-3xl p-2">HTML, CSS & JS Compiler</p>
        <p className="text-white px-2 text2 text-xs md:text-sm">Made with Love and Efforts By Saurav Zure</p>
      </div>

      {/* Tab Bar + Download Button */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center px-2 md:px-4 pt-2 md:pt-4 gap-2 md:gap-0">
        <div className="flex text-white font-mono space-x-2 md:space-x-4 justify-center md:justify-start">
          {['html', 'css', 'js'].map((tab) => (
            <button
              key={tab}
              className={`px-3 md:px-4 py-2 rounded-t-md text-xs md:text-base ${
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
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm px-3 md:px-4 py-2 rounded-md w-full md:w-auto"
        >
          Download ZIP
        </button>
      </div>

      {/* Editor & Output Responsive Layout */}
      <div className="flex flex-col md:flex-row w-full h-[80vh] md:h-[70vh] border-t border-gray-800 mt-2 md:mt-0">
        {/* Editor */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-gray-700">
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
        <div className="w-full md:w-1/2 h-1/2 md:h-full border-t md:border-t-0 border-gray-700">
          <iframe
            srcDoc={srcDoc}
            title="Output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            className="bg-white"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
