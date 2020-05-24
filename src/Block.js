import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const classes = StyleSheet.create(getStyles(props))
  const { joinClasses, lineOneText, lineTwoText } = props

  return (
    <div className={joinClasses("w-100 center", css(classes.wrapper))}>
      <div className="relative">
        <div className="absolute absolute--fill w-100 h-100">
          <img
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
            <div className={css(classes.button)}>
              <a
                href="/curbside"
                target="_self"
                className={css(classes.buttonLink)}
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
