import AxiosClient from "../../AxiosClient";
import Product from "../../models/ProductModel/ProductModel";
class ProductApi {
	//axios getAll
	getAll(params:number) {
		const url = "/products";
		return AxiosClient.get(url, { params });
	}
	// axios getOne
	get(id: number) {
		const url = `products/${id}`;
		return AxiosClient.get(url);
	}
	getUpdate(id: number) {
		const url = `products/getUpdate/${id}`;
		return AxiosClient.get(url);
	}
	getSortPage(id:number, search = "") {
		const url = `/collections?page=${id}&&q=${search}`;
		return AxiosClient.get(url);
	}
	//axios add
	add(data:Product):Promise<Product> {
		const url = `/products/store`;
		return AxiosClient.post(url, data);
	}
	update(data:Product, id:number) {
		const url = `/products/update?productID=${id}`;
		return AxiosClient.post(url, data);
	}
	search(data:Product) {
		const url = `/products/search?name=${data}`;
		return AxiosClient.get(url);
	}
	//remove items
	remove(id:number) {
		const url = `/products/delete/${id}`;
		return AxiosClient.delete(url);
	}
}
export default new ProductApi();