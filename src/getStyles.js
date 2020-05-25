export const getStyles = (blockConfig) => {
  const {
    modalBackgroundColor,
    modalTextColor,
    buttonBackgroundColor,
    buttonTextColor,
  } = blockConfig
  return {
    wrapper: {
      maxWidth: "96rem",
    },
    image: {
      objectFit: "cover",
      objectPosition: "center center",
    },
    modalWrapper: {
      color: modalTextColor,
    },
    modal: {
      backgroundColor: modalBackgroundColor,
    },
    lineOne: {
      fontSize: "3rem",
    },
    lineTwo: {
      fontWeight: "normal",
      lineHeight: "1.5rem",
    },
    button: {
      backgroundColor: buttonBackgroundColor,
      fontWeight: "bold",
    },
    buttonLink: {
      color: buttonTextColor,
      transition: "color 0.15s ease-in 0s",
    },
  }
}
