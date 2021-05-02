import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Mbtn, { setBackground, fontSize, palette } from 'm-btn'

const bg = setBackground('grey', 'lighter')

const Wrapper = styled.div`
  background-color: 'white';
  font-size: ${fontSize.bodyBig};
  color: ${palette.info.light};
  `




class Expand extends Component {



    getChildContext () {
        return { bg: bg }
      }

    render() {
        return (
        <Wrapper>
        <Mbtn
          primary
          bold
          content='View' />
      </Wrapper>
        );
    }
}

Expand.childContextTypes = {
    bg: PropTypes.object
  }

export default Expand;