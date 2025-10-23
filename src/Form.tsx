import React, {useState} from "react";

import FMGofer, { Option } from "fm-gofer";

import { ReactGateway, ReactGatewayRef } from "./ReactGateway";

type TFmData = { value: string };

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [valueStateBoolean, setValueStateBoolean] = useState(false);
  const [valueStateString, setValueStateString] = useState("FALSE");

  const refReactGateway = (reactGateway: ReactGatewayRef) => {
    window.reactGateway = reactGateway;
  };

  const handleChange = (event) => {
    const value = event.target.value;

    // update State
    setValueStateString("TRUE");
    setValueStateBoolean(true);

    setInputValue(value);
  };

  const btnSendDataToFM = async () => {
    try {
      const params = {
        scriptName: "get_data_from_webviewer",
        data: inputValue,
      };

      // reset State
      setValueStateString("FALSE");
      setValueStateBoolean(false);

      // send data to FileMaker
      await FMGofer.PerformScriptWithOption(
        "ext_call_fm_script",
        params,
        Option.SuspendAndResume
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const btnGetDataFromFM = async () => {
    try {
      const params = {
        scriptName: "send_data_to_webviewer",
      };

      // get data from FileMaker
      const data: TFmData = await FMGofer.PerformScriptWithOption(
        "ext_call_fm_script",
        params,
        Option.SuspendAndResume
      ).json();

      // update value in input field
      setInputValue(data.value);

      // reset State
      setValueStateString("FALSE");
      setValueStateBoolean(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const functionGetDataFromFM = (param: string) => {
    console.log("functionGetDataFromFM", param);

    setInputValue(param);
  };

  const functionSendStateToFM = async () => {
    console.log("functionSendStateToFM");

    const params = {
      scriptName: "check_state",
      state: valueStateBoolean ? 1 : 0,
    };

    // send data to FileMaker
    await FMGofer.PerformScriptWithOption(
      "ext_call_fm_script",
      params,
      Option.SuspendAndResume
    );
  };

  return (
    <div>
      <ReactGateway
        functionGetDataFromFM={functionGetDataFromFM}
        functionSendStateToFM={functionSendStateToFM}
        ref={refReactGateway}
      />
      <div className="container">
        <div className="form">
          <form>
            <label>
              Input field:
              <input
                className="input-value"
                type="text"
                value={inputValue}
                onChange={handleChange}
              />
            </label>
            <p className="display-value">Entered value: {inputValue}</p>
            <p className="display-value">
              Value has changed: {valueStateString}
            </p>
          </form>
          <div className="buttons">
            <button onClick={btnGetDataFromFM}>Get from FM</button>
            <button onClick={btnSendDataToFM}>Send to FM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
