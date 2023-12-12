import { describe, it, expect } from "vitest";

import { mount, VueWrapper } from "@vue/test-utils";

import React from "react";
import type { ReactElement } from "react";
import * as ReactDOMServer from "react-dom/server";

import VueAvatar from "../src";
import ReactAvatar from "../react-boring-avatars";

import { crush } from "html-crush";

/**
 * Get randomized integer
 * @returns {number} randomized integer
 */
function getRandomInt(): number {
  const min = 1;
  const max = 300;
  return Math.random() * (max - min) + min;
}

/**∏
 * @param {string} html representing a HTML element
 * @return {string} minified version of the HTML
 */
function minify(html: string): string {
  return crush(
    html
      .replaceAll(/class="[^"]*"/g, "")
      .replaceAll(/style="[^"]*"/g, "")
      .replaceAll(/data-v-[a-zA-Z\d]+="[^"]*"/g, ""),
    {
      removeLineBreaks: true,
      removeHTMLComments: true,
    }
  ).result;
}

/**
 * @param {string} html representing a HTML element
 */
function htmlToElement(html: string): Node | null {
  const template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

/**
 * Check if Vue and React components are equivalent.
 */
function isEqual(vueWrapper: VueWrapper, reactWrapper: ReactElement) {
  let vueHtml = minify(vueWrapper.html());
  let reactHtml = minify(ReactDOMServer.renderToStaticMarkup(reactWrapper));

  // Run the minification 2 times to make sure the minified output is the same.
  // Cos sometimes running the minifier once results in 2 different output despite the same input.
  vueHtml = minify(vueHtml);
  reactHtml = minify(reactHtml);

  // Convert HTML string to Element Node so that we can compare equality
  const vueElement = htmlToElement(vueHtml);
  const reactElement = htmlToElement(reactHtml);

  expect(vueElement?.isEqualNode(reactElement)).to.equal(true);
}

/**
 * Props
 */
const size = getRandomInt();
const name = "Maria Mitchell";
const colors = ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"];
const defaultId = ":R0:";

// Ensures that the Vue version is the same as the React version
describe("Avatar - circle (default)", () => {
  it("renders to the same output as the React version: default props", () => {
    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
      },
    });
    const reactWrapper = (<ReactAvatar />) as ReactElement;

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Bauhaus to the same output as the React version", () => {
    const variant = "bauhaus";

    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        size: size,
        name: name,
        variant: variant,
        colors: colors,
      },
    });
    const reactWrapper = (
      <ReactAvatar size={size} name={name} variant={variant} colors={colors} />
    ) as ReactElement;

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Beam to the same output as the React version", () => {
    const variant = "beam";

    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        size: size,
        name: name,
        variant: variant,
        colors: colors,
      },
    });
    const reactWrapper = (
      <ReactAvatar size={size} name={name} variant={variant} colors={colors} />
    ) as ReactElement;

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Marble to the same output as the React version", () => {
    const variant = "marble";

    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        size: size,
        name: name,
        variant: variant,
        colors: colors,
      },
    });
    const reactWrapper = (
      <ReactAvatar size={size} name={name} variant={variant} colors={colors} />
    ) as ReactElement;

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Pixel to the same output as the React version", () => {
    const variant = "pixel";

    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        size: size,
        name: name,
        variant: variant,
        colors: colors,
      },
    });
    const reactWrapper = (
      <ReactAvatar size={size} name={name} variant={variant} colors={colors} />
    ) as ReactElement;

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Ring to the same output as the React version", () => {
    const variant = "ring";

    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        size: size,
        name: name,
        variant: variant,
        colors: colors,
      },
    });
    const reactWrapper = (
      <ReactAvatar size={size} name={name} variant={variant} colors={colors} />
    ) as ReactElement;

    isEqual(vueWrapper, reactWrapper);
  });

  it("renders Sunset to the same output as the React version", () => {
    const variant = "sunset";

    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        size: size,
        name: name,
        variant: variant,
        colors: colors,
      },
    });
    const reactWrapper = (
      <ReactAvatar size={size} name={name} variant={variant} colors={colors} />
    ) as ReactElement;

    isEqual(vueWrapper, reactWrapper);
  });
});

const isSquare = true;

describe("Avatar - square", () => {
  it("renders to the same output as the React version: default props", () => {
    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        square: isSquare,
      },
    });
    const reactWrapper = (<ReactAvatar square={isSquare} />) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders Bauhaus to the same output as the React version", () => {
    const variant = "bauhaus";
    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        size: size,
        name: name,
        variant: variant,
        colors: colors,
        square: isSquare,
      },
    });
    const reactWrapper = (
      <ReactAvatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={isSquare}
      />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders Beam to the same output as the React version", () => {
    const variant = "beam";
    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        size: size,
        name: name,
        variant: variant,
        colors: colors,
        square: isSquare,
      },
    });
    const reactWrapper = (
      <ReactAvatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={isSquare}
      />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders Marble to the same output as the React version", () => {
    const variant = "marble";
    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        size: size,
        name: name,
        variant: variant,
        colors: colors,
        square: isSquare,
      },
    });
    const reactWrapper = (
      <ReactAvatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={isSquare}
      />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders Pixel to the same output as the React version", () => {
    const variant = "pixel";
    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        size: size,
        name: name,
        variant: variant,
        colors: colors,
        square: isSquare,
      },
    });
    const reactWrapper = (
      <ReactAvatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={isSquare}
      />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders Ring to the same output as the React version", () => {
    const variant = "ring";
    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        size: size,
        name: name,
        variant: variant,
        colors: colors,
        square: isSquare,
      },
    });
    const reactWrapper = (
      <ReactAvatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={isSquare}
      />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders Sunset to the same output as the React version", () => {
    const variant = "sunset";
    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        size: size,
        name: name,
        variant: variant,
        colors: colors,
        square: isSquare,
      },
    });
    const reactWrapper = (
      <ReactAvatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={isSquare}
      />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
});

describe("Avatar - `title` prop", () => {
  it("renders to the same output as the React version: default props (title is false)", () => {
    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
      },
    });
    const reactWrapper = (<ReactAvatar />) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders to the same output as the React version: title is true", () => {
    const vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        title: true,
      },
    });
    const reactWrapper = (<ReactAvatar title={true} />) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders Bauhaus to the same output as the React version", () => {
    const variant = "bauhaus";

    // `title` is false
    let vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        variant: variant,
        title: false,
      },
    });
    let reactWrapper = (
      <ReactAvatar variant={variant} title={false} />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);

    // `title` is true
    vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        variant: variant,
        title: true,
      },
    });
    reactWrapper = (
      <ReactAvatar variant={variant} title={true} />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders Beam to the same output as the React version", () => {
    const variant = "beam";

    // `title` is false
    let vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        variant: variant,
        title: false,
      },
    });
    let reactWrapper = (
      <ReactAvatar variant={variant} title={false} />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);

    // `title` is true
    vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        variant: variant,
        title: true,
      },
    });
    reactWrapper = (
      <ReactAvatar variant={variant} title={true} />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders Marble to the same output as the React version", () => {
    const variant = "marble";

    // `title` is false
    let vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        variant: variant,
        title: false,
      },
    });
    let reactWrapper = (
      <ReactAvatar variant={variant} title={false} />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);

    // `title` is true
    vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        variant: variant,
        title: true,
      },
    });
    reactWrapper = (
      <ReactAvatar variant={variant} title={true} />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders Pixel to the same output as the React version", () => {
    const variant = "pixel";

    // `title` is false
    let vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        variant: variant,
        title: false,
      },
    });
    let reactWrapper = (
      <ReactAvatar variant={variant} title={false} />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);

    // `title` is true
    vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        variant: variant,
        title: true,
      },
    });
    reactWrapper = (
      <ReactAvatar variant={variant} title={true} />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders Ring to the same output as the React version", () => {
    const variant = "ring";

    // `title` is false
    let vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        variant: variant,
        title: false,
      },
    });
    let reactWrapper = (
      <ReactAvatar variant={variant} title={false} />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);

    // `title` is true
    vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        variant: variant,
        title: true,
      },
    });
    reactWrapper = (
      <ReactAvatar variant={variant} title={true} />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
  it("renders Sunset to the same output as the React version", () => {
    const variant = "sunset";

    // `title` is false
    let vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        variant: variant,
        title: false,
      },
    });
    let reactWrapper = (
      <ReactAvatar variant={variant} title={false} />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);

    // `title` is true
    vueWrapper = mount(VueAvatar, {
      props: {
        id: defaultId,
        variant: variant,
        title: true,
      },
    });
    reactWrapper = (
      <ReactAvatar variant={variant} title={true} />
    ) as ReactElement;
    isEqual(vueWrapper, reactWrapper);
  });
});
