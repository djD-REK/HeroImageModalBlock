import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"
/*
// getStyles.js
wrapper: {
  maxWidth: "96rem"
},
image: {
  objectFit: "cover",
  objectPosition: "center center"
},
modalWrapper: {
  color: "white"
}
modal {
  backgroundColor: "black"
}
buttonLink {
  ._icx8gxj:link {
      transition: color 0.15s ease-in 0s;
  }
  a:link, a:visited {
      text-decoration: none;
  }
  ._lu6u9j7 {
      background-color: rgb(161, 43, 42);
      border-color: rgb(161, 43, 42);
      color: rgb(255, 255, 255);
  }
  ._icx8gxj {
      text-align: center;
      text-decoration: none;
      transition: color 0.15s ease-in 0s;
      display: inline-block;
      cursor: pointer;
      text-transform: none;
      font-weight: 700;
      border-style: solid;
      border-width: 1px;
      font-size: 1rem;
      padding: 1rem 2rem;
      border-radius: 0px;
  }
}
*/
const Block = (props) => {
  const classes = StyleSheet.create(getStyles(props))
  //  return <h1 className={css(classes.example)}>{props.text}</h1>
  const { joinClasses, lineOneText, lineTwoText } = props

  /*
        className={joinClasses(
          "flex items-center w-100 w-60-l w-40-l",
          css(classes.banner)
        )}
  */
  return (
    <div className={joinClasses("w-100 center", css(classes.wrapper))}>
      <div className="relative">
        <div className="absolute absolute--fill w-100 h-100">
          <picture
            className={joinClasses("dib w-100 h-100", css(classes.image))}
            src="https://res.cloudinary.com/dyx4yhvoq/image/upload/w_1600,h_533,c_fill,f_auto,q_auto/v1587410829/5e9c790d1a20a610174acc16/btfswvu2f3uqflsnaj3e.jpg"
            alt="Curbside"
          />
        </div>
        <div
          className={joinClasses(
            "v-mid ph3 pv4 pv5-m pv6-l relative tc",
            css(classes.modalWrapper)
          )}
        >
          <div
            className={joinClasses(
              "w-80-m w-60-l center pv4 ph3 pa5-ns dib",
              css(classes.modal)
            )}
          >
            <div>
              <h2>NOW OFFERING CURBSIDE PICK-UP</h2>
              <h4>DELIVERED RIGHT TO YOUR CAR</h4>
            </div>
            <div className="tc" data-btn-wrap="">
              <a
                className={css(classes.buttonLink)}
                href="/curbside"
                target="_self"
              >
                Order Curbside Pick-Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Block.defaultProps = defaultConfig

export default Block
