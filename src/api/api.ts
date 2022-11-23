import axios from "axios";

export const getData = () => {
    return axios.get('http://82.202.204.94/tmp/test.php')
}