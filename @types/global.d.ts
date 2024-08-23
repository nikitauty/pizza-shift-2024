declare module '*.{ts,tsx}' {
  import 'vite/client';
}

declare module '*.scss' {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React = require('react');

  const src: React.FC<React.SVGProps<SVGSVGElement>>;
  export default src;
}
