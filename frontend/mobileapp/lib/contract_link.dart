import 'dart:convert';

import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:frontend/services/functions.dart';
import 'package:frontend/utils/constants.dart';
import 'package:http/http.dart';
import 'package:web3dart/web3dart.dart';
import 'package:web_socket_channel/io.dart';

class ContractLink extends ChangeNotifier {
  final String _rpcUrl = "http://127.0.0.1:7545";
  final String _wsUrl = "http://127.0.0.1:7545";
  final String _privateKey = dotenv.env['PRIVATE_KEY']!;
  late Credentials _credentials;
  late Web3Client _client;
  late ContractAbi _abiCode;
  late EthPrivateKey _creds;
  late EthereumAddress _contractAddress;
  late EthereumAddress _ownAddress;
  late DeployedContract _contract;
  late ContractFunction _userCount;
  late ContractFunction _user;
  late ContractFunction _createUser;
  late ContractEvent _userCreated;
  Client? httpClient;
  Web3Client? ethClient;

  ContractLink() {
    httpClient = Client();
    ethClient = Web3Client(alchemy_url, httpClient!);
    print(ethClient);
    initiateSetup();
  }

  Future<void> initiateSetup() async {
    // _client = Web3Client(_rpcUrl, Client(), socketConnector: () {
    //   return IOWebSocketChannel.connect(_wsUrl).cast<String>();
    // });
    // await getAbi();
    // await getCredentials();
    // await getDeployedContract();
    print(_privateKey);
    print("provider started");
    await say(ethClient!);
    print("passed");
  }

  // Future<void> getAbi() async {
  //   String abiStringFile = await rootBundle.loadString("src/abis/Refund.json");
  //   String abi = await rootBundle.loadString('src/constants/abi.json');
  //   String contractAddress = contractAddress1;
  //   // String contractAddress =
  //   //     await rootBundle.loadString("src/constants/contractAddresses.json");

  //   var jsonabi = jsonDecode(abi);
  //   var jsonAbi = jsonDecode(abiStringFile);
  //   print(jsonAbi);
  //   print(jsonabi);
  //   _abiCode = ContractAbi.fromJson(jsonEncode(jsonabi['abi']), 'Refund');
  //   print(_abiCode);
  //   _contractAddress =
  //       EthereumAddress.fromHex(jsonAbi["networks"]["5777"]["address"]);
  // }

  // Future<void> getCredentials() async {
  //   _creds = EthPrivateKey.fromHex(_privateKey);
  //   _ownAddress = await _credentials.extractAddress();
  // }

  // Future<void> getDeployedContract() async {
  //   _contract = DeployedContract(_abiCode, _contractAddress);

  //   _userCount = _contract.function("userCount");
  //   _user = _contract.function("user");
  //   _createUser = _contract.function('addUser');
  //   _userCreated = _contract.event("UserCreated");

  //   getUsers();
  // }

  // getUsers() async {
  //   List totalUsersList = await _client
  //       .call(contract: _contract, function: _userCount, params: []);

  //   BigInt totalUser = totalUsersList[0];
  //   print("here");
  //   print(await totalUser);
  //   print("there");
  // }
}
