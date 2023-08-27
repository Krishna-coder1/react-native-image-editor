"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _SourceEnum = require("./enums/SourceEnum");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const {
  GoapptivDocumentScanner
} = _reactNative.NativeModules;
const GaDocumentScannerAndroid = _ref => {
  let {
    setImageUri,
    source,
    onError,
    onCancel
  } = _ref;
  console.info(GoapptivDocumentScanner);
  (0, _react.useEffect)(() => {
    const eventEmitter = new _reactNative.NativeEventEmitter(GoapptivDocumentScanner);
    const onDocumentScanSuccess = result => {
      const editedImagePath = result.result[0];
      setImageUri('file://' + editedImagePath);
    };
    const onDocumentScanCancel = () => {
      onCancel && onCancel();
    };
    const documentScanSuccessListener = eventEmitter.addListener('onDocumentScanSuccess', onDocumentScanSuccess);
    const documentScanCancelListener = eventEmitter.addListener('onDocumentScanCancel', onDocumentScanCancel);
    const handleScanDocument = async src => {
      if (src === _SourceEnum.ImageSource.CAMERA) {
        GoapptivDocumentScanner.getPicture((error, result) => {
          if (error) {
            onError && onError(error);
          } else if (result && result.length > 0) {}
        });
      } else {
        GoapptivDocumentScanner.getPictureFromGallery((error, result) => {
          if (error) {
            onError && onError(error);
          } else if (result && result.length > 0) {}
        });
      }
    };
    handleScanDocument(source);
    return () => {
      documentScanSuccessListener.remove();
      documentScanCancelListener.remove();
    };
  }, [source]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};
var _default = GaDocumentScannerAndroid;
exports.default = _default;
//# sourceMappingURL=GaDocumentScannerAndroid.js.map