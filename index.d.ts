declare module 'react-native-background-geolocation' {
  export const on: (event, successHandler, errorHandler?) => any;
  export const un: (event, successHandler, errorHandler?) => any;
  export const configure: (configuration, callback) => any;
  export const start: (callback) => any;
  export const removeListeners: () => any;
  export const LOG_LEVEL_VERBOSE;
}

export * from './RNBackgroundGeolocation';
