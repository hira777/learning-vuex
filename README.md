# Learning Vuex
Vuexの学習用リポジトリ

## Vuexとは
Vue.jsアプリケーションのための状態管理ライブラリのこと。

## Vuexの特徴
全てのコンポーネントの状態（アプリケーションの全ての状態）を管理するストアとして機能する。そのため、Vuexを利用する場合、アプリケーションは通常1つのストアしか持たない。

## 何故Vuexを利用するのか
コンポーネント間の状態の管理が楽になるため。

Vuexを利用しない場合、コンポーネント間で共通の状態を管理したい際に、コンポーネント毎に状態を管理することになるが、規模が大きくなればなるほど管理が大変になる（破綻しやすい）。

Vuexを利用すれば、全てのコンポーネントの状態を1つのストアで管理するため、状態の管理が楽になる。

## Vuexの使い所
上記の通り、大規模アプリケーションのようなコンポーネント間で共通の状態を管理したい時に利用する。

- アプリケーションの規模が小さい。
- コンポーネント間で共通管理したい状態がない、少ない。

のような状況ではVuexを利用する必要はない。