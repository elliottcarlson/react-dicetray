var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
var $8zHUo$react = require("react");
var $8zHUo$3ddicedicebox = require("@3d-dice/dice-box");

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




const $7f3cf4b6a553519b$export$cc9f1bd858572f6a = {
    height: 500,
    width: 500
};



const $9dc783bf0b8fe400$var$useDiceTray = (diceTrayConfig = {})=>{
    // Merge options
    const config = {
        ...(0, $7f3cf4b6a553519b$export$cc9f1bd858572f6a),
        ...diceTrayConfig
    };
    const containerRef = (0, $8zHUo$react.useRef)();
    const diceTray = /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        ref: containerRef
    });
    const Dice = new (0, ($parcel$interopDefault($8zHUo$3ddicedicebox)))(containerRef.current, {
        assetPath: "/assets/",
        startingHeight: 8,
        throwForce: 6,
        spinForce: 5,
        lightIntensity: 0.9
    });
    Dice.init().then(()=>{
        // clear dice on click anywhere on the screen
        document.addEventListener("mousedown", ()=>{
            const diceBoxCanvas = document.getElementById("dice-canvas");
            if (diceBoxCanvas && window.getComputedStyle(diceBoxCanvas).display !== "none") Dice.hide().clear();
        });
    });
    Dice.onRollComplete = (results)=>{
        console.log(results);
    };
    /*
  const dice = useRef<Die[]>([]);
  const diceTrayRef = useRef<HTMLCanvasElement>();
  const context = useRef<CanvasRenderingContext2D>();
*/ const rollDice = (0, $8zHUo$react.useCallback)(async (rollDiceConfig = {})=>{
        Dice.show().roll("1d6");
    }, [
        config
    ]);
    return {
        diceTray: diceTray,
        rollDice: rollDice
    };
};
var $9dc783bf0b8fe400$export$2e2bcd8739ae039 = $9dc783bf0b8fe400$var$useDiceTray;


const $9ed76342ec99e5e1$var$CallSuperHeroButton = ({ name: name , color: color , background: background  })=>{
    const { diceTray: diceTray , rollDice: rollDice  } = (0, $9dc783bf0b8fe400$export$2e2bcd8739ae039)();
    console.log(diceTray, rollDice);
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $8zHUo$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("button", {
                style: {
                    padding: "2rem",
                    fontSize: "3rem",
                    color: color,
                    background: background
                },
                children: [
                    "Click here to call ",
                    name,
                    "!!!"
                ]
            }),
            diceTray
        ]
    });
};
var $9ed76342ec99e5e1$export$2e2bcd8739ae039 = $9ed76342ec99e5e1$var$CallSuperHeroButton;






$parcel$exportWildcard(module.exports, $5dcc767f924b770d$exports);


//# sourceMappingURL=index.js.map
