import ProductItem from './ProductItem';
export default function Products() {
    let products = [
    {
        id: 1,
        productName: "Kids Desks",
        describe: "Kids Desks & Chairs: Kids White Classic Wooden Walden Desk - 594.15, Ponder this. Practical design and a classic look.",
        price: 20000,
        quantity: 20,
        src: "pexels-pixabay-265004.jpg"
    },
    {
        id: 2,
        productName: "Kitchen",
        describe: "A kitchen is a room or part of a room used for cooking and food preparation in a dwelling or in a commercial establishment. ",
        price: 70000,
        quantity: 10,
        src: "pexels-mark-mccammon-1080721.jpg"
    },
    {
        id: 3,
        productName: "Children Bed",
        describe: "IDANÄS bed frame with storage is both eyecatching and practical. The built-in drawers make use of the space under your bed. ",
        price: 250000,
        quantity: 120,
        src: "pexels-monoar-rahman-115747.jpg"
    },
    {
        id: 4,
        productName: "Office Desk",
        describe: "Macro Home Office Desk a colorful 120cm desk suitable for home or company. no need to assemble make our Walden Desk.",
        price: 2000,
        quantity: 30,
        src: "pexels-pixabay-509922.jpg"
    }
    ]
    return (
        <div className='p-5 text-center'>
            <h2 className='text-primary mb-4'>Our Products</h2>
            <div className="container">
                <div className="row">
                    {products.map((product) => {
                        return <ProductItem key={product.id} product={product} />
                    })}

                </div>
            </div>
        </div>
    )
}
    