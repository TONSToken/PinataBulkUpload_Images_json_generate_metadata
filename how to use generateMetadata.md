# NFT Metadata Generator

## Overview

The **NFT Metadata Generator** is a Node.js script designed to automate the creation of metadata JSON files for NFTs (Non-Fungible Tokens). It processes a list of uploaded IPFS links, incorporates custom descriptions, and generates structured metadata files compliant with standard NFT metadata formats. This tool streamlines the process of preparing your NFTs for platforms that require metadata in JSON format.

## Table of Contents

- [Features](#features)
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
   git clone https://github.com/yourusername/nft-metadata-generator.git


