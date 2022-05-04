const test = (req: any, res: any) => {
  console.log(req);

  res.status(200).json({ message: 'lambda' });
};

export default test;
