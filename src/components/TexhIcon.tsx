export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return <Component className="h-12 w-12 text-primary-500" />;
};
