import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";

export const StyledButton=styled.button`

border:1px solid grey;
background:black;
border-radius:10px;
color:${(props)=>{
   return !props.variants==='outline' ? "white" : "pink"
}}



`

export const StyledButtonCounter=styled.button`

width:50%;
color:white;
background:pink
`

export const FancyButton=styled(StyledButton)`

background:yellow
`

export const SlectorButton=styled(StyledButtonCounter)`

&:hover{
    color:red
}
`

export const ButtonWithAtribut=styled(StyledButton).attrs({
    type:"submit"
})`

color:red;
background:yellow

`

export const DarkThemeButton=styled.button`

border:2px solid ${props=>props.theme.dark.primary};
background:${props=>props.theme.dark.primary};
color:${props=>props.theme.dark.text};
width:25%
`