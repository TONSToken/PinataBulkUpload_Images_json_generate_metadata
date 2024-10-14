# 📦 Pinata Bulk Image Upload Script

Welcome to the **Pinata Bulk Image Upload Script** repository! This comprehensive guide provides everything you need to **bulk upload images to [Pinata](https://pinata.cloud/)**, a leading IPFS pinning service. Whether you're a seasoned developer or new to blockchain technologies, this guide will help you set up, configure, and execute the script seamlessly.

---

## 📖 Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Setup](#setup)
    - [3.1 Install Node.js and npm](#31-install-nodejs-and-npm)
    - [3.2 Install a Text Editor](#32-install-a-text-editor)
    - [3.3 Install Git (Optional)](#33-install-git-optional)
4. [Project Initialization](#project-initialization)
    - [4.1 Create Project Directory](#41-create-project-directory)
    - [4.2 Initialize Node.js Project](#42-initialize-nodejs-project)
    - [4.3 Install Required Packages](#43-install-required-packages)
5. [Configuration](#configuration)
    - [5.1 Obtain Pinata API Keys](#51-obtain-pinata-api-keys)
    - [5.2 Set Up Environment Variables](#52-set-up-environment-variables)
6. [Preparing Images](#preparing-images)
7. [Writing the Upload Script](#writing-the-upload-script)
8. [Running the Script](#running-the-script)
9. [Troubleshooting](#troubleshooting)
10. [Security Considerations](#security-considerations)
11. [License](#license)

---

## 📝 Introduction

Uploading multiple images to IPFS via Pinata can be time-consuming if done manually. This script automates the process, allowing you to upload images in bulk efficiently. This is particularly useful for NFT projects where you need to upload numerous assets.

---

## 🔧 Prerequisites

Before you begin, ensure you have the following:

- **A Computer with Internet Access**
- **Basic Understanding of Command Line Operations**
- **Pinata Account**: [Sign up here](https://pinata.cloud/)

---

## 🚀 Setup

### 3.1 Install Node.js and npm

**Node.js** is a JavaScript runtime required to run the script. **npm** (Node Package Manager) comes bundled with Node.js and is used to install necessary packages.

#### Steps:

1. **Download Node.js:**
   - Visit the [official Node.js website](https://nodejs.org/).
   - Download the **LTS (Long Term Support)** version suitable for your operating system (Windows, macOS, or Linux).

2. **Install Node.js:**
   - Run the downloaded installer.
   - Follow the on-screen instructions to complete the installation.

3. **Verification:**
   - Open **Command Prompt** (Windows) or **Terminal** (macOS/Linux).
   - Run the following commands to verify installation:
     ```bash
     node -v
     npm -v
     ```
   - You should see version numbers for both Node.js and npm.

---

### 3.2 Install a Text Editor

A text editor is necessary to write and edit scripts and configuration files. **Visual Studio Code (VS Code)** is highly recommended.

#### Steps:

1. **Download VS Code:**
   - Visit the [Visual Studio Code website](https://code.visualstudio.com/).
   - Download the installer for your operating system.

2. **Install VS Code:**
   - Run the installer.
   - Follow the on-screen instructions to complete the installation.

3. **Open VS Code:**
   - Launch VS Code from your applications menu or desktop shortcut.

---

### 3.3 Install Git (Optional)

**Git** is useful for cloning repositories and version control but is optional for this setup.

#### Steps:

1. **Download Git:**
   - Visit the [Git website](https://git-scm.com/downloads).
   - Download the installer for your operating system.

2. **Install Git:**
   - Run the downloaded installer.
   - Follow the on-screen instructions to complete the installation.

3. **Verification:**
   - Open **Command Prompt** or **Terminal**.
   - Run the following command:
     ```bash
     git --version
     ```
   - You should see the Git version number.

---

## 🛠️ Project Initialization

### 4.1 Create Project Directory

Organize your project files by creating a dedicated directory.

#### Steps:

1. **Navigate to Desired Location:**
   - Open **File Explorer** (Windows) or **Finder** (macOS).
   - Choose a location where you want to create your project folder (e.g., Desktop).

2. **Create Folder:**
   - Right-click and select **New > Folder**.
   - Name the folder, e.g., `PinataBulkUpload`.

3. **Open Terminal in Project Directory:**
   - **Windows:**
     - Navigate to the project folder.
     - Click on the address bar, type `cmd`, and press **Enter**.
   - **macOS/Linux:**
     - Open **Terminal**.
     - Use the `cd` command to navigate to the project folder:
       ```bash
       cd /path/to/PinataBulkUpload
       ```

---

### 4.2 Initialize Node.js Project

Initialize a new Node.js project to manage dependencies.

#### Steps:

1. **Run npm Initialization:**
   ```bash
   npm init -y
This command creates a package.json file with default settings.
## 4.3 🛠️ Install Required Packages

Install the necessary Node.js packages: `axios`, `form-data`, and `dotenv`.

### **Steps:**

#### 1. **Install Packages:**
```bash
npm install axios form-data dotenv


## 🛡️ Configuration

### 5.1 🔑 Obtain Pinata API Keys

To interact with Pinata's API, you need API keys.

#### **Steps:**

1. **Log In to Pinata:**
   - Visit [Pinata Login](https://pinata.cloud/login) and log in to your account.

2. **Navigate to API Keys:**
   - Once logged in, click on your profile icon in the top right corner.
   - Select **API Keys** from the dropdown menu.

3. **Create New API Key:**
   - Click on **New Key**.
   - Provide a name for your API key (e.g., `BulkUploadScript`).
   - Assign necessary permissions (**Pin Files** permission is sufficient for uploading).
   - Click **Create Key**.

4. **Copy API Keys:**
   - Once created, you will see the **API Key** and **Secret API Key**.
   - **Important:** Copy and save these keys securely. You won't be able to view the secret key again.

---

### 5.2 🗄️ Set Up Environment Variables

Storing API keys securely using environment variables prevents exposing sensitive information in your code.

#### **Steps:**

1. **Create a `.env` File:**
   - In your project directory (`PinataBulkUpload`), create a new file named `.env`.

   - **Windows:**
     - Right-click inside the folder, select **New > Text Document**.
     - Name it `.env` (ensure no `.txt` extension).

   - **macOS/Linux:**
     ```bash
     touch .env
     ```

2. **Edit the `.env` File:**
   - Open `.env` with your text editor (e.g., VS Code).
   - Add the following lines:
     ```env
     PINATA_API_KEY=yourPinataApiKey
     PINATA_SECRET_API_KEY=yourPinataSecretApiKey
     ```
   - Replace `yourPinataApiKey` and `yourPinataSecretApiKey` with the actual keys obtained from Pinata.

3. **Save the `.env` File:**
   - Ensure the file is saved in the root of your project directory.

4. **Add `.env` to `.gitignore`:**
   - To prevent accidental exposure of your API keys if you use Git, add `.env` to `.gitignore`.

   - **Create a `.gitignore` file if it doesn't exist:**
     ```bash
     touch .gitignore
     ```

   - **Edit `.gitignore`:**
     - Open `.gitignore` in your text editor and add:
       ```gitignore
       .env
       ```
   - **Save the file.**

---

## 🖼️ Preparing Images

Organize the images you want to upload in a dedicated folder.

### **Steps:**

1. **Create `images` Directory:**
   - In your project directory (`PinataBulkUpload`), create a new folder named `images`.

   - **Windows:**
     - Right-click inside the project folder, select **New > Folder**, and name it `images`.

   - **macOS/Linux:**
     ```bash
     mkdir images
     ```

2. **Add Images:**
   - Place all the images you intend to upload into the `images` folder.

   - **Note:**
     - Ensure that the images are properly named and in supported formats (e.g., `.png`, `.jpg`, `.gif`).

---
📝 Writing the Upload Script
Create a Node.js script that will handle the bulk upload to Pinata.

Steps:
1. Create uploadToPinata.js:
In your project directory, create a new file named uploadToPinata.js.

Windows:

Right-click inside the project folder, select New > Text Document, name it uploadToPinata.js.
macOS/Linux:

bash
Copy code
touch uploadToPinata.js

2. Edit uploadToPinata.js:
Open uploadToPinata.js in your text editor.

Paste the following code:

javascript
Copy code
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Load environment variables
const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY;

// Function to upload a single file to Pinata
async function uploadFile(filePath) {
    const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
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
        console.log(`✅ Uploaded ${path.basename(filePath)}: ${response.data.IpfsHash}`);
    } catch (error) {
        if (error.response) {
            console.error(`❌ Failed to upload ${path.basename(filePath)}: ${JSON.stringify(error.response.data)}`);
        } else {
            console.error(`❌ Failed to upload ${path.basename(filePath)}: ${error.message}`);
        }
    }
}

// Function to upload all files in a directory
function uploadDirectory(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('❌ Could not list the directory.', err);
            process.exit(1);
        }

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            // Check if the file is indeed a file (not a directory)
            fs.stat(filePath, (error, stats) => {
                if (error) {
                    console.error(`❌ Could not access file: ${filePath}`, error);
                    return;
                }
                if (stats.isFile()) {
                    uploadFile(filePath);
                }
            });
        });
    });
}

// Define the images directory
const imagesDirectory = path.join(__dirname, 'images');

// Start the upload process
uploadDirectory(imagesDirectory);
3. Explanation:
Imports:

axios: For making HTTP requests.
form-data: To handle file uploads.
fs and path: For file system operations.
dotenv: To load environment variables from .env file.
Environment Variables:

PINATA_API_KEY and PINATA_SECRET_API_KEY are loaded from the .env file.
uploadFile Function:

Uploads a single file to Pinata.
Logs success or error messages.
uploadDirectory Function:

Reads all files in the images directory and uploads them one by one.
Execution:

Defines the path to the images directory.
Initiates the upload process.
4. Save the Script:
Ensure the file is saved after pasting the code.
▶️ Running the Script
Execute the script to start bulk uploading your images to Pinata.

Steps:
1. Open Terminal in Project Directory:
Windows:

Navigate to the project folder in File Explorer.
Click on the address bar, type cmd, and press Enter.
macOS/Linux:

Open Terminal.
Navigate to the project directory using cd:
bash
Copy code
cd /path/to/PinataBulkUpload
2. Run the Script:
bash
Copy code
node uploadToPinata.js
3. Monitor the Output:
The terminal will display logs indicating the upload status of each image.

Example:
css
Copy code
✅ Uploaded image1.png: QmX...123
✅ Uploaded image2.jpg: QmY...456
❌ Failed to upload image3.gif: {"error":"File size exceeds limit."}
4. Verify Uploads:
Log in to your Pinata account.
Navigate to the Pinned section to view your uploaded files and their corresponding IPFS hashes.
🛠️ Troubleshooting
Encountering issues is common, especially when setting up for the first time. Below are common problems and their solutions.

1. Missing .env File or Environment Variables
Issue: Script cannot find API keys.
Solution:
Ensure the .env file exists in the root of your project directory.
Verify that the .env file contains the correct API keys:
env
Copy code
PINATA_API_KEY=yourPinataApiKey
PINATA_SECRET_API_KEY=yourPinataSecretApiKey
Ensure there are no extra spaces or quotes around the keys.
2. Invalid API Keys
Issue: Authentication fails when uploading.
Solution:
Double-check that the API keys in the .env file are correct.
Ensure that the API keys have the necessary permissions (Pin Files).
3. Network Issues
Issue: Unable to connect to Pinata API.
Solution:
Check your internet connection.
Ensure that there are no firewall rules blocking outbound requests.
Retry after some time in case of temporary Pinata service issues.
4. File Permissions
Issue: Script cannot read image files.
Solution:
Ensure that the script has read permissions for the images directory and its files.
On macOS/Linux, you can modify permissions using:
bash
Copy code
chmod -R 755 images
5. Large File Sizes
Issue: Pinata rejects files that exceed size limits.
Solution:
Verify Pinata’s file size limits.
Compress or resize large images before uploading.
6. Script Errors
Issue: Errors in the script execution.
Solution:
Ensure all dependencies are installed correctly:
bash
Copy code
npm install
Check for syntax errors in uploadToPinata.js.
Review error messages in the terminal for specific issues.
🔒 Security Considerations
Protecting your API keys and sensitive data is crucial.

1. Never Expose .env File
Risk: Exposing API keys can lead to unauthorized access and misuse.
Solution:
Ensure .env is listed in .gitignore to prevent it from being committed to version control.
bash
Copy code
echo ".env" >> .gitignore
2. Secure Your System
Risk: Malware or unauthorized access can compromise your API keys.
Solution:
Use strong, unique passwords for your Pinata account.
Enable two-factor authentication (2FA) if available.
Keep your system and software updated to protect against vulnerabilities.
3. Handle API Keys Carefully
Risk: Hardcoding API keys in scripts can lead to accidental exposure.
Solution:
Always use environment variables (.env file) to manage API keys.
Avoid sharing your scripts with embedded API keys.
📜 License
This project is licensed under the MIT License.

🎉 Happy Uploading! 🚀
For any further assistance or inquiries, feel free to open an issue or reach out to the repository maintainer.

