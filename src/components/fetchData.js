import axios from 'axios';

const fetchData = async () => {
    try {
        const res = await axios.get("https://dummyjson.com/products");
        console.log(res.data)
        return res.data.products;
    } catch (err) {
        console.log(err, "line 22");
    }
}

export default fetchData;