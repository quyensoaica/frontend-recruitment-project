import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const copyStringToClipboard = function (str: any) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const facilityMergeFields = [
  "FacilityNumber",
  "FacilityName",
  "Address",
  "MapCategory",
  "Latitude",
  "Longitude",
  "ReceivingPlant",
  "TrunkLine",
  "SiteElevation",
];
const inspectionMergeFields = ["InspectionCompleteDate", "InspectionEventType"];
const createOptionGroupElement = (mergeFields: any, optionGrouplabel: any) => {
  let optionGroupElement = document.createElement("optgroup");
  optionGroupElement.setAttribute("label", optionGrouplabel);
  for (let index = 0; index < mergeFields.length; index++) {
    let optionElement = document.createElement("option");
    optionElement.setAttribute("class", "merge-field-select-option");
    optionElement.setAttribute("value", mergeFields[index]);
    optionElement.text = mergeFields[index];
    optionGroupElement.appendChild(optionElement);
  }
  return optionGroupElement;
};

// Cấu hình các tùy chọn cho editor
const buttons = [
  "undo",
  "redo",
  "|",
  "bold",
  "strikethrough",
  "underline",
  "italic",
  "|",
  "superscript",
  "subscript",
  "|",
  "align",
  "|",
  "ul",
  "ol",
  "outdent",
  "indent",
  "|",
  "font",
  "fontsize",
  "brush",
  "paragraph",
  "|",
  "image",
  "link",
  "table",
  "|",
  "hr",
  "eraser",
  "copyformat",
  "|",
  "fullsize",
  "selectall",
  "print",
  "|",
  "source",
  {
    name: "insertMergeField",
    tooltip: "Insert Merge Field",
    iconURL: "images/merge.png",
    popup: (editor: any) => {
      function onSelected(e: any) {
        let mergeField = e.target.value;
        if (mergeField) {
          console.log(mergeField);
          editor.selection.insertNode(editor.create.inside.fromHTML("{{" + mergeField + "}}"));
        }
      }
      let divElement = editor.create.div("merge-field-popup");

      let labelElement = document.createElement("label");
      labelElement.setAttribute("class", "merge-field-label");
      divElement.appendChild(labelElement);

      let selectElement = document.createElement("select");
      selectElement.setAttribute("class", "merge-field-select");
      selectElement.appendChild(createOptionGroupElement(facilityMergeFields, "Facility"));
      selectElement.appendChild(createOptionGroupElement(inspectionMergeFields, "Inspection"));
      selectElement.onchange = onSelected;
      divElement.appendChild(selectElement);

      return divElement;
    },
  },
  {
    name: "copyContent",
    tooltip: "Copy HTML to Clipboard",
    iconURL: "images/copy.png",
    exec: function (editor: any) {
      let html = editor.value;
      copyStringToClipboard(html);
    },
  },
];

// Cấu hình cho JoditEditor
const config = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  // toolbarButtonSize: "medium",
  toolbarAdaptive: false,
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true,
  },
  height: 500,
};

const TextEditor = ({ value, onChange }: { value: string; onChange: (htmlString: string) => void }): React.ReactNode => {
  console.log(value);

  // State để lưu giá trị văn bản

  return (
    <div>
      <JoditEditor
        value={value}
        config={config}
        onBlur={(htmlString: string) => onChange(htmlString)} // Gọi khi thoát khỏi editor
        onChange={(htmlString: string) => onChange(htmlString)} // Gọi mỗi khi nội dung thay đổi
      />
      {/* <div>
        <h3>Output:</h3>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div> */}
    </div>
  );
};

export default TextEditor;
