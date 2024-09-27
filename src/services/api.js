import axios from "axios";
export const fetchMovieTrends = async () => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDkzNGQ2NGNkZmZiODE1MjA1ZjMzOGJkNTE4NTA2OCIsIm5iZiI6MTcyNzI4MzQxNi44MDQyOTMsInN1YiI6IjY2ZGYzNzAzMTgyMTE0ZWQ2NDNhZTExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNKkmwDvShSWrUJtxM4FLLwJI-rEgkYYF42KHqxuqB8";
  const BaseURL =
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};

export const fetchMovieDetails = async (movieId) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDkzNGQ2NGNkZmZiODE1MjA1ZjMzOGJkNTE4NTA2OCIsIm5iZiI6MTcyNzI4MzQxNi44MDQyOTMsInN1YiI6IjY2ZGYzNzAzMTgyMTE0ZWQ2NDNhZTExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNKkmwDvShSWrUJtxM4FLLwJI-rEgkYYF42KHqxuqB8";
  const BaseURL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US'`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};

export const fetchMovieCredits = async (movieId) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDkzNGQ2NGNkZmZiODE1MjA1ZjMzOGJkNTE4NTA2OCIsIm5iZiI6MTcyNzI4MzQxNi44MDQyOTMsInN1YiI6IjY2ZGYzNzAzMTgyMTE0ZWQ2NDNhZTExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNKkmwDvShSWrUJtxM4FLLwJI-rEgkYYF42KHqxuqB8";
  const BaseURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US'`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};
export const fetchMovieReviews = async (movieId) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDkzNGQ2NGNkZmZiODE1MjA1ZjMzOGJkNTE4NTA2OCIsIm5iZiI6MTcyNzI4MzQxNi44MDQyOTMsInN1YiI6IjY2ZGYzNzAzMTgyMTE0ZWQ2NDNhZTExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNKkmwDvShSWrUJtxM4FLLwJI-rEgkYYF42KHqxuqB8";
  const BaseURL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US'`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};
export const fetchSearch = async (query) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDkzNGQ2NGNkZmZiODE1MjA1ZjMzOGJkNTE4NTA2OCIsIm5iZiI6MTcyNzI4MzQxNi44MDQyOTMsInN1YiI6IjY2ZGYzNzAzMTgyMTE0ZWQ2NDNhZTExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNKkmwDvShSWrUJtxM4FLLwJI-rEgkYYF42KHqxuqB8";
  const BaseURL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
}