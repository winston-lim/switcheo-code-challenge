// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * PLEASE DO NOT USE THIS CODE IN PRODUCTION.
 */
contract APIConsumer is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    mapping(bytes32 => bool) public resultReceivedMapping;
    mapping(bytes32 => uint256) public resultMapping;
    mapping(address => mapping(address => bytes32)) balances;

    address private oracle;
    bytes32 private jobId;
    uint256 private fee;

    /**
     * Network: Kovan
     * Oracle: 0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8 (Chainlink Devrel
     * Node)
     * Job ID: d5270d1c311941d0b08bead21fea7747
     * Fee: 0.1 LINK
     */
    constructor() {
        setPublicChainlinkToken();
        oracle = 0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8;
        jobId = "d5270d1c311941d0b08bead21fea7747";
        fee = 0.1 * 10**18; // (Varies by network and job)
    }

    /**
     * Create a Chainlink request to retrieve API response, find the target
     * data, then multiply by 1000000000000000000 (to remove decimal places from data).
     */
    function makeRequest(address walletAddr, address tokenAddr)
        public
        returns (bytes32 requestId)
    {
        Chainlink.Request memory request = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );

        // Set the URL to perform the GET request on
        request.add(
            "get",
            string(
                abi.encodePacked(
                    "https://api.ethplorer.io/getAddressInfo/",
                    walletAddr,
                    "?token=",
                    tokenAddr,
                    "&apiKey=freekey"
                )
            )
        );
        request.add("path", "tokens[0].balance");
        requestId = sendChainlinkRequestTo(oracle, request, fee);
    }

    /**
     * Receive the response in the form of uint256
     */
    function fulfill(bytes32 _requestId, uint256 _result)
        public
        recordChainlinkFulfillment(_requestId)
    {
        resultReceivedMapping[_requestId] = true;
        resultMapping[_requestId] = _result;
    }

    function getResult(bytes32 _requestId)
        public
        view
        returns (uint256 result)
    {
        result = resultMapping[_requestId];
    }

    function getResultReceived(bytes32 _requestId)
        public
        view
        returns (bool resultReceived)
    {
        resultReceived = resultReceivedMapping[_requestId];
    }

    function fetchBalances(address walletAddr, address[] calldata tokenAddrs)
        public
    {
        for (uint256 i = 0; i < tokenAddrs.length; i++) {
            requestId = makeRequest(walletAddr, tokenAddrs[i]);
            balances[tokenAddrs[i]] = requestId;
        }
    }

    function getBalances(address walletAddr, address[] calldata tokenAddrs)
        public
        view
        returns (uint256[] _balances)
    {
        uint256[] results;
        for (uint256 i = 0; i < tokenAddrs.length; i++) {
            if (getResultReceived(balances[walletAddr][tokenAddrs[i]])) {
                results.push(getResult(balances[walletAddr][tokenAddrs[i]]));
            }
        }
        return results;
    }

    // function withdrawLink() external {} - Implement a withdraw function to avoid locking your LINK in the contract
}
