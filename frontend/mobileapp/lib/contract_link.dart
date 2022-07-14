import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:http/http.dart';
import 'package:web3dart/web3dart.dart';
import 'package:web_socket_channel/io.dart';

class ContractLink extends ChangeNotifier {
  final String _rpcUrl = "http://127.0.0.1:7545";
  final String _wsUrl = "http://127.0.0.1:7545";

  final String privateKey =
      "114ac2d07f53978c1646b0ce17d9454fc7aef530b9fc777339822280dbb9831c";

  late Web3Client _client;

  ContractLink() {
    initiateSetup();
  }

  initiateSetup() async {
    _client = Web3Client(_rpcUrl, Client(), socketConnector: () {
      return IOWebSocketChannel.connect(_wsUrl).cast<String>();
    });
  }

  Future<void> getAbi() async {
    String abiStringFile = await rootBundle.loadString("src/abis/Refun.json");

    print(abiStringFile);
  }
}
