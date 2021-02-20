import { createStore } from 'vuex'
import basketComp from '../components/BasketComp.vue'

export default createStore({
    state: {

        ProductsInBasket: []
    },
    getters: {
        ShowBasket(state) {
            return state.ProductsInBasket;
        }
    },
    mutations: {
        AddBasket(state, product) {
            let veri = {
                productName: '',
                productNo: '',
                productCategory: '',
                password: '',
                email: '',
                productImage: '',
                productID: ''
            }
            veri.productName = product.productName;
            veri.productNo = product.productNo;
            veri.productCategory = product.productCategory;
            veri.password = product.password;
            veri.email = product.email;
            veri.productImage = product.productImage;
            veri.productID = product._id;
            Object.values(state.ProductsInBasket).forEach((bproduct) => {
                if (bproduct.productID == product._id) {
                    basketComp.sepetAdet++;
                    console.log('sepetteki bir ürün tekrar eklendi')
                }
            });
            state.ProductsInBasket.push(veri);
        }
    },
    actions: {
        addBasket({ commit }, product) {
            commit('AddBasket', product)
        },
    },
    modules: {}
})