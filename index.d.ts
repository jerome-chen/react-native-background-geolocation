declare module 'react-native-background-geolocation' {
  export const on: (event, successHandler, errorHandler?) => any;
  export const un: (event, successHandler, errorHandler?) => any;
  export const configure: (configuration, callback) => any;
  export const startSchedule: (callback: () => void) => void;
  export const watchPosition: (success: (location: any) => any, failure: (errorCode: string) => any, options?: object) => any;
  export const stopWatchPosition: () => any;  
  export const getState: (callback) => void;
  export const start: (callback) => any;
  export const stop: () => any;
  export const removeListeners: () => any;
  export const LOG_LEVEL_VERBOSE;
  export const DESIRED_ACCURACY_HIGH;
  export const DESIRED_ACCURACY_MEDIUM;
  export const DESIRED_ACCURACY_LOW;
  export const DESIRED_ACCURACY_VERY_LOW;
}

export * from './RNBackgroundGeolocation';
