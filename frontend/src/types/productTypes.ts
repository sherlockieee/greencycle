export type ProductCheckOut = {
    product: string;
    availableStocks: number;
    title: string;
    image: string;
    price: number;
}

export type ProductDetails = { 
    _id: string;
    availableStocks: number;
    category: string;
    createdAt: Date;
    description: string;
    image: string;
    numReviews: number;
    price: number;
    rating: number;
    title: string;
    updatedAt: Date;
    __v: number;
}