This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It uses [TailwindCSS](https://tailwindcss.com/) - a utility-first CSS framework for styling and [Radix UI Primitives](https://www.radix-ui.com/primitives) for UI components.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## More about this Project

### Cultivate

Cultivate is a high-fidelity prototyping tool for UX and UI designers and developers.

It provides designers and developers with a web application template to rapidly design, build, and test user interfaces with all the benefits of a native web browser.

#### Design with Code

Designing in code instead of the usual design tools, such as Figma, Sketch, Adobe XD, etc., provides many benefits.

- A native web experience - see, demo, and test how a design works in the browser.
- Native browser UI elements and interactivity, such as form inputs and buttons.
- A common and standard language between designers and developers. With plenty of online and within-company support and the W3C standards and guidelines to follow.
- Ability to publish, share, and test designs easily.
- Ability to collaboratively work on projects with version control.
- Easy to integrate and work with mock, sample, or even actual data to populate screens.
- Design for and test accessibility with screen reader technology and keyboard interaction.
- Design for and test responsive screen sizing and device simulation.
- Rapid iteration and progressive elaboration.

#### Technology Stack

The Cultivate app is built on the Next.js system, extending the React UI library and supported by a utility-first CSS framework - TailwindCSS. Additionally, a headless (unstyled) component library - Radix UI Primitives, provide reusable components such as dropdowns, modals, and popovers.

The Cultivate template provides an skeleton application enabling designers and developers to quickly run a local pre-configured application for designing and building user interfaces.

For more information, check out the technology documentation:

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/primitives)

#### An Unopinionated Framework

What is an "unopinionated" framework?

Most UI libraries and frameworks impose styling of UI elements - these are opinionated design systems. Though they are great for quickly building interfaces without the need to think about and apply your styles, they also restrict creativity and design, pigeonholing and directing designers. These opinionated systems usually provide theming options and style overrides, but often only to a point. Further customisation, especially concerning interactions and animations, requires more complex manipulation and hacking of the existing components.

Cultivate provides a framework without design constraints and limitations - removed of opinion. Yet it provides the tools and accessibility to designers to freely explore, trial, and apply styles and interactions as they design the interface.

Being an unopinionated framework - Cultivate puts the designers in control.

However... Radix UI has recently released a [Themes](https://www.radix-ui.com/) library built on the Radix UI Primitive components. It provides basic custom theming options for jumping quickly into building a UI without the effort required to determine styling. There is potentially some conflict with TailwindCSS, so proceed with caution.
