import List from '../component/List'
import Type from '../component/Type'

export default function Bookmark({ isBookmark }) {

    return (
        <div className="bookmark">
            <Type />
            <ul className='BookmarkList'>
                {isBookmark ? isBookmark.map((el, idx) => { return <List key={idx} /> }) : ''}
            </ul>
        </div>
    )
}