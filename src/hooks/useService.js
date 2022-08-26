import { useEffect, useState } from "react"

const useService = (id) => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('/services.json')
        .then(response => response.json())
        .then(json => setService(json.find(data => data._id == id )))
    }, []);

    return [service, setService];
}

export default useService;