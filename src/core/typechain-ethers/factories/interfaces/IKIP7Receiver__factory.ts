/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IKIP7Receiver,
  IKIP7ReceiverInterface,
} from "../../interfaces/IKIP7Receiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onKIP7Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IKIP7Receiver__factory {
  static readonly abi = _abi;
  static createInterface(): IKIP7ReceiverInterface {
    return new utils.Interface(_abi) as IKIP7ReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKIP7Receiver {
    return new Contract(address, _abi, signerOrProvider) as IKIP7Receiver;
  }
}
