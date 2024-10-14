const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const metadataDir = path.join(__dirname, 'metadata');

// Replace 'YOUR_API_KEY' and 'YOUR_API_SECRET' with your actual Pinata API key and secret
const pinataApiKey = 'your_pinataApiKey';
const pinataSecretApiKey = 'your_pinataSecretApiKey';
const pinataEndpoint = 'https://api.pinata.cloud/pinning/pinFileToIPFS'; // this do not change

// Function to upload a file to Pinata
async function uploadFileToPinata(filePath) {
    const fileName = path.basename(filePath);
    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath), fileName);

    const headers = {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey
    };

    try {
        const response = await axios.post(pinataEndpoint, formData, { headers });
        console.log(`Uploaded ${fileName}:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Failed to upload ${fileName}:`, error.message);
    }
}

// Read all files from the metadata directory and upload them to Pinata
function uploadAllMetadata() {
    fs.readdir(metadataDir, (err, files) => {
        if (err) {
            console.error("Failed to read metadata directory:", err);
            return;
        }

        files.forEach(file => {
            if (file.endsWith('.json')) {
                const filePath = path.join(metadataDir, file);
                uploadFileToPinata(filePath).then(result => {
                    console.log(`Result for ${file}:`, result);
                }).catch(error => {
                    console.error(`Error uploading ${file}:`, error);
                });
            }
        });
    });
}

uploadAllMetadata();
