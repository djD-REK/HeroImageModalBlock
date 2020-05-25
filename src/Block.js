import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const classes = StyleSheet.create(getStyles(props))
  const { joinClasses } = props // Helper function to combine Atomic CSS with Aphrodite
  const { image, lineOneText, lineTwoText, buttonText, buttonLink } = props

  return (
    <div className={joinClasses("w-100 center", css(classes.wrapper))}>
      <div className="relative">
        <div className="absolute absolute--fill w-100 h-100">
          {image.uriBase && (
            <img
              className={joinClasses("dib w-100 h-100", css(classes.image))}
              src={image.uriBase + image.imagePath}
              alt={image.altText}
              width={image.width}
              height={image.height}
            />
          )}
        </div>
        <div
          className={joinClasses(
            "v-mid ph3 pv4 pv5-m pv6-l relative tc",
            css(classes.modalWrapper)
          )}
        >
          <div
            className={joinClasses(
              "w-80-m w-60-l center ph3 pv4 pa5-ns dib",
              css(classes.modal)
            )}
          >
            <div>
              <h2 className={joinClasses("ma0", css(classes.lineOne))}>
                {lineOneText}
              </h2>
              <h3 className={css(classes.lineTwo)}>{lineTwoText}</h3>
            </div>

            <a href={buttonLink} className={css(classes.buttonLink)}>
              <h4
                className={joinClasses("ph4 pv3 dib ma0", css(classes.button))}
              >
                {buttonText}
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Block.defaultProps = defaultConfig

export default Block
