import Link from "next/link";

export default function AboutPage() {
  return (
    <article className="prose pb-20">
      <h1>Cultivate</h1>
      <p className="font-medium">
        Cultivate is a high-fidelity prototyping tool for UX and UI designers
        and developers.
      </p>
      <p>
        It provides designers and developers with a web application template to
        rapidly design, build, and test user interfaces with all the benefits of
        a native web browser.
      </p>

      <h2 id="design-with-code">Design with Code</h2>
      <p>
        Designing in code instead of the usual design tools such as Figma,
        Sketch, Adobe XD, etc., provides a multitude of benefits.
      </p>

      <p>
        <ul>
          <li>
            A native web experience - see, demo, and test how a design{" "}
            <i>really</i> works in the browser.
          </li>
          <li>
            Native browser UI elements and interactivity, such as form inputs
            and buttons.
          </li>
          <li>
            A common and standard language between designers and developers.
            With plenty of online and within-company support and the W3C
            standards and guidelines to follow.
          </li>
          <li>Ability to publish, share, and test designs easily.</li>
          <li>
            Ability to collaboratively work on projects with version control.
          </li>
          <li>
            Easy to integrate and work with mock, sample, or even real data to
            populate screens.
          </li>
          <li>
            Design for and test accessibility with screen reader technology and
            keyboard interaction.
          </li>
          <li>
            Design for and test responsive screen sizing and device simulation.
          </li>
          <li>Rapid iteration and progressive elaboration.</li>
        </ul>
      </p>

      <h2 id="technology">Technology Stack</h2>
      <p>
        The Cultivate app is built on the Next.js system, extending the React UI
        library and supported by a utility-first CSS framework - TailwindCSS.
        Additionally, a headless (unstyled) component library - Radix UI
        Primitives provide reusable components such as dropdowns, modals, and
        popovers.
      </p>
      <p>
        The Cultivate template provides an{" "}
        <a href="#unopinionated">unopinionated</a> skeleton application enabling
        designers and developers to quickly run a local pre-configured
        application for designing and building user interfaces.
      </p>
      <p>
        For more information, check out the technology documentation:
        <ul>
          <li>
            <Link href="https://nextjs.org/" target="_blank">
              Next.js
            </Link>
          </li>
          <li>
            <Link href="https://react.dev/" target="_blank">
              React
            </Link>
          </li>
          <li>
            <Link href="https://tailwindcss.com/" target="_blank">
              TailwindCSS
            </Link>
          </li>
          <li>
            <Link href="https://www.radix-ui.com/primitives" target="_blank">
              Radix UI
            </Link>
          </li>
        </ul>
      </p>

      <h2 id="unopinionated">An Unopinionated Framework</h2>
      <p className="font-medium">
        What is an &quot;unopinionated&quot; framework?
      </p>
      <p>
        Most UI libraries and frameworks impose styling of UI elements - these
        are opinionated design systems. Though they are great for quickly
        building interfaces without the need to think about and apply your
        styles, they also restrict creativity and design, pigeonholing and
        directing designers. These opinionated systems usually provide theming
        options and style overrides, but often only to a point. Further
        customisation, especially concerning interactions and animations,
        requires more complex manipulation and hacking of the existing
        components.
      </p>

      <p>
        Cultivate provides a framework without design constraints and
        limitations - removed of opinion. Yet it provides the tools and
        accessibility to designers to freely explore, trial, and apply styles
        and interactions as they design the interface.
      </p>

      <p>
        Being an unopinionated framework - Cultivate puts the designers in
        control.
      </p>

      <p>
        However... Radix UI has recently released a{" "}
        <Link href="https://www.radix-ui.com/" target="_blank">
          Themes
        </Link>{" "}
        library built on the Radix UI Primitive components. It provides basic
        custom theming options for jumping quickly into building a UI without
        the effort required to determine styling. There is potentially some
        conflict with TailwindCSS, so proceed with caution.
      </p>
    </article>
  );
}
