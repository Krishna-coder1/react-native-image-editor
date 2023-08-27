import React from 'react';
import { ImageSource } from './enums/SourceEnum';
interface DocumentScannerProps {
    setImageUri: (uri: string) => void;
    source: ImageSource;
    onError?: Function;
    onCancel?: Function;
}
declare const GaDocumentScannerAndroid: React.FC<DocumentScannerProps>;
export default GaDocumentScannerAndroid;
//# sourceMappingURL=GaDocumentScannerAndroid.d.ts.map