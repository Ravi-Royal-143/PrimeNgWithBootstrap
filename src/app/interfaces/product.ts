export interface ProductRes {
    productid: string;
    productName: string;
}

export interface Products {
    productid: string;
    productName: string;
}

export interface ProductDetailsRes {
    productld: string;
    productName: string;
    shortDescription: string;
    detailedDescription: string;
    category: string;
    startingPrice: string;
    bidEndDate: string;
    bids: Bids[]
}

export interface Bids {
    bidAmount: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface ProductSuggestions {
    productid: string;
    productName: string;
}