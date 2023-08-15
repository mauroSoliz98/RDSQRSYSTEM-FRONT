import React, {useState, useEffect} from 'react'
import {Modal, Typography} from 'antd'
import {
    BrowserMultiFormatReader,
    NotFoundException,
    ChecksumException,
    FormatException,
    DecodeHintType,
    BarcodeFormat
  } from "@zxing/library";

export function Escanear() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");
  const [code, setCode] = useState("");
  const [videoInputDevices, setVideoInputDevices] = useState([]);
  const hints = new Map();
  const formats = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.QR_CODE
  ];
  hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);
  hints.set(DecodeHintType.TRY_HARDER, true);
  const codeReader = new BrowserMultiFormatReader(hints);

  console.log("ZXing code reader initialized");

  useEffect(() => {
    codeReader
      .getVideoInputDevices()
      .then((videoInputDevices) => {
        setupDevices(videoInputDevices);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function setupDevices(videoInputDevices) {
    const sourceSelect = document.getElementById("sourceSelect");

    // selects first device
    setSelectedDeviceId(videoInputDevices[0].deviceId);

    // setup devices dropdown
    if (videoInputDevices.length >= 1) {
      setVideoInputDevices(videoInputDevices);
    }
  }

  function resetClick() {
    codeReader.reset();
    setCode("");
    console.log("Reset.");
  }

  function decodeContinuously(selectedDeviceId) {
    codeReader.decodeFromInputVideoDeviceContinuously(
      selectedDeviceId,
      "video",
      (result, err) => {
        if (result) {
          // properly decoded qr code
          console.log("Found QR code!", result);
          setCode(result.text);
          setIsModalOpen(true)
        }

        if (err) {
          setCode("");
          console.error(err);
        }
      }
    );
  }

  useEffect((deviceId) => {
    decodeContinuously(selectedDeviceId);
    console.log(`Started decode from camera with id ${selectedDeviceId}`);
  }, []);
  const showModal=()=>{
    setIsModalOpen(true);
  }
  const handleOk=()=>{
    setIsModalOpen(false);
  }
  const handleCancel=()=>{
    setIsModalOpen(false);
  }
  return (
    <main class="wrapper">
      <section className="container" id="demo-content">
        <div id="sourceSelectPanel">
          <label for="sourceSelect">Change video source:</label>
          <select
            id="sourceSelect"
            onChange={() => setSelectedDeviceId(sourceSelect.value)}
          >
            { videoInputDevices.map((element) => (
              <option value={element.deviceId}>{element.label}</option>
            ))}
          </select>
        </div>

        <div>
          <video id="video" width="70%" height="480px"/>
        </div>
        <Modal title="Escaner" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Typography.Text strong>Result: </Typography.Text>
          <Typography.Text>{code}</Typography.Text>
        </Modal>

        <button id="resetButton" onClick={() => resetClick()}>
          Reset
        </button>
      </section>
    </main>
  )
}
