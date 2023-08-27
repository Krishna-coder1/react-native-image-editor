import React, { useEffect } from 'react';
import { NativeModules, NativeEventEmitter } from 'react-native';
import { ImageSource } from './enums/SourceEnum';
const {
  GoapptivDocumentScanner
} = NativeModules;
const GaDocumentScannerAndroid = _ref => {
  let {
    setImageUri,
    source,
    onError,
    onCancel
  } = _ref;
  console.info(GoapptivDocumentScanner);
  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(GoapptivDocumentScanner);
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
      if (src === ImageSource.CAMERA) {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export default GaDocumentScannerAndroid;
//# sourceMappingURL=GaDocumentScannerAndroid.js.map