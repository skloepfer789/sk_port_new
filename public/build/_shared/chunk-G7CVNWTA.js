import {
  logoBleedOfflSVG_component_default
} from "/build/_shared/chunk-TKMSJEEK.js";
import {
  Link,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-V3SLA63D.js";

// app/styles/header.styles.css
var header_styles_default = "/build/_assets/header.styles-G6EVTQRN.css";

// app/components/pagesHeader.component.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var pageLinks = [
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
  pageLinks.forEach((link) => {
    if (link.link !== pageName) {
      newLinks.push(link);
    }
  });
  return newLinks;
}
var PageHeader = (props) => {
  const pageName = props.active;
  const [activated, setActivated] = (0, import_react2.useState)("");
  var newLinks = determinePage(pageName);
  const onClose = props.onClose;
  const setter = props.setter;
  setter(activated);
  const setActive = (props2) => {
    setActivated(props2);
    onClose();
  };
  var backgroundURL;
  var logoColor;
  if (props.background == "dark") {
    backgroundURL = "url(/images/GraidentBackground_Full.webp)";
    logoColor = "fff";
  } else {
    backgroundURL = "url(/images/GraidentBackground_Light.webp)";
    logoColor = "#018aaa";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { style: { backgroundImage: backgroundURL }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "pages", children: newLinks.map(
      (link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "linkBox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "h3",
        {
          className: "link",
          setter: link.link,
          onClick: () => setActive(link.link),
          style: { color: logoColor },
          children: link.link
        },
        void 0,
        false,
        {
          fileName: "app/components/pagesHeader.component.jsx",
          lineNumber: 63,
          columnNumber: 29
        },
        this
      ) }, link.link, false, {
        fileName: "app/components/pagesHeader.component.jsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ) }, void 0, false, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 60,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(logoBleedOfflSVG_component_default, { className: "headerLogo", color: logoColor }, void 0, false, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 76,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 75,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 74,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pagesHeader.component.jsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
};
var pagesHeader_component_default = PageHeader;
var links = () => [
  { rel: "stylesheet", href: header_styles_default }
];

// app/styles/page.styles.css
var page_styles_default = "/build/_assets/page.styles-OG3IJOSZ.css";

export {
  pagesHeader_component_default,
  links,
  page_styles_default
};
//# sourceMappingURL=/build/_shared/chunk-G7CVNWTA.js.map
