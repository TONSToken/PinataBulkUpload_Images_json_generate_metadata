const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const PINATA_API_KEY = 'YOUR_PINATA_API_KEY';
const PINATA_SECRET_API_KEY = 'YOUR_PINATA_SECRET_API_KEY';

async function uploadFile(filePath) {
    const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS'; // this do not change it 
    const data = new FormData();
    data.append('file', fs.createReadStream(filePath));

    const config = {
        headers: {
            'pinata_api_key': PINATA_API_KEY,
            'pinata_secret_api_key': PINATA_SECRET_API_KEY,
            ...data.getHeaders(),
        },
    };

    try {
        const response = await axios.post(url, data, config);
        console.log(`Uploaded ${path.basename(filePath)}: ${response.data.IpfsHash}`);
    } catch (error) {
        console.error(`Failed to upload ${path.basename(filePath)}: ${error.response ? error.response.data : error}`);
    }
}

function uploadDirectory(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Could not list the directory.', err);
            process.exit();
        }

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            uploadFile(filePath);
        });
    });
}

const imagesDirectory = './images'; // Change to the path of your images directory. or just copy all your art work into the images folder for simplicity 
uploadDirectory(imagesDirectory);
