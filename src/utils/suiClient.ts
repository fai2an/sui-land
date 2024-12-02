import { JsonRpcProvider } from "@mysten/sui.js";

// Initialize the SUI client (using the default RPC endpoint)
const provider = new JsonRpcProvider("https://fullnode.tesnet.sui.io");

const suiClient = provider;

export default suiClient;
