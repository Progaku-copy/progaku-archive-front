type Props = {
  children: string;
};

const Text = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Text;
