import { Link } from "react-router-dom"
import List from './../component/List'

export default function ProductList({ isProduct }) {

    return (
        <>
            <ul className='ProductList'>
                {isProduct.map(el => { return <List /> })}
            </ul>
        </>
    )
}