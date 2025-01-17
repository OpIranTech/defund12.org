import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { DefundUtils } from "../../DefundUtils";
import { FooterProps } from "../../types/PropTypes";

/**
 * The site footer, containing issue request and contact information.
 *
 * _This is meant to be internal to this file and should
 * probably not be exported._
 */
class _Footer extends React.Component<FooterProps> {
  /**
   * Initialize the component.
   * @param {FooterProps} props
   */
  constructor(props: FooterProps) {
    super(props);
  }

  /**
   * React render method.
   * @return {React.ReactNode} the rendered component
   */
  render() {
    return (
      <>
        <aside className="sticky">
          <div>
            <span className="city-request-link">
              <span className="emojicon emojicon-city"></span>
              <span
                className="react-inserted"
                dangerouslySetInnerHTML={{
                  __html: DefundUtils.markdownToHTML(this.props.footerTextPr),
                }}
              ></span>
            </span>
          </div>
        </aside>
        <footer className="footerMain">
          {/* TODO: determine if this is something we want to keep around
            <span
            className="react-inserted"
            dangerouslySetInnerHTML={{
              __html: DefundUtils.markdownToHTML(
                this.props.footerTextInstructions
              ),
            }}
          ></span> */}
          <span
            className="divider footer react-inserted"
            dangerouslySetInnerHTML={{
              __html: DefundUtils.markdownToHTML(this.props.contactEmailFooter),
            }}
          ></span>
        </footer>
      </>
    );
  }
}

/**
 * The site footer, containing issue request and contact information.
 * @return {React.ReactNode}
 */
export default function Footer(): JSX.Element {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          siteConfig {
            footerTextPr
            footerTextInstructions
            contactEmailFooter
          }
        }
      `}
      render={(data: { siteConfig: FooterProps }) => (
        <_Footer {...data.siteConfig} />
      )}
    />
  );
}
