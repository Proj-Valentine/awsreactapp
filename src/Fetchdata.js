// import React, { useEffect, useState } from 'react';
// import { DataLakeStoreClient } from '@azure/storage-file-datalake';


// const { DataLakeServiceClient } = require("@azure/storage-file-datalake");

// const connStr = "DefaultEndpointsProtocol=https;EndpointSuffix=core.windows.net;AccountName=adlssecond;AccountKey=k+f7CVDo96UkeQNcEt7//T4+vcZzUwLCNITmXsKAj2mZXUxD8DWUb5slG53/0eDRB7w8kyyMJgko+AStE0kMRA==;BlobEndpoint=https://adlssecond.blob.core.windows.net/;FileEndpoint=https://adlssecond.file.core.windows.net/;QueueEndpoint=https://adlssecond.queue.core.windows.net/;TableEndpoint=https://adlssecond.table.core.windows.net/"


// const dataLakeServiceClient = DataLakeServiceClient.fromConnectionString(connStr);



// const YourComponent = () => {
//   const [csvData, setCsvData] = useState([]);

//   useEffect(() => {
//     // Initialize Data Lake Store client
//     const dataLakeStoreClient = new DataLakeStoreClient(
//       'YOUR_STORAGE_ACCOUNT_URL',
//       'YOUR_CLIENT_ID',
//       'YOUR_CLIENT_SECRET',
//       'YOUR_TENANT_ID'
//     );

//     // Path to your CSV file in Data Lake Store
//     const filePath = 'https://adlssecond.blob.core.windows.net/firstcontainer/trydata/LifeExpectancyData.csv';

//     // Fetch CSV file data
//     const fetchData = async () => {
//       try {
//         const response = await dataLakeStoreClient.readFile(filePath);
//         const text = await response.blobBody.text();
//         // Parse CSV data (assuming CSV is comma-separated)
//         const parsedData = text.split('\n').map(row => row.split(','));
//         setCsvData(parsedData);
//       } catch (error) {
//         console.error('Error fetching CSV file:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Render your component with fetched CSV data
//   return (
//     <div>
//       <h1>CSV Data from Azure Data Lake Store</h1>
//       <pre>{JSON.stringify(csvData, null, 2)}</pre>
//     </div>
//   );
// };

// export default YourComponent;
