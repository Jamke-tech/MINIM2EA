import 'package:flutter/material.dart';


void main() => runApp(Minim2());

class Minim2 extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Minim2',

      initialRoute: '/',
      routes: {
        //Es posen totes les rutes de la aplicació
        '/login': (context) => LogIn(),

      },
    );
  }
}
