// const { Data, AllData } = require("../../../data_pb");
const dataModel = require("../model/dataModel");
const protobuf = require("protobufjs");

let dataMessage;
let allDataMessage;

async function loadProtobufJs() {
  try {
    const root = await protobuf.load("data.proto");
    dataMessage = root.lookupType("Data");
    allDataMessage = root.lookupType("AllData");
    console.log("=====ProtobufJs loaded successfully=====");
  } catch (error) {
    console.error("====Error loading ProtobufJs=====", error);
  }
}

loadProtobufJs();

exports.getAllData = async (req, res, next) => {
  try {
    let documents = await dataModel.find();

    const dataMessages = documents.map((document) => {
      const data = {
        _id: document._id.toString(),
        name: document.name,
        age: document.age,
        description: document.description,
      };

      return data;
    });

    // console.log("dataMessages ==>", dataMessages);

    const payload = {
      allData: dataMessages.map((data) => dataMessage.create(data)),
    };

    // let errMsg = allDataMessage.verify(payload);
    // if (errMsg) {
    //   throw new Error("Payload verification failed: " + errMsg);
    // }

    let encodedData = allDataMessage.encode(payload).finish();

    console.log("Encoded Data ==>", encodedData);
    // encodedData = new Uint8Array(encodedData);

    const decodedData = allDataMessage.decode(encodedData)
    console.log(decodedData)

    res.status(200).send(encodedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "An error occurred while fetching data" });
  }
};

exports.findAll = async (req, res, next) => {
  try {
    let documents = await dataModel.find();

    res.status(200).json({ data: documents });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "An error occurred while fetching data" });
  }
};

