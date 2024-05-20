import {
  progressiveImage_component_default
} from "/build/_shared/chunk-MOFTYH3I.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-V3SLA63D.js";

// app/styles/modal.styles.css
var modal_styles_default = "/build/_assets/modal.styles-AYASN3VM.css";

// app/components/modal.component.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Modal = (props) => {
  const onClose = props.onClose;
  if (props.data && props.data != "") {
    const data = props.data;
    const images = data.images;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modalBackground " + props.className, style: { backgroundColor: props.color }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modalContain", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onClose, className: "buttonModal", children: "x" }, void 0, false, {
        fileName: "app/components/modal.component.jsx",
        lineNumber: 15,
        columnNumber: 17
      }, this),
      images.map(
        (image) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          progressiveImage_component_default,
          {
            src: image.image,
            placeholderSrc: image.placeholder,
            classTitle: image.size === "small" ? `secondaryImage` : image.size === "mid" ? "midImage" : `brandImage`,
            alt: image.alt
          },
          image.image,
          false,
          {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 17,
            columnNumber: 11
          },
          this
        )
      )
    ] }, void 0, true, {
      fileName: "app/components/modal.component.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/modal.component.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this);
  }
};
var modal_component_default = Modal;
var links = () => [
  { rel: "stylesheet", href: modal_styles_default }
];

export {
  modal_component_default,
  links
};
//# sourceMappingURL=/build/_shared/chunk-CINSSE6K.js.map
