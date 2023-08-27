import React, { useEffect } from 'react';
import { NativeModules } from 'react-native';
import { ImageSource } from './enums/SourceEnum';

const { GoApptivimagemodule } = NativeModules;

interface DocumentScannerProps {
  setImageUri: (uri: string) => void;
  source: ImageSource;
  onError?: Function;
}

const GaDocumentScannerIos: React.FC<DocumentScannerProps> = ({
  setImageUri,
  source,
  onError,
}) => {
  useEffect(() => {
    const handleScanDocument = async (src: ImageSource) => {
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

  return <></>;
};

export default GaDocumentScannerIos;
