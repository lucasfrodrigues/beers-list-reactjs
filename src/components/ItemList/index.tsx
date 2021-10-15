import * as C from './styles';

import { FiX } from 'react-icons/fi';
import { list } from '../../types/list';

type Props = {
    Item: list;
    handleRemoveItem: () => void;
}

export const ItemList = ({ handleRemoveItem, Item }: Props) => {
    return (
        <C.Container>
            <FiX onClick={handleRemoveItem} />
            <img src={Item.image_url} alt={Item.name} />
            <strong>{Item.name}</strong>
            <p>{Item.description}</p>
        </C.Container>
    )
}