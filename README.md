# README #

### O que é necessário antes de começar ? ###

* Ter o java sdk instalado:

     http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html

* Ter o android sdk instalado:

     http://developer.android.com/intl/pt-br/sdk/installing/index.html?pkg=tools

* Ter o xcode instalado (se suportado):

     Instalar via App Store

* Ter o node v0.12.x instalado globalmente:

     Recomenda-se a instalação via nvm (https://github.com/creationix/nvm)

* Ter o grunt instalado globalmente:

     npm -g install grunt

* Ter o bower instalado globalmente:

     npm -g install bower

### Como configurar o ambiente ? ###

* Instalar as dependências:

     npm install

     bower install

     grunt

* Configurar a plataforma android e o crosswalk como webview:

     ionic browser add crosswalk

* Configurar a plataforma ios (se suportado):

     grunt platform:add:ios

     npm -g install ios-deploy

     npm -g install ios-sim

* Instalar os plugins:

     grunt plugin:add:com.ionic.keyboard

     grunt plugin:add:org.apache.cordova.console

     grunt plugin:add:org.apache.cordova.device

     grunt plugin:add:org.apache.cordova.inappbrowser

### Dicas para desenvolvimento e publicação ###

* Publicando no browser:

     grunt serve

* Publicando no emulador do ios:

     grunt run:ios

* Publicando no emulador do androd:

     grunt run:android

* Gerando os resources (ícones e splashscreeen):

     http://blog.ionic.io/automating-icons-and-splash-screens

* Gerando o apk assinado para publicação no Google Play:

     Vide: https://baxeico.wordpress.com/2015/05/20/how-to-automatically-sign-your-android-apk-using-ionic-framework-and-crosswalk/

     grunt compress

     ionic build --release android