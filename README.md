# GoApptiv Document Scanner

The GoApptiv Document Scanner is a React Native library provides functionality for scanning documents in a React Native application. It supports both Android and iOS platforms.

## Installation

To use the GoApptiv Document Scanner, follow these steps:

1.  Install the package using npm or yarn:
    ```shell
    npm install @goapptiv/react-native-image-picker
    ```
2.  Import the component in your project:

    ```shell
    import {GaDocumentScannerAndroid} from '@goapptiv/react-native-image-picker';
    import {GaDocumentScannerIos} from '@goapptiv/react-native-image-picker';


    ```

3.  Use the component in your React Native application:

For Android:

    <GaDocumentScannerAndroid
      setImageUri={setImageUri}
      source={ImageSource.CAMERA}
      onError={handleError}
      onCancel={handleCancel}
    />

For iOS:

    <GaDocumentScannerIos
      setImageUri={setImageUri}
      source={ImageSource.CAMERA}
      onError={handleError}
    />

## Props

The Document Scanner component accepts the following props:
| Prop | Type | Description |
| ----------- | ----------------------- | --------------------------------------------------------------------------------------------- |
| setImageUri | `(uri: string) => void` | A function to set the URI of the scanned image. |
| source | ImageSource enum value | The source of the image (either `ImageSource.CAMERA` or `ImageSource.GALLERY`). |
| onError | Function (optional) | An optional callback function to handle errors that occur during the scanning process. |
| onCancel | Function (optional) | An optional callback function to handle the cancellation of the scanning process (**Android only**).
**An optional callback function to handle the cancellation of the scanning process (only available for Android, for ios it's handled by onError itself).**
