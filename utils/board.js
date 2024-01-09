export const definitionBoardID = (value) => {
  switch (value) {
    case 'done':
      return 3;
    case 'process':
      return 2;
    default:
      return 1;
  }
}
