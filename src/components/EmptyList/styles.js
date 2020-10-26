import styled from 'styled-components'

export const Container = styled.div`
display: flex;
margin-top: 40px;
padding: 30px;
justify-content: center;
align-items: center;
width: 60%;
height: calc(20vh + 20px);
border: 2px dashed white;
border-radius: 10px;

@media(max-width: 650px){
    width: 80%

}
`

export const Text = styled.b`
color: white;
font-family: 'Montserrat', sans-serif;
font-size: calc(1vw + 0.8em);

`
