# Upload Metadata to Pinata Script

`uploadMetadataToPinata.js` is a Node.js script designed to automate the uploading of metadata JSON files to [Pinata](https://pinata.cloud/), a popular IPFS pinning service. This script reads metadata files from a designated directory and uploads them to Pinata, facilitating decentralized storage and accessibility of your NFT metadata.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Environment Variables](#environment-variables)
  - [Directory Structure](#directory-structure)
- [Usage](#usage)
- [Output](#output)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Automated Uploads**: Streamlines the process of uploading multiple metadata files to Pinata.
- **IPFS Integration**: Ensures your NFT metadata is stored on the decentralized IPFS network.
- **Error Handling**: Provides informative logs for successful uploads and errors.
- **Scalable**: Capable of handling large volumes of metadata files efficiently.
- **Secure**: Utilizes environment variables to manage sensitive API credentials.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. Download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node.js comes with npm. Verify installation with:

    ```bash
    npm -v
    ```

- **Pinata Account**: Sign up for a Pinata account at [pinata.cloud](https://pinata.cloud/) to obtain your API credentials.

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/your-repo.git
    cd your-repo
    ```

2. **Initialize `package.json`**

    Initialize a `package.json` file to manage your project's metadata and dependencies.

    ```bash
    npm init -y
    ```

    This command creates a `package.json` file with default settings.

3. **Install Dependencies**

    This script relies on external packages `axios` and `form-data`. Install them using npm:

    ```bash
    npm install axios form-data
    ```

## Configuration

### Environment Variables

For security reasons, it's best practice to store your Pinata API credentials as environment variables rather than hardcoding them into your script.

1. **Create a `.env` File**

    In the root directory of your project, create a `.env` file:

    ```bash
    touch .env
    ```

2. **Add Your Pinata API Credentials**

    Open the `.env` file and add your Pinata API key and secret:

    ```env
    PINATA_API_KEY=your_pinata_api_key
    PINATA_SECRET_API_KEY=your_pinata_secret_api_key
    ```

    **_Replace `your_pinata_api_key` and `your_pinata_secret_api_key` with your actual credentials._**

3. **Install `dotenv` Package**

    To load environment variables from the `.env` file, install the `dotenv` package:

    ```bash
    npm install dotenv
    ```

4. **Update `uploadMetadataToPinata.js` to Use Environment Variables**

    Modify the script to load environment variables:

    ```javascript
    require('dotenv').config();
    const axios = require('axios');
    const FormData = require('form-data');
    const fs = require('fs');
    const path = require('path');

    const metadataDir = path.join(__dirname, 'metadata');

    // Load Pinata API credentials from environment variables
    const pinataApiKey = process.env.PINATA_API_KEY;
    const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;
    const pinataEndpoint = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

    // Rest of the script...
    ```

### Directory Structure

Ensure your project directory has the following structure:





- **`metadata/`**: Directory containing all your NFT metadata JSON files to be uploaded.
- **`.env`**: File storing your Pinata API credentials.
- **`uploadMetadataToPinata.js`**: The main script to upload metadata to Pinata.

## Usage

1. **Prepare Metadata Files**

    Ensure all your NFT metadata JSON files are placed inside the `metadata/` directory. Each file should follow the standard NFT metadata format.

2. **Run the Script**

    Execute the script using Node.js:

    ```bash
    node uploadMetadataToPinata.js
    ```

    **Output:**

    - The script will upload each JSON file in the `metadata/` directory to Pinata.
    - Successful uploads will log the file name and the corresponding IPFS hash.
    - Errors during upload will be logged with relevant messages.

3. **Sample Output**

    ```bash
    Uploaded 0001.json: { IpfsHash: 'QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco', ... }
    Uploaded 0002.json: { IpfsHash: 'QmYwAPJzv5CZsnAzt8auV2g9d2XQjfz3jB6u1a9UKHk1rL', ... }
    ```

## Output

- **IPFS Hashes**: Each uploaded metadata file will return an IPFS hash, indicating its location on the decentralized IPFS network.
- **Logs**: The console will display logs for each upload attempt, detailing successes and any encountered errors.

## Customization

### Modifying the Script

You can customize the script to fit your specific needs, such as:

- **Adding Retry Logic**: Implement retries for failed uploads to enhance reliability.
- **Logging Enhancements**: Integrate logging libraries like `winston` for more sophisticated logging.
- **Parallel Uploads**: Optimize upload speed by handling multiple uploads concurrently.

### Example: Adding Retry Logic

```javascript
// Function to upload a file to Pinata with retry mechanism
async function uploadFileToPinata(filePath, retries = 3) {
    const fileName = path.basename(filePath);
    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath), fileName);

    const headers = {
        ...formData.getHeaders(),
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey
    };

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await axios.post(pinataEndpoint, formData, { headers });
            console.log(`Uploaded ${fileName}:`, response.data);
            return response.data;
        } catch (error) {
            console.error(`Attempt ${attempt} - Failed to upload ${fileName}:`, error.message);
            if (attempt === retries) {
                console.error(`All ${retries} attempts failed for ${fileName}.`);
            } else {
                console.log(`Retrying upload for ${fileName}...`);
            }
        }
    }
}


Troubleshooting
Invalid API Credentials

Symptom: Authentication errors when attempting to upload files.
Solution: Verify that your PINATA_API_KEY and PINATA_SECRET_API_KEY in the .env file are correct.
Missing metadata/ Directory

Symptom: Script fails to find the metadata/ directory.
Solution: Ensure that the metadata/ directory exists in the root of your project and contains the metadata JSON files.
Network Issues

Symptom: Upload requests hang or fail intermittently.
Solution: Check your internet connection and ensure that Pinata's API is reachable.
Permission Errors

Symptom: Script cannot read files or access directories.
Solution: Ensure that you have the necessary read/write permissions for the project directories and files.


Complete uploadMetadataToPinata.js Code
Below is the complete uploadMetadataToPinata.js script. You can copy and paste it into your project.

javascript
Copy code
require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const metadataDir = path.join(__dirname, 'metadata');

// Load Pinata API credentials from environment variables
const pinataApiKey = process.env.PINATA_API_KEY;
const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;
const pinataEndpoint = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

// Function to upload a file to Pinata
async function uploadFileToPinata(filePath, retries = 3) {
    const fileName = path.basename(filePath);
    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath), fileName);

    const headers = {
        ...formData.getHeaders(),
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey
    };

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await axios.post(pinataEndpoint, formData, { headers });
            console.log(`Uploaded ${fileName}:`, response.data);
            return response.data;
        } catch (error) {
            console.error(`Attempt ${attempt} - Failed to upload ${fileName}:`, error.message);
            if (attempt === retries) {
                console.error(`All ${retries} attempts failed for ${fileName}.`);
            } else {
                console.log(`Retrying upload for ${fileName}...`);
            }
        }
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
                    if (result && result.IpfsHash) {
                        console.log(`Result for ${file}:`, result.IpfsHash);
                    }
                }).catch(error => {
                    console.error(`Error uploading ${file}:`, error);
                });
            }
        });
    });
}

uploadAllMetadata();
package.json File
Below is the complete package.json file tailored to your project. You can copy and paste this into your project directory.

json
Copy code
{
  "name": "upload-metadata-to-pinata",
  "version": "1.0.0",
  "description": "A Node.js script to upload metadata JSON files to Pinata for NFT storage on IPFS.",
  "main": "uploadMetadataToPinata.js",
  "scripts": {
    "start": "node uploadMetadataToPinata.js"
  },
  "keywords": [
    "NFT",
    "metadata",
    "Pinata",
    "IPFS",
    "Node.js"
  ],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "axios": "^1.4.0",
    "dotenv": "^16.3.1",
    "form-data": "^4.0.0"
  }
}
Example metadata/0001.json
Ensure your metadata JSON files follow the standard NFT metadata format. Below is an example:

json
Copy code
{
  "name": "TONS Universe NFT #0001",
  "description": "This is a unique piece from the TONS Universe collection.",
  "image": "ipfs://QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",
  "attributes": [
    {
      "trait_type": "Background",
      "value": "Blue"
    },
    {
      "trait_type": "Eyes",
      "value": "Green"
    },
    {
      "trait_type": "Accessory",
      "value": "Hat"
    }
  ]
}