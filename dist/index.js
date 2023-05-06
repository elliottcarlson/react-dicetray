var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
var $8zHUo$react = require("react");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $5dcc767f924b770d$exports = {};

$parcel$export($5dcc767f924b770d$exports, "CallSuperHeroButton", () => $9ed76342ec99e5e1$export$2e2bcd8739ae039);


class $9ed76342ec99e5e1$export$2e2bcd8739ae039 extends (0, ($parcel$interopDefault($8zHUo$react))).Component {
    render() {
        return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $8zHUo$reactjsxruntime.Fragment), {
            children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("button", {
                style: {
                    padding: "2rem",
                    fontSize: "3rem",
                    color: this.props.color,
                    background: this.props.background
                },
                children: [
                    "Click here to call ",
                    this.props.name,
                    " !"
                ]
            })
        });
    }
}






$parcel$exportWildcard(module.exports, $5dcc767f924b770d$exports);


//# sourceMappingURL=index.js.map
