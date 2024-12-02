# Tokenizing Real Estate Properties Using Semi-Fungible Tokens (SFT) on the SUI Blockchain

## **Project Overview**

## **Sui Land PackageID**: 0x7e37c2fe0334c17258a0e5c5df106c15a517d65358fcae68546ec9d2a13e6890

### **Sector**: Real Estate

This project revolutionizes real estate investment by addressing the significant
capital requirements and liquidity issues that plague the industry. By
leveraging blockchain technology, specifically the SUI blockchain, and
Semi-Fungible Tokens (SFTs), it aims to democratize real estate investments. The
platform allows users to tokenize real estate properties, enabling fractional
ownership and lowering entry barriers for young or inexperienced investors.

---

## **How It Works**

The platform converts real estate assets into digital tokens, enabling
fractional ownership. However, SUI does not natively support SFTs. Instead, the
process involves two steps using custom logic:

1. **New Asset Creation**:

   - A unique asset is created by calling the `new_asset` function.
   - This function mints a Non-Fungible Token (NFT) representing the property
     being tokenized.
   - The `asset_capId` is generated, which uniquely identifies the tokenized
     property.

2. **Minting Fractional Tokens**:
   - The `mint` function is called, using the `asset_capId` as an argument.
   - This function creates multiple identical copies of the previously generated
     NFT, effectively turning it into Semi-Fungible Tokens (SFTs).
   - These tokens represent fractional ownership of the property.

---

## **Platform Features**

### **User Dashboard**

- A personal dashboard for users to manage tokenization processes.

### **Property Details**

- Fields to input critical property information:
  - Location
  - Size
  - Type (residential/commercial)
  - Estimated value

### **Document Upload**

- Upload important documents, such as:
  - Title deeds
  - Sale agreements
  - Property photos

### **Minting as SFT**

- Users can tokenize their property into SFTs after providing all details and
  uploading documents.
- Each token represents a share in the property’s value.

---

## **Target Users**

### **Young Investors/Students**

- Individuals early in their careers or students with limited capital who are
  keen to invest in real estate.

### **Small Investors**

- Those looking to diversify their portfolios with fractional property
  investments.

---

## **Problem Statement**

The traditional real estate market is riddled with challenges:

1. **High Capital Requirements**:
   - Purchasing real estate is cost-prohibitive for many, especially younger
     generations.
2. **Liquidity Issues**:
   - Selling real estate involves lengthy processes, agents, fees, and market
     value discrepancies.

This project solves these issues by enabling:

- Affordable fractional ownership.
- Instant liquidity through blockchain-powered token exchanges.

---

## **Project Setup**

### **Prerequisites**

1. **Install the SUI CLI**:
   - Follow [SUI's official guide](https://docs.sui.io) for installation.
2. **Create a SUI Wallet**:
   - Download and install the SUI wallet extension on your Chrome browser.
3. **Create a Wallet Address**:
   - Run the following command to create an address with the ED25519 key scheme:
     ```bash
     sui client new-address ed25519
     ```
4. **Faucet for Gas Tokens**:
   - Obtain tokens for transaction fees using:
     ```bash
     sui client faucet
     ```

---

### **Steps to Run Locally**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repo/sui_land.git
   cd sui_land

   ```

2. **Start a Local SUI Replica**: RUST_LOG="off,sui_node=info" sui start
   --with-faucet --force-regenesis

3. **Build the Project**: sui move build

4. **Publish the Project**: sui client publish --gas-budget 1000000

5. **Install Dependencies**: yarn install

6. **Run the Project Locally**: yarn dev
