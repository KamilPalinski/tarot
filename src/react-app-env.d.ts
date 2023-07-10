// / <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_API_URL: string;
  }
}

declare module '*.png' {
  let _: string;
  export = _;
}

declare module '*.jpg' {
  let _: string;
  export = _;
}

declare module '*.svg' {
  export const ReactComponent: ReactComponent;
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  let _: string;
  export = _;
}
