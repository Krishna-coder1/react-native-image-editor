import React from 'react';
import { ImageSource } from './enums/SourceEnum';
interface DocumentScannerProps {
    setImageUri: (uri: string) => void;
    source: ImageSource;
    onError?: Function;
}
declare const GaDocumentScannerIos: React.FC<DocumentScannerProps>;
export default GaDocumentScannerIos;
//# sourceMappingURL=GaDocumentScannerIos.d.ts.map