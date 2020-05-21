var initialState = [
    {
        id: 1,
        name: 'Iphone X',
        img: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png',
        description: 'Made By Apple',
        price: 500,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'Iphone XS MAX',
        img: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png',
        description: 'Made By Apple',
        price: 1000,
        inventory: 5,
        rating : 4
    },
    {
        id: 3,
        name: 'SamSung S20 Ultra',
        img: 'https://cdn.fptshop.com.vn/Uploads/Originals/2020/2/12/637170935875912528_ss-s20-ultra-den-1.png',
        description: 'Made By SamSung',
        price: 1500,
        inventory: 15,
        rating : 2
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;