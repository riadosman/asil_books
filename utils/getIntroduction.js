export const getIntroduction = (blog) => {
  const introMarker = "### مقدمة";
  const endMarker = "###";

  const startIndex = blog.content.indexOf(introMarker);
  const endIndex = blog.content.indexOf(
    endMarker,
    startIndex + introMarker.length
  );

  if (startIndex !== -1 && endIndex !== -1) {
    return blog.content
      .substring(startIndex + introMarker.length, endIndex)
      .trim();
  }
  return "";
};
