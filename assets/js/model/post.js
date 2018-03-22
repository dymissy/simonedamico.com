export default class Post {
    constructor(postData) {
        this.title = postData.title;
        this.subtitle = postData.content.subtitle;
        this.url = `https://medium.com/@dymissy/${postData.uniqueSlug}`;
        this.image = `https://cdn-images-1.medium.com/max/800/${postData.virtuals.previewImage.imageId}`;
        this.date = new Date(postData.firstPublishedAt);
        this.tags = postData.virtuals.tags.map((tag) => {
            return tag.name;
        });
    }
}