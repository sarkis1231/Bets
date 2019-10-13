import games from '../apiGames/games';

export const IMPORT_DATA = 'IMPORT_DATA';

export const fetchData = () => async dispatch => {

    const response = await games.get('/gamesData');

    dispatch({ type: IMPORT_DATA, payload: response.data });
};


