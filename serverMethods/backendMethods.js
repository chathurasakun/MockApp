export const getAll = async (urlParam) => {
    try {
        const response = await fetch(urlParam);
        const responseJson = await response.json();

        return responseJson;
    }
    catch (error) {
        console.error(error);
    }
}