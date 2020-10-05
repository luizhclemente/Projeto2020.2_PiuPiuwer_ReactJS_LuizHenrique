import styled from 'styled-components';

export const SearchBarSpace = styled.div`
    display: flex;
    justify-content: center;

    .search {
    margin-bottom: 22px;
    /* margin-left: 40px; */

    width: 80%;
    height: 50px;
    padding: 0 10px 0 30px;

    border: 0;
    border-radius: 25px 0;

    background: var(--color-search-bar);

    font-family: Montserrat;
    font-weight: bold;

    outline: none;
    }

    @media(min-width: 890px){
        display: flex;
        justify-content: flex-end;
        width: 98%;
        .search{
            width: 33rem;
        }
    }

`