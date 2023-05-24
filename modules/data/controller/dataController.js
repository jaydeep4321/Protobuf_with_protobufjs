const { Data, AllData } = require("../../../data_pb");
const dataModel = require("../model/dataModel");
const protobuf = require("protobufjs");

exports.getAllData = async (req, res, next) => {
  try {
    let documents = await dataModel.find();

    const dataMessages = documents.map((document) => {
      const data = new Data();
      data._id = document._id.toString();
      data.name = document.name;
      data.age = document.age;
      data.description = document.description;

      return data;
    });

    const dataRoot = await protobuf.load("data.proto");
    const dataMessage = dataRoot.lookupType("Data");
    const allDataMessage = dataRoot.lookupType("AllData");

    const payload = {
      allData: dataMessages.map((data) => dataMessage.create(data)),
    };

    const encodedData = allDataMessage.encode(payload).finish();

    console.log("Encoded Data:", encodedData);
    // const encodedDataBase64 = encodedData.toString("base64");

    res.status(200).send(encodedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "An error occurred while fetching data" });
  }
};
