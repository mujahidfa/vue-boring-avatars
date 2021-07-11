import { mount } from "@vue/test-utils";

import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import VueAvatar from "../src/components/Avatar.vue";
import ReactAvatar from "boring-avatars";

import { crush } from "html-crush";

/**
 * Get randomized integer
 * @returns {number} randomized integer
 */
function getRandomInt() {
  const min = 1;
  const max = 300;
  return Math.random() * (max - min) + min;
}

/**
 * @param {string} html representing a HTML element
 * @return {string} minified version of the HTML
 */
function minify(html) {
  return crush(
    html
      .replaceAll(/class="[^"]*"/g, "")
      .replaceAll(/style="[^"]*"/g, "")
      .replaceAll(/data-v-[a-zA-Z\d]+="[^"]*"/g, ""),
    {
      removeLineBreaks: true,
    }
  ).result;
}

/**
 * @param {string} html representing a HTML element
 * @return {Element}
 */
function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

/**
 * Check if Vue and React components are equivalent
 *
 * @param {Element} vueWrapper
 * @param {Element} reactWrapper
 */
function isEqual(vueWrapper, reactWrapper) {
  const vueHtml = minify(vueWrapper.html());
  const reactHtml = minify(reactWrapper.html());

  // console.log(vueHtml);
  // console.log("--------------");
  // console.log(reactHtml);

  const vueElement = htmlToElement(vueHtml);
  const reactElement = htmlToElement(reactHtml);

  expect(vueElement.isEqualNode(reactElement)).to.equal(true);
  // expect(vueHtml).to.equal(reactHtml);
}

/**
 * Props
 */
const size = getRandomInt();
const name = "Maria Mitchell";
const colors = ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"];

// Ensures that the Vue version is the same as the React version
describe("Avatar - circle (default)", () => {
  it("renders to the same output as the React version: default props", () => {
    const vueWrapper = mount(VueAvatar);
    const reactWrapper = shallow(<ReactAvatar />);

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Bauhaus to the same output as the React version", () => {
    const variant = "bauhaus";

    const vueWrapper = mount(VueAvatar, {
      props: {
        size: size,
        name: name,
        variant: variant,
        colors: colors,
      },
    });
    const reactWrapper = shallow(
      <ReactAvatar size={size} name={name} variant={variant} colors={colors} />
    );

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Beam to the same output as the React version", () => {
    const variant = "beam";

    const vueWrapper = mount(VueAvatar, {
      props: {
        size: size,
        name: name,
        variant: variant,
        colors: colors,
      },
    });
    const reactWrapper = shallow(
      <ReactAvatar size={size} name={name} variant={variant} colors={colors} />
    );

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Marble to the same output as the React version", () => {
    const variant = "marble";

    const vueWrapper = mount(VueAvatar, {
      props: {
        size: size,
        name: name,
        variant: variant,
        colors: colors,
      },
    });
    const reactWrapper = shallow(
      <ReactAvatar size={size} name={name} variant={variant} colors={colors} />
    );

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Pixel to the same output as the React version", () => {
    const variant = "pixel";

    const vueWrapper = mount(VueAvatar, {
      props: {
        size: size,
        name: name,
        variant: variant,
        colors: colors,
      },
    });
    const reactWrapper = shallow(
      <ReactAvatar size={size} name={name} variant={variant} colors={colors} />
    );

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Ring to the same output as the React version", () => {
    const variant = "ring";

    const vueWrapper = mount(VueAvatar, {
      props: {
        size: size,
        name: name,
        variant: variant,
        colors: colors,
      },
    });
    const reactWrapper = shallow(
      <ReactAvatar size={size} name={name} variant={variant} colors={colors} />
    );

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Sunset to the same output as the React version", () => {
    const variant = "sunset";

    const vueWrapper = mount(VueAvatar, {
      props: {
        size: size,
        name: name,
        variant: variant,
        colors: colors,
      },
    });
    const reactWrapper = shallow(
      <ReactAvatar size={size} name={name} variant={variant} colors={colors} />
    );

    isEqual(vueWrapper, reactWrapper);
  });
});

const isSquare = true;

describe("Avatar - square", () => {
  it("renders to the same output as the React version: default props", () => {
    const vueWrapper = mount(VueAvatar, {
      props: {
        square: isSquare,
      },
    });
    const reactWrapper = shallow(<ReactAvatar square={isSquare} />);

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Bauhaus to the same output as the React version", () => {
    const variant = "bauhaus";

    const vueWrapper = mount(VueAvatar, {
      props: {
        size: size,
        name: name,
        variant: variant,
        colors: colors,
        square: isSquare,
      },
    });
    const reactWrapper = shallow(
      <ReactAvatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={isSquare}
      />
    );

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Beam to the same output as the React version", () => {
    const variant = "beam";

    const vueWrapper = mount(VueAvatar, {
      props: {
        size: size,
        name: name,
        variant: variant,
        colors: colors,
        square: isSquare,
      },
    });
    const reactWrapper = shallow(
      <ReactAvatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={isSquare}
      />
    );

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Marble to the same output as the React version", () => {
    const variant = "marble";

    const vueWrapper = mount(VueAvatar, {
      props: {
        size: size,
        name: name,
        variant: variant,
        colors: colors,
        square: isSquare,
      },
    });
    const reactWrapper = shallow(
      <ReactAvatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={isSquare}
      />
    );

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Pixel to the same output as the React version", () => {
    const variant = "pixel";

    const vueWrapper = mount(VueAvatar, {
      props: {
        size: size,
        name: name,
        variant: variant,
        colors: colors,
        square: isSquare,
      },
    });
    const reactWrapper = shallow(
      <ReactAvatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={isSquare}
      />
    );

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Ring to the same output as the React version", () => {
    const variant = "ring";

    const vueWrapper = mount(VueAvatar, {
      props: {
        size: size,
        name: name,
        variant: variant,
        colors: colors,
        square: isSquare,
      },
    });
    const reactWrapper = shallow(
      <ReactAvatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={isSquare}
      />
    );

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Sunset to the same output as the React version", () => {
    const variant = "sunset";

    const vueWrapper = mount(VueAvatar, {
      props: {
        size: size,
        name: name,
        variant: variant,
        colors: colors,
        square: isSquare,
      },
    });
    const reactWrapper = shallow(
      <ReactAvatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={isSquare}
      />
    );

    isEqual(vueWrapper, reactWrapper);
  });
});
