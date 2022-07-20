import 'package:flutter/services.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:frontend/utils/constants.dart';
import 'package:web3dart/web3dart.dart';

String owner_private_key = dotenv.env['PRIVATE_KEY']!;

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

Future<List> getTotalVotes(Web3Client ethClient) async {
  List<dynamic> result = await ask('getTotalVotes', [], ethClient);
  return result;
}

Future<List<dynamic>> ask(
    String funcName, List<dynamic> args, Web3Client ethClient) async {
  final contract = await loadContract();
  final ethFunction = contract.function(funcName);
  final result =
      ethClient.call(contract: contract, function: ethFunction, params: args);
  return result;
}

Future<String> createEmployee(String address, String name, int lat, int lon,
    int range, Web3Client ethClient) async {
  final add = EthereumAddress.fromHex(address);
  print(add);
  var response = await callFunction(
      'createEmployee',
      [add, name, BigInt.from(lat), BigInt.from(lon), BigInt.from(range)],
      ethClient,
      owner_private_key);
  print('Employee added successfully');
  return response;
}

Future<List> getEmployees(Web3Client ethClient) async {
  List<dynamic> result = await ask('getEmployees', [], ethClient);
  return result;
}

Future<List> getEmployeeDetail(String address, Web3Client ethClient) async {
  List<dynamic> result = await ask(
      'getEmployeeDetail', [EthereumAddress.fromHex(address)], ethClient);
  return result;
}

Future<List<dynamic>> calculateDistance(
    int lat, int lon, Web3Client ethClient) async {
  List<dynamic> response = await ask(
      'calculateDistance', [BigInt.from(lat), BigInt.from(lon)], ethClient);
  return response;
}
