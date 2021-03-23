import styled from 'styled-components';




export const ButtonContainer = styled.button`
background: transparent;
font-size: 1.2rem;
color: var(--secondColor);
border-color: var(--secondColor);
padding: 3px 5px;
border-color:${props => props.cart ? "var(--yellow)" : "var(--secondColor)" };
color:${props => props.cart ? "var(--yellow)" : "var(--secondColor)" };
margin: 0.3rem;
line-height: 23px;
text-transform: capitalize;
curosr : pointer;
transition:all .5s ease-in-out;
border-raduis:0.5rem;
&:hover{
    background-color:${props => props.cart ? "var(--yellow)":"var(--secondColor)"};
    color:var(--white);
}
&:focus{
    outline:none
}

`