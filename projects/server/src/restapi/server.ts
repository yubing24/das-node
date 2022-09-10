export const server = () => {
  const health = (req, res) => {
    return "not bad";
  };

  return {
    health,
  };
};
