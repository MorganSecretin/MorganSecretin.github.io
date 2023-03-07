export default function renderProjectThumbnail({
    title,
    imgUrl,
    date,
    littleDescription,
    link,
    titleLink,
    bigDescription,
}) {
const dateShow = new Date(date);
return `
<div class="projects">
    <img class="projects_img" src="${imgUrl}" alt="">
    
    <div class="projects_div_text">
        <h2 class="projects_title">${title}</h2>
        <time datetime="${date}">${dateShow.toLocaleDateString()}</time>
        <p class="little_description">${littleDescription}</p>
        <p>
            <a href="${link}" target="_blank">${titleLink}</a> <br>
            ${bigDescription}
        </p>
    </div>
</div>`;
}