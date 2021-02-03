import React, { LazyExoticComponent, Suspense } from 'react';

// eslint-disable-next-line react/display-name
const SuspenseComponent = (Component: LazyExoticComponent<any>) => (props: any) => (
  <Suspense fallback={null}>
    <Component {...props} />
  </Suspense>
);

export default SuspenseComponent;
