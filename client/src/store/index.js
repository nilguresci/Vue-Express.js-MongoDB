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
            veri.price = product.price.toFixed(2);
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
        },
        BasketNumberUpdate(state, idNumber) {
            Object.values(state.ProductsInBasket).forEach((bproduct) => {
                if (bproduct._id == idNumber._id) {
                    bproduct.adet = bproduct + parseInt(idNumber.adet)
                    console.log('sepetteki ürün adedi güncellendi')
                }
            });
        }
    },
    actions: {
        addBasket({ commit }, product) {
            commit('AddBasket', product)
        },
        basketNumberUpd({ commit }, idNumber) {
            commit('BasketNumberUpdate', idNumber);
        }
    },
    modules: {}
})