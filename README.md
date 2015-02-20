Samples-framework
==================================================

## What is samples-framework?

Samples-framework is a set of CSS classes and Less mixins ([**components**](#components)) dedicated for CKSource documentation projects and samples. A modular structure of the framework is designed to make any integration fast and [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

## Installation

Samples-framework mostly depends on [Less](http://lesscss.org/), [Grunt](http://gruntjs.com/) and [LESSHat](http://lesshat.madebysource.com/). Use [npm](https://www.npmjs.com/) to resolve dependencies:

```
han@falcon ~> npm install 
```

See the [example](#example) to know more.

## Example

1. Create `sample.less` file that will compile to `sample.css`:
  ```less
  // Path to samples-framework components.
  @components-dir: "samples-framework/components";

  // Good 'ol Lesshat.
  @import "../../../node_modules/lesshat/build/lesshat";

  // Components of the page.
  @import "@{components-dir}/font-roboto/font-roboto";
  @import "@{components-dir}/global/global";
  @import "@{components-dir}/core/core";
  @import "@{components-dir}/grid/grid";
  @import "@{components-dir}/header-a/header-a";
  @import "@{components-dir}/navigation-a/navigation-a";

  // Some shared application-specific components and extensions.
  @import "@{components-dir}/sdk/core";

  // Custom components that do not belong to samples-framework.
  @import "components/custom";  

  // Override some variables in the framework.
  // See: http://lesscss.org/features/#variables-feature-default-variables
  @header-a-background-color: #FFD8F0;
  ```
1. Compile `sample.less`. Use [grunt-contrib-less](https://www.npmjs.com/package/grunt-contrib-less) and [grunt-contrib-watch](https://www.npmjs.com/package/grunt-contrib-watch) as a development environment. See the [gruntfile.js](gruntfile.js).

1. Include `sample.css` in HTML markup of the project:
  ```html
  <link href="css/sample.css" rel="stylesheet">
  ```

1. Use any of component classes imported in `sample.less` to build the page.
1. Ship `sample.css` as a static part of the final package of the project.

## Components

1. Bootstrap
  1. **[components/global](#components-global)**
  1. **[components/core](#components-core)**
1. Standard
  1. **[components/balloon-a](#components-balloon-a)**
  1. **[components/button-a](#components-button-a)**
  1. **[components/content](#components-content)**
  1. **[components/font-roboto](#components-font-roboto)**
  1. **[components/footer-a](#components-footer-a)**
  1. **[components/grid](#components-grid)**
  1. **[components/header-a](#components-header-a)**
  1. **[components/navigation-a](#components-navigation-a)**
  1. **[components/navigation-b](#components-navigation-b)**
  1. **[components/tree-a](#components-tree-a)**
  1. **[components/tip-a](#components-tip-a)**
1. Application-specific
  1. **[components/sdk](#components-sdk)**
  1. **[components/basicsample](#components-basicsample)**
    1. **[components/basicsample/adjoined](#components/basicsample/adjoined)**

***
### Bootstrap

#### components/global

Defines global variables and mixins shared between other components.

* **Variables:**
  * <a name="components/global@global-font-size"></a>
    `@global-font-size`
    Default font size used for html/bo1dy. 

    See: [components/core](#components-core).

  * <a name="components/global@global-font-stack"></a>
    `@global-font-stack`
    Default font-face stack used for html/body. 

    See: [components/core](#components-core).

  * <a name="components/global@global-font-stack-serif"></a>
    `@global-font-stack-serif`
    Default serif font-face stack. 

    See: [components/core](#components-core).

  * <a name="components/global@global-font-stack-monospace"></a>
    `@global-font-stack-monospace`
    Default monospace font-face stack. 

    See: [components/core](#components-core).

  * <a name="components/global@global-font-color"></a>
    `@global-font-color`
    Default font color. 

    See: [components/core](#components-core).

  * <a name="components/global@global-line-height"></a>
    `@global-line-height`
    Default line height for html/body. 

    See: [components/core](#components-core).

  * <a name="components/global@global-link-font-color"></a>
    `@global-link-font-color`
    Default font color for anchors. 

    See: [components/core/link-a](#components/core/link-a).

  * <a name="components/global@global-link-font-color-hover"></a>
    `@global-link-font-color-hover`
    Default font color for hovered anchors. 

    See: [components/core/link-a](#components/core/link-a).

  * <a name="components/global@global-box-background-color"></a>
    `@global-box-background-color`

    Default background color for boxes.

  * <a name="components/global@global-box-border-color"></a>
    `@global-box-border-color`

    Default border color for boxes.

  * <a name="components/global@global-flow-vgap"></a>
    `@global-flow-vgap`

    Default vertical gap for content flows.

  * <a name="components/global@global-border-radius"></a>
    `@global-border-radius`

    Default border-radius to used for rounded elements.

  * <a name="components/global@global-is-mobile-threshold"></a>
    `@global-is-mobile-threshold`

    Default threshold between mobile and desktop layout.

    See: [components/global/.global-is-mobile](#components/global/.global-is-mobile).  

* **Mixins:**

  * <a name="components/global/.global-font-size"></a> 
   `.global-font-size( @font-size-rem, @line-height-ratio: 1 )`

    Default font size mixin. 
    It computes line-height considering [components/global@global-line-height](#components/global@global-line-height)
    and font-size using [components/global@global-font-size](#components/global@global-font-size)
    The output contains fallback values in "px" for font-size and line-height.

    * **Example:**  
      Less:
      ```less
      .foo {
        .global-font-size( 0.875 );
      }
      ```

      CSS (note that `14/16 = 0.875`):
      ```css
      .foo {
        font-size: 14px;
        font-size: 0.875rem;
        line-height: 30.24px;
        line-height: 1.89rem;
      }
      ```

  * <a name="components/global/.global-font-face"></a> 
   `.global-font-face( @font-name, @font-path, @font-file, @font-weight: normal, @font-style: normal )`

    Generates `@font-face` block for given webfont.

    * **Example:**  
      Less:
      ```less
      @font-face {
        .global-font-face( "Roboto", url( "fonts/%s" ), "Roboto-Thin-webfont", 100 );
      }
      ```

      CSS:
      ```css      
      @font-face {
        font-family: "Roboto";
        src: url("../../../components/font-roboto/fonts/Roboto-Thin-webfont.eot");
        src: url("../../../components/font-roboto/fonts/Roboto-Thin-webfont.eot?#iefix") format("embedded-opentype"), url("../../../components/font-roboto/fonts/Roboto-Thin-webfont.woff") format("woff"), url("../../../components/font-roboto/fonts/Roboto-Thin-webfont.ttf") format("truetype"), url("../../../components/font-roboto/fonts/Roboto-Thin-webfont.svg#Roboto") format("svg");
        font-weight: 100;
        font-style: normal;
      }  
      ```

    **Note**: Lesshat's `.font-face` mixin produces paths relative to Lesshat
    in `node_modules`. This mixin bypasses that problem.

  * <a name="components/global/.global-is-min-width"></a> 
   `.global-is-min-width( @minWidth, @block )`

    Wraps given block with `min-width` `@media` query.

  * <a name="components/global/.global-is-max-width"></a> 
   `.global-is-max-width( @maxWidth, @block )`

    Wraps given block with `max-width` `@media` query.

  * <a name="components/global/.global-is-mobile"></a> 
   `.global-is-mobile( @block )`

    Wraps given block with rules specific for mobile view.

    * **Example:**  
      Less:
      ```less
      .global-is-mobile( {
        .foo {
          color: red;
        }    
      } );
      ```

      CSS:
      ```css
      @media ( max-width: @global-is-mobile-threshold ) {
        .foo {
          color: red;
        }
      }
      ```

    See: [components/global@global-is-mobile-threshold](#components/global@global-is-mobile-threshold).  

  * <a name="components/global/.global-is-desktop"></a> 
   `.global-is-desktop( @block )`

    Wraps given block with rules specific for desktop view.
    
    **Note**: This mixin should not be used to specify default rules 
    because IE8 does not support @media queries.  

  * <a name="components/global/.global-box-border-gradient"></a> 
   `.global-box-border-gradient( @direction: to right )`

    Generates standard border gradient with given direction.
    
    **Note**: Lesshat's `.border-image()` mixin does not support `linear-gradient` correctly.

#### components/core

A very low level CSS to display the page correctly, including
HTML5 block tags for legacy browsers, `body` and `html` setup.

* **Classes:**

  * <a name="components/core/link-a"></a> 
   `.link-a`

    A standard styled link class compatible with the framework.

    * **Example:**  
      ```html
      // Outputs a standard styled link.
      <a href="foo.bar" class="link-a">Foo!</a>
      ```

    See: [components/global@global-link-font-color](#components/global@global-link-font-color).

  * <a name="components/core/global-is-mobile-hidden"></a> 
   `.global-is-mobile-hidden`

    If applied to an element makes it hidden in mobile view.
    See: [components/global/.global-is-mobile](#components/global/.global-is-mobile).    

    * **Example:**  
      ```html
      // Outputs a standard styled link.
      <div class="global-is-mobile-hidden">Visible on desktop and hidden on mobile</div>
      ```

***
### Standard

#### components/balloon-a

Balloon with an arrow.

* **Classes:**
  * `.balloon-a`
  * `.balloon-a-[nw-ne]` Specifies the alignment of an arrow.
  
* **Variables:**
  * `@balloon-a-background-color`

* **Example:**  
  ```html
  <span class="balloon-a balloon-a-nw">I'm a balloon with an arrow.</span>
  ```

#### components/button-a

* **Classes:**
  
  * <a name="components/button-a/.button-a"></a> 
   `.button-a`

   A generic button, no background color.

  * <a name="components/button-a/.button-a-background"></a> 
   `.button-a-background`

   A generic button with a background. Useful for hover/active button states.

   See: [components/global@global-link-font-color](#components/global@global-link-font-color).  

  * <a name="components/button-a/.button-a-icon-left"></a> 
   `.button-a-icon-left`

   A button with an 18x18px icon to the left.

#### components/content

A default styleset for content blocks including paragraphs, lists, blockquotes, headers, pre-formatted, code, textarea etc.

* **Example:**  
  ```html
  <div class="content">
    <h1>This is content</h1>
    <p>I'm styled with default styleset.</p>
  </div>
  ```

#### components/font-roboto

A component that brings `@font-face` for [Roboto webfont](http://www.google.com/fonts/specimen/Roboto).

* **Variables:**
  * `@font-face-roboto`
    
    See: [components/global@global-font-stack](#components/global@global-font-stack).  

#### components/footer-a

A default styleset for content blocks including paragraphs, lists, blockquotes, headers, pre-formatted, code, textarea etc.

* **Example:**  
  ```html
  <footer class="footer-a">
    I'm a footer!
  </footer>
  ```

#### components/grid

A grid system for the framework.

* **Classes:**
  * `.grid-container`
  * `.grid-width-[10,15,20,...,100]`

* **Variables:**
  * `@grid-gutter-width`
    Gap between the columns.

* **Example:**  
  ```html
  <div class="grid-container">
      <div class="grid-width-50">  
        Column 1
      </div>
      <div class="grid-width-50">  
        Column 2
        <div class="grid-container">
          <div class="grid-width-30">  
            Column 2-1
          </div>
          <div class="grid-width-70">  
            Column 2-2
          </div>            
      </div>    
  </div>
  ```

**Note:** In mobile view, all columns are stacked vertically. See: [components/global/.global-is-mobile](#components/global/.global-is-mobile).  

#### components/header-a

Generic header of the website. 

* **Classes:**
  * `.header-a`
  * `.header-a-logo`
    A class for the logo of the page, i.e. project logo. By default logo is 65px height.

* **Variables:**
  * `@header-a-height`

* **Example:**  
  ```html
  <header class="header-a">
    <div class="grid-container">
      <h1 class="header-a-logo grid-width-30">
        <a href="#"><img src="logo.png" alt="Logo"></a>
      </h1>
      <nav class="...">
        ...
      </nav>
    </div>
  </header>
  ```

#### components/navigation-a

Absolutely positioned horizontal bar, usually with useful links to project-related resources i.e. GitHub, bug tracker, blog, etc.

* **Classes:**
  * `.navigation-a`
  * `.navigation-a-[left,right]`
    Left and right-aligned blocks of links.

* **Variables:**
  * `@navigation-a-background-color`
  * `@navigation-a-font-color`
  * `@navigation-a-font-color-hover`
  * `@navigation-a-default-height`
  * `@navigation-a-item-gap`

* **Example:**  
  ```html
  <nav class="navigation-a">
    <div class="grid-container">
      <ul class="navigation-a-left grid-width-70">
        <li><a href="#">Project Homepage</a></li>
        <li class="global-is-mobile-hidden">...</li>
        ...
      </ul>
      <ul class="navigation-a-right grid-width-30">
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
  </nav>
  ```

**Note:** Use [components/core/global-is-mobile-hidden](#components/core/global-is-mobile-hidden) class to hide some items for best mobile performance.

#### components/navigation-b

Horizontal navigation between essential sub-pages of the project. Placed in [components/header-a](#components-header-a) in consists of [components-button-a](#components/button-a) elements.

* **Classes:**
  * `.navigation-b`

* **Example:**    
  ```html
  <nav class="navigation-b">
    <ul>
      <li><a href="#" class="button-a button-a-background">Foo</a></li>
      <li><a href="#" class="button-a">Bar</a></li>
      <li><a href="#" class="button-a">Bam</a></li>
    </ul>
  </nav>
  ```

#### components/tree-a

A vertical two-level collapsible menu. Best for long navigation lists of multiple levels.

* **Classes:**
  * `.tree-a`
  
* **Variables:**
  * `@tree-a-link-font-color`
  * `@tree-a-active-group-color-a`
  * `@tree-a-active-group-color-b`
  * `@tree-a-active-group-background`
  * `@tree-a-item-v-gap`

* **Example:**  
  ```html
  <nav class="tree-a grid-width-30">
    <h2>1</h2>

    <h3 class="active">1.1 - active</h3>
    <ul>
      <li><a href="#">1.1.1</a></li>
      <li class="active"><a href="#">1.1.2 - active</a></li>
      <li><a href="#">1.1.3</a></li>
    </ul>

    <h3>1.2</h3>
    <ul>
      <li><a href="#">1.2.1</a></li>
      <li><a href="#">1.2.2</a></li>
      <li><a href="#">1.2.3</a></li>
    </ul>

    <h2>2</h2>

    <h3>2.1</h3>
    ...
  </nav>
  ```

#### components/tip-a

An informational box.

* **Classes:**
  * `.tip-a`
  * `.tip-a-alert`
  
* **Variables:**
  * `@tip-a-alert-background-color`

* **Example:**  
  ```html
  <div class="tip-a">
    This is some important information.
  </div>

  <div class="tip-a tip-a-alert">
    This is some critical information.
  </div>
  ```

***
### Application-specific

#### components/sdk

A default look and layout of SDK. It includes:

 * Wide, spacious horizontally centered layout.
 * `<h1>` header with `.documentation` button.
 * Fancy links with tiny icons indicating whether it is a sample, guide or API link.
 * Integration with [components/tree-a](#components-tree-a).
 
See [SDK sample](samples/sdk).

* **Classes:**
  * `.documentation`
    An inline button-link inside a top-level header.

    * **Example:**
      ```html
      <h1>A header 
        <span class="documentation">
          <a href="#" class="button-a button-a-background button-a-icon-left icon-docs-a">Documentation</a>
        </span>
      </h1>
      ```

* **Variables:**
  * `@sdk-link-api-selector` Element selector for API link.
  * `@sdk-link-guide-selector` Element selector for guide link.
  * `@sdk-link-sample-selector` Element selector for sample link.

#### components/basicsample

A default look of a basic sample. A centered slightly narrower layout than [components-sdk](#components-sdk).
 
See [Basicsample](samples/basicsample), [components/adjoined](components-adjoined).

* **Subcomponents:**

  * <a name="components/basicsample/adjoined"></a> 
    **components/basicsample/adjoined**

    An extension of [components/basicsample](#components-basicsample). Designed to present an instance of editor with a fancy header and short description.

    * **Classes:**
      * `.adjoined-top`
        A class of a container with a header and description.
      * `.adjoined-bottom`
        A class of a container with instance of the editor.

    * **Example:**
      ```html
      <header class="header-a">
        <div class="grid-container">
          ...
        </div>
        <div class="adjoined-top">
          <div class="grid-container">
            <div class="content grid-width-100">
              (description part) 
            </div>
          </div>
        </div>
        <div class="adjoined-bottom">
          <div class="grid-container">
            <div class="grid-width-100">
              (editor part) 
            </div>
          </div>
        </div>
      </header>  
      ```