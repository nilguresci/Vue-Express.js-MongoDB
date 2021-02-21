import { createStore } from 'vuex'

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
            veri._id = product._id;
            let deger = true;
            Object.values(state.ProductsInBasket).forEach((bproduct) => {
                if (bproduct._id == product._id) {
                    bproduct.adet++
                        deger = false
                    console.log('sepetteki bir ürün tekrar eklendi')
                }
            });
            if (deger) {
                veri.adet = 1
                state.ProductsInBasket.push(veri);
            }
        }
    },
    actions: {
        addBasket({ commit }, product) {
            commit('AddBasket', product)
        },
    },
    modules: {}
})