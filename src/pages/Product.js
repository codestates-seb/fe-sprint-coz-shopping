import List from '../component/List'
import Type from '../component/Type'

export default function Product({ isProduct }) {

    return (
        <div className="product">
            <Type />
            <ul className='ProductList'>
                {isProduct ? isProduct.map((obj, idx) => { return <List key={idx} obj={obj} /> }) : ''}
            </ul>
        </div>
    )
}