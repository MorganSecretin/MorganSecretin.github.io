export default function renderProjectThumbnail(_ref) {
  var title = _ref.title,
    imgUrl = _ref.imgUrl,
    date = _ref.date,
    littleDescription = _ref.littleDescription,
    link = _ref.link,
    titleLink = _ref.titleLink,
    bigDescription = _ref.bigDescription;
  var dateShow = new Date(date);
  return "\n<div class=\"projects\">\n    <img class=\"projects_img\" src=\"".concat(imgUrl, "\" alt=\"\">\n    \n    <div class=\"projects_div_text\">\n        <h2 class=\"projects_title\">").concat(title, "</h2>\n        <time datetime=\"").concat(date, "\">").concat(dateShow.toLocaleDateString(), "</time>\n        <p class=\"little_description\">").concat(littleDescription, "</p>\n        <p>\n            <a href=\"").concat(link, "\" target=\"_blank\">").concat(titleLink, "</a> <br>\n            ").concat(bigDescription, "\n        </p>\n    </div>\n</div>");
}
//# sourceMappingURL=renderProjectThumbnail.js.map