export class Author {
    public id: string;
    public name: string;

    constructor(props: {
        id: string;
        name: string;
    }) {
        Object.assign(this, props);
    }
}
