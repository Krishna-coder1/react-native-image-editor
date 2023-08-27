import React, { useEffect } from 'react';
import { NativeModules, NativeEventEmitter } from 'react-native';
import { ImageSource } from './enums/SourceEnum';

const { GoapptivDocumentScanner } = NativeModules;

interface DocumentScannerProps {
  setImageUri: (uri: string) => void;
  source: ImageSource;
  onError?: Function;
  onCancel?: Function;
}

const GaDocumentScannerAndroid: React.FC<DocumentScannerProps> = ({
  setImageUri,
  source,
  onError,
  onCancel,
}) => {
  console.info(GoapptivDocumentScanner);

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(GoapptivDocumentScanner);

    const onDocumentScanSuccess = (result: { result: string[] }) => {
      const editedImagePath = result.result[0];
      setImageUri('file://' + editedImagePath);
    };

    const onDocumentScanCancel = () => {
      onCancel && onCancel();
    };

    const documentScanSuccessListener = eventEmitter.addListener(
      'onDocumentScanSuccess',
      onDocumentScanSuccess
    );
    const documentScanCancelListener = eventEmitter.addListener(
      'onDocumentScanCancel',
      onDocumentScanCancel
    );

    const handleScanDocument = async (src: ImageSource) => {
      if (src === ImageSource.CAMERA) {
        GoapptivDocumentScanner.getPicture(
          (error: string | null, result: string[] | null) => {
            if (error) {
              onError && onError(error);
            } else if (result && result.length > 0) {
            }
          }
        );
      } else {
        GoapptivDocumentScanner.getPictureFromGallery(
          (error: string | null, result: string[] | null) => {
            if (error) {
              onError && onError(error);
            } else if (result && result.length > 0) {
            }
          }
        );
      }
    };
    handleScanDocument(source);

    return () => {
      documentScanSuccessListener.remove();
      documentScanCancelListener.remove();
    };
  }, [source]);

  return <></>;
};

export default GaDocumentScannerAndroid;
