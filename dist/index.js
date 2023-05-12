require("./index.css");
var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
var $8zHUo$react = require("react");
var $8zHUo$3ddicedicebox = require("@3d-dice/dice-box");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "useDiceTray", () => $9dc783bf0b8fe400$export$2e2bcd8739ae039);





const $dba5cd6913742fdd$export$cc9f1bd858572f6a = {
    assetPath: "/assets/",
    gravity: 1,
    mass: 1,
    friction: 0.8,
    restitution: 0,
    angularDamping: 0.4,
    linearDamping: 0.4,
    spinForce: 4,
    throwForce: 5,
    startingHeight: 8,
    settleTimeout: 5000,
    offscreen: true,
    delay: 10,
    lightIntensity: 1,
    enableShadows: true,
    shadowTransparency: 0.8,
    theme: "default",
    themeColor: "#2e8555",
    scale: 6,
    suspendSimulation: false,
    origin: location.origin,
    onReady: ()=>{},
    onDieComplete: ()=>{},
    onRollComplete: ()=>{},
    onRemoveComplete: ()=>{},
    onThemeConfigLoaded: ()=>{},
    onThemeLoaded: ()=>{}
};



const $10e67faa42b3666f$var$createId = ()=>{
    return "tray-xxxxxxxx".replace(/[x]/g, (c)=>{
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
};
class $10e67faa42b3666f$export$2e2bcd8739ae039 extends (0, ($parcel$interopDefault($8zHUo$react))).PureComponent {
    constructor(props){
        super(props);
        this.onReady = props.onReady;
        this.props = props;
        this.id = $10e67faa42b3666f$var$createId();
    }
    componentDidMount() {
        let options = {
            ...(0, $dba5cd6913742fdd$export$cc9f1bd858572f6a),
            ...this.props
        };
        delete options.onReady;
        this.DiceBox = new (0, ($parcel$interopDefault($8zHUo$3ddicedicebox)))(`#${this.id}`, options);
        this.DiceBox.init().then(()=>{
            if (typeof this.onReady === "function") this.onReady(this.DiceBox.roll.bind(this.DiceBox));
        });
    }
    render() {
        return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            id: this.id,
            className: "react-dicetray"
        });
    }
}


const $9dc783bf0b8fe400$var$useDiceTray = (diceTrayConfig = {})=>{
    const ref = (0, $8zHUo$react.useRef)(null);
    const diceTray = /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $10e67faa42b3666f$export$2e2bcd8739ae039), {
        ref: ref,
        ...diceTrayConfig
    });
    const rollDice = (notation)=>{
        ref.current?.DiceBox?.roll(notation ?? "1d20");
    };
    const updateConfig = (config)=>{
        ref.current?.DiceBox?.updateConfig(config);
    };
    return {
        diceTray: diceTray,
        rollDice: rollDice,
        updateConfig: updateConfig
    };
};
var $9dc783bf0b8fe400$export$2e2bcd8739ae039 = $9dc783bf0b8fe400$var$useDiceTray;




//# sourceMappingURL=index.js.map
