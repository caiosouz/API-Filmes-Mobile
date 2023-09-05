import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzgwMTVjZTNkOTM0YjJmZGMxNGE5YjMxYWM2ZmQ2YiIsInN1YiI6IjY0MzQ4ZWE2ZTkyZDgzMDA3N2Y5M2I4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZCyzohkoCufKB-aj635WvHK8qilik_FDYAgmXu0HbnE'
    }
})

export default apiFilmes