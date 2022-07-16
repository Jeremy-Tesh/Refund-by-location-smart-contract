import 'dart:convert';

import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:http/http.dart';
import 'package:web3dart/web3dart.dart';
import 'package:web_socket_channel/io.dart';

class ContractLink extends ChangeNotifier {
  final String _rpcUrl = "http://127.0.0.1:7545";
  final String _wsUrl = "http://127.0.0.1:7545";
  final String _privateKey =
      "fa5a76323f74adb0e52bbc344298e24456dd6a5e817853493699d3ac9939edcf";

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

  ContractLink() {
    initiateSetup();
  }

  Future<void> initiateSetup() async {
    _client = Web3Client(_rpcUrl, Client(), socketConnector: () {
      return IOWebSocketChannel.connect(_wsUrl).cast<String>();
    });
    await getAbi();
    await getCredentials();
    await getDeployedContract();
  }

  Future<void> getAbi() async {
    String abiStringFile = await rootBundle.loadString("src/abis/Refund.json");
    var jsonAbi = jsonDecode(abiStringFile);
    _abiCode = ContractAbi.fromJson(jsonEncode(jsonAbi['abi']), 'Refund');

    _contractAddress =
        EthereumAddress.fromHex(jsonAbi["networks"]["5777"]["address"]);
  }

  Future<void> getCredentials() async {
    _creds = EthPrivateKey.fromHex(_privateKey);
    _ownAddress = await _credentials.extractAddress();
  }

  Future<void> getDeployedContract() async {
    _contract = DeployedContract(_abiCode, _contractAddress);

    _userCount = _contract.function("userCount");
    // _user = _contract.function("user");
    // _createUser = _contract.function('addUser');
    // _userCreated = _contract.event("UserCreated");

    getUsers();
  }

  getUsers() async {
    List totalUsersList = await _client
        .call(contract: _contract, function: _userCount, params: []);

    BigInt totalUser = totalUsersList[0];
    print("here");
    print(await totalUser);
    print("there");
  }
}
