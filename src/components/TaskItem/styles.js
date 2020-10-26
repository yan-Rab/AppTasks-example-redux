import styled from 'styled-components'

export const Container = styled.div`
display: flex;
width: 60%;
border-radius: 15px;
background-color: #6666ff;
margin: 10px;
flex-direction: column;
padding: 20px;
@media(max-width: 650px){
    width: 80%

}
`

export const ContentPrimary = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;

`
export const Time = styled.h2`
color: white;
font-size: calc(1vw + 1em);
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
`

export const Study = styled.h3`
color: white;
font-size: calc(1vw + 0.9em);
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
`

export const Description = styled.p`
color: #ededed;
font-family: Arial, Helvetica, sans-serif;
margin-top: 10px;
font-size: calc(1vw + 0.5em);
`

