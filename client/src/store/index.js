import { createStore } from 'vuex'

export default createStore({
    state: {
        ProductsInBasket: {
            productName: '',
            productNo: '',
            productCategory: '',
            password: '',
            email: '',
            productImage: '',
        },
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
            }
            veri.productName = product.productName;
            veri.productNo = product.productNo;
            veri.productCategory = product.productCategory;
            veri.password = product.password;
            veri.email = product.email;
            veri.productImage = product.productImage;
        }
    },
    actions: {
        addBasket({ commit }, product) {
            commit('AddBasket', product)
        },
    },
    modules: {}
})