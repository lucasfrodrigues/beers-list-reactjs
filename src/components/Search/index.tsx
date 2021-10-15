import { useState } from 'react';
import { SearchArea } from './styled';

type Props = {
    getQuery: (q: string) => void;
}

export const Search = ({ getQuery }: Props) => {
    const [text, setText] = useState('');

    const onChange = (q: string) => {
        setText(q);
        getQuery(q);
    }

    return (
        <SearchArea>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search beers'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </SearchArea>
    )

}


