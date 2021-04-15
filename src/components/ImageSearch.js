import {useState} from 'react'
const ImageSearch = ({searchText}) => {
    const [text, setText] = useState('')
    const onSubmit = (e) =>{
        e.preventDefault()
        searchText(text)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={e => setText(e.target.value) } type="text"/>
                <button type="submit"> Search</button>
            </form>
        </div>
    )
}

export default ImageSearch
