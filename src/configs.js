import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  section1: {
    type: ElementPropTypes.sectionHeader,
  },
  image: {
    label: "Background Image",
    type: ElementPropTypes.image,
  },
  section2: {
    type: ElementPropTypes.sectionHeader,
  },
  modalBackgroundColor: {
    label: "Background Color (Modal Box)",
    type: ElementPropTypes.color,
  },
  modalTextColor: {
    label: "Text Color (Modal Box)",
    type: ElementPropTypes.color,
  },
  buttonBackgroundColor: {
    label: "Background Color (Button)",
    type: ElementPropTypes.color,
  },
  buttonTextColor: {
    label: "Text Color (Button)",
    type: ElementPropTypes.color,
  },
  section3: {
    type: ElementPropTypes.sectionHeader,
  },
  lineOneText: {
    label: "Line One",
    type: ElementPropTypes.string,
  },
  lineTwoText: {
    label: "Line Two",
    type: ElementPropTypes.string,
  },
  buttonText: {
    label: "Button Text",
    type: ElementPropTypes.string,
  },
  buttonLink: {
    label: "Button Link (URL)",
    type: ElementPropTypes.string,
  },
}

export const defaultConfig = {
  section1: "Background Image",
  image: {
    uriBase: "http://d21ivvgspl06jm.cloudfront.net/",
    imagePath: "element-block-assets/slideshow/slide2.jpg",
    altText: "Monument Valley",
    width: 1600,
    height: 500,
  },
  section2: "Colors",
  modalBackgroundColor: "rgba(0, 0, 0, 0.8)",
  modalTextColor: "white",
  buttonBackgroundColor: "rgb(20, 161, 20)",
  buttonTextColor: "white",
  section3: "Text",
  lineOneText: "50% OFF SALE ITEMS",
  lineTwoText: "NOW OFFERING THE BEST DISCOUNTS OF THE YEAR",
  buttonText: "Shop Our Best Deals",
  buttonLink: "/products",
}
