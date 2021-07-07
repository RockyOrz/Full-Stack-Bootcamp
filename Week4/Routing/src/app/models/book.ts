export class Book {
    id?: number;
    name: string;
    publishDate: Date;
    thumbnail: string;
    summary: string;

    constructor(id: number, name: string, publishDate: Date, thumbnail:string, summary:string) {
        this.id = id;
        this.name = name;
        this.publishDate = publishDate;
        this.thumbnail = thumbnail;
        this.summary = summary;
    }
}