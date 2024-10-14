## how to use the pinata bulk image upload : uploadToPinata.js



---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Input Files](#input-files)
  - [Directory Structure](#directory-structure)
- [Usage](#usage)
- [Output](#output)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

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

---- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Directory Structure](#directory-structure)
- [Configuration](#configuration)
  - [1. `uploaded_links.txt`](#1-uploaded_linkstxt)
  - [2. `descriptions.json`](#2-descriptionsjson)
  - [3. Configuring Path Constants](#3-configuring-path-constants)
- [Usage](#usage)
- [Sample Output](#sample-output)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
---

## Generate Metadata Script

`generateMetadata.js` is a Node.js script designed to automate the creation of metadata JSON files for NFTs. It processes a list of uploaded image links, optionally incorporates custom descriptions, and generates structured metadata compliant with NFT standards.


## Features

- **Automated Metadata Generation**: Converts uploaded image links into structured JSON metadata files.
- **Custom Descriptions**: Supports optional custom descriptions via a `descriptions.json` file.
- **IPFS Integration**: References images using IPFS URIs.
- **Scalable**: Easily handles large numbers of NFT entries.
- **Extensible Attributes**: Placeholder for adding specific NFT attributes.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node.js typically comes with npm. Verify installation with:

    ```bash
    npm -v
    ```

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/TONSToken/PinataBulkUpload_Images_json_generate_metadata.git
    cd PinataBulkUpload_Images_json_generate_metadata
    ```

2. **Install Dependencies**

    This script uses Node.js's built-in `fs` and `path` modules, so no additional dependencies are required. However, ensure your Node.js version is up-to-date.

    ```bash
    npm install
    ```

## Configuration

### Input Files

1. **Uploaded Links File (`uploaded_links.txt`)**

    - **Path**: Located in the root directory (`./uploaded_links.txt`).
    - **Format**: Each line should follow the pattern:

        ```
        Uploaded art_XXXX.png: <IPFS_HASH>
        ```

        **Example:**

        ```
        Uploaded art_0001.png: QmXoypizjW3WknFiJnKLwHCnL72vjgxjQkDDP1mXWo6uco
        Uploaded art_0002.png: QmYwAPJzv5CZsnAzt8auityg9d2XQjfz3jB6u1a9UKHk1rL
        ```

2. **Descriptions File (`descriptions.json`)** *(Optional)*

    - **Path**: Located in the root directory (`./descriptions.json`).
    - **Format**: JSON object mapping NFT IDs to descriptions.

        **Example:**

        ```json
        {
          "0001": "This is a unique piece from the MY_sample_NFT collection.",
          "0002": "Exclusive artwork representing the MY_sample_NFT."
        }
        ```

    - **Note**: If `descriptions.json` is not provided or a description for a specific NFT ID is missing, the script will use a default description.

### Directory Structure

Ensure your project directory has the following structure:

```
PinataBulkUpload_Images_json_generate_metadata/
├── generateMetadata.js
├── uploaded_links.txt
├── descriptions.json (optional)
├── metadata/ (will be created by the script)
└── package.json
```

## Usage

1. **Prepare Input Files**

    - Populate `uploaded_links.txt` with your uploaded image links following the specified format.
    - (Optional) Create `descriptions.json` with custom descriptions for your NFTs.

2. **Run the Script**

    Execute the script using Node.js:

    ```bash
    node generateMetadata.js
    ```

    **Output:**

    - The script will create a `metadata` directory (if it doesn't already exist).
    - For each valid entry in `uploaded_links.txt`, a corresponding JSON file (e.g., `0001.json`) will be generated in the `metadata` directory.

3. **Sample Output**

    ```json
    {
        "name": "MY_sample_NFT #0001",
        "description": "This is a unique piece from the MY_sample_NFT collection.",
        "image": "ipfs://QmXoypizjW3WknFiJnKLwHCnL72jgdxjQkDDP1mXrd6uco",
        "attributes": [
            // Add any specific attributes here
            // Example:
            // { "trait_type": "Background", "value": "Blue" }
        ]
    }
    ```

## Output

- **Metadata Files**: Located in the `metadata/` directory, each JSON file corresponds to an NFT and contains the following fields:
  - `name`: The name of the NFT.
  - `description`: A description of the NFT.
  - `image`: The IPFS URI of the NFT image.
  - `attributes`: An array for additional NFT attributes (currently empty; customize as needed).

## Customization

### Adding Attributes

To include specific attributes for each NFT, modify the `attributes` array in the generated JSON files. You can automate this by updating the script to include attribute data based on your requirements.

**Example:**

```json
"attributes": [
    { "trait_type": "Background", "value": "Blue" },
    { "trait_type": "Eyes", "value": "Green" },
    { "trait_type": "Accessory", "value": "Hat" }
]
```

### Extending the Script

You can enhance the script to include more features, such as:

- **Validation**: Ensure IPFS hashes are valid.
- **Logging**: Implement more robust logging mechanisms.
- **Error Handling**: Improve error messages and recovery options.
- **Integration**: Connect with other services or APIs for dynamic data.

## Troubleshooting

- **Metadata Directory Not Created**

    Ensure the script has the necessary permissions to create directories in the project path.

- **Error Parsing `descriptions.json`**

    Verify that `descriptions.json` is valid JSON. Use a JSON validator to check for syntax errors.

- **Incorrect Line Format in `uploaded_links.txt`**

    Ensure each line follows the specified format:

    ```
    Uploaded art_XXXX.png: <IPFS_HASH>
    ```

    Lines not matching this pattern will be skipped with a warning.

- **Missing IPFS Hashes**

    Ensure that all uploaded links in `uploaded_links.txt` include valid IPFS hashes.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

    ```bash
    git checkout -b feature/YourFeature
    ```

3. **Commit Your Changes**

    ```bash
    git commit -m "Add Your Feature"
    ```

4. **Push to the Branch**

    ```bash
    git push origin feature/YourFeature
    ```

5. **Open a Pull Request**

    Describe your changes and submit the pull request for review.

## License

This project is licensed under the [MIT License](LICENSE).

---

*Happy NFT Creating! 🚀*

---

## Complete `generateMetadata.js` Code

Below is the complete `generateMetadata.js` script. You can copy and paste it into your project.

```javascript
const fs = require('fs');
const path = require('path');

// Path to the uploaded links file
const uploadedLinksPath = path.join(__dirname, 'uploaded_links.txt');

// Directory to save metadata JSON files
const metadataDir = path.join(__dirname, 'metadata');

// Base URL for IPFS
const ipfsBaseURL = 'ipfs://';

// Path to the descriptions file (optional)
const descriptionsPath = path.join(__dirname, 'descriptions.json');

// Ensure the metadata directory exists
if (!fs.existsSync(metadataDir)) {
    fs.mkdirSync(metadataDir);
    console.log(`Created metadata directory at ${metadataDir}`);
}

// Read custom descriptions if available
let descriptions = {};
if (fs.existsSync(descriptionsPath)) {
    const descriptionsData = fs.readFileSync(descriptionsPath, 'utf8');
    try {
        descriptions = JSON.parse(descriptionsData);
        console.log(`Loaded custom descriptions from ${descriptionsPath}`);
    } catch (parseErr) {
        console.error(`Error parsing ${descriptionsPath}:`, parseErr);
        console.warn(`Using default descriptions.`);
        descriptions = {};
    }
} else {
    console.warn(`No descriptions.json found. Using default descriptions.`);
}

// Read the uploaded_links.txt file
fs.readFile(uploadedLinksPath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading ${uploadedLinksPath}:`, err);
        return;
    }

    // Split the file content into lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    lines.forEach((line, index) => {
        // Example line: "Uploaded art_0004.png: QmcawuGxRQteftLuJPRLAYtUaoq5kQd8VSL5mHdCSdhL66"
        const regex = /Uploaded\s+art_(\d+)\.png:\s+([A-Za-z0-9]+)/;
        const match = line.match(regex);

        if (match) {
            const nftId = match[1]; // e.g., "0004"
            const ipfsHash = match[2];  // e.g., "QmcawuGxRQteftLuJPRLAYtUaoq5kQd8VSL5mHdCSdhL66"

            // Generate unique description
            const description = descriptions[nftId] || `MY_sample_NFT #${nftId} - This unique piece is part of the exclusive MY_sample_NFT collection.`;

            // Create metadata object
            const metadata = {
                name: `MY_sample_NFT #${nftId}`,
                description: description,
                image: `${ipfsBaseURL}${ipfsHash}`,
                attributes: [
                    // Add any specific attributes here
                    // Example:
                    // { "trait_type": "Background", "value": "Blue" },
                ]
            };

            // Define the metadata file path
            const metadataFilePath = path.join(metadataDir, `${nftId}.json`);

            // Write metadata to JSON file
            fs.writeFile(metadataFilePath, JSON.stringify(metadata, null, 4), (err) => {
                if (err) {
                    console.error(`Error writing metadata for NFT #${nftId}:`, err);
                } else {
                    console.log(`Metadata for NFT #${nftId} created successfully.`);
                }
            });
        } else {
            console.warn(`Line format is incorrect and was skipped: "${line}"`);
        }
    });
});
```

---

## Example `uploaded_links.txt`

Ensure your `uploaded_links.txt` follows the specified format. Below is an example:

```
Uploaded art_0001.png: QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco
Uploaded art_0002.png: QmYwAPJzv5CZsnAzt8auV2g9d2XQjfz3jB6u1a9UKHk1rL
Uploaded art_0003.png: QmZ1234567890abcdefghij1234567890abcdefghi
```

---

## Example `descriptions.json`

If you choose to use a `descriptions.json` for custom descriptions, ensure it is properly formatted. Below is an example:

```json
{
  "0001": "This is a unique piece from the MY_sample_NFT collection.",
  "0002": "Exclusive artwork representing the MY_sample_NFT.",
  "0003": "A rare NFT showcasing the beauty of the MY_sample_NFT."
}
```

---


-----------------------------------------------------------------------------------------------------------------------------------------------------------
## how to use the generate metadata .json 

# NFT Metadata Generator

## Overview

The **NFT Metadata Generator** is a Node.js script designed to automate the creation of metadata JSON files for NFTs (Non-Fungible Tokens). It processes a list of uploaded IPFS links, incorporates custom descriptions, and generates structured metadata files compliant with standard NFT metadata formats. This tool streamlines the process of preparing your NFTs for platforms that require metadata in JSON format.



## Features

- **Automated Metadata Generation**: Converts uploaded IPFS links into standardized NFT metadata.
- **Custom Descriptions**: Optionally uses a `descriptions.json` file to provide unique descriptions for each NFT.
- **Structured Output**: Generates JSON files organized in a `metadata` directory for easy access and integration.
- **Error Handling**: Provides informative console messages for successful operations and potential issues.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/TONSToken/PinataBulkUpload_Images_json_generate_metadata.git










-----------------------------------------------------------------------------------------------------------------------------------------------------------

## how to use bulk upload of json files to pinata ipsf: uploadScript.js

# Upload Metadata to Pinata Script

`uploadMetadataToPinata.js` is a Node.js script designed to automate the uploading of metadata JSON files to [Pinata](https://pinata.cloud/), a popular IPFS pinning service. This script reads metadata files from a designated directory and uploads them to Pinata, facilitating decentralized storage and accessibility of your NFT metadata.

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
    git clone https://github.com/TONSToken/PinataBulkUpload_Images_json_generate_metadata.git
    cd PinataBulkUpload_Images_json_generate_metadata
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
  "name": "MY_sample_NFT #0001",
  "description": "This is a unique piece from the MY_sample_NFT collection.",
  "image": "ipfs://QmXoypizjW3WknFiJnKLwHCnLhfdvedxjQkDDP1mXWo6uco",
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
