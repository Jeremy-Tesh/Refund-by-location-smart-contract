import 'package:flutter/services.dart';
import 'package:frontend/utils/constants.dart';
import 'package:web3dart/web3dart.dart';

// const owner_private_key =
//     "d1526ab72e3327a22e4371ab86f44ab94d6542c0c6215e0df9bd246817b41231";

Future<DeployedContract> loadContract() async {
  String abi = await rootBundle.loadString('src/constants/abi.json');
  String contractAddress = contractAddress1;

  final contract = DeployedContract(ContractAbi.fromJson(abi, 'Refund'),
      EthereumAddress.fromHex(contractAddress));

  return contract;
}

Future<String> callFunction(String functionName, List<dynamic> args,
    Web3Client ethClient, String privateKey) async {
  EthPrivateKey credentials = EthPrivateKey.fromHex(privateKey);
  DeployedContract contract = await loadContract();
  final ethFunction = contract.function(functionName);
  final result = await ethClient.sendTransaction(
      credentials,
      Transaction.callContract(
          contract: contract, function: ethFunction, parameters: args),
      chainId: null,
      fetchChainIdFromNetworkId: true);

  return result;
}

Future<String> getOwner(String address, Web3Client ethClient) async {
  print("started");
  var response =
      await callFunction("getOwner", [], ethClient, owner_private_key);
  print("Runing well");
  return response;
}

Future<String> say(Web3Client ethClient) async {
  var ans = await callFunction("say", [], ethClient, owner_private_key);
  print("say function");
  print(ans);
  return ans;
}
