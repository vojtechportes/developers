import { Movie } from 'model/api/Movie'
import { List } from 'model/api/List'
import { MoviesState, moviesInitialState } from 'state/actions/movies'
import { MovieDetail } from 'model/api/MovieDetail'

export const movieMock: Movie = {
  adult: false,
  backdrop_path: 'test.jpg',
  genre_ids: [],
  id: 1,
  original_language: 'en',
  original_title: 'test',
  overview: 'test test',
  popularity: 1,
  poster_path: '/test.jpg',
  release_date: '2019-05-30',
  title: 'test',
  video: false,
  vote_average: 1,
  vote_count: 1,
}

export const movieDetailMock: MovieDetail = {
  adult: false,
  backdrop_path: 'test.jpg',
  id: 1,
  original_language: 'en',
  original_title: 'test',
  overview: 'test test',
  popularity: 1,
  poster_path: '/test.jpg',
  release_date: '2019-05-30',
  title: 'test',
  video: false,
  vote_average: 1,
  vote_count: 1,
  belongs_to_collection: false,
  budget: 1,
  genres: [],
  homepage: '',
  imdb_id: 1,
  production_companies: [],
  production_countries: [],
  revenue: 1,
  runtime: 123,
  spoken_languages: [],
  status: 'test',
  tagline: 'test',
}

export const trendingMoviesMock: List<Movie> = {
  page: 1,
  total_pages: 10,
  total_results: 1000,
  results: [movieMock],
}

export const moviesMockStateRehydrated: MoviesState = {
  ...moviesInitialState,
  trending: {
    total_pages: 10,
    total_results: 1000,
    results: {
      [1]: [movieMock],
    },
  },
}
export const moviesMockState: MoviesState = {
  ...moviesInitialState,
  trending: {
    total_pages: 0,
    total_results: 0,
    results: {
      [1]: [movieMock],
    },
  },
}
