import { ChangeEvent, FormEvent, useState } from 'react';
import { Header } from '../../components/Header';
import { list } from '../../types/list';

import Logo from '../../assets/logo.png';

import * as C from './styles';
import { Redirect } from 'react-router-dom';

export const Registration = () => {
    const [listItems, setListItems] = useState<list[]>(() => {
        const storageBeers = localStorage.getItem('@BeersList:repositories');

        if (storageBeers) {
            return JSON.parse(storageBeers);
        }
        return [];
    });

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [redirect, setRedirect] = useState(false);

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setDescription(event.target.value);
    }

    const handleAddBeer = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const newList = [...listItems];
        newList.push({
            id: newList.length + 2,
            name: title,
            description: description,
            image_url: Logo

        });

        localStorage.setItem('@BeersList:repositories', JSON.stringify(newList));

        setTitle('');
        setDescription('');
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
        <C.Container>
            <C.Form onSubmit={handleAddBeer} >
                <label>Título*</label>
                <input
                    type="text"
                    onChange={handleTitleChange}
                    value={title}
                    autoFocus
                    required
                />
                <label>Descrição*</label>
                <input
                    type="text"
                    onChange={handleDescriptionChange}
                    value={description}
                    required
                />
                <input type="submit" value="Salvar" />
            </C.Form>
        </C.Container>
    )
}