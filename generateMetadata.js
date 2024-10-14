const fs = require('fs');
const path = require('path');

// Path to the uploaded links file
const uploadedLinksPath = path.join(__dirname, 'uploaded_links.txt');

// Directory to save metadata JSON files
const metadataDir = path.join(__dirname, 'metadata');

// Base URL for your website-hosted images
const websiteImageBaseURL = 'https://YOUR_WEBSITE_LINK/Art_images_folder/';

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
            let nftId = match[1]; // e.g., "0004"
            const ipfsHash = match[2]; // e.g., "QmcawuGxRQteftLuJPRLAYtUaoq5kQd8VSL5mHdCSdhL66"

            // Ensure nftId is zero-padded to maintain consistency (e.g., "0004")
            nftId = nftId.padStart(4, '0');

            // Generate unique description
            const description = descriptions[nftId] || `TONS Universe NFT #${nftId} - This unique piece is part of the exclusive TONS Universe collection.`;

            // Example: Adding attributes (customize as needed)
            const attributes = [
                { "trait_type": "Background", "value": "Blue" },
                { "trait_type": "Eyes", "value": "Green" }
                // Add more traits as necessary
            ];

            // Create metadata object in the ERC-721 compliant format
            const metadata = {
                name: `TONS Universe NFT #${nftId}`,
                description: description,
                image: `${ipfsBaseURL}${ipfsHash}`, // IPFS link to the image
                external_url: `${websiteImageBaseURL}art_${nftId}.png`, // Website-hosted image link
                attributes: attributes,
                // Optional custom fields
                collection: "TONS Universe",
                levels: [],
                stats: [],
                unlockable_content: false, // Changed from array to boolean
                explicit_and_sensitive_content: false,
                supply: 1, // Adjust if supply is different
                blockchain: "Polygon"
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
