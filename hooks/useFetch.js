import {useEffect, useState} from "react";
import axios from "axios";
import {URL} from "../config/config"

const useFetch = (endpoint) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `${URL}/api/${endpoint}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.log(JSON.stringify(error));
            setError(error);
            alert("Error al obtener datos");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch= () => {
        setLoading(true);
        fetchData();
    }

    return {loading, data, error, refetch};
}

export default useFetch;
