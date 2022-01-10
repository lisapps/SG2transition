/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import C_BlogCard from "../../2_components/blogCard/C_BlogCard";
import E_Button from "../../1_elements/button/E_Button";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Blog = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let blogVars = {
      ...appState,
      currentPath: "/ui/blog",
      outputName: "Blog",
      headerName: "Blog",
      currentTheme: "t-silver",
      description:
        "The Blog Section has an image, headline and excerpt from a blog article. Only the image and headline are linked.",
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
        field: "300x200 Image Example",
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
        field: "128x120 Image Example",
      },
      title4: {
        name: "title4",
        label: "Title 4",
        checkbox: null,
        field:
          "720x405 Image Example with very long title that will push down any text in the content below, and it goes on and on and is really longer than a normal headline.",
      },
      title5: {
        name: "title5",
        label: "Title 5",
        checkbox: null,
        field: "384x144 Image Example",
      },
      title6: {
        name: "title6",
        label: "Title 6",
        checkbox: null,
        field: "128x120 Image Example",
      },
      title7: {
        name: "title7",
        label: "Title 7",
        checkbox: null,
        field: "720x405 Image Example",
      },
      title8: {
        name: "title8",
        label: "Title 8",
        checkbox: null,
        field:
          "384x144 Image Example with some extra text so that you can see what three lines of headline looks like.",
      },
      title9: { name: "title9", label: "Title 9", checkbox: null, field: "Blog Heading 9" },
      title10: { name: "title10", label: "Title 10", checkbox: null, field: "Blog Heading 10" },
      title11: { name: "title11", label: "Title 11", checkbox: null, field: "Blog Heading 11" },
      title12: { name: "title12", label: "Title 12", checkbox: null, field: "Blog Heading 12" },
      btnTxt: { name: "btnTxt", label: "Button Text", checkbox: null, field: "More" },
    });
    setDimensions({ ...dimensions, viewHeight: "1210" });
  }, []);

  if (!contentOptions) return "...Loading Blog Section";
  return (
    <section className={"s-blog " + appState.currentTheme} id="blog0">
      <ul className="s-blog__layout l-inner u-max+ u-list-unstyled">
        <C_BlogCard
          image={"https://styleguide.kingston.com/images/fpo/section-blog/newSize.jpg"}
          title={contentOptions.title1 && contentOptions.title1.field}
        />
        <C_BlogCard
          image={
            "https://media.kingston.com/kingston/articles/ktc-articles-memory-vs-storage-thumbnail-md.jpg"
          }
          title={contentOptions.title2 && contentOptions.title2.field}
        />
        <C_BlogCard
          image={
            "https://media.kingston.com/kingston/articles/ktc-articles-solutions-data-security-upgrade-your-computer-security-with-self-encrypted-ssds-sm.jpg"
          }
          title={contentOptions.title3 && contentOptions.title3.field}
        />
        <C_BlogCard
          image={"https://media.kingston.com/kingston/articles/ktc-article-nvme-enterprise-md.jpg"}
          title={contentOptions.title4 && contentOptions.title4.field}
        />
        <C_BlogCard
          image={
            "https://media.kingston.com/kingston/articles/ktc-articles-memory-vs-storage-thumbnail-md.jpg"
          }
          title={contentOptions.title5 && contentOptions.title5.field}
        />
        <C_BlogCard
          image={
            "https://media.kingston.com/kingston/articles/ktc-articles-solutions-data-security-upgrade-your-computer-security-with-self-encrypted-ssds-sm.jpg"
          }
          title={contentOptions.title6 && contentOptions.title6.field}
        />
        <C_BlogCard
          image={"https://media.kingston.com/kingston/articles/ktc-article-nvme-enterprise-md.jpg"}
          title={contentOptions.title7 && contentOptions.title7.field}
        />
        <C_BlogCard
          title={contentOptions.title8 && contentOptions.title8.field}
          image={
            "https://media.kingston.com/kingston/articles/ktc-articles-memory-vs-storage-thumbnail-md.jpg"
          }
        />
        <C_BlogCard title={contentOptions.title9 && contentOptions.title9.field} />
        <C_BlogCard title={contentOptions.title10 && contentOptions.title10.field} />
        <C_BlogCard title={contentOptions.title11 && contentOptions.title11.field} />
        <C_BlogCard title={contentOptions.title12 && contentOptions.title12.field} />
      </ul>
      <div className="l-inner u-txt-center u-pt u-pb">
        <E_Button
          action={true}
          text={(contentOptions.btnTxt && contentOptions.btnTxt.field) || `More`}
        />
      </div>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "blog",
  component: S_Blog,
  navtxt: "Blog",
  htmlName: "Blog",
};
