const getCrumbs = (props, routes) => {
  const crumbs = routes
    // Get all routes that contain the current one.
    .filter(({ path }) => props.match.path.includes(path))
    // Swap out any dynamic routes with their param values.
    .map(({ path, ...rest }) => ({
      path: Object.keys(props.match.params).length
        ? Object.keys(props.match.params).reduce(
            (path, param) =>
              path.replace(`:${param}`, props.match.params[param]),
            path
          )
        : path,
      ...rest,
    }));

  return crumbs;
};

export default getCrumbs;
