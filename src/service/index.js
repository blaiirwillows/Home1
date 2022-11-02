export default class service{
    #apiUrl = "https://jsonplaceholder.typicode.com/posts";

    getAllPosts = async () => {
        const response = await fetch(this.#apiUrl);

        if(!response.ok){
            throw new Error("Failed to fetch, please try again later");
    };

    const data = await response.json();
    return data;
    };
    getPost = async (id) => {
        const response = await fetch(`${this.#apiUrl}/${id}`);

        if(!response.ok){
            throw new Error("Failed to fetch, please try again later");
    };

    const data = await response.json();
    return data;
    }
}