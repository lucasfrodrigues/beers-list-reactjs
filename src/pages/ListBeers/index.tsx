import { Header } from '../../components/Header';

import * as C from './styles'
import { ItemList } from '../../components/ItemList';
import { api } from '../../service/api';
import { useEffect, useMemo, useState } from 'react';
import { list } from '../../types/list';
import { Search } from '../../components/Search';


export const ListBeers = () => {

    const [listItems, setListItems] = useState<list[]>(() => {
        const storageBeers = localStorage.getItem('@BeersList:repositories');

        if (storageBeers) {
            return JSON.parse(storageBeers);
        }
        return [];
    });

    const [query, setQuery] = useState('');

    useEffect(() => {

        if (localStorage.getItem('@BeersList:repositories') === null ||
            localStorage.getItem('@BeersList:repositories') === '[]') {

            api.get<list[]>('v2/beers')
                .then(response => {
                    localStorage.setItem('@BeersList:repositories', JSON.stringify(response.data))
                });

            api.get<list[]>('v2/beers')
                .then(response => {
                    setListItems((response.data))
                });
        }

    }, [listItems]);

    const filtredList = useMemo(() => {
        const lowerQuery = query.toLocaleLowerCase();
        const listForName = listItems.filter((list) => list.name.toLocaleLowerCase().includes(lowerQuery));
        const listForDescription = listItems.filter((list) => list.description.toLocaleLowerCase().includes(lowerQuery));

        const newList = [...listForDescription, ...listForName];

        return newList.filter((elem, index, self) => index === self.indexOf(elem));
    }, [query, listItems]);


    const handleRemoveItem = (Id: number): void => {
        const filterItem = listItems.filter(itemId => itemId.id !== Id);
        localStorage.setItem('@BeersList:repositories', JSON.stringify(filterItem))
        setListItems(filterItem);
    }

    return (
        <>

            <Search getQuery={(q) => setQuery(q)} />
            <C.ListItem>
                {filtredList.map((listItem) => (
                    <ItemList
                        key={listItem.id} Item={listItem}
                        handleRemoveItem={() => handleRemoveItem(listItem.id)}
                    />
                ))}
            </C.ListItem>
        </>
    )
}