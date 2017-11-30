import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    added: [],
    all: [
      {
        id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
        name: 'COBOL 101 vintage',
        description: 'Learn COBOL with this vintage programming book',
        price: 399,
      }, {
        id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
        name: 'Sharp C2719 curved TV',
        description: 'Watch TV like never before with the brand new curved screen technology',
        price: 1995,
      }, {
        id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
        name: 'Remmington X mechanical keyboard',
        description: 'Excellent for gaming and typing, this Remmington X keyboard ' +
        'features tactile, clicky switches for speed and accuracy',
        price: 595,
      },
    ],
  },

  strict: process.env.NODE_ENV !== 'production',

  // Vuexを利用するとストア内にゲッター（どのコンポーネント利用可能な算出プロパティ）を定義できる
  // ゲッターは第1引数としてstateを受け取る
  getters: {
    allProducts: state => state.all,
    getNumberOfProducts: state => (state.all) ? state.all.length : 0,
    cartProducts: state => {
      return state.added.map(({ id, quantity }) => {
        const product = state.all.find(p => p.id === id);

        return {
          name: product.name,
          price: product.price,
          quantity
        };
      });
    },
  },

  // ミューテーションを状態を変更するための概念
  // ミューテーションをコミットすることで状態を変更できる
  // 今回はミューテーション・タイプに
  // ADD_TO_CARTとREMOVE_ALLの定数を利用している
  // 定数を設定することによって、共同で作業する人に、アプリケーション全体で
  // 何のミューテーションが可能であるかを一目見ただけで理解できるようにする
  // ミューテーションは同期的でなければならないため非同期をしたいのであれば
  // アクションを利用する
  mutations: {
    [types.ADD_TO_CART](state, { id }) {
      const record = state.added.find(p => p.id === id);

      if (!record) {
        state.added.push({
          id,
          quantity: 1,
        });
      } else {
        record.quantity += 1;
      }
    },
    [types.REMOVE_ALL](state) {
      state.added = [];
    },
  },

  // アクションは、状態を変更するのではなく、ミューテーションをコミットするもの
  // そのためミューテーションが存在しなければ、状態は変更できない
  // それぞれのアクションはADD_TO_CARTとREMOVE_ALLのミューテションをコミットする
  actions: {
    addToCart({ commit }, product) {
      commit(types.ADD_TO_CART, {
        id: product.id,
      });
    },
    removeAll({ commit }) {
      commit(types.REMOVE_ALL);
    },
  },
});
