export const server = () => {
  const health = (req: any, res: any) => {
    res.render("Not bad!");
  };

  return {
    health,
  };
};
