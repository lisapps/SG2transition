/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import C_BlogCard from "../../2_components/blogCard/C_BlogCard";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_RelatedArticles = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let blogVars = {
      ...appState,
      currentPath: "/ui/related-articles",
      outputName: "RelatedArticles",
      headerName: "Related Articles",
      currentTheme: "t-white",
      description:
        "The Related Articles Section. This will be on the bottom of an article page. Only the image and headline are linked.",
      htmlSaved: true,
      scripts: [],
      specs: [
        [
          "Blog Card Image",
          ["Optimal Size: 300px x 200px, can work with 720x404 from HyperX also."],
        ],
        ["Blog Card Tags", ["String Text"]],
        ["Blog Card Heading", ["String Text in H5 tag"]],
        ["Blog Card Copy", ["String Text"]],
      ],
    };
    setAppState(blogVars);
    setContentOptions({
      title1: {
        name: "title1",
        label: "Title 1",
        checkbox: null,
        field: "128x120 Image Example",
      },
      tag1: {
        name: "tag1",
        label: "Article Tag 1",
        checkbox: null,
        field: "TAG TEXT HERE",
      },
      tag2: {
        name: "tag2",
        label: "Article Tag 2",
        checkbox: null,
        field: "TAG TEXT HERE",
      },
      tag3: {
        name: "tag3",
        label: "Article Tag 3",
        checkbox: null,
        field: "TAG TEXT HERE",
      },
      copy1: {
        name: "copy1",
        label: "Description 1",
        checkbox: null,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      title2: {
        name: "title2",
        label: "Title 2",
        checkbox: null,
        field: "384x144 Image Example",
      },
      title3: {
        name: "title3",
        label: "Title 3",
        checkbox: null,
        field: "720x405 Image Example",
      },
      title4: {
        name: "title4",
        label: "Title 4",
        checkbox: null,
        field:
          "Blog Article Title Blog Article Title Blog Article Title Blog Article Title Blog Article Title",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "336" });
  }, []);

  if (!contentOptions) return "...Loading Related Article Section";
  return (
    <section className={"s-relatedArticles " + appState.currentTheme}>
      <ul className="s-relatedArticles__layout l-inner u-list-unstyled u-max+">
        <C_BlogCard
          image={
            "https://media.kingston.com/kingston/articles/ktc-articles-memory-vs-storage-thumbnail-md.jpg"
          }
          title={contentOptions.title1 && contentOptions.title1.field}
          tags={
            contentOptions.title1 && [
              { url: "#", tag: contentOptions.tag1.field },
              { url: "#", tag: contentOptions.tag2.field },
              { url: "#", tag: contentOptions.tag3.field },
            ]
          }
          copy={contentOptions.title1 && contentOptions.copy1.field}
        />
        <C_BlogCard
          image={
            "https://media.kingston.com/kingston/articles/ktc-articles-solutions-data-security-upgrade-your-computer-security-with-self-encrypted-ssds-sm.jpg"
          }
          title={contentOptions.title2 && contentOptions.title2.field}
        />
        <C_BlogCard
          image={"https://media.kingston.com/kingston/articles/ktc-article-nvme-enterprise-md.jpg"}
          title={contentOptions.title3 && contentOptions.title3.field}
        />
        <C_BlogCard
          title={contentOptions.title4 && contentOptions.title4.field}
          image={
            "https://media.kingston.com/kingston/articles/ktc-articles-memory-vs-storage-thumbnail-md.jpg"
          }
        />
      </ul>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "related-articles",
  component: S_RelatedArticles,
  navtxt: "Related Articles",
  htmlName: "RelatedArticles",
};
