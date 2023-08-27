import React, { useEffect } from 'react';
import { NativeModules } from 'react-native';
import { ImageSource } from './enums/SourceEnum';
const {
  GoApptivimagemodule
} = NativeModules;
const GaDocumentScannerIos = _ref => {
  let {
    setImageUri,
    source,
    onError
  } = _ref;
  useEffect(() => {
    const handleScanDocument = async src => {
      let imgResult;
      try {
        if (src === ImageSource.CAMERA) {
          imgResult = await GoApptivimagemodule.camera();
        } else {
          imgResult = await GoApptivimagemodule.gallery();
        }
        imgResult ? setImageUri(imgResult) : onError && onError('No Images');
      } catch (err) {
        onError && onError(err);
      }
    };
    handleScanDocument(source);
  }, [source]);
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export default GaDocumentScannerIos;
//# sourceMappingURL=GaDocumentScannerIos.js.map