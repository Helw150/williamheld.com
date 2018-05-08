export const getPostList = postEdges => {
  const postList = [];
  postEdges.forEach(postEdge => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    });
  });
  return postList;
};
