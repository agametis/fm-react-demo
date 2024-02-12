import React, {forwardRef, useImperativeHandle} from "react";

declare global {
  interface Window {
    reactGateway: any;
  }
}

type TParamFunction = (param: string) => void;
type TVoidFunction = () => void;

export type ReactGatewayRef = {
  gatewayGetDataFromFM: TParamFunction;
  gatewaySendStateToFM: TVoidFunction;
};

type ReactGatewayProps = {
  functionGetDataFromFM: TParamFunction;
  functionSendStateToFM: TVoidFunction;
};

export const ReactGateway = forwardRef<ReactGatewayRef, ReactGatewayProps>(
  (props, ref) => {
    const {functionGetDataFromFM, functionSendStateToFM} = props;

    const gatewayGetDataFromFM = (param) => {
      functionGetDataFromFM(param);
    };

    const gatewaySendStateToFM = () => {
      functionSendStateToFM();
    };

    useImperativeHandle(ref, () => ({
      // functions accessible in window context
      // using window.reactGateway
      gatewayGetDataFromFM,
      gatewaySendStateToFM,
    }));

    return <div></div>;
  },
);
