import styled from "styled-components";

const THEME = {
    danger: {
        bg: '#F84735',
        color: '#FFFFFF'

    },
    primary: {
        bg: '#0099FF',
        color: '#FFFFFF'
    },
    text: {
        bg: 'transparent',
        color: '#274060'
    }
}

export const Wrapper = styled.button<{
    variant : 'danger' | 'primary' | 'text'
}>`

border: 1px solid ${p => THEME[p.variant].bg};

color: ${p => THEME[p.variant].color};
background-color: ${p => THEME[p.variant].bg};

padding: 4px 8px
`