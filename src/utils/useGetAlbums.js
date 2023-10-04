import { useEffect, useState } from "react";

export const useGetAlbums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/natcardozo/afab243c1b858a8d70dcee5a0904e5fd/raw/b3fea8719f44c589700f56665e99e370dc2b1784/albums.json")
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.log(error))
    }, [])

    return albums;
}