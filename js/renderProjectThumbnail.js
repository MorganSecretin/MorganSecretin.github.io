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
<div class="project_div">
    <img class="project_img" src="${imgUrl}" alt="">
    
    <div class="project_div_text">
        <h2 class="project_title">${title}</h2>
        <time datetime="${date}">${dateShow.toLocaleDateString()}</time>
        <p class="little_description">${littleDescription}</p>
        <p class="big_description">
            <a href="${link}" target="_blank">${titleLink}</a> <br>
            ${bigDescription}
        </p>
    </div>
</div>`;
}
