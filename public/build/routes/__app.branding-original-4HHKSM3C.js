import {
  links as links3,
  modal_component_default
} from "/build/_shared/chunk-CINSSE6K.js";
import "/build/_shared/chunk-MOFTYH3I.js";
import {
  links,
  page_styles_default,
  pagesHeader_component_default
} from "/build/_shared/chunk-4UBGADOS.js";
import {
  global_styles_default
} from "/build/_shared/chunk-Q4PXM3OL.js";
import {
  MainMenu,
  links as links2
} from "/build/_shared/chunk-Z5QSFHOP.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-V3SLA63D.js";

// app/routes/__app.branding-original.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links4 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  ...links2(),
  ...links(),
  ...links3()
];
var meta = () => {
  return [
    { title: "Brand Identity Services | Stephen Kloepfer Branding & Design?" },
    { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
    { name: "description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition." },
    { name: "og:title", content: "Stephen Kloepfer Branding Services" },
    { name: "og:description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition." },
    { name: "og:image", content: "/social_preview.png" }
  ];
};
var Branding = () => {
  const [triggered, setTriggered] = (0, import_react.useState)(false);
  const [loaded, hasloaded] = (0, import_react.useState)(false);
  const [activeBrand, setActiveBrand] = (0, import_react.useState)();
  const [brandIsActive, setBrandBool] = (0, import_react.useState)(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const navigate = useNavigate();
  const triggerSlide = async () => {
    await delay(250);
    hasloaded(true);
    setTriggered(true);
  };
  const data_from_child = async (data) => {
    if (data != "" && data != void 0) {
      closeSlide();
      await delay(500);
      navigate("/" + data);
    }
  };
  const closeSlide = () => {
    setTriggered(false);
  };
  const brandData = useLoaderData();
  (0, import_react.useEffect)(() => {
    if (!loaded) {
      triggerSlide();
    }
  });
  const [hoveredItem, setHovered] = (0, import_react.useState)("");
  function changeHover(newItem) {
    setHovered(newItem.name);
  }
  function unsetHover() {
    setHovered("");
  }
  function selectBrand(brand) {
    setActiveBrand(brand);
    setBrandBool(true);
  }
  const onClose = () => {
    setActiveBrand("");
    setBrandBool(false);
  };
  const onReopen = () => {
    console.log("fire");
    hasloaded(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      MainMenu,
      {
        page: "branding",
        onReopen
      },
      void 0,
      false,
      {
        fileName: "app/routes/__app.branding-original.jsx",
        lineNumber: 92,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: triggered ? `slider backgroundGreen activeSlide` : `slider inactiveSlide`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, false, {
        fileName: "app/routes/__app.branding-original.jsx",
        lineNumber: 97,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pagesHeader_component_default, { background: "#1A746F", setter: data_from_child, onClose: closeSlide, active: "branding" }, void 0, false, {
        fileName: "app/routes/__app.branding-original.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "heading", children: "Brand Identity" }, void 0, false, {
          fileName: "app/routes/__app.branding-original.jsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "submenuBox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "submenuList", children: brandData.branding.map(
          (brand) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bounding", onMouseEnter: () => changeHover(brand), onMouseLeave: unsetHover, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === brand.name ? `highlightImage` : `highlightImage offImage` }, void 0, false, {
              fileName: "app/routes/__app.branding-original.jsx",
              lineNumber: 107,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "h2",
              {
                className: hoveredItem === brand.name ? `menuItem active` : `menuItem`,
                onClick: () => selectBrand(brand),
                children: brand.name
              },
              void 0,
              false,
              {
                fileName: "app/routes/__app.branding-original.jsx",
                lineNumber: 110,
                columnNumber: 28
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/__app.branding-original.jsx",
              lineNumber: 110,
              columnNumber: 25
            }, this)
          ] }, brand.name, true, {
            fileName: "app/routes/__app.branding-original.jsx",
            lineNumber: 106,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/__app.branding-original.jsx",
          lineNumber: 103,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/__app.branding-original.jsx",
          lineNumber: 101,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__app.branding-original.jsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app.branding-original.jsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      modal_component_default,
      {
        onClose,
        className: brandIsActive ? "openModal" : "closeModal",
        color: "black",
        data: activeBrand
      },
      void 0,
      false,
      {
        fileName: "app/routes/__app.branding-original.jsx",
        lineNumber: 127,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/__app.branding-original.jsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
};
var app_branding_original_default = Branding;
export {
  app_branding_original_default as default,
  links4 as links,
  meta
};
//# sourceMappingURL=/build/routes/__app.branding-original-4HHKSM3C.js.map
