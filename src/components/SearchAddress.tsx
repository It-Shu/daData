import React, {ChangeEvent, MouseEvent, useState} from 'react';
import './SearchAddress.scss';
import SearchButtonIcon from './../assets/SerchButton.png'
import {getDaData, Root} from "../api/getDaData";
import Loader from "./loader/Loader";

const SearchAddress = () => {

    const [inputValue, setInputValue] = useState('');
    const [apiResponse, setApiResponse] = useState<Root | null>(null);
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setApiResponse(null);
        if (inputValue.length >= 3) {
            setIsLoading(true)
            getDaData.getData(inputValue)
                .then((res) => {
                    if (res.data.suggestions) {
                        setApiResponse(res.data)
                        setError('')
                    } else {
                        setError('Неверный ответ сервера')
                    }
                })
                .catch((err) => setError(`Ошибка поиска: ${err}`))
                .finally(() => setIsLoading(false))
        }
    };

    return (
        <div className="search-container">
            <h3>Поиск адресов</h3>
            <p>Введите интересующий вас адрес</p>
            <form className="input-button-container">
                <input
                    placeholder="Введите интересующий вас адрес"
                    type="text"
                    className="input"
                    value={inputValue}
                    onChange={handleChange}/>
                <button
                    disabled={inputValue.length < 3}
                    className="button"
                    onClick={handleClick}>
                    <img src={SearchButtonIcon} alt="" className="search-button-icon"/>Поиск
                </button>
            </form>
            {error && !apiResponse && <div>{error}</div>}
            {isLoading ? <Loader/> : apiResponse && (
                <div className="dropdown">
                    <h1 className="address-title">Адреса</h1>
                    {apiResponse.suggestions.map((suggestion, index) => (
                        <div key={suggestion.data.fias_id} className="dropdown-item">{suggestion.value}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchAddress;
