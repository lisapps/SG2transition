import React, { useContext, useState, useEffect } from "react";
import C_OptionsDD from "../../../Tools/C_OptionsDD";
import { OptionsContext } from "../../../../../../OptionsContext";

const EditableFields = () => {
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    //set local state when appstate changes
    setOptions(contentOptions);
  }, [contentOptions]);

  function handleFieldChange(e) {
    //get the content option as obj to edit from contentOptions Context
    //gets field name
    let optArr = Object.keys(contentOptions).filter((opt) => options[opt].label === e.target.name);
    // console.log("optArr: ", optArr);
    //only one key name in the array, set it to optKey var, ie "Heading"
    let optKey = optArr[0];
    //find that in our local state
    let optObj = options[optKey];
    //change local state
    if (typeof optObj.field !== "object") {
      optObj.field = e.target.value;
    } else {
      optObj.field[options.currentLang] = e.target.value;
    }
    // make a copy of part of local state to be changed; never edit state/context directly - replace it
    let optionsCopy = { ...options, [optKey]: optObj };
    // replace options in contentOptions with our newly edited array copy
    setContentOptions({ ...optionsCopy });
  }

  function handleCheckboxChange(e) {
    //get the option array to edit from contentOptions Context (grab the array, find our option)
    let optArr = Object.keys(contentOptions).filter((opt) => options[opt].label === e.target.name);
    let optKey = optArr[0];
    let optObj = options[optKey];
    optObj.checkbox = !optObj.checkbox;
    // make a copy of part of state to be changed; never edit state/context directly - replace it
    let optionsCopy = { ...options, [optKey]: optObj };
    // replace options in contentOptions with our newly edited array copy
    setContentOptions({ ...optionsCopy });
  }

  function langObjCheck(opt) {
    // console.log("hasOwnProp: ", opt.hasOwnProptery("currentLang"));
    opt = opt.field;
    if (opt && typeof opt == "object") return opt.hasOwnProptery("currentLang");
    return false;
  }

  return (
    <>
      <div className={`u-animated u-animated--delay500ms u-animated a-fadeIn c-editContent`}>
        {/* Left Column */}
        <div className="l-row">
          <div className="l-row u-mb">
            <h5 style={{ color: "white" }}>
              Drag and drop an image over an existing one you can see in a section to change it. You
              can drop multiple files at once if the section uses them for different sizes. This
              doesn&apos;t work with some SVGs.
            </h5>
          </div>
          <div className="l-row__col l-1/2 u-flex u-flexColumn u-flex1">
            {options ? (
              Object.keys(options).map((key, index) =>
                // object check is so no label or checkbox is created for currentLang
                index <= (Object.keys(options).length - 1) / 2 &&
                typeof options[key] == "object" ? (
                  //left side fields
                  <div key={key} className="c-editContent__field">
                    <label style={{ color: "white" }} className="c-contentOptions__label">
                      {/* ie. options[title1].checkbox. Allows to have checkbox prechecked, or even none shown */}
                      {options[key] && options[key].checkbox !== null ? (
                        <input
                          type="checkbox"
                          name={options[key].label}
                          onChange={(e) => handleCheckboxChange(e)}
                          checked={options[key].checkbox}
                          className="c-contentOptions__input"
                        />
                      ) : (
                        ""
                      )}
                      <span style={{ margin: "0 0.25em 0 0" }}>
                        {/* checks for existing option label - option like 'currentLang' doesn't have this */}
                        {options[key] && options[key].label}
                      </span>
                      {/* checks for existing option field - option like 'currentLang' doesn't have this */}
                      {options[key] && options[key].field !== null ? (
                        options[key].field && Array.isArray(options[key].field) ? (
                          <>
                            <C_OptionsDD optKey={key} opts={options[key]} />
                          </>
                        ) : // Next check if its an object and will have translation text to show
                        options[key].field &&
                          typeof options[key].field == "object" &&
                          !Array.isArray(options[key].field) ? (
                          <>
                            <input
                              style={{
                                display:
                                  options[key].checkbox === true || options[key].checkbox == null
                                    ? "block"
                                    : "none",
                                width: "400px",
                              }}
                              type="text"
                              name={options[key].label}
                              onChange={(e) => handleFieldChange(e)}
                              placeholder={options[key].field[options.currentLang]}
                              value={options[key].field[options.currentLang]}
                              className="c-editContent__input"
                            />
                          </>
                        ) : // This should just be a regular text field
                        typeof options[key] == "object" && !langObjCheck(options[key]) ? (
                          <>
                            <input
                              style={{
                                display:
                                  options[key].checkbox === true || options[key].checkbox == null
                                    ? "block"
                                    : "none",
                                width: "400px",
                              }}
                              type="text"
                              name={options[key].label}
                              onChange={(e) => handleFieldChange(e)}
                              placeholder={options[key].field}
                              className="c-editContent__input"
                            />
                          </>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                    </label>
                  </div>
                ) : (
                  ""
                ),
              )
            ) : (
              //
              <>
                <span>No content options.</span>
              </>
            )}
          </div>
          {/* Right Column */}
          <div className="l-row__col l-1/2 u-flex u-flexColumn u-flex1">
            {options
              ? Object.keys(options).map((key, index) =>
                  index > (Object.keys(options).length - 1) / 2 &&
                  typeof options[key] == "object" ? (
                    //right side fields

                    <div key={key} className="c-editContent__field">
                      <label style={{ color: "white" }} className="c-contentOptions__label">
                        {/* ie. options[title1].checkbox. Allows to have checkbox prechecked, or even none shown */}
                        {options[key] && options[key].checkbox !== null ? (
                          <input
                            type="checkbox"
                            name={options[key].label}
                            onChange={(e) => handleCheckboxChange(e)}
                            checked={options[key].checkbox}
                            className="c-contentOptions__input"
                          />
                        ) : (
                          ""
                        )}
                        <span style={{ margin: "0 0.25em 0 0" }}>
                          {/* checks for existing option label - option like 'currentLang' doesn't have this */}
                          {options[key] && options[key].label}
                        </span>
                        {/* checks for existing option field - option like 'currentLang' doesn't have this */}
                        {options[key] && options[key].field !== null ? (
                          options[key].field && Array.isArray(options[key].field) ? (
                            <>
                              <C_OptionsDD optKey={key} opts={options[key]} />
                            </>
                          ) : // Next check if its an object and will have translation text to show
                          options[key].field &&
                            typeof options[key].field == "object" &&
                            !Array.isArray(options[key].field) ? (
                            <>
                              <input
                                style={{
                                  display:
                                    options[key].checkbox === true || options[key].checkbox == null
                                      ? "block"
                                      : "none",
                                  width: "400px",
                                }}
                                type="text"
                                name={options[key].label}
                                onChange={(e) => handleFieldChange(e)}
                                placeholder={options[key].field[options.currentLang]}
                                value={options[key].field[options.currentLang]}
                                className="c-editContent__input"
                              />
                            </>
                          ) : // This should just be a regular field
                          typeof options[key] == "object" && !langObjCheck(options[key]) ? (
                            <>
                              <input
                                style={{
                                  display:
                                    options[key].checkbox === true || options[key].checkbox == null
                                      ? "block"
                                      : "none",
                                  width: "400px",
                                }}
                                type="text"
                                name={options[key].label}
                                onChange={(e) => handleFieldChange(e)}
                                placeholder={options[key].field}
                                className="c-editContent__input"
                              />
                            </>
                          ) : (
                            ""
                          )
                        ) : (
                          ""
                        )}
                      </label>
                    </div>
                  ) : (
                    ""
                  ),
                )
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditableFields;

{
  /*  
  <div className="l-row">
    <div className="l-row__col l-1/2 u-flex u-flex1">
      Left Column Content
    </div>
    <div className="l-row__col l-1/2 u-flex u-flex1">
      Right Column Content
    </div>
  </div>
  */
}
