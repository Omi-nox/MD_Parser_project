import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import HowToUse from "../components/Htu";
import Toolbar from "../components/toolbar";
import Footer from "../components/footer";

// Page-specific metadata for the three public routes.
const pageSEO = {
  "/": {
    title: "Free Online Markdown Editor & Live Preview | MD Studio",
    description:
      "Write, edit, and preview Markdown online with MD Studio. Use a free browser-based Markdown editor with live preview, syntax highlighting, and .md file import and export.",
  },
  "/about": {
    title: "About MD Studio | Online Markdown Editor",
    description:
      "Learn about MD Studio, a browser-based Markdown editor built for writing, editing, and previewing Markdown with a simple, developer-focused workspace.",
  },
  "/how-to-use": {
    title: "How to Use MD Studio | Markdown Editor Guide",
    description:
      "Learn how to write and preview Markdown in MD Studio, switch themes, import .md files, download your work, and use fullscreen editing.",
  },
};

function setMetaTag(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, "") || "/";
    const page = pageSEO[pathname] || {
      title: "Page Not Found | MD Studio",
      description: "The requested page could not be found on MD Studio.",
    };

    const canonicalURL = `https://md-parser-studio.vercel.app${pathname}`;

    document.title = page.title;
    document.documentElement.lang = "en";

    setMetaTag("name", "description", page.description);
    setMetaTag("name", "robots", "index, follow");
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", "MD Studio");
    setMetaTag("property", "og:title", page.title);
    setMetaTag("property", "og:description", page.description);
    setMetaTag("property", "og:url", canonicalURL);
    setMetaTag("name", "twitter:card", "summary");
    setMetaTag("name", "twitter:title", page.title);
    setMetaTag("name", "twitter:description", page.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalURL);
  }, [location.pathname]);

  return null;
}

export default function App() {
  const [dark, set_dark] = useState(false);
  const [marktext, setMarktext] = useState("");
  const [fullscreen, setFullScreen] = useState(false);
  const [textinput, setTextInput] = useState("");

  function handleDownload() {
    if (!textinput) return;

    const blob = new Blob([textinput], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "untitled.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <BrowserRouter>
      <SEOManager />
      <Navbar dark={dark} set_dark={set_dark} />

      <main className={`pt-11 ${dark ? "bg-[#161b22]" : ""}`}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Toolbar
                  marktext={marktext}
                  setMarktext={setMarktext}
                  fullscreen={fullscreen}
                  setFullScreen={setFullScreen}
                  onDownload={handleDownload}
                />
                <Hero
                  dark={dark}
                  textinput={textinput}
                  setTextInput={setTextInput}
                  marktext={marktext}
                  fullscreen={fullscreen}
                />
              </>
            }
          />
          <Route path="/about" element={<About dark={dark} />} />
          <Route path="/how-to-use" element={<HowToUse dark={dark} />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
