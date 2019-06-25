function FormatParagraph(paragraph) {
    var result = paragraph.split('<').join("\r\n");
    return result;
  }

export default FormatParagraph