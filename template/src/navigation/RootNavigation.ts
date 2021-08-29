import * as React from 'react';

export const navigationRef = React.createRef<any>();

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

export function replace(name: any, params: any) {
  navigationRef.current?.replace(name, params);
}

export function pop(id?: any) {
  navigationRef.current?.pop(id);
}
