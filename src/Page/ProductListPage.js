import Item from "../Component/Item";

export default function ProductListPage({ productList }) {
    return (
        <div>
            {productList.map((data) => <Item key={data.id} data={data} />)}
        </div>
    );
}