import { Link } from "react-router-dom"
import List from './../component/List'

export default function Bookmark({ isBookmark }) {

    return (
        <>
            <ul className='Bookmark'>
                {isBookmark.map(el => { return <List /> })}
            </ul>
        </>
    )
}