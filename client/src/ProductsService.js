import axios from 'axios'; //client side uygulamalarda HTTP çağrılarının kolayca yapılmasını sağlayan bir kütüphanedir.

const url = 'http://localhost:3535/products';

class ProductService {
    //get products
    static getProducts() {
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                    const data = res.data;
                    resolve(
                        data
                    );
                })
                .catch((err) => {
                    reject(err);
                })
        })
    }

    //get prodducts with id
    static getProductID(id) {
            console.log('product service e girildi.');
            return new Promise((resolve, reject) => {
                axios.get(`${url}/${id}`).then((res) => {
                        const data = res.data;
                        resolve(
                            data
                        );
                        console.log('get fonk başarılı çalıştı')
                    })
                    .catch((err) => {
                        reject(err);
                        console.log('product error');
                    })
            })

        }
        //create product
    static insertProducts(pdata) {
        return axios.post(url, pdata);
    }


    //update product
    static updateProduct(id, updata) {
        console.log(id);
        return axios.patch(`${url}/update/id/${id}`, updata);
    }

    //delete product
    static deleteProduct(id) {
        return axios.delete(`${url}/delete/id/${id}`);
    }
}

export default ProductService;