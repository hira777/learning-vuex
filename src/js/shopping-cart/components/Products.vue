<template>
  <div>
    <h1 class="title">All Products</h1>
    <p>{{length}} products</p>

    <table class="table is-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" track-by="id">
        <td>{{product.name}}</td>
        <td>{{product.description}}</td>
        <td>${{product.price}}</td>
        <td>
          <button @click="addToCart(product)" class='button is-info'>Add to cart</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'app',

    // mapGettersを利用して
    // ストアのゲッターをローカルの算出プロパティにマッピングする
    // 今回はゲッターを異なる名前でローカルにマッピングしている
    // これで
    // store.getters.allProductsをthis.products
    // store.getters.getNumberOfProductsをthis.lengthｓとして利用できる
    computed: mapGetters({
      products: 'allProducts',
      length: 'getNumberOfProducts'
    }),

    // mapActionsを利用して
    // ストアのアクションをローカルのメソッドにマッピングする
    // this.addToCartをthis.$store.dispatch(['addToCart'])として利用できる
    // this.addToCartを実行すれば、ミューテーションがコミットされる
    methods: mapActions(['addToCart']),
  }
</script>