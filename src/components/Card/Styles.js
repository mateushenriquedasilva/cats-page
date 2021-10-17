import styled from "styled-components";

export const Container = styled.div`
    width: 600px;
    height: 400px;
    margin: 2rem auto;

    background-color: #f5f5f5;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    img {
        width: 500px;
        height: 300px;
        border: 5px solid #8C34E4;
        border-radius: 2rem;
    }

    button {
        width: 200px;
        height: 40px;
        border: none;
        background-color: #8C34E4;
        color: white;
        border-radius: 2rem;
        cursor: pointer;
    }

    button:hover {
        box-shadow: 1px 1px #333;
    }
`;