/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Staking, StakingInterface } from "../Staking";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6001557351998830821827e12044a903e524b163152effd4600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073f4869878d11145d65136a7e3c8ca36a5a5059dfa600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561014157600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610d85806101916000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806351cff8d9146100465780637b0472f014610062578063ecfb49a31461007e575b600080fd5b610060600480360381019061005b9190610866565b61009c565b005b61007c600480360381019061007791906108e1565b610431565b005b61008661080c565b6040516100939190610aea565b60405180910390f35b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015411610121576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011890610a4a565b60405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015442116101a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019c90610aaa565b60405180910390fd5b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490506000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015490506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b81526004016102909190610aea565b602060405180830381600087803b1580156102aa57600080fd5b505af11580156102be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e291906108b8565b905082600660008282546102f69190610b6c565b92505081905550604051806060016040528060008152602001600081526020016000815250600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020155905050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85836040518363ffffffff1660e01b81526004016103d8929190610a21565b602060405180830381600087803b1580156103f257600080fd5b505af1158015610406573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042a919061088f565b5050505050565b6001811015610475576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046c90610a8a565b60405180910390fd5b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154146104fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f190610aca565b60405180910390fd5b81421061053c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053390610a6a565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161059b939291906109ea565b602060405180830381600087803b1580156105b557600080fd5b505af11580156105c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ed919061088f565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001546040518363ffffffff1660e01b815260040161066f929190610a21565b602060405180830381600087803b15801561068957600080fd5b505af115801561069d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c1919061088f565b506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b6b55f25836040518263ffffffff1660e01b815260040161071f9190610aea565b602060405180830381600087803b15801561073957600080fd5b505af115801561074d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077191906108b8565b9050604051806060016040528084815260200183815260200182815250600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101556040820151816002015590505081600660008282546108009190610b16565b92505081905550505050565b60065481565b60008135905061082181610d0a565b92915050565b60008151905061083681610d21565b92915050565b60008135905061084b81610d38565b92915050565b60008151905061086081610d38565b92915050565b60006020828403121561087857600080fd5b600061088684828501610812565b91505092915050565b6000602082840312156108a157600080fd5b60006108af84828501610827565b91505092915050565b6000602082840312156108ca57600080fd5b60006108d884828501610851565b91505092915050565b600080604083850312156108f457600080fd5b60006109028582860161083c565b92505060206109138582860161083c565b9150509250929050565b61092681610ba0565b82525050565b6000610939601883610b05565b915061094482610c17565b602082019050919050565b600061095c602283610b05565b915061096782610c40565b604082019050919050565b600061097f601b83610b05565b915061098a82610c8f565b602082019050919050565b60006109a2601d83610b05565b91506109ad82610cb8565b602082019050919050565b60006109c5601e83610b05565b91506109d082610ce1565b602082019050919050565b6109e481610bde565b82525050565b60006060820190506109ff600083018661091d565b610a0c602083018561091d565b610a1960408301846109db565b949350505050565b6000604082019050610a36600083018561091d565b610a4360208301846109db565b9392505050565b60006020820190508181036000830152610a638161092c565b9050919050565b60006020820190508181036000830152610a838161094f565b9050919050565b60006020820190508181036000830152610aa381610972565b9050919050565b60006020820190508181036000830152610ac381610995565b9050919050565b60006020820190508181036000830152610ae3816109b8565b9050919050565b6000602082019050610aff60008301846109db565b92915050565b600082825260208201905092915050565b6000610b2182610bde565b9150610b2c83610bde565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610b6157610b60610be8565b5b828201905092915050565b6000610b7782610bde565b9150610b8283610bde565b925082821015610b9557610b94610be8565b5b828203905092915050565b6000610bab82610bbe565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f5573657220646f65736e27742068617665206120706c616e0000000000000000600082015250565b7f446561646c696e65206d7573742062652073657420696e20746865206675747560008201527f7265000000000000000000000000000000000000000000000000000000000000602082015250565b7f4e65656420746f207472616e73666572206174206c6561737420310000000000600082015250565b7f446561646c696e65206861736e2774206265656e206163686965766564000000600082015250565b7f5573657220616c72656164792068617320736574207570206120706c616e0000600082015250565b610d1381610ba0565b8114610d1e57600080fd5b50565b610d2a81610bb2565b8114610d3557600080fd5b50565b610d4181610bde565b8114610d4c57600080fd5b5056fea2646970667358221220d155fbdc737fdabd42b4d9ef46ebf5eb2791d34b23a4b7784cbf0c13fe5d2fd364736f6c63430008040033";

export class Staking__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(overrides || {}) as Promise<Staking>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
