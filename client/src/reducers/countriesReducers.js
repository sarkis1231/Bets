import { IMPORT_DATA } from './../actions';

// const countries = {
//   Armenia: {
//     ID: 0,
//     games: {
//       football: {
//         ID: 0,
//         gameDetails: [
//           {
//             ID: 0,
//             teamName: 'ararat',
//             over: 1,
//             under: 2,
//             win: 1.5,
//           },
//           {
//             ID: 1,
//             teamName: 'sunik',

//             over: 2,
//             under: 3,
//             win: 2.5,
//           },
//         ],
//       },
//       tennis: {
//         ID: 1,
//         gameDetails: [
//           {
//             ID: 0,
//             teamName: 'ararat',
//             over: 12,
//             under: 25,
//             win: 1.54,
//           },
//           {
//             ID: 1,
//             teamName: 'sunik',

//             over: 25,
//             under: 73,
//             win: 2.58,
//           },
//         ],
//       },
//       basketball: {
//         ID: 2,
//         gameDetails: [
//           {
//             ID: 0,
//             teamName: 'ararat',

//             over: 16,
//             under: 62,
//             win: 1.59,
//           },
//           {
//             ID: 1,
//             teamName: 'sunik',
//             over: 23,
//             under: 33,
//             win: 2.35,
//           },
//         ],
//       },
//     },
//   },
//   Syria: {
//     ID: 1,
//     games: {
//       football: {
//         ID: 0,
//         gameDetails: [
//           {
//             ID: 0,
//             teamName: 'itihad',
//             over: 31,
//             under: 25,
//             win: 16.5,
//           },
//           {
//             ID: 1,
//             teamName: 'wa7de',
//             over: 27,
//             under: 53,
//             win: 2.55,
//           },
//         ],
//       },
//       tennis: {
//         ID: 1,
//         gameDetails: [
//           {
//             ID: 0,
//             teamName: 'itihad',
//             over: 18,
//             under: 12,
//             win: 1.52,
//           },
//           {
//             ID: 1,
//             teamName: 'wa7de',
//             over: 12,
//             under: 23,
//             win: 2.52,
//           },
//         ],
//       },
//       basketball: {
//         ID: 2,
//         gameDetails: [
//           {
//             ID: 0,
//             teamName: 'itihad',
//             over: 11,
//             under: 12,
//             win: 11.5,
//           },
//           {
//             ID: 1,
//             teamName: 'wa7de',
//             over: 12,
//             under: 31,
//             win: 2.51,
//           },
//         ],
//       },
//     },
//   },
// };

// const countries = {
//   Syria: {
//     ID: 1,
//     games: {
//       football: {
//         ID: 0,
//         gameDetails: [
//           {
//             ID: 0,
//             teamName: 'itihad',
//             over: 31,
//             under: 25,
//             win: 16.5,
//           },
//           {
//             ID: 1,
//             teamName: 'wa7de',
//             over: 27,
//             under: 53,
//             win: 2.55,
//           },
//         ],
//       },
//       tennis: {
//         ID: 1,
//         gameDetails: [
//           {
//             ID: 0,
//             teamName: 'itihad',
//             over: 18,
//             under: 12,
//             win: 1.52,
//           },
//           {
//             ID: 1,
//             teamName: 'wa7de',
//             over: 12,
//             under: 23,
//             win: 2.52,
//           },
//         ],
//       },
//       basketball: {
//         ID: 2,
//         gameDetails: [
//           {
//             ID: 0,
//             teamName: 'itihad',
//             over: 11,
//             under: 12,
//             win: 11.5,
//           },
//           {
//             ID: 1,
//             teamName: 'wa7de',
//             over: 12,
//             under: 31,
//             win: 2.51,
//           },
//         ],
//       },
//     },
//   },
// };

export default (state = {}, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case IMPORT_DATA:
      return { ...state, ...action.payload }

    default:
      return state;
  }
};
