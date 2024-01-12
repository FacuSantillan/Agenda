import { getPacienteName } from '../../redux/action'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Searchbar(props) {

    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value) => {
        setSearchValue(value); 
        dispatch(getPacienteName(value));
      };
      
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            dispatch(getPacienteName(searchValue));
        }
    };

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            dispatch(getPacienteName(searchValue))
        }
    };

    return (
        <div>
            <input
                placeholder='Buscar por nombre.'
                value={searchValue}
                onChange={(event) => handleSearch(event.target.value)}
                onKeyDown={handleKeyDown}
                onKeyUp={handleEnter}
            />
        </div>
    )
}


