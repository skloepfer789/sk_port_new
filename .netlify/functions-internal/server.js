var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/enhanceprinting/Desktop/sk_port_netlify-2/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/enhanceprinting/Desktop/sk_port_netlify-2/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist());

// app/styles/global.styles.css
var global_styles_default = "/build/_assets/global.styles-GGROKF3S.css";

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_react_animated_cursor = __toESM(require("react-animated-cursor")), import_react_device_detect = require("react-device-detect"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "manifest", href: "/site.webmanifest" },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      import_react_device_detect.isMobile ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react_animated_cursor.default,
        {
          color: "255,255,255",
          innerSize: 5,
          outerSize: 50,
          innerScale: 1,
          outerScale: 3,
          outerAlpha: 1,
          outerStyle: {
            mixBlendMode: "exclusion"
          },
          trailingSpeed: 15
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/__app.branding-original.jsx
var app_branding_original_exports = {};
__export(app_branding_original_exports, {
  default: () => app_branding_original_default,
  links: () => links5,
  loader: () => loader,
  meta: () => meta
});
var import_react8 = require("react");

// app/components/pagesHeader.component.jsx
var import_react3 = require("@remix-run/react");

// app/components/logoBleedOfflSVG.component.jsx
var React = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), BleedLogo = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    id: props.logoID,
    "data-name": props.logoID,
    viewBox: "0 0 294.78 30.49",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("style", { children: `.cls-1{fill:${props.color}}` }, void 0, !1, {
        fileName: "app/components/logoBleedOfflSVG.component.jsx",
        lineNumber: 12,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/logoBleedOfflSVG.component.jsx",
        lineNumber: 11,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("g", { id: "Layer_1-2", "data-name": "Layer 1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "path",
          {
            d: "M119.46 7.51c.01-2.86.26-5.36.74-7.51h-9.38c.3 1.37.45 3.95.47 7.73v22.76h12.17l1.5-6.95-5.5.31V7.51ZM151.87.16c-.67.07-1.3.3-1.9.67-.85.55-1.44 1.53-1.76 2.95-.12.52-.23 1.41-.34 2.68s-.16 2.38-.16 3.33v9.72c-.03 3.68.17 6.31.6 7.91.36 1.43 1.17 2.35 2.43 2.75.6.19 2.28.31 5.05.34h7.66v-6.63h-7.57v-5.29h7.57v-6.63h-7.57V6.67h7.57V0h-7.66c-1.89.03-3.2.08-3.93.16ZM186.92 30.49h8.18V18.56h5.16v-6.63h-5.16v-5.3h5.16V0h-13.34v30.49zM206.37.16c-.67.07-1.3.3-1.9.67-.85.55-1.44 1.53-1.76 2.95-.12.52-.23 1.41-.34 2.68s-.16 2.38-.16 3.33v9.72c-.03 3.68.17 6.31.6 7.91.36 1.43 1.17 2.35 2.43 2.75.6.19 2.28.31 5.05.34h7.66v-6.63h-7.57v-5.29h7.57v-6.63h-7.57V6.67h7.57V0h-7.66c-1.89.03-3.2.08-3.93.16ZM.98 21.9c-.48-.27-.8-.77-.98-1.46v4.87h6.94v-3.02H3.39c-1.09 0-1.89-.13-2.41-.4ZM108.64 11.24c.12-.49.18-1.42.18-2.79v-3.6c.01-1.55.05-2.52.11-2.93.06-.51.24-1.15.54-1.92h-8.13c-.46 1.09-.69 2.42-.69 4v3.48c0 1.01-.02 1.68-.07 2.01-.09.98-.33 1.66-.71 2.03-.28.25-.77.39-1.47.4h-1.21V0H7.62C3.41 0 0 3.41 0 7.62V9.7c.25-.86.72-1.48 1.4-1.86.58-.3 1.67-.45 3.26-.45h8.98v5.52H7.03v2.77H9.6c2.13-.03 3.54.44 4.24 1.41.34.57.54 1.53.58 2.9.01.36.02 1.07.02 2.14v3.26c0 .33-.03.8-.1 1.41-.07.61-.13 1.06-.19 1.36-.18.85-.69 1.54-1.54 2.08-.15.09-.35.17-.56.24h7.42-.02c-.66-.23-1.17-.6-1.54-1.11-.64-.91-.94-2.26-.89-4.04V13.8h-1.97V8.28h1.97V2.75h7.3v5.54h3.46v5.52h-3.46v9.87c0 .51.07.87.22 1.09.22.34.66.52 1.32.54h1.92v5.18h3.74c-.56-.16-1-.38-1.32-.66-.55-.55-.86-1.56-.94-3.04-.01-.39-.02-1.14-.02-2.26v-12.4c.01-1.76.38-2.99 1.09-3.69.51-.49 1.37-.8 2.59-.94.63-.07 1.39-.11 2.3-.11h5.76c2.52.03 4.18.39 4.98 1.07.64.52 1 1.29 1.07 2.3.01.27.02.82.02 1.65v9.63H36.51v1.23c0 .86.19 1.42.56 1.68.34.24 1.02.36 2.03.36h7.95v5.18h6.65c-1.53-1.81-2.85-4.18-3.96-7.12-.71-1.82-1.09-4.3-1.14-7.46V7.4h7.28v8.47c0 1.98.1 3.66.31 5.03s.66 2.67 1.34 3.89c.67-1.24 1.11-2.53 1.32-3.89.21-1.37.31-3.05.31-5.03V7.4h7.28v8.51c-.06 3.43-.55 6.21-1.47 8.35-1.09 2.56-2.3 4.63-3.64 6.23h9.01c-.56-.16-1-.38-1.32-.66-.55-.55-.86-1.56-.94-3.04-.01-.39-.02-1.14-.02-2.26v-12.4c.01-1.76.38-2.99 1.09-3.69.51-.49 1.37-.8 2.59-.94.63-.07 1.39-.11 2.3-.11h5.76c2.52.03 4.18.39 4.98 1.07.64.52 1 1.29 1.07 2.3.01.27.02.82.02 1.65v9.63H75.33v1.23c0 .86.19 1.42.56 1.68.34.24 1.02.36 2.03.36h7.95v5.18h11.24V18.56h1.07c1.19.01 1.94.63 2.26 1.83.09.31.13.97.13 1.97v2.79c0 1.28.06 2.32.18 3.13.12.71.39 1.45.8 2.21h7.84c-.25-.82-.42-1.56-.51-2.23-.09-.73-.13-1.82-.13-3.26v-4.27c0-1.67-.3-2.93-.89-3.78-.74-.98-1.97-1.6-3.69-1.85-.15-.01-.47-.07-.96-.16 1.06-.21 1.81-.37 2.26-.49 1.68-.54 2.72-1.61 3.11-3.22Z",
            className: "cls-1"
          },
          void 0,
          !1,
          {
            fileName: "app/components/logoBleedOfflSVG.component.jsx",
            lineNumber: 15,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "path",
          {
            d: "M78.32 13.79c-.31-.57-.74-.85-1.3-.85-1.09 0-1.63.85-1.63 2.55v2.12h3.26v-2.12c0-.74-.11-1.31-.34-1.7ZM39.47 13.79c-.31-.57-.74-.85-1.3-.85-1.09 0-1.63.85-1.63 2.55v2.12h3.26v-2.12c0-.74-.11-1.31-.34-1.7ZM145.52 6.75c-.4-2.86-1.4-4.77-2.99-5.72-1.1-.67-2.71-1.01-4.83-1.03h-3.69c-2.11.01-3.72.36-4.83 1.03-1.59.95-2.6 2.86-3.02 5.72-.16 1.43-.25 3.31-.25 5.63v5.72c0 2.32.08 4.2.25 5.63.42 2.87 1.42 4.79 3.02 5.74 1.1.67 2.71 1.01 4.83 1.03h3.69c2.11-.01 3.72-.36 4.83-1.03 1.59-.95 2.59-2.87 2.99-5.74.18-1.43.27-3.31.27-5.63v-5.72c0-2.32-.09-4.2-.27-5.63Zm-8.07 15.02c0 .73-.13 1.28-.38 1.65-.36.5-.81.76-1.36.76-.47 0-.89-.2-1.25-.6-.34-.39-.51-.99-.51-1.8V8.67c0-.73.13-1.27.38-1.62.36-.5.82-.76 1.38-.76.46 0 .87.2 1.22.6.34.37.51.96.51 1.78v13.11ZM185.28 4.4c-.19-1.67-.68-2.84-1.45-3.53-.66-.55-2.32-.84-5-.87h-13.22v30.49h8.18V18.56h5.7c1.07 0 1.76 0 2.06-.02 1.36-.1 2.3-.57 2.84-1.39.64-.91 1.01-3.21 1.12-6.9V7.93c0-1.34-.07-2.52-.2-3.53Zm-8.85 6.99c-.27.31-.79.47-1.58.47h-1.36v-5.3h1.16c.91 0 1.5.21 1.78.62.36.49.53 1.2.53 2.14s-.18 1.65-.53 2.07ZM239.89 25.38v-4.71c.07-2.25-.54-3.83-1.83-4.74-.55-.36-1.43-.71-2.64-1.07 1.18-.13 2.04-.39 2.59-.78.95-.7 1.54-1.82 1.76-3.35.07-.57.11-1.53.11-2.88V5.88c-.01-1.37-.19-2.53-.54-3.48-.45-1.33-1.41-2.08-2.88-2.26-.73-.09-2.02-.13-3.86-.13h-12.51V30.5h8.18V18.57h1.03c.73 0 1.3.17 1.72.51.45.39.68 1.12.69 2.21v4.07c-.01 2.13.19 3.84.63 5.14h8.2c-.42-1.33-.63-3.03-.65-5.12Zm-9.15-13.94c-.27.28-.86.42-1.78.42h-1.16v-5.3h1.16c.76 0 1.28.13 1.58.38.49.43.73 1.19.73 2.27s-.18 1.85-.53 2.23ZM246.3 0h48.47v30.49H246.3z",
            className: "cls-1"
          },
          void 0,
          !1,
          {
            fileName: "app/components/logoBleedOfflSVG.component.jsx",
            lineNumber: 19,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/logoBleedOfflSVG.component.jsx",
        lineNumber: 14,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/logoBleedOfflSVG.component.jsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), logoBleedOfflSVG_component_default = BleedLogo;

// app/styles/header.styles.css
var header_styles_default = "/build/_assets/header.styles-G6EVTQRN.css";

// app/components/pagesHeader.component.jsx
var import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), pageLinks = [
  {
    link: "branding"
  },
  {
    link: "print"
  },
  {
    link: "web"
  },
  {
    link: "about"
  }
];
function determinePage(pageName) {
  var newLinks = [];
  return pageLinks.forEach((link) => {
    link.link !== pageName && newLinks.push(link);
  }), newLinks;
}
var PageHeader = (props) => {
  let pageName = props.active, [activated, setActivated] = (0, import_react4.useState)("");
  var newLinks = determinePage(pageName);
  let onClose = props.onClose, setter = props.setter;
  setter(activated);
  let setActive = (props2) => {
    setActivated(props2), onClose();
  };
  var backgroundURL, logoColor;
  return props.background == "dark" ? (backgroundURL = "url(/images/GraidentBackground_Full.webp)", logoColor = "fff") : (backgroundURL = "url(/images/GraidentBackground_Light.webp)", logoColor = "#018aaa"), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { style: { backgroundImage: backgroundURL }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "pages", children: newLinks.map(
      (link) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "linkBox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "h3",
        {
          className: "link",
          setter: link.link,
          onClick: () => setActive(link.link),
          style: { color: logoColor },
          children: link.link
        },
        void 0,
        !1,
        {
          fileName: "app/components/pagesHeader.component.jsx",
          lineNumber: 63,
          columnNumber: 29
        },
        this
      ) }, link.link, !1, {
        fileName: "app/components/pagesHeader.component.jsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ) }, void 0, !1, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 60,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(logoBleedOfflSVG_component_default, { className: "headerLogo", color: logoColor }, void 0, !1, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 76,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 75,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 74,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/pagesHeader.component.jsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}, pagesHeader_component_default = PageHeader, links2 = () => [
  { rel: "stylesheet", href: header_styles_default }
];

// app/components/mainMenu.component.jsx
var import_react5 = require("react");

// app/components/maskedImage.component.jsx
var React2 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), SvgComponent = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xmlSpace: "preserve",
    style: {
      enableBackground: "new 0 0 189.8 164.5"
    },
    viewBox: "0 0 189.8 164.5",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "path",
        {
          id: "a",
          d: "M186.2 50.4c.3-2.5 2.7-3.5 3.7-5.5-.7-.5-1-.8-.9-1.6-.9 1.2-1.9 3.2-3.1 4.1l-1-.8c.6-1.4 2.5-2.7 3.1-4.1-.3-.2-1-.8-1.3-1s.1-.8.6-1.4c-.4.6-1.3 1.7-1.8 2.3-.3-.2-1-.8-1.3-1s.1-.8.6-1.4c-.7-.5-.9-1.6-1.6-1.2l-1.3 1.7c1.4-2.6.7-5-.3-5.7-.1.8-1.1.1-1.2.9.3-2.5.3-5.2-1.8-3.2-3.1 3.7-6.1 7.5-9.1 11.3-.3-.3-.9-.9-1.1-1.2-.3-.3 0-.6.4-.9-.3.3-1 .9-1.3 1.2-.3-.3-.9-.9-1.1-1.2-.3-.3 0-.6.4-.9-.6-.6-.8-1.5-1.4-1.5l-1 1c1-1.6.3-3.7-.6-4.6-.1.6-.9-.3-1 .3.1-1.1.1-2.4-.3-3 2.7-2.7 5.4-5.5 5.9-7.9l-3.4 3.8c2.5-4.5 6.9-7.6 9.8-12-.7-.5-1-.8-.2-2.4-2.1 2.8-5.1 7-7.7 9.2l-.9-.8c1.9-2.8 5.9-6.1 7.6-9.2-.3-.2-1-.8-1.3-1-.3-.2.4-1.2 1.2-2.4-1.1 1.5-2.7 3.6-3.6 4.8-.3-.3-1-.8-1.3-1-.3-.3.7-1.6 1.7-2.9-.6-.5-.3-2.3-1.6-1.2-1 1.3-2 2.6-3 3.8 1.9-2.6 2.9-5 3.2-6.7.3-1.7.1-2.8-.4-3.2-.5 1.5-1.6.8-2.1 2.3.9-2.2 1.5-4.5 1.5-5.6 0-.6-.2-.9-.6-.6-.4.2-.9.8-1.9 1.9-3.7 5.2-8.3 10.2-13.3 15.5-2 2.1-3.9 4.2-5.9 6.3.2-.5.2-1 .1-1.5l-1.5 1.8c.5-2.5 2.9-3.5 4-5.6-.6-.5-1-.8-.8-1.6-.9 1.2-2 3.2-3.3 4.1l-1-.8c.6-1.4 2.7-2.7 3.3-4.1-.3-.2-1-.8-1.3-1s.1-.8.6-1.4c-.4.6-1.4 1.8-1.8 2.4-.3-.3-1-.8-1.3-1-.3-.3.1-.8.6-1.4-.6-.5-.9-1.6-1.6-1.3l-1.3 1.7c1.5-2.5.7-4.9-.3-5.7-.1.8-1.1.1-1.2.9.3-2.5.2-5.1-1.8-3.1-.2.3-.5.5-.7.8h-.2c-.4.1-1.1.6-2 1.7-1.5 1.7-3.1 3.4-4.8 5.1 1.1-3.1 1.6-5.8-1.5-2.7-3.6 4.1-6.9 8.3-10.1 12.6-4 3.1-8.2 6.2-12.6 9.4.3-.4.5-.8.6-1.2l-2.8 2c2.1-3 5.6-4 8.2-6.4-.5-.7-.7-1 0-2-1.9 1.3-4.4 3.7-6.6 4.7l-.7-1c1.6-1.7 4.9-3 6.6-4.7-.2-.3-.7-1-1-1.4-.2-.3.7-1 1.7-1.7-.9.7-2.8 2-3.8 2.7-.2-.3-.7-1-1-1.4s.7-1 1.7-1.7c-.5-.7 0-2-1.2-1.7l-2.8 2c3.6-3 4.3-6.1 3.6-7.1-.7 1-1.4 0-2.2 1 2.2-3 4.1-6.4 0-4.1-5.6 3.7-11.2 7.5-16.6 11.5.2-.8.2-1.3-.1-1.5l.1-.1c.8-1.3 3.6-1.7 2.9-3.9l-1 1c.2-1.9 2.1-2 2.8-3.3-.6-.6-.9-.9-.8-1.5-.7.7-1.4 1.9-2.4 2.3l-.9-.9c.4-1 2-1.3 2.4-2.3l-1.2-1.2c-.3-.3.1-.6.4-.9l-1.3 1.3-1.2-1.2c-.3-.3.1-.6.4-.9-.6-.6-.8-1.5-1.4-1.5l-1 1c1.1-1.6.3-3.7-.6-4.6 0 .6-.9-.3-.9.3.1-1.9 0-4-1.7-3-6 4.7-11 9.4-15.9 14.2-.1-.2-.3-.3-.6-.3l-1.8 1.2c2.2-2 2.3-4.6 1.6-5.6-.4.8-1.1-.3-1.5.5 1.1-2.3 2-4.9-.7-3.6C42.8 21.5 21.5 37.8.4 53c-1 1.2.1 1.5.5 2.1 2.5-1.7 4.7-3.7 7-4.2.6-.4.3 1.8 1.4 2.1.6-.4 1.9-1.2 2.5-1.7 1.3.6.8 2.5 2.1 3.1 1.3.6 3.3-1.7 4.4-1.5 2.3-.6-.5 1.9-2.4 3.1 1.1.3-1.2.8-.8 1.5.9 1.4 1.9 2.8 5 2.1.9-.1.9 1.4 1.4 2.1 7.4-5 15.4-10.4 21.9-16.8 3.6-3.5 8.6-6.2 13.1-9.2.5.7.8 1.6 1.6 2 1.2.7 2.1-1.2 3-.9 1.6-.3.1 1.6-1 2.5.9.3-.7.6-.2 1.2.8 1 1.6 1.9 2.9 2.2-2.3 1.9-4.6 3.9-6.9 5.8-15.9 13.9-31 28.3-45.5 42.8-1.4 1.9 0 1.7.6 2.3 3.4-3.2 6.4-6.8 9.6-8.6.9-.8.3 2 1.7 1.8.9-.8 2.5-2.4 3.4-3.2 1.7.1.8 2.6 2.5 2.7 1.7.1 4.5-3.6 6-3.8 3.1-1.7-.9 2.5-3.4 4.8 1.4-.2-1.7 1.6-1.1 2.2l.4.4c-4.6 5.2-9.3 10.1-14.4 14.6-.6.8-.6 1.2-.4 1.5.2.3.7.4 1 .8 1.5-1.3 2.9-2.7 4.3-3.9s2.7-2.4 4.1-3.1c.7-.7.4 1.9 1.7 1.8.7-.7 2.2-2.1 2.9-2.8 1.6.2 1 2.5 2.6 2.6 1.6.1 3.9-3.4 5.2-3.6 1.4-.9 1.2-.3.5.8s-2.1 2.7-3.2 3.8c1.3-.2-1.5 1.5-.9 2.1.3.3.7.7 1.1 1-2.2 2.6-4.5 5.1-6.9 7.6-4.7 4.9-9.5 9.6-14.7 13.7-.5.6-.8 1-.9 1.3-.1.3-.1.5 0 .6.2.3.8.4 1 .7 2.4-1.9 4.8-3.9 6.9-5.8 1.1-1 2.2-1.8 3.2-2.7 1-.9 2-1.7 3-2.3 1.1-1.1 0 2.3 1.7 1.8 1.2-1.1 3.4-3.3 4.5-4.5 2-.3.7 2.9 2.7 2.6 2.1-.3 5.9-5.6 7.6-6.3 1.9-1.6 1.6-.7.4.9-1.2 1.6-3.4 4.1-5.1 5.9 1.8-.6-2.3 2.3-1.7 2.9s1.2 1.2 2.3 1.1c1.1-.1 2.9-.7 5.6-2.8 1.4-.9 1.2 1.1 1.8 1.7 6.7-7.1 13-14.8 19.2-22.4.5 0 .1 2.1 1.2 2.1.9-.7 2.6-2 3.5-2.7 1.7.2.7 2.6 2.4 2.9 1.7.2 4.6-3.4 6-3.7.3-.2.5-.3.7-.3-10.3 11.6-20.6 23.1-30.7 34.6-2 2.7-.2 2.1.4 2.6 4.5-4.9 8.7-10.1 12.7-13.2 1.1-1.2.1 2.3 1.8 1.7 1.1-1.2 3.4-3.7 4.5-4.9 2-.4.7 2.9 2.8 2.5.7-.1 1.5-.8 2.4-1.6-1.4 1.7-2.8 3.3-4.2 4.9-.8 1.5.3 1.4 1 2 1.4-1.5 2.7-3.1 4-4.4-.7.8-2.2 2.2-1.8 2.6 1.2 1.1 2.4 2.2 7.9-1.8 1.4-.9 1.2 1.1 1.8 1.7 1.6-1.7 3.1-3.4 4.7-5.1.2-.2.5-.3.7-.3 2.2-1.3-.1 2.1-1.8 3.9 1.2-.1-1.1 1.2-.5 1.8 1.1 1 2.2 2 4.7 1-5.7 7.9-11.4 15.8-17.1 23.6-1.3 2.4.2 1.8.8 2.3 3.2-4.2 6.1-8.7 9.1-11.4.8-1.1.5 2.1 2 1.5.8-1.1 2.4-3.2 3.2-4.2 1.8-.3 1.2 2.6 3 2.2s4.3-5 5.8-5.6c3.1-2.7-.6 2.9-3 6 1.5-.6-1.6 2.1-.9 2.6 1.3 1 2.6 2 6.8-1.5 1.1-.8 1.3 1 2 1.5 2.5-3.3 5.1-6.7 7.7-10.2.3.2 1 .7 1.3.9.3.2 0 .7-.4 1.2.3.2.5.5.7.8-5.9 7.4-11.7 15.1-16.7 23.6-.4 1-.2 1.3.1 1.5.3.2.8.2 1.1.4 2.1-3.4 4-7 6.4-8.9.6-.8.8 1.8 2 1.4.6-.8 1.7-2.4 2.3-3.1 1.6 0 1.4 2.3 3 2.2 1.6 0 3.2-3.5 4.5-3.7.2-.1.4-.2.5-.3l-11.1 13.8c-.8 1.6.4 1.4 1 2 2.2-2.6 4.1-5.4 6.4-6.8.6-.6.7 1.7 1.9 1.6.6-.6 1.7-1.9 2.2-2.6 1.5.2 1.3 2.3 2.8 2.4 1.5.2 3.1-3 4.3-3.1 2.3-1.4-.2 2.1-1.8 4 1.2-.1-1.1 1.3-.5 1.8 1.3 1.1 2.5 2.2 5.7.4.9-.4 1.3 1.1 1.9 1.6 6.7-7.8 13.8-16.3 19.1-25.2 4.5-7.3 12.4-14.2 16.7-21.6 1.3-2.2 5.3-4.5 4.7-7.1l-1.6 2c.6-2.8 3.2-4 4.5-6.2-.6-.5-1-.8-.8-1.7-1.1 1.3-2.4 3.6-3.8 4.6l-1-.8c.8-1.6 3-3.1 3.8-4.6-.3-.3-1-.8-1.3-1-.3-.3.2-.9.7-1.6-.5.7-1.6 2-2.1 2.7-.3-.3-1-.8-1.3-1-.3-.3.2-.9.7-1.6-.6-.5-.8-1.7-1.6-1.3l-1.6 2c1.5-2.4 1.4-4.7.7-5.8 0-.3 0-.6-.1-.8l-.2.4-.1-.1c-.1.5-.4.5-.7.5 1-2.2 2.8-3.8 3.8-6-.7-.4-1.1-.6-.9-1.7-.9 1.5-1.9 3.8-3.1 5.2 0-1-.2-1.5-1-1.1.9-1.6 2.5-3.2 3-4.7-.3-.2-.8-.5-1.2-.7 3-4.1 5.8-8.3 8.1-12.7 3.5-6.5 10.4-12.4 13.7-19 1-2 4.6-3.9 3.8-6.3l-1.1 1.9z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/maskedImage.component.jsx",
          lineNumber: 15,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/maskedImage.component.jsx",
        lineNumber: 14,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("clipPath", { id: "b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "use",
        {
          xlinkHref: "#a",
          style: {
            overflow: "visible"
          }
        },
        void 0,
        !1,
        {
          fileName: "app/components/maskedImage.component.jsx",
          lineNumber: 21,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/maskedImage.component.jsx",
        lineNumber: 20,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "g",
        {
          style: {
            clipPath: "url(#b)"
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "image",
            {
              xlinkHref: props.image,
              width: 959,
              height: 679,
              style: {
                overflow: "visible"
              },
              transform: "matrix(.25 0 0 .25 -24.96 -2.615)"
            },
            void 0,
            !1,
            {
              fileName: "app/components/maskedImage.component.jsx",
              lineNumber: 33,
              columnNumber: 7
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/maskedImage.component.jsx",
          lineNumber: 28,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/maskedImage.component.jsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
);
function MaskedImage(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: props.classprop, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SvgComponent, { image: props.image }, void 0, !1, {
    fileName: "app/components/maskedImage.component.jsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/maskedImage.component.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/components/mainMenu.component.jsx
var import_react6 = require("@remix-run/react"), import_react_animate_on_scroll = __toESM(require("react-animate-on-scroll"));

// app/styles/menu.styles.css
var menu_styles_default = "/build/_assets/menu.styles-SGLSPFPF.css";

// app/components/mainMenu.component.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), menuItems = [
  {
    name: "branding & logos",
    link: "/branding",
    image: "/images/RexTest.png"
  },
  {
    name: "print design",
    link: "/print",
    image: "/images/SummitSign.webp"
  },
  {
    name: "web design",
    link: "/web",
    image: "/images/HoodGuyMockup copy.webp"
  },
  {
    name: "about me",
    link: "/about",
    image: "/images/AboutPic.png"
  }
];
function newArray(linkName) {
  var newPages = [];
  return menuItems.forEach((element) => {
    element.link != linkName && newPages.push(element);
  }), newPages;
}
function getName(linkName) {
  var page = [];
  return menuItems.forEach((element) => {
    element.link === linkName && (page = element);
  }), page;
}
function MainMenu(props) {
  let [image, setImage] = (0, import_react5.useState)("/images/ContactBanner.png"), [hoveredItem, setHovered] = (0, import_react5.useState)(""), scrolling = props.scrolling, page = String("/" + props.page), newPages = newArray(page);
  function changeHover(newItem) {
    setHovered(newItem.name), setImage(newItem.image);
  }
  function unsetHover() {
    setHovered("");
  }
  let currentElement = getName(page), onReopen = props.onReopen;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "background", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(logoBleedOfflSVG_component_default, { className: "logoHeading", color: "white", logoID: "logoHead" }, void 0, !1, {
      fileName: "app/components/mainMenu.component.jsx",
      lineNumber: 73,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/components/mainMenu.component.jsx",
      lineNumber: 73,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      MaskedImage,
      {
        classprop: "mainMenuImage",
        image,
        alt: "Branding"
      },
      void 0,
      !1,
      {
        fileName: "app/components/mainMenu.component.jsx",
        lineNumber: 74,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "menuList", children: [
      scrolling && props.page && props.page != "/" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_animate_on_scroll.default, { animateIn: "slideInLeft", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bounding", onMouseEnter: () => changeHover(currentElement), onMouseLeave: unsetHover, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === currentElement.name ? "highlightImage" : "highlightImage offImage" }, void 0, !1, {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 84,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "div",
          {
            className: hoveredItem === currentElement.name ? "menuItem active" : "menuItem",
            onClick: onReopen,
            children: currentElement
          },
          void 0,
          !1,
          {
            fileName: "app/components/mainMenu.component.jsx",
            lineNumber: 87,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/mainMenu.component.jsx",
        lineNumber: 83,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/mainMenu.component.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this) : props.page && props.page != "/" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "div",
        {
          className: "bounding",
          onMouseEnter: () => changeHover(currentElement),
          onMouseLeave: unsetHover,
          onClick: onReopen,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === currentElement.name ? "highlightImage" : "highlightImage offImage" }, void 0, !1, {
              fileName: "app/components/mainMenu.component.jsx",
              lineNumber: 102,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "div",
              {
                className: hoveredItem === currentElement.name ? "menuItem active" : "menuItem",
                children: currentElement.name
              },
              void 0,
              !1,
              {
                fileName: "app/components/mainMenu.component.jsx",
                lineNumber: 105,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 96,
          columnNumber: 9
        },
        this
      ) : "",
      scrolling ? newPages.map(
        (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_animate_on_scroll.default, { animateIn: "slideInLeft", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bounding", onMouseEnter: () => changeHover(item), onMouseLeave: unsetHover, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === item.name ? "highlightImage" : "highlightImage offImage" }, void 0, !1, {
            fileName: "app/components/mainMenu.component.jsx",
            lineNumber: 117,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_react6.Link,
            {
              to: item.link,
              className: hoveredItem === item.name ? "menuItem active" : "menuItem",
              children: item.name
            },
            void 0,
            !1,
            {
              fileName: "app/components/mainMenu.component.jsx",
              lineNumber: 120,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 116,
          columnNumber: 11
        }, this) }, item.name, !1, {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 115,
          columnNumber: 9
        }, this)
      ) : newPages.map(
        (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bounding", onMouseEnter: () => changeHover(item), onMouseLeave: unsetHover, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === item.name ? "highlightImage" : "highlightImage offImage" }, void 0, !1, {
            fileName: "app/components/mainMenu.component.jsx",
            lineNumber: 131,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_react6.Link,
            {
              to: item.link,
              className: hoveredItem === item.name ? "menuItem active" : "menuItem",
              children: item.name
            },
            void 0,
            !1,
            {
              fileName: "app/components/mainMenu.component.jsx",
              lineNumber: 134,
              columnNumber: 13
            },
            this
          )
        ] }, item.name, !0, {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 130,
          columnNumber: 9
        }, this)
      )
    ] }, void 0, !0, {
      fileName: "app/components/mainMenu.component.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/mainMenu.component.jsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}
var links3 = () => [
  { rel: "stylesheet", href: menu_styles_default }
];

// app/styles/page.styles.css
var page_styles_default = "/build/_assets/page.styles-OG3IJOSZ.css";

// brandingInfo.json
var brandingInfo_default = {
  branding: [{
    name: "Enhance Printing",
    images: [{
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-1.webp",
      alt: "Enhance Printing Brand Portfolio",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-1_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/enhance/EnhanceWebsite.webp",
      alt: "A Website To Compete in a Modern Market",
      placeholder: "/images/brandImages/enhance/EnhanceWebsite_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-9.webp",
      alt: "Stationary to fit the New Look",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-9_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/Enhance_Sketches.webp",
      alt: "Sketching out the Idea",
      placeholder: "/images/brandImages/enhance/Enhance_Sketches_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-8.webp",
      alt: "Branded Icons to Communicate Services Quickly",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-8_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-4.webp",
      alt: "Bringing the Brand To Life With Color",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-4_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-6.webp",
      alt: "The Brand Identity Across Print",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-6_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/EnhanceMagazines.webp",
      alt: "Magazines to Showcase Services",
      placeholder: "/images/brandImages/enhance/EnhanceMagazines_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/EnhanceMagazines_Spreads.webp",
      alt: "Magazines to Showcase Services",
      placeholder: "/images/brandImages/enhance/EnhanceMagazines_Spreads_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-11.webp",
      alt: "Enhance Printing, Refreshed and Ready to Serve",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-11_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "The Rolling Restaurant",
    images: [{
      image: "/images/brandImages/rolling/RollingRest_Logo.webp",
      alt: "The Rolling Restaurant Brand Identity",
      placeholder: "/images/brandImages/rolling/RollingRest_Logo_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/rolling/FoodWrap_1.webp",
      alt: "Eyecatching Wraps to Draw New Customers",
      placeholder: "/images/brandImages/rolling/FoodWrap_1_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/FoodWrap_2.webp",
      alt: "Eyecatching Wraps to Draw New Customers",
      placeholder: "/images/brandImages/rolling/FoodWrap_2_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/RollingRest_Sketches.webp",
      alt: "Crafting the Brand Identity",
      placeholder: "/images/brandImages/rolling/RollingRest_Sketches.webp_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/RollingRest_Alternates.webp",
      alt: "Alternate Logos in the Brainstorming Stage",
      placeholder: "/images/brandImages/rolling/RollingRest_Alternates_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/Shirt-Mockup.webp",
      alt: "Repping the Brand While Cooking",
      placeholder: "/images/brandImages/rolling/Shirt-Mockup_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/rolling/RollingRestaurant_BCs.webp",
      alt: "Business Cards to Drum Up Business",
      placeholder: "/images/brandImages/rolling/RollingRestaurant_BCs_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/RollingRestaurant_BurgerBox.webp",
      alt: "Taking a Piece Home With You",
      placeholder: "/images/brandImages/rolling/RollingRestaurant_BurgerBox_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/RollingRestaurant_Menu.webp",
      alt: "A Menu To Catch the Eye",
      placeholder: "/images/brandImages/rolling/RollingRestaurant_Menu_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Rex's Plumbing",
    images: [{
      image: "/images/brandImages/rex/RexLogo.webp",
      alt: "Rex's Plumbing & Heating",
      placeholder: "/images/brandImages/rex/RexLogo_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/rex/Rex Van.webp",
      alt: "Eyecatching Vehicles for Mobile Advertising",
      placeholder: "/images/brandImages/rex/Rex Van_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rex/RexShirt_Mockup.webp",
      alt: "Shirts For Customer Trust",
      placeholder: "/images/brandImages/rex/RexShirt_Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rex/Rex_Sketches.webp",
      alt: "Crafting the Brand Identity",
      placeholder: "/images/brandImages/rex/Rex_Sketches_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rex/Rex_Alternates.webp",
      alt: "Alternate Logos in the Brainstorming Stage",
      placeholder: "/images/brandImages/rex/Rex_Alternates_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rex/RexBC.webp",
      alt: "Business Cards to Drum Up Business",
      placeholder: "/images/brandImages/rex/RexBCs_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rex/Rex-Presentation-TemplateArtboard-6.webp",
      alt: "Creating the Brand's Voice",
      placeholder: "/images/brandImages/rex/Rex-Presentation-TemplateArtboard-6_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rex/Rex-Presentation-TemplateArtboard-11.webp",
      alt: "A New Face For Rex",
      placeholder: "/images/brandImages/rex/Rex-Presentation-TemplateArtboard-11_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Aegir's Workshop",
    images: [{
      image: "/images/brandImages/aegir/Aegirs-Artboard-11.webp",
      alt: "Aegir's Workshop Brand",
      placeholder: "/images/brandImages/aegir/Aegirs-Artboard-11_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/aegir/Aegir_Sketches.webp",
      alt: "Crafting the Brand Identity",
      placeholder: "/images/brandImages/aegir/Aegir_Sketches_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/Aegir_Alternates.webp",
      alt: "Alternate Logos in the Brainstorming Stage",
      placeholder: "/images/brandImages/aegir/Aegir_Alternates_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/Aegirs-Artboard-7.webp",
      alt: "Branded Imagery",
      placeholder: "/images/brandImages/aegir/Aegirs-Artboard-7_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/Aegirs-Artboard-4.webp",
      alt: "Finding the Brand's Look",
      placeholder: "/images/brandImages/aegir/Aegirs-Artboard-4_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/AegirsWorkshopSite.webp",
      alt: "A Website To Draw Consumer's to Custom Goods",
      placeholder: "/images/brandImages/aegir/AegirsWorkshopSite_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/AegirsBC_Mockup.webp",
      alt: "Business Cards for Local Sales",
      placeholder: "/images/brandImages/aegir/AegirsBC_Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/AegirsLabel.webp",
      alt: "Custom Tags",
      placeholder: "/images/brandImages/aegir/AegirsLabel_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/AegirsTag.webp",
      alt: "Tags for Custom Items",
      placeholder: "/images/brandImages/aegir/AegirsTag_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Mutt Knee Brace",
    images: [{
      image: "/images/brandImages/mutt/MuttKneeLogo.webp",
      alt: "Mutt Knee Brace Logo Design",
      placeholder: "/images/brandImages/mutt/MuttKneeLogo_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/mutt/MuttKneeBusinessCards.webp",
      alt: "Mutt Knee Brace Business Cards",
      placeholder: "/images/brandImages/mutt/MuttKneeBusinessCards_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/mutt/MuttKneeTrifold.webp",
      alt: "Mutt Knee Brace Brochures",
      placeholder: "/images/brandImages/mutt/MuttKneeTrifold_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Four Seasons Businesss Solutions",
    images: [{
      image: "/images/brandImages/seasons/FourSeasonsLogo.webp",
      alt: "Four Seasons Businesss Solutions Logo Design",
      placeholder: "/images/brandImages/seasons/FourSeasonsLogo_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/seasons/FourSeasons_Letterhead.webp",
      alt: "Four Seasons Businesss Solutions Letterhead",
      placeholder: "/images/brandImages/seasons/FourSeasons_Letterhead_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/seasons/FourSeasons_BC.webp",
      alt: "Four Seasons Businesss Solutions Business Cards",
      placeholder: "/images/brandImages/seasons/FourSeasons_BC_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Sleepy Siren Bath Company",
    images: [{
      image: "/images/brandImages/siren/SleepySirenLogo.webp",
      alt: "Sleepy Siren Bath Co. Logo Design",
      placeholder: "/images/brandImages/siren/SleepySirenLogo_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/siren/SleepySirenSoapMockup.webp",
      alt: "Sleepy Siren Bath Co. Soap Packaging",
      placeholder: "/images/brandImages/siren/SleepySirenSoapMockup_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/siren/SleepySiren_PerfumeBottle.webp",
      alt: "Sleepy Siren Bath Co. Fragrance Bottle",
      placeholder: "/images/brandImages/siren/SleepySiren_PerfumeBottle_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "RetroFit Electric",
    images: [{
      image: "/images/brandImages/misc/RetroFit-Electric-Logo.webp",
      alt: "RetroFit Electric Logo Design",
      placeholder: "/images/brandImages/misc/RetroFit-Electric-Logo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Ascendent Sales & Marketing",
    images: [{
      image: "/images/brandImages/misc/AscendentLogo.webp",
      alt: "Ascendent Sales & Marketing Logo Design",
      placeholder: "/images/brandImages/misc/AscendentLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "True North Sales & Marketing",
    images: [{
      image: "/images/brandImages/misc/TrueNorthLogo.webp",
      alt: "True North Sales & Marketing Logo Design",
      placeholder: "/images/brandImages/misc/TrueNorthLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Execute Multi Services Logo Design",
    images: [{
      image: "/images/brandImages/misc/ExecuteLogo.webp",
      alt: "Execute Multi Services Logo Design",
      placeholder: "/images/brandImages/misc/ExecuteLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Summit Cabinet Coatings Logo Design",
    images: [{
      image: "/images/brandImages/misc/SummitCabinetLogo.webp",
      alt: "Summit Cabinet Coatings Logo Design",
      placeholder: "/images/brandImages/misc/SummitCabinetLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "NoCo Patch Pros Logo Design",
    images: [{
      image: "/images/brandImages/misc/NoCoPatchProsLogo.webp",
      alt: "NoCo Patch Pros Logo Design",
      placeholder: "/images/brandImages/misc/NoCoPatchProsLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Illumination Hebrew Insights Logo Design",
    images: [{
      image: "/images/brandImages/misc/IlluminationLogo.webp",
      alt: "Illumination Hebrew Insights Logo Design",
      placeholder: "/images/brandImages/misc/IlluminationLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Jennifer Madrick Real Estate",
    images: [{
      image: "/images/brandImages/misc/JenniferMadrickLogo.webp",
      alt: "Jennifer Madrick Real Estate",
      placeholder: "/images/brandImages/misc/JenniferMadrickLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Endodontic of the Rockies Spec Logo Design",
    images: [{
      image: "/images/brandImages/misc/EndoRockiesMockup.webp",
      alt: "Endodontic of the Rockies Spec Logo Design",
      placeholder: "/images/brandImages/misc/EndoRockiesMockup_LowRes.webp",
      size: "large"
    }]
  }],
  print: [{
    name: "Branded Designs",
    images: [{
      image: "/images/brandImages/rolling/RollingRestaurant_BCs.webp",
      alt: "Rolling Restaurant Business Cards",
      placeholder: "/images/brandImages/rolling/RollingRestaurant_BCs_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/seasons/FourSeasons_Letterhead.webp",
      alt: "Four Seasons Businesss Solutions Letterhead",
      placeholder: "/images/brandImages/seasons/FourSeasons_Letterhead_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/seasons/FourSeasons_BC.webp",
      alt: "Four Seasons Businesss Solutions Business Cards",
      placeholder: "/images/brandImages/seasons/FourSeasons_BC_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/EndoRockies_Round_Sticker_Mockup_6.webp",
      alt: "Endodontic of the Rockies Stickers",
      placeholder: "/images/printImages/EndoRockies_Round_Sticker_Mockup_6_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/Shirt-Mockup.webp",
      alt: "Rolling Restaurant T-Shirt",
      placeholder: "/images/brandImages/rolling/Shirt-Mockup_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-9.webp",
      alt: "Enhance Printing Stationary",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-9_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/AegirsBC_Mockup.webp",
      alt: "Aegir's workshop Business Cards",
      placeholder: "/images/brandImages/aegir/AegirsBC_Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/mutt/MuttKneeBusinessCards.webp",
      alt: "Mutt Knee Brace Business Cards",
      placeholder: "/images/brandImages/mutt/MuttKneeBusinessCards_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/mutt/MuttKneeTrifold.webp",
      alt: "Mutt Knee Brace Brochures",
      placeholder: "/images/brandImages/mutt/MuttKneeTrifold_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Tradeshow Design & Signage",
    images: [{
      image: "/images/printImages/EliteEstheticianBooth.webp",
      alt: "Elite Esthetician Booth Setup",
      placeholder: "/images/printImages/EliteEstheticianBooth_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/retractables.webp",
      alt: "Tanco Engineering Retractable Banners",
      placeholder: "/images/printImages/retractables_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/RollingRestaurant_Menu.webp",
      alt: "Rolling Restaurant Menus",
      placeholder: "/images/rolling/RollingRestaurant_Menu_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/SummitSign.webp",
      alt: "Summit Cabinet Coatings Signage",
      placeholder: "/images/printImages/SummitSign_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Packaging Design",
    images: [{
      image: "/images/printImages/FreyaAbsinthe_MockUp.webp",
      alt: "Freya Absinthe Bottle",
      placeholder: "/images/printImages/FreyaAbsinthe_MockUp_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/MatadorBottle_v2_Mockup.webp",
      alt: "Matty's Red Hot Louisiana Style Hot Sauce",
      placeholder: "/images/printImages/MatadorBottle_v2_Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/siren/SleepySirenSoapMockup.webp",
      alt: "Sleepy Siren Bath Co. Soap Packaging",
      placeholder: "/images/brandImages/siren/SleepySirenSoapMockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/siren/SleepySiren_PerfumeBottle.webp",
      alt: "Sleepy Siren Bath Co. Fragrance Bottle",
      placeholder: "/images/brandImages/siren/SleepySiren_PerfumeBottle_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/ThankYouBox-Mockup.webp",
      alt: "Kenny Anderson Realty Thank You Box",
      placeholder: "/images/printImages/ThankYouBox-Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/RollingRestaurant_BurgerBox.webp",
      alt: "Rolling Restaurant Burger Box",
      placeholder: "/images/brandImages/rolling/RollingRestaurant_BurgerBox_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/AegirsLabel.webp",
      alt: "Aegir's Workshop Leather Tag",
      placeholder: "/images/brandImages/aegir/AegirsLabel_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/AegirsTag.webp",
      alt: "Aegir's Workshop Custom Item Tag",
      placeholder: "/images/brandImages/aegir/AegirsTag_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Vehicle Wraps",
    images: [{
      image: "/images/brandImages/rolling/FoodWrap_1.webp",
      alt: "Rolling Restaurant Vehicle Wrap",
      placeholder: "/images/brandImages/rolling/FoodWrap_1_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/FoodWrap_2.webp",
      alt: "Rolling Restaurant Vehicle Wrap",
      placeholder: "/images/brandImages/rolling/FoodWrap_2_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/CMM_wrap.webp",
      alt: "Concrete Mobile Mix Wrap",
      placeholder: "/images/printImages/CMM_wrap_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rex/Rex Van.webp",
      alt: "Eyecatching Vehicles for Mobile Advertising",
      placeholder: "/images/brandImages/rex/Rex Van_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Book & Magazine Design",
    images: [{
      image: "/images/printImages/FossilBaseball_MagazineCover.webp",
      alt: "Fossil Ridge High School Player Guide Cover",
      placeholder: "/images/printImages/FossilBaseball_MagazineCover_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/FossilBaseball_MagazineGuts.webp",
      alt: "Fossil Ridge High School Player Guide Inside",
      placeholder: "/images/printImages/FossilBaseball_MagazineGuts_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/EnhanceMagazines.webp",
      alt: "Enhance Printing Graphics Magazine Cover",
      placeholder: "/images/brandImages/enhance/EnhanceMagazines_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/EnhanceMagazines_Spreads.webp",
      alt: "Enhance Printing Graphics Magazine Interior",
      placeholder: "/images/brandImages/enhance/EnhanceMagazines_Spreads_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/DeadlandsBook Mockup.webp",
      alt: "Novel Cover Design",
      placeholder: "/images/printImages/DeadlandsBook Mockup_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Invitations & Cards",
    images: [{
      image: "/images/printImages/Invitations_Gatefold.webp",
      alt: "Wedding Invitations",
      placeholder: "/images/printImages/Invitations_Gatefold_LowRes.webp",
      size: "large"
    }]
  }],
  web: [{
    name: "Enhance Printing Website",
    image: "/images/webImages/EnhanceWebsite.webp",
    alt: "Enhance Printing Website",
    placeholder: "/images/webImages/EnhanceWebsite-lowRes.webp"
  }, {
    name: "Hood Guy Website",
    image: "/images/HoodGuyMockup copy.webp",
    alt: "Hood Guy Website",
    placeholder: "/images/HoodGuyMockup copy-lowRes.webp"
  }, {
    name: "Aegir's Workshop Website",
    image: "/images/webImages/AegirsSite.webp",
    alt: "Aegir's Workshop Website",
    placeholder: "/images/webImages/AegirsSite-lowRes.webp"
  }, {
    name: "NatureScapes Photography Website",
    image: "/images/webImages/NatureScapesWebsite.webp",
    alt: "NatureScapes Photography Website",
    placeholder: "/images/webImages/NatureScapesWebsite-lowRes.webp"
  }, {
    name: "Kenny Anderson Website",
    image: "/images/webImages/KennyAndersonWebsite.webp",
    alt: "Kenny Anderson Website",
    placeholder: "/images/webImages/KennyAndersonWebsite-lowRes.webp"
  }]
};

// app/routes/__app.branding-original.jsx
var import_react9 = require("@remix-run/react");

// app/styles/modal.styles.css
var modal_styles_default = "/build/_assets/modal.styles-C7Z5U5WH.css";

// app/components/progressiveImage.component.jsx
var import_react7 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  let [imgSrc, setImgSrc] = (0, import_react7.useState)(placeholderSrc || src);
  (0, import_react7.useEffect)(() => {
    let img = new Image();
    img.src = src, img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  let customClass = placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "img",
    {
      src: imgSrc,
      ...props,
      alt: props.alt || "",
      className: props.classTitle + " " + customClass
    },
    void 0,
    !1,
    {
      fileName: "app/components/progressiveImage.component.jsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}, progressiveImage_component_default = ProgressiveImg;

// app/components/modal.component.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Modal = (props) => {
  let onClose = props.onClose;
  if (props.data && props.data != "") {
    let images = props.data.images;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "modalBackground " + props.className, style: { backgroundColor: props.color }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "modalContain", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { onClick: onClose, className: "buttonModal", children: "x" }, void 0, !1, {
        fileName: "app/components/modal.component.jsx",
        lineNumber: 15,
        columnNumber: 17
      }, this),
      images.map(
        (image) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          progressiveImage_component_default,
          {
            src: image.image,
            placeholderSrc: image.placeholder,
            classTitle: image.size === "small" ? "secondaryImage" : "brandImage",
            alt: image.alt
          },
          image.image,
          !1,
          {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 17,
            columnNumber: 11
          },
          this
        )
      )
    ] }, void 0, !0, {
      fileName: "app/components/modal.component.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/modal.component.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this);
  }
}, modal_component_default = Modal, links4 = () => [
  { rel: "stylesheet", href: modal_styles_default }
];

// app/routes/__app.branding-original.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links5 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  ...links3(),
  ...links2(),
  ...links4()
], meta = () => [
  { title: "Brand Identity Services | Stephen Kloepfer Branding & Design?" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition." },
  { name: "og:title", content: "Stephen Kloepfer Branding Services" },
  { name: "og:description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition." },
  { name: "og:image", content: "/social_preview.png" }
], Branding = () => {
  let [triggered, setTriggered] = (0, import_react8.useState)(!1), [loaded, hasloaded] = (0, import_react8.useState)(!1), [activeBrand, setActiveBrand] = (0, import_react8.useState)(), [brandIsActive, setBrandBool] = (0, import_react8.useState)(!1), delay = (ms) => new Promise((res) => setTimeout(res, ms)), navigate = (0, import_react9.useNavigate)(), triggerSlide = async () => {
    await delay(250), hasloaded(!0), setTriggered(!0);
  }, data_from_child = async (data) => {
    data != "" && data != null && (closeSlide(), await delay(500), navigate("/" + data));
  }, closeSlide = () => {
    setTriggered(!1);
  }, brandData = (0, import_react9.useLoaderData)();
  (0, import_react8.useEffect)(() => {
    loaded || triggerSlide();
  });
  let [hoveredItem, setHovered] = (0, import_react8.useState)("");
  function changeHover(newItem) {
    setHovered(newItem.name);
  }
  function unsetHover() {
    setHovered("");
  }
  function selectBrand(brand) {
    setActiveBrand(brand), setBrandBool(!0);
  }
  let onClose = () => {
    setActiveBrand(""), setBrandBool(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      MainMenu,
      {
        page: "branding",
        onReopen: () => {
          console.log("fire"), hasloaded(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.branding-original.jsx",
        lineNumber: 92,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: triggered ? "slider backgroundGreen activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.branding-original.jsx",
        lineNumber: 97,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(pagesHeader_component_default, { background: "#1A746F", setter: data_from_child, onClose: closeSlide, active: "branding" }, void 0, !1, {
        fileName: "app/routes/__app.branding-original.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "heading", children: "Brand Identity" }, void 0, !1, {
          fileName: "app/routes/__app.branding-original.jsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "submenuBox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "submenuList", children: brandData.branding.map(
          (brand) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bounding", onMouseEnter: () => changeHover(brand), onMouseLeave: unsetHover, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === brand.name ? "highlightImage" : "highlightImage offImage" }, void 0, !1, {
              fileName: "app/routes/__app.branding-original.jsx",
              lineNumber: 107,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "h2",
              {
                className: hoveredItem === brand.name ? "menuItem active" : "menuItem",
                onClick: () => selectBrand(brand),
                children: brand.name
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__app.branding-original.jsx",
                lineNumber: 110,
                columnNumber: 28
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/__app.branding-original.jsx",
              lineNumber: 110,
              columnNumber: 25
            }, this)
          ] }, brand.name, !0, {
            fileName: "app/routes/__app.branding-original.jsx",
            lineNumber: 106,
            columnNumber: 15
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/__app.branding-original.jsx",
          lineNumber: 103,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/__app.branding-original.jsx",
          lineNumber: 101,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.branding-original.jsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.branding-original.jsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      modal_component_default,
      {
        onClose,
        className: brandIsActive ? "openModal" : "closeModal",
        color: "black",
        data: activeBrand
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.branding-original.jsx",
        lineNumber: 127,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app.branding-original.jsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}, app_branding_original_default = Branding;
async function loader() {
  return brandingInfo_default;
}

// app/routes/__app.print-original.jsx
var app_print_original_exports = {};
__export(app_print_original_exports, {
  default: () => app_print_original_default,
  links: () => links6,
  loader: () => loader2,
  meta: () => meta2
});
var import_react10 = require("react");

// app/styles/print.styles.css
var print_styles_default = "/build/_assets/print.styles-PZO324GG.css";

// app/routes/__app.print-original.jsx
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), links6 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  { rel: "stylesheet", href: print_styles_default },
  ...links3(),
  ...links2()
], meta2 = () => [
  { title: "Print Design | Stephen Kloepfer Branding & Design?" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines." },
  { name: "og:title", content: "Stephen Kloepfer Design for Print Production" },
  { name: "og:description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines." },
  { name: "og:image", content: "/social_preview.png" }
], PrintDesign = () => {
  let [triggered, setTriggered] = (0, import_react10.useState)(!1), [loaded, hasloaded] = (0, import_react10.useState)(!1), brandData = (0, import_react11.useLoaderData)(), delay = (ms) => new Promise((res) => setTimeout(res, ms)), triggerSlide = async () => {
    await delay(500), hasloaded(!0), setTriggered(!0);
  }, closeSlide = () => {
    setTriggered(!1);
  }, navigate = (0, import_react11.useNavigate)(), data_from_child = async (data) => {
    data != "" && data != null && (closeSlide(), await delay(500), navigate("/" + data));
  };
  return (0, import_react10.useEffect)(() => {
    loaded || triggerSlide();
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      MainMenu,
      {
        page: "print",
        onReopen: () => {
          console.log("fire"), hasloaded(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.print-original.jsx",
        lineNumber: 70,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: triggered ? "slider backgroundGreen activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.print-original.jsx",
        lineNumber: 75,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(pagesHeader_component_default, { background: "#1A746F", setter: data_from_child, onClose: closeSlide, active: "print" }, void 0, !1, {
        fileName: "app/routes/__app.print-original.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "heading", children: "Print Design" }, void 0, !1, {
          fileName: "app/routes/__app.print-original.jsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "printRow", children: brandData.print.map(
          (print) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "printImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            progressiveImage_component_default,
            {
              src: print.image,
              placeholderSrc: print.placeholder,
              classTitle: "",
              alt: print.alt
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__app.print-original.jsx",
              lineNumber: 83,
              columnNumber: 17
            },
            this
          ) }, print.name, !1, {
            fileName: "app/routes/__app.print-original.jsx",
            lineNumber: 82,
            columnNumber: 13
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/__app.print-original.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "spacerGreen" }, void 0, !1, {
          fileName: "app/routes/__app.print-original.jsx",
          lineNumber: 93,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.print-original.jsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.print-original.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.print-original.jsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}, app_print_original_default = PrintDesign;
async function loader2() {
  return brandingInfo_default;
}

// app/routes/__app.branding.jsx
var app_branding_exports = {};
__export(app_branding_exports, {
  default: () => app_branding_default,
  links: () => links7,
  loader: () => loader3,
  meta: () => meta3
});
var import_react12 = require("react");
var import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), links7 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  ...links3(),
  ...links2(),
  ...links4()
], meta3 = () => [
  { title: "Brand Identity Services | Stephen Kloepfer Branding & Design?" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition." },
  { name: "og:title", content: "Stephen Kloepfer Branding Services" },
  { name: "og:description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition." },
  { name: "og:image", content: "/social_preview.png" }
], Branding2 = () => {
  let [triggered, setTriggered] = (0, import_react12.useState)(!1), [loaded, hasloaded] = (0, import_react12.useState)(!1), [activeBrand, setActiveBrand] = (0, import_react12.useState)(), [brandIsActive, setBrandBool] = (0, import_react12.useState)(!1), delay = (ms) => new Promise((res) => setTimeout(res, ms)), navigate = (0, import_react13.useNavigate)(), triggerSlide = async () => {
    await delay(250), hasloaded(!0), setTriggered(!0);
  }, data_from_child = async (data) => {
    data != "" && data != null && (closeSlide(), await delay(500), navigate("/" + data));
  }, closeSlide = () => {
    setTriggered(!1);
  }, brandData = (0, import_react13.useLoaderData)();
  (0, import_react12.useEffect)(() => {
    loaded || triggerSlide();
  });
  let [hoveredItem, setHovered] = (0, import_react12.useState)("");
  function changeHover(newItem) {
    setHovered(newItem.name);
  }
  function unsetHover() {
    setHovered("");
  }
  function selectBrand(brand) {
    setActiveBrand(brand), setBrandBool(!0);
  }
  let onClose = () => {
    setActiveBrand(""), setBrandBool(!1);
  }, onReopen = () => {
    hasloaded(!1);
  };
  function checkLength(brand) {
    return brand.images.length;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      MainMenu,
      {
        page: "branding",
        onReopen
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 96,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: triggered ? "slider backgroundLight activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 101,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(pagesHeader_component_default, { background: "dark", setter: data_from_child, onClose: closeSlide, active: "branding" }, void 0, !1, {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "heading", children: [
          "Brand Identity ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/__app.branding.jsx",
            lineNumber: 104,
            columnNumber: 50
          }, this),
          " & Logo Design"
        ] }, void 0, !0, {
          fileName: "app/routes/__app.branding.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "imageGrid", children: brandData.branding.map(
          (brand) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "imageBox", onMouseEnter: () => changeHover(brand), onMouseLeave: unsetHover, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { children: [
            checkLength(brand) > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "overlay", children: "Click to See More" }, void 0, !1, {
              fileName: "app/routes/__app.branding.jsx",
              lineNumber: 112,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "overlay", children: "Click to Expand Image" }, void 0, !1, {
              fileName: "app/routes/__app.branding.jsx",
              lineNumber: 113,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              progressiveImage_component_default,
              {
                alt: brand.name,
                src: brand.images[0].image,
                placeholderSrc: brand.images[0].placeholder,
                classTitle: "primaryImage",
                onClick: () => selectBrand(brand)
              },
              brand.name,
              !1,
              {
                fileName: "app/routes/__app.branding.jsx",
                lineNumber: 116,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/__app.branding.jsx",
            lineNumber: 109,
            columnNumber: 17
          }, this) }, brand.name, !1, {
            fileName: "app/routes/__app.branding.jsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/__app.branding.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.branding.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      modal_component_default,
      {
        onClose,
        className: brandIsActive ? "openModal" : "closeModal",
        color: "white",
        data: activeBrand
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 135,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app.branding.jsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}, app_branding_default = Branding2;
async function loader3() {
  return brandingInfo_default;
}

// app/routes/__app._index.jsx
var app_index_exports = {};
__export(app_index_exports, {
  default: () => Index,
  links: () => links8,
  meta: () => meta4
});

// app/styles/landing.styles.css
var landing_styles_default = "/build/_assets/landing.styles-M5IV2WLF.css";

// app/styles/hero.styles.css
var hero_styles_default = "/build/_assets/hero.styles-LLBGJUWI.css";

// app/components/logoSVG.component.jsx
var React3 = require("react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), MainLogo = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    id: props.logoID,
    "data-name": props.logoID,
    viewBox: "0 0 303.28 51.96",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("style", { children: `.cls-1{fill:${props.color}}` }, void 0, !1, {
        fileName: "app/components/logoSVG.component.jsx",
        lineNumber: 12,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/logoSVG.component.jsx",
        lineNumber: 11,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("g", { id: "Layer_1-2", "data-name": "Layer 1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "path",
          {
            d: "M60.47 45.24h3.42c0 .75-.16 1.82-.83 2.68-.72.92-1.82 1.37-3.07 1.37-2.4 0-4.22-1.76-4.22-4.19s1.88-4.2 4.25-4.2c1.15 0 1.92.39 2.55.88.34.27.65.56.98 1.03l-.43.34c-.23-.39-.56-.72-.78-.9-.51-.43-1.32-.86-2.33-.86-2.09 0-3.68 1.66-3.68 3.74s1.54 3.68 3.64 3.68c1.39 0 2.4-.71 2.84-1.38.32-.49.51-1.16.54-1.69h-2.88v-.49ZM78.85 49.15l-2.64-3.85h-.24v3.85h-.54V41h1.17c.62 0 1.19.05 1.72.42.64.44.84 1.11.84 1.75 0 .81-.35 1.64-1.37 1.98-.43.15-.82.16-1 .16l2.66 3.85h-.61Zm-2.88-4.34h.78c1.16 0 1.86-.61 1.86-1.66 0-.82-.4-1.25-.72-1.42-.34-.2-.93-.24-1.25-.24h-.67v3.32ZM94.76 46.47h-3.47l-1.09 2.68h-.59l3.43-8.4 3.39 8.4h-.59l-1.09-2.68Zm-.2-.49-1.53-3.86-1.55 3.86h3.08ZM108.02 45.28v3.87h-.54V41h1.58c1.33 0 2.38.73 2.38 2.13s-.97 2.15-2.37 2.15h-1.05Zm0-.49h1.08c1.06 0 1.78-.62 1.78-1.65s-.68-1.65-1.87-1.65h-.99v3.3ZM123.24 44.46h4.94V41h.54v8.15h-.54v-4.2h-4.94v4.2h-.54V41h.54v3.46ZM141.23 41v8.15h-.54V41h.54ZM159.73 42.66c-.7-.82-1.7-1.28-2.75-1.28-2.09 0-3.65 1.67-3.65 3.74 0 2.42 2.02 3.68 3.67 3.68.82 0 1.91-.33 2.74-1.23v.71c-.83.73-1.83 1.01-2.71 1.01-2.44 0-4.25-1.92-4.25-4.19s1.88-4.2 4.23-4.2c1.55 0 2.49.83 2.74 1.06v.71ZM183.89 49.15V41h1.61c.72 0 1.98.11 3.01 1.14.87.87 1.17 2.05 1.17 2.94s-.31 2.07-1.17 2.93c-1.03 1.03-2.29 1.14-3.01 1.14h-1.61Zm.54-.49h1.06c2.15 0 3.63-1.47 3.63-3.58s-1.49-3.59-3.63-3.59h-1.06v7.17ZM205.13 41.49h-3.37v2.96h3.3v.49h-3.3v3.73h3.37v.49h-3.91v-8.15h3.91v.49ZM220.38 42.38c-.5-.98-1.38-1-1.6-1-.97 0-1.52.7-1.52 1.52 0 .88.61 1.17 1.43 1.58.81.39 1.21.56 1.63.86.35.24.87.67.87 1.58 0 1.37-1.15 2.38-2.54 2.38-1.05 0-1.59-.5-1.89-.86a2.8 2.8 0 0 1-.53-.89l.46-.22c.11.32.32.64.44.78.37.46.97.7 1.53.7 1.1 0 1.97-.81 1.97-1.88 0-.44-.17-.9-.79-1.28-.23-.13-.71-.38-1.38-.71-.81-.39-1.21-.61-1.49-1.08-.18-.31-.26-.61-.26-.93 0-.94.64-2.03 2.09-2.03.82 0 1.56.39 1.98 1.16l-.39.33ZM233.26 41v8.15h-.54V41h.54ZM249.49 45.24h3.42c0 .75-.16 1.82-.83 2.68-.72.92-1.82 1.37-3.07 1.37-2.4 0-4.22-1.76-4.22-4.19s1.88-4.2 4.25-4.2c1.15 0 1.92.39 2.55.88.34.27.65.56.98 1.03l-.43.34c-.23-.39-.56-.72-.78-.9-.51-.43-1.32-.86-2.33-.86-2.09 0-3.68 1.66-3.68 3.74s1.54 3.68 3.64 3.68c1.39 0 2.4-.71 2.84-1.38.32-.49.51-1.16.54-1.69h-2.88v-.49ZM264.44 49.15v-8.24l6.84 7.16v-7.08h.54v8.36l-6.84-7.16v6.95h-.54ZM287.71 41.49h-3.37v2.96h3.3v.49h-3.3v3.73h3.37v.49h-3.91v-8.15h3.91v.49ZM302.67 49.15l-2.64-3.85h-.24v3.85h-.54V41h1.17c.62 0 1.19.05 1.72.42.64.44.84 1.11.84 1.75 0 .81-.35 1.64-1.37 1.98-.43.15-.82.16-1 .16l2.66 3.85h-.61Zm-2.89-4.34h.78c1.16 0 1.86-.61 1.86-1.66 0-.82-.4-1.25-.72-1.42-.34-.2-.93-.24-1.25-.24h-.67v3.32ZM182.2 14.04c.01-2.86.26-5.36.74-7.51h-9.38c.3 1.37.45 3.95.47 7.73v22.76h12.17l1.5-6.95-5.5.31V14.04ZM214.61 6.69c-.67.07-1.3.3-1.9.67-.85.55-1.44 1.53-1.76 2.95-.12.52-.23 1.41-.34 2.68s-.16 2.38-.16 3.33v9.72c-.03 3.68.17 6.31.6 7.91.36 1.43 1.17 2.35 2.43 2.75.6.19 2.28.31 5.05.34h7.66v-6.63h-7.57v-5.29h7.57v-6.63h-7.57V13.2h7.57V6.57h-7.66c-1.89.03-3.2.08-3.93.16ZM249.66 37.03h8.18V25.1H263v-6.64h-5.16v-5.29H263V6.54h-13.34v30.49zM269.11 6.69c-.67.07-1.3.3-1.9.67-.85.55-1.44 1.53-1.76 2.95-.12.52-.23 1.41-.34 2.68s-.16 2.38-.16 3.33v9.72c-.03 3.68.17 6.31.6 7.91.36 1.43 1.17 2.35 2.43 2.75.6.19 2.28.31 5.05.34h7.66v-6.63h-7.57v-5.29h7.57v-6.63h-7.57V13.2h7.57V6.57h-7.66c-1.89.03-3.2.08-3.93.16ZM171.37 17.77c.12-.49.18-1.42.18-2.79v-3.6c.01-1.55.05-2.52.11-2.93.06-.51.24-1.15.54-1.92h-8.13c-.46 1.09-.69 2.42-.69 4v3.48c0 1.01-.02 1.68-.07 2.01-.09.98-.33 1.66-.71 2.03-.28.25-.77.39-1.47.4h-1.21V6.54H50.85c-.32 0-.49.36-.3.61 4.01 5.22 6.41 11.75 6.41 18.83 0 .18-.01.35-.01.53 0 .16.01.32.01.47 0 1.67-.16 3.29-.47 4.87h13.19v-3.02h-3.55c-1.09 0-1.89-.13-2.41-.4-.48-.27-.8-.77-.98-1.46V16.23c.25-.86.72-1.48 1.4-1.86.58-.3 1.67-.45 3.26-.45h8.98v5.52h-6.61v2.77h2.57c2.13-.03 3.54.44 4.24 1.41.34.57.54 1.53.58 2.9.01.36.02 1.07.02 2.14v3.26c0 .33-.03.8-.1 1.41-.07.61-.13 1.06-.19 1.36-.18.85-.69 1.54-1.54 2.08-.15.09-.35.17-.56.24h7.42-.02c-.66-.23-1.17-.6-1.54-1.11-.64-.91-.94-2.26-.89-4.04V20.33h-1.97v-5.52h1.97V9.27h7.3v5.54h3.46v5.52h-3.46v9.87c0 .51.07.87.22 1.09.22.34.66.52 1.32.54h1.92v5.18h3.74c-.56-.16-1-.38-1.32-.66-.55-.55-.86-1.56-.94-3.04-.01-.39-.02-1.14-.02-2.26v-12.4c.01-1.76.38-2.99 1.09-3.69.51-.49 1.37-.8 2.59-.94.63-.07 1.39-.11 2.3-.11h5.76c2.52.03 4.18.39 4.98 1.07.64.52 1 1.29 1.07 2.3.01.27.02.82.02 1.65v9.63H99.25v1.23c0 .86.19 1.42.56 1.68.34.24 1.02.36 2.03.36h7.95v5.18h6.65c-1.53-1.81-2.85-4.18-3.96-7.12-.71-1.82-1.09-4.3-1.14-7.46v-8.51h7.28v8.47c0 1.98.1 3.66.31 5.03s.66 2.67 1.34 3.89c.67-1.24 1.11-2.53 1.32-3.89.21-1.37.31-3.05.31-5.03v-8.47h7.28v8.51c-.06 3.43-.55 6.21-1.47 8.35-1.09 2.56-2.3 4.63-3.64 6.23h9.01c-.56-.16-1-.38-1.32-.66-.55-.55-.86-1.56-.94-3.04-.01-.39-.02-1.14-.02-2.26v-12.4c.01-1.76.38-2.99 1.09-3.69.51-.49 1.37-.8 2.59-.94.63-.07 1.39-.11 2.3-.11h5.76c2.52.03 4.18.39 4.98 1.07.64.52 1 1.29 1.07 2.3.01.27.02.82.02 1.65v9.63h-10.54v1.23c0 .86.19 1.42.56 1.68.34.24 1.02.36 2.03.36h7.95v5.18h11.24V25.08h1.07c1.19.01 1.94.63 2.26 1.83.09.31.13.97.13 1.97v2.79c0 1.28.06 2.32.18 3.13.12.71.39 1.45.8 2.21h7.84c-.25-.82-.42-1.56-.51-2.23-.09-.73-.13-1.82-.13-3.26v-4.27c0-1.67-.3-2.93-.89-3.78-.74-.98-1.97-1.6-3.69-1.85-.15-.01-.47-.07-.96-.16 1.06-.21 1.81-.37 2.26-.49 1.68-.54 2.72-1.61 3.11-3.22Z",
            className: "cls-1"
          },
          void 0,
          !1,
          {
            fileName: "app/components/logoSVG.component.jsx",
            lineNumber: 15,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "path",
          {
            d: "M141.05 20.33c-.31-.57-.74-.85-1.3-.85-1.09 0-1.63.85-1.63 2.55v2.12h3.26v-2.12c0-.74-.11-1.31-.34-1.7ZM102.21 20.33c-.31-.57-.74-.85-1.3-.85-1.09 0-1.63.85-1.63 2.55v2.12h3.26v-2.12c0-.74-.11-1.31-.34-1.7ZM205.26 7.56c-1.1-.67-2.71-1.01-4.83-1.03h-3.69c-2.11.01-3.72.36-4.83 1.03-1.59.95-2.6 2.86-3.02 5.72-.16 1.43-.25 3.31-.25 5.63v5.72c0 2.32.08 4.2.25 5.63.42 2.87 1.42 4.79 3.02 5.74 1.1.67 2.71 1.01 4.83 1.03h3.69c2.11-.01 3.72-.36 4.83-1.03 1.59-.95 2.59-2.87 2.99-5.74.18-1.43.27-3.31.27-5.63v-5.72c0-2.32-.09-4.2-.27-5.63-.4-2.86-1.4-4.77-2.99-5.72Zm-5.07 20.74c0 .73-.13 1.28-.38 1.65-.36.5-.81.76-1.36.76-.47 0-.89-.2-1.25-.6-.34-.39-.51-.99-.51-1.8V15.2c0-.73.13-1.27.38-1.62.36-.5.82-.76 1.38-.76.46 0 .87.2 1.22.6.34.37.51.96.51 1.78v13.11ZM246.57 7.41c-.66-.55-2.32-.84-5-.87h-13.22v30.49h8.18V25.1h5.7c1.07 0 1.76 0 2.06-.02 1.36-.1 2.3-.57 2.84-1.39.64-.91 1.01-3.21 1.12-6.9v-2.32c0-1.34-.07-2.52-.2-3.53-.19-1.67-.68-2.84-1.45-3.53Zm-7.4 10.52c-.27.31-.79.47-1.58.47h-1.36v-5.3h1.16c.91 0 1.5.21 1.78.62.36.49.53 1.2.53 2.14s-.18 1.65-.53 2.07ZM302.63 31.91V27.2c.07-2.25-.54-3.83-1.83-4.74-.55-.36-1.43-.71-2.64-1.07 1.18-.13 2.04-.39 2.59-.78.95-.7 1.54-1.82 1.76-3.35.07-.57.11-1.53.11-2.88v-1.97c-.01-1.37-.19-2.53-.54-3.48-.45-1.33-1.41-2.08-2.88-2.26-.73-.09-2.02-.13-3.86-.13h-12.51v30.49h8.18V25.1h1.03c.73 0 1.3.17 1.72.51.45.39.68 1.12.69 2.21v4.07c-.01 2.13.19 3.84.63 5.14h8.2c-.42-1.33-.63-3.03-.65-5.12Zm-9.15-13.94c-.27.28-.86.42-1.78.42h-1.16v-5.3h1.16c.76 0 1.28.13 1.58.38.49.43.73 1.19.73 2.27s-.18 1.85-.53 2.23ZM25.98 0C11.65 0 0 11.65 0 25.98s11.65 25.98 25.98 25.98 25.98-11.65 25.98-25.98S40.3 0 25.98 0Zm0 50.55c-9.32 0-17.43-5.19-21.6-12.84h5.64v-3.45H5.96c-1.24 0-2.16-.15-2.76-.46-.8-.41-.93-1.31-1.12-2.09-.15-.62-.28-1.26-.38-1.89-.2-1.28-.31-2.57-.31-3.86 0-1.22.09-2.43.27-3.64.09-.6.2-1.19.34-1.79.13-.56.18-1.12.47-1.62.28-.49.71-.92 1.22-1.18.66-.34 1.91-.51 3.73-.51h10.27v6.31h-7.56v3.17h2.94c2.44-.03 4.05.5 4.85 1.61.39.65.61 1.75.66 3.32.02.41.03 1.23.03 2.45v3.73c0 .37-.04.91-.11 1.61-.08.7-.15 1.22-.22 1.56-.2.97-.79 1.76-1.76 2.38-.23.14-.53.25-.87.34h11.02V30.06h1.23c1.36.02 2.22.72 2.58 2.09.1.36.15 1.11.15 2.25v3.19c0 1.46.07 2.66.2 3.58.14.82.44 1.66.92 2.53h8.97c-.29-.94-.49-1.79-.59-2.55-.1-.83-.15-2.08-.15-3.73v-4.88c0-1.91-.34-3.35-1.02-4.32-.85-1.12-2.26-1.83-4.22-2.12-.17-.02-.54-.08-1.1-.18 1.21-.24 2.07-.43 2.58-.56 1.92-.61 3.11-1.84 3.55-3.68.14-.56.2-1.63.2-3.19v-4.11c.02-1.77.06-2.89.13-3.35.07-.58.27-1.31.61-2.2h-9.3c-.53 1.24-.79 2.77-.79 4.57v3.99c0 1.16-.03 1.92-.08 2.3-.1 1.12-.37 1.9-.82 2.32-.32.29-.89.44-1.69.46h-1.38V1.41c13.27.36 23.92 11.2 23.92 24.55S39.56 50.55 25.98 50.55Z",
            className: "cls-1"
          },
          void 0,
          !1,
          {
            fileName: "app/components/logoSVG.component.jsx",
            lineNumber: 19,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/logoSVG.component.jsx",
        lineNumber: 14,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/logoSVG.component.jsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), logoSVG_component_default = MainLogo;

// app/routes/__app._index.jsx
var import_react_plx = require("react-plx");
var import_react_animate_on_scroll2 = __toESM(require("react-animate-on-scroll"));

// app/components/background.component.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Background() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "backgroundImg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { className: "textureImg", src: "/images/GraidentBackground_Light.webp", alt: "gradient" }, void 0, !1, {
    fileName: "app/components/background.component.jsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/background.component.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/hero.component.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "hero", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerRow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      progressiveImage_component_default,
      {
        src: "/images/brandImages/rolling/RollingRest_Sketches.webp",
        placeholderSrc: "/images/brandImages/rolling/RollingRest_Sketches_LowRes.webp",
        classTitle: "",
        alt: "hero image"
      },
      void 0,
      !1,
      {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 9,
        columnNumber: 25
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 8,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 7,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerRow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/brandImages/rolling/RollingRest_Logo.webp",
          placeholderSrc: "/images/brandImages/rolling/RollingRest_Logo_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 19,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 18,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/printImages/EliteEstheticianBooth.webp",
          placeholderSrc: "/images/printImages/EliteEstheticianBooth_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 27,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 26,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 17,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerRow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/printImages/MatadorBottle_v2_Mockup.webp",
          placeholderSrc: "/images/printImages/MatadorBottle_v2_Mockup_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 37,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/brandImages/rex/Rex Van.webp",
          placeholderSrc: "/images/brandImages/rex/Rex Van_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 45,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { src: "", alt: "hero image" }, void 0, !1, {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 53,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          progressiveImage_component_default,
          {
            src: "/images/HoodGuyMockup copy.webp",
            placeholderSrc: "/images/HoodGuyMockup copy-lowRes.webp",
            classTitle: "",
            alt: "hero image"
          },
          void 0,
          !1,
          {
            fileName: "app/components/hero.component.jsx",
            lineNumber: 54,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 52,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/hero.component.jsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/hero.component.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/__app._index.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), meta4 = () => [
  { title: "Evolving Graphic Design | Stephen Kloepfer | Branding & Design" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "In today's evolving market, it is imperative your design evolves alongside. Stephen Kloepfer is here to help with all your branding and graphic design needs." },
  { name: "og:title", content: "Stephen Kloepfer | Branding and Design" },
  { name: "og:description", content: "Stephen Kloepfer specializes in evolving graphic design to compete in today's fast-paced market." },
  { name: "og:image", content: "/social_preview.png" }
], links8 = () => [
  { rel: "stylesheet", href: landing_styles_default },
  { rel: "stylesheet", href: hero_styles_default },
  ...links3()
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(logoSVG_component_default, { className: "logo", color: "#018aaa", logoID: "logo1" }, void 0, !1, {
      fileName: "app/routes/__app._index.jsx",
      lineNumber: 90,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Hero, {}, void 0, !1, {
      fileName: "app/routes/__app._index.jsx",
      lineNumber: 91,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "scroller", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "spacer" }, void 0, !1, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 93,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_animate_on_scroll2.default, { animateIn: "slideInUp", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(MainMenu, { scrolling: !0 }, void 0, !1, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 95,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app._index.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app._index.jsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

// app/routes/__app.about.jsx
var app_about_exports = {};
__export(app_about_exports, {
  default: () => app_about_default,
  links: () => links9,
  loader: () => loader4,
  meta: () => meta5
});
var import_react15 = require("react");

// app/styles/about.styles.css
var about_styles_default = "/build/_assets/about.styles-B5AHZD4O.css";

// app/routes/__app.about.jsx
var import_react16 = require("@remix-run/react");

// workhistory.json
var workhistory_default = {
  about: [{
    title: "Enhance Printing - General Manager",
    date: "2020-Present",
    text: [
      "Responsible for all graphic projects, including full brand packages, web design, and prepress work.",
      "Handled client relations, as well as promoting new services.",
      "Took on new roles in accounts receivable and administration.",
      "Oversaw expanding our brand to include digital marketing and web-based options.",
      "Took numerous online courses to expand my capabilities, and extend the services we offered.",
      "In my time with Enhance, we have seen our annual sales double."
    ],
    spaceClass: "breakLarge",
    final: !1
  }, {
    title: "Enhance Printing - Graphic Design & Prepress",
    date: "2013-2020",
    text: [
      "Managed and maintained customer project files.",
      "Graphic design, including logo creation, recreation, and branded marketing materials.",
      "Handled all prepress duties and managed the digital print side of production.",
      "Took an expanded role in customer relations and sales.",
      "Worked to expand our wide format offerings, including designing outdoor vinyl, banners, and vehicle wraps."
    ],
    spaceClass: "breakSmall",
    final: !1
  }, {
    title: "PostNet - Lead Graphic Designer",
    date: "2012-2013",
    text: [
      "Handled all print and design related work in a fast-paced, walk-in heavy environment.",
      "Filled in with the shipping department as needed, learning much of the ins and outs and shipping.",
      "Took the lead for all in-house marketing, including designs for community outreach and sponsorships."
    ],
    spaceClass: "breakSmall",
    final: !1
  }, {
    title: "Citizen Printing - Internship",
    date: "2012",
    text: [
      "Handled the update of a nation-wide manual for Idealease.",
      "Contacted all branches to update company information and locations.",
      "Created vector maps for all new locations, with a focus on accuracy and legibility.",
      "Worked closely with the prepress department to finalize the artwork."
    ],
    spaceClass: "breakSmall",
    final: !1
  }, {
    title: "Freelance Work",
    date: "2010-2012",
    text: [
      "Created artwork for several local companies and startups, including brand identities, logos, and promotional materials.",
      "Worked on diagrams for several machine training proposals, and ensure they were animation-ready.",
      "Maintained relationships with my client."
    ],
    spaceClass: "breakSmall",
    final: !1
  }, {
    title: "Front Range Community College",
    date: "Class of 2011",
    text: [
      "Associates of the Arts, Print and Presentation"
    ],
    spaceClass: "breakSmall",
    final: !0
  }]
};

// app/components/timeline.component.jsx
var import_react14 = require("react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Timeline(props) {
  let [activeInfo, setInfo] = (0, import_react14.useState)(""), [priorSelect, setPrior] = (0, import_react14.useState)("");
  var aboutInfo;
  let select = props.selector;
  select === "about" ? aboutInfo = props.aboutInfo.about : select === "education" ? aboutInfo = props.aboutInfo.education : select === "skills" ? aboutInfo = props.aboutInfo.skills : aboutInfo = "";
  let setActive = (props2) => {
    setInfo(""), setInfo(props2);
  };
  return (0, import_react14.useEffect)(() => {
    (activeInfo == "" && priorSelect != select || priorSelect != select) && (setInfo(aboutInfo[0]), setPrior(select));
  }, [aboutInfo, activeInfo, priorSelect, setPrior, select]), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "scrollbox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "aboutContainer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "timeline", style: { maxHeight: props.heightBlock }, children: aboutInfo.map((info) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "div",
        {
          className: activeInfo && activeInfo != "" && info.title === activeInfo.title ? "bullet activeBullet" : "bullet",
          onClick: () => setActive(info),
          children: info.date
        },
        info.title,
        !1,
        {
          fileName: "app/components/timeline.component.jsx",
          lineNumber: 43,
          columnNumber: 25
        },
        this
      ),
      activeInfo && activeInfo != "" && info.title === activeInfo.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "bulletActive-line" }, void 0, !1, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 55,
        columnNumber: 33
      }, this) : "",
      info.final ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: info.spaceClass }, void 0, !1, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 61,
        columnNumber: 33
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 42,
      columnNumber: 25
    }, this)) }, void 0, !1, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "textbox", style: { minHeight: props.heightBlock }, children: activeInfo && activeInfo != "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: activeInfo.title }, void 0, !1, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 72,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { children: activeInfo.date }, void 0, !1, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 73,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("ul", { children: activeInfo.text.map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("li", { children: text }, text, !1, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 77,
        columnNumber: 37
      }, this)) }, void 0, !1, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 74,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 71,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: "Please Select a Bullet" }, void 0, !1, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 83,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/timeline.component.jsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/timeline.component.jsx",
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

// app/routes/__app.about.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), links9 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  { rel: "stylesheet", href: about_styles_default },
  ...links3(),
  ...links2()
], meta5 = () => [
  { title: "Who is Stephen Kloepfer?" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "A bit about me and my history in the fast-paced field of graphic design." },
  { name: "og:title", content: "Stephen Kloepfer | Who am I?" },
  { name: "og:description", content: "A bit about me and my history in the fast-paced field of graphic desig." },
  { name: "og:image", content: "/social_preview.png" }
], About = () => {
  let aboutInfo = (0, import_react16.useLoaderData)(), [triggered, setTriggered] = (0, import_react15.useState)(!1), [loaded, hasloaded] = (0, import_react15.useState)(!1), [height, setHeight] = (0, import_react15.useState)("63vh"), delay = (ms) => new Promise((res) => setTimeout(res, ms)), triggerSlide = async () => {
    await delay(500), hasloaded(!0), setTriggered(!0);
  }, closeSlide = () => {
    setTriggered(!1);
  }, navigate = (0, import_react16.useNavigate)(), data_from_child = async (data) => {
    data != "" && data != null && (closeSlide(), await delay(500), navigate("/" + data));
  };
  return (0, import_react15.useEffect)(() => {
    loaded || triggerSlide();
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      MainMenu,
      {
        page: "about",
        onReopen: () => {
          console.log("fire"), hasloaded(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 71,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: triggered ? "slider backgroundGray activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(pagesHeader_component_default, { background: "#35444F", setter: data_from_child, onClose: closeSlide, active: "about" }, void 0, !1, {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "introBox", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "aboutHeading", children: "About Me" }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 80,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "introText", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
            "It\u2019s a rare thing to find something you love doing and even rarer to do it professionally. I am lucky enough to have found a calling that allows me to express my artistic side, while also helping my clients succeed. It\u2019s my focus to create lasting imagery that is both eye-catching and matches the personality of my clients. To achieve this, I strive to stay up-to-date with the latest trends and technology in the field, so I can continue supporting my clients in today's competitive and evolving market.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/__app.about.jsx",
              lineNumber: 84,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/__app.about.jsx",
              lineNumber: 84,
              columnNumber: 21
            }, this),
            "When not working, my greatest passion is my family. I can often be found playing with my two sons, or spending some quality time with my wife. My primary goal is to provide the best life that I can for them, and be a present and involved as a partner and father.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/__app.about.jsx",
              lineNumber: 86,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/__app.about.jsx",
              lineNumber: 86,
              columnNumber: 21
            }, this),
            "In my free time, I enjoy watching movies, writing, and reading. While I enjoy a wide variety of genres, I find myself often pulled to speculative fiction, and have a vast collection of movies and books delving into the fantastic, horrific, and futuristic. I am also an avid fan of gaming. I enjoy regular table-top sessions with some close friends, and have a long-standing love for video games. Recently, I have begun the path towards a lifelong dream of teaching myself coding and 3D modeling in the hopes of creating a video game of my own from the ground up."
          ] }, void 0, !0, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 82,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 81,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "historyBox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "historyText", children: "Work History" }, void 0, !1, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 92,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "aboutRow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Timeline, { aboutInfo, selector: "about", heightBlock: "76vh" }, void 0, !1, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 95,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.about.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.about.jsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}, app_about_default = About;
async function loader4() {
  return workhistory_default;
}

// app/routes/__app.logos.jsx
var app_logos_exports = {};
__export(app_logos_exports, {
  default: () => app_logos_default,
  links: () => links10,
  loader: () => loader5,
  meta: () => meta6
});
var import_react17 = require("react");

// app/styles/logos.styles.css
var logos_styles_default = "/build/_assets/logos.styles-C2ZQ2X27.css";

// app/routes/__app.logos.jsx
var import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), links10 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  { rel: "stylesheet", href: logos_styles_default },
  ...links3(),
  ...links2()
], meta6 = () => [
  { title: "Logo Design | Stephen Kloepfer Branding & Design?" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "I specialize in creating logos in a wide variety of styles to create a unique and personalized look that draws your customers' eyes." },
  { name: "og:title", content: "Stephen Kloepfer Logo Design" },
  { name: "og:description", content: "I specialize in creating logos in a wide variety of styles to create a unique and personalized look that draws your customers' eyes." },
  { name: "og:image", content: "/social_preview.png" }
];
function useHorizontalScroll() {
  let elRef = (0, import_react17.useRef)();
  return (0, import_react17.useEffect)(() => {
    let el = elRef.current;
    if (el) {
      let onWheel = (e) => {
        e.deltaY != 0 && (e.preventDefault(), el.scrollBy(e.deltaY, 0));
      };
      return el.addEventListener("wheel", onWheel), () => el.removeEventListener("wheel", onWheel);
    }
  }, []), elRef;
}
var LogoDesign = () => {
  let [triggered, setTriggered] = (0, import_react17.useState)(!1), [loaded, hasloaded] = (0, import_react17.useState)(!1), brandData = (0, import_react18.useLoaderData)(), delay = (ms) => new Promise((res) => setTimeout(res, ms)), triggerSlide = async () => {
    await delay(500), hasloaded(!0), setTriggered(!0);
  }, closeSlide = () => {
    setTriggered(!1);
  }, navigate = (0, import_react18.useNavigate)(), data_from_child = async (data) => {
    data != "" && data != null && (closeSlide(), await delay(500), navigate("/" + data));
  }, scrollRef = useHorizontalScroll();
  return (0, import_react17.useEffect)(() => {
    loaded || triggerSlide();
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      MainMenu,
      {
        page: "logos",
        onReopen: () => {
          hasloaded(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 88,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: triggered ? "slider backgroundBlue activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 93,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(pagesHeader_component_default, { background: "#1A4C74", setter: data_from_child, onClose: closeSlide, active: "logos" }, void 0, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { className: "heading", children: "Logo Design" }, void 0, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 96,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: brandData.logos.map((logo, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "logosRow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "logoBounding", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "logoDescriptionNoSlide", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { children: logo.name }, void 0, !1, {
            fileName: "app/routes/__app.logos.jsx",
            lineNumber: 106,
            columnNumber: 17
          }, this),
          logo.description
        ] }, void 0, !0, {
          fileName: "app/routes/__app.logos.jsx",
          lineNumber: 105,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "logoBoxNoSlide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          progressiveImage_component_default,
          {
            src: logo.image,
            placeholderSrc: logo.placeholder,
            classTitle: "",
            alt: logo.alt
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__app.logos.jsx",
            lineNumber: 110,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/__app.logos.jsx",
          lineNumber: 109,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 104,
        columnNumber: 13
      }, this) }, logo.name, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 103,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 98,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "spacer" }, void 0, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 123,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.logos.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.logos.jsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}, app_logos_default = LogoDesign;
async function loader5() {
  return brandingInfo_default;
}

// app/routes/__app.print.jsx
var app_print_exports = {};
__export(app_print_exports, {
  default: () => app_print_default,
  links: () => links11,
  loader: () => loader6,
  meta: () => meta7
});
var import_react19 = require("react");
var import_react20 = require("@remix-run/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), links11 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  ...links3(),
  ...links2(),
  ...links4()
], meta7 = () => [
  { title: "Print Design | Stephen Kloepfer Branding & Design" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines." },
  { name: "og:title", content: "Stephen Kloepfer Design for Print Production" },
  { name: "og:description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines." },
  { name: "og:image", content: "/social_preview.png" }
], Branding3 = () => {
  let [triggered, setTriggered] = (0, import_react19.useState)(!1), [loaded, hasloaded] = (0, import_react19.useState)(!1), [active, setActive] = (0, import_react19.useState)(), [IsActive, setActiveBool] = (0, import_react19.useState)(!1), delay = (ms) => new Promise((res) => setTimeout(res, ms)), navigate = (0, import_react20.useNavigate)(), triggerSlide = async () => {
    await delay(250), hasloaded(!0), setTriggered(!0);
  }, data_from_child = async (data2) => {
    data2 != "" && data2 != null && (closeSlide(), await delay(500), navigate("/" + data2));
  }, closeSlide = () => {
    setTriggered(!1);
  }, data = (0, import_react20.useLoaderData)();
  (0, import_react19.useEffect)(() => {
    loaded || triggerSlide();
  });
  let [hoveredItem, setHovered] = (0, import_react19.useState)("");
  function changeHover(newItem) {
    setHovered(newItem.name);
  }
  function unsetHover() {
    setHovered("");
  }
  function selectItem(item) {
    setActive(item), setActiveBool(!0);
  }
  let onClose = () => {
    setActive(""), setActiveBool(!1);
  }, onReopen = () => {
    hasloaded(!1);
  };
  function checkLength(item) {
    return item.images.length;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      MainMenu,
      {
        page: "print",
        onReopen
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 96,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: triggered ? "slider backgroundDark activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 101,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(pagesHeader_component_default, { background: "dark", setter: data_from_child, onClose: closeSlide, active: "print" }, void 0, !1, {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "heading", children: "Print Design" }, void 0, !1, {
          fileName: "app/routes/__app.print.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "imageGrid", children: data.print.map(
          (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "imageBox", onMouseEnter: () => changeHover(item), onMouseLeave: unsetHover, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("a", { children: [
            checkLength(item) > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "overlay", style: { fontSize: "150%", opacity: 1 }, children: [
              item.name.toUpperCase(),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__app.print.jsx",
                lineNumber: 112,
                columnNumber: 106
              }, this),
              "Click to See More"
            ] }, void 0, !0, {
              fileName: "app/routes/__app.print.jsx",
              lineNumber: 112,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "overlay", style: { fontSize: "150%", opacity: 1 }, children: [
              item.name.toUpperCase(),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__app.print.jsx",
                lineNumber: 113,
                columnNumber: 106
              }, this),
              "Click to Expand Image"
            ] }, void 0, !0, {
              fileName: "app/routes/__app.print.jsx",
              lineNumber: 113,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              progressiveImage_component_default,
              {
                alt: item.name,
                src: item.images[0].image,
                placeholderSrc: item.images[0].placeholder,
                classTitle: "primaryImage",
                onClick: () => selectItem(item)
              },
              item.name,
              !1,
              {
                fileName: "app/routes/__app.print.jsx",
                lineNumber: 116,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/__app.print.jsx",
            lineNumber: 109,
            columnNumber: 17
          }, this) }, item.name, !1, {
            fileName: "app/routes/__app.print.jsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/__app.print.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.print.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      modal_component_default,
      {
        onClose,
        className: IsActive ? "openModal" : "closeModal",
        color: "white",
        data: active
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 134,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app.print.jsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}, app_print_default = Branding3;
async function loader6() {
  return brandingInfo_default;
}

// app/routes/__app.menu.jsx
var app_menu_exports = {};
__export(app_menu_exports, {
  default: () => Menu,
  links: () => links12,
  meta: () => meta8
});
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), meta8 = () => [{ title: "New Remix App" }], links12 = () => [
  { rel: "stylesheet", href: menu_styles_default }
];
function Menu() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "backgroundImg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { className: "textureImg", src: "/images/texture-1874580_1920.jpg", alt: "grunge" }, void 0, !1, {
      fileName: "app/routes/__app.menu.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__app.menu.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(MainMenu, { scrolling: !1 }, void 0, !1, {
      fileName: "app/routes/__app.menu.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.menu.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/__app.web.jsx
var app_web_exports = {};
__export(app_web_exports, {
  default: () => app_web_default,
  links: () => links13,
  loader: () => loader7,
  meta: () => meta9
});
var import_react21 = require("react");
var import_react22 = require("@remix-run/react");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), links13 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  ...links3(),
  ...links2()
], meta9 = () => [
  { title: "Web Design | Stephen Kloepfer Branding & Design?" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "Whether you need a simple Wordpress site for customers to land on, or full hand-coded websites with all the bells and whistles, I am here to help!" },
  { name: "og:title", content: "Stephen Kloepfer Website Development" },
  { name: "og:description", content: "hether you need a simple Wordpress site for customers to land on, or full hand-coded websites with all the bells and whistles, I am here to help!" },
  { name: "og:image", content: "/social_preview.png" }
], WebDesign = () => {
  let [triggered, setTriggered] = (0, import_react21.useState)(!1), [loaded, hasloaded] = (0, import_react21.useState)(!1), brandData = (0, import_react22.useLoaderData)(), delay = (ms) => new Promise((res) => setTimeout(res, ms)), triggerSlide = async () => {
    await delay(500), hasloaded(!0), setTriggered(!0);
  }, closeSlide = () => {
    setTriggered(!1);
  }, navigate = (0, import_react22.useNavigate)(), data_from_child = async (data) => {
    data != "" && data != null && (closeSlide(), await delay(500), navigate("/" + data));
  };
  return (0, import_react21.useEffect)(() => {
    loaded || triggerSlide();
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      MainMenu,
      {
        page: "web",
        onReopen: () => {
          hasloaded(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.web.jsx",
        lineNumber: 67,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: triggered ? "slider backgroundLight activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.web.jsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(pagesHeader_component_default, { background: "#1A4C74", setter: data_from_child, onClose: closeSlide, active: "web" }, void 0, !1, {
        fileName: "app/routes/__app.web.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "heading", children: "Web Design" }, void 0, !1, {
          fileName: "app/routes/__app.web.jsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        brandData.web.map(
          (web) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            progressiveImage_component_default,
            {
              src: web.image,
              placeholderSrc: web.placeholder,
              classTitle: "fullImage",
              alt: web.alt
            },
            web.name,
            !1,
            {
              fileName: "app/routes/__app.web.jsx",
              lineNumber: 78,
              columnNumber: 11
            },
            this
          )
        )
      ] }, void 0, !0, {
        fileName: "app/routes/__app.web.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.web.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.web.jsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}, app_web_default = WebDesign;
async function loader7() {
  return brandingInfo_default;
}

// app/routes/__app.jsx
var app_exports = {};
__export(app_exports, {
  default: () => App2,
  links: () => links14
});
var import_react24 = require("@remix-run/react");

// app/components/footer.component.jsx
var import_react23 = require("@remix-run/react"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "contacts", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react23.Link, { to: "https://www.linkedin.com/in/stephenkloepfer-ft-collins", target: "_blank", rel: "noreferrer", children: "linkedin" }, void 0, !1, {
      fileName: "app/components/footer.component.jsx",
      lineNumber: 8,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react23.Link, { to: "mailto:stevekloepferdesign@gmail.com", children: "e-mail" }, void 0, !1, {
      fileName: "app/components/footer.component.jsx",
      lineNumber: 11,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: "2023 - All Rights Reserved" }, void 0, !1, {
      fileName: "app/components/footer.component.jsx",
      lineNumber: 14,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.component.jsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.component.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/__app.jsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), links14 = () => [];
function App2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react24.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Background, {}, void 0, !1, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ABZ5CL3R.js", imports: ["/build/_shared/chunk-V3SLA63D.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-OTCTUX5C.js", imports: ["/build/_shared/chunk-Q4PXM3OL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app": { id: "routes/__app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__app-NJEZMUPL.js", imports: ["/build/_shared/chunk-JJUAVGCW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app._index": { id: "routes/__app._index", parentId: "routes/__app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app._index-4N266P32.js", imports: ["/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-Z5QSFHOP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.about": { id: "routes/__app.about", parentId: "routes/__app", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.about-BB5LIMBK.js", imports: ["/build/_shared/chunk-4UBGADOS.js", "/build/_shared/chunk-Q4PXM3OL.js", "/build/_shared/chunk-Z5QSFHOP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.branding": { id: "routes/__app.branding", parentId: "routes/__app", path: "branding", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.branding-PSKTB5RS.js", imports: ["/build/_shared/chunk-QQ3ITVZO.js", "/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-4UBGADOS.js", "/build/_shared/chunk-Q4PXM3OL.js", "/build/_shared/chunk-Z5QSFHOP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.branding-original": { id: "routes/__app.branding-original", parentId: "routes/__app", path: "branding-original", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.branding-original-2XQXZLJH.js", imports: ["/build/_shared/chunk-QQ3ITVZO.js", "/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-4UBGADOS.js", "/build/_shared/chunk-Q4PXM3OL.js", "/build/_shared/chunk-Z5QSFHOP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.logos": { id: "routes/__app.logos", parentId: "routes/__app", path: "logos", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.logos-JLDJU46J.js", imports: ["/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-4UBGADOS.js", "/build/_shared/chunk-Q4PXM3OL.js", "/build/_shared/chunk-Z5QSFHOP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.menu": { id: "routes/__app.menu", parentId: "routes/__app", path: "menu", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.menu-MYRPFE32.js", imports: ["/build/_shared/chunk-Z5QSFHOP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.print": { id: "routes/__app.print", parentId: "routes/__app", path: "print", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.print-DAKKI7QV.js", imports: ["/build/_shared/chunk-QQ3ITVZO.js", "/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-4UBGADOS.js", "/build/_shared/chunk-Q4PXM3OL.js", "/build/_shared/chunk-Z5QSFHOP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.print-original": { id: "routes/__app.print-original", parentId: "routes/__app", path: "print-original", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.print-original-RGVQF6FC.js", imports: ["/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-4UBGADOS.js", "/build/_shared/chunk-Q4PXM3OL.js", "/build/_shared/chunk-Z5QSFHOP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.web": { id: "routes/__app.web", parentId: "routes/__app", path: "web", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.web-G6BRYM6L.js", imports: ["/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-4UBGADOS.js", "/build/_shared/chunk-Q4PXM3OL.js", "/build/_shared/chunk-Z5QSFHOP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "ac8c78fd", hmr: void 0, url: "/build/manifest-AC8C78FD.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !1, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/__app.branding-original": {
    id: "routes/__app.branding-original",
    parentId: "routes/__app",
    path: "branding-original",
    index: void 0,
    caseSensitive: void 0,
    module: app_branding_original_exports
  },
  "routes/__app.print-original": {
    id: "routes/__app.print-original",
    parentId: "routes/__app",
    path: "print-original",
    index: void 0,
    caseSensitive: void 0,
    module: app_print_original_exports
  },
  "routes/__app.branding": {
    id: "routes/__app.branding",
    parentId: "routes/__app",
    path: "branding",
    index: void 0,
    caseSensitive: void 0,
    module: app_branding_exports
  },
  "routes/__app._index": {
    id: "routes/__app._index",
    parentId: "routes/__app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/__app.about": {
    id: "routes/__app.about",
    parentId: "routes/__app",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: app_about_exports
  },
  "routes/__app.logos": {
    id: "routes/__app.logos",
    parentId: "routes/__app",
    path: "logos",
    index: void 0,
    caseSensitive: void 0,
    module: app_logos_exports
  },
  "routes/__app.print": {
    id: "routes/__app.print",
    parentId: "routes/__app",
    path: "print",
    index: void 0,
    caseSensitive: void 0,
    module: app_print_exports
  },
  "routes/__app.menu": {
    id: "routes/__app.menu",
    parentId: "routes/__app",
    path: "menu",
    index: void 0,
    caseSensitive: void 0,
    module: app_menu_exports
  },
  "routes/__app.web": {
    id: "routes/__app.web",
    parentId: "routes/__app",
    path: "web",
    index: void 0,
    caseSensitive: void 0,
    module: app_web_exports
  },
  "routes/__app": {
    id: "routes/__app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=server.js.map
