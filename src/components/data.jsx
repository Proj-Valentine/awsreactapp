// // import React from "react";

// import "../App.css";
// require('dotenv').config();
// const { BlobServiceClient } = require("@azure/storage-blob");
// const storageAccountConnectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
// const blobServiceClient = BlobServiceClient.fromConnectionString(storageAccountConnectionString);


// // Create a container (folder) if it does not exist
// async function main() {
// const containerName = 'photos';
// const containerClient = blobServiceClient.getContainerClient(containerName);
// const containerExists = await containerClient.exists()
// if ( !containerExists) {
//     const createContainerResponse = await containerClient.createIfNotExists();
//     console.log(`Create container ${containerName} successfully`, createContainerResponse.succeeded);
// }
// else {
//     console.log(`Container ${containerName} already exists`);
// }
// }
