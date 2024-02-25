// import React from 'react';
// import axios from 'axios';
// import FileSaver from 'file-saver';

// function DownloadCv() {
//   const handleDownload = async () => {
//     try {
//       const response = await axios.get('https://drive.google.com/uc?export=download&id=1tLY2veqT0WkrgWDqD2nB_T1pXywHA-mC', {
//         responseType: 'blob' // Set the response type to blob
//       });
      
//       // Extract the file name from the response headers
//       const contentDisposition = response.headers['content-disposition'];
//       const fileName = contentDisposition.split(';')[1].split('filename=')[1].trim();

//       // Save the file using FileSaver
//       FileSaver.saveAs(response.data, fileName);
//     } catch (error) {
//       console.error('Error downloading PDF:', error);
//     }
//   };

//   return (
//     <button className="btn btn-secondary" onClick={handleDownload}>
//       Download CV
//     </button>
//   );
// }

// export default DownloadCv;
