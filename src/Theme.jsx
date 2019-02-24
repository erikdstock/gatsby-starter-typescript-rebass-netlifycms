// @ts-check

/**
 * Since this file is shared with NetlifyCMS it must be .jsx
 */

import React, { Fragment } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { Button } from "rebass"

export const theme = {
  colors: {
    red: "#ec1f27",
    white: "#ffffff",
    black: "#231f20",
    darkGrey: "#222222",
    lightGrey: "#a8a8a8",
    mediumGrey: "#666",
  },
  fonts: {
    serif: "Karma, serif",
    sans: "Lato, sans-serif",
    mono: "Fira Mono, monospace",
  },
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono|Karma:400,700|Lato:400,700');
  html, body {
    font-family: Lato, Helvetica, sans-serif;
  }

  h3 {
    font-family: Lato, Helvetica, sans-serif
  }
`

export const LayoutComponents = {
  h1: styled.h1`
    font-size: 20px;
  `,
  p: styled.p`
    font-size: 16px;
  `,
}

export const UIComponents = {
  Button: props => <Button {...props}>{props.children}</Button>,
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  </ThemeProvider>
)
