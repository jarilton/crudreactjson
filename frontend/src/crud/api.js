import axios from 'axios';

export const getNames = async () => await axios.get(`${process.env.REACT_APP_API}`);
