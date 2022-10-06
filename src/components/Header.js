import styled from "styled-components";

export default function Header(){
    return(
        <Topo>
            Cineflix
        </Topo>
    )
}

const Topo = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 67px;
    background-color:#C3CFD9;
    font-family: 'Roboto';
    font-size: 34px;
    font-weight:400;
    display: flex;
    align-items: center;
    justify-content:center;
    color: #E8833A;
    z-index: 1;

`