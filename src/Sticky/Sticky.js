// @flow

import * as React from 'react';
import layout from '../Layout.css';

type Threshold =
  | {| top: number |}
  | {| bottom: number |}
  | {| left: number |}
  | {| right: number |}
  | {| top: number, bottom: number |}
  | {| left: number, right: number |}
  | {| top: number, left: number, right: number, bottom: number |};

type Props = {|
  children: React.Node,
  dangerouslySetZIndex?: number,
  ...Threshold,
|};

export default function Sticky(props: Props) {
  const { dangerouslySetZIndex = 1, children } = props;
  const style = {
    top: typeof props.top === 'number' ? props.top : undefined,
    left: typeof props.left === 'number' ? props.left : undefined,
    right: typeof props.right === 'number' ? props.right : undefined,
    bottom: typeof props.bottom === 'number' ? props.bottom : undefined,
    zIndex: dangerouslySetZIndex,
  };
  return (
    <div className={layout.sticky} style={style}>
      {children}
    </div>
  );
}
