import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <h3>1. What is context API?</h3>
      <p>
        Usually, data is passed from parent to children by props in react. When
        data is passed from components to components by props then props have to
        set every component. But context API provides us exchange or passing
        data from components to components without prop drilling. So context API
        is the structure that gives us power for exchanging or passing data
        without props.
      </p>
      <h3>2. What is semantice element?</h3>
      <p>
        Semantic elements mean meaningful elements that humans and machines can
        understand the purpose of elements and the content inside elements.
        Elements such as Header, Footer, Article, and Section all are considered
        semantic elements because they accurately describe the purpose of the
        element and the content type that is inside them.
      </p>
      <h3>3. What is difference between inline and block element?</h3>
      <p>
        A block-level element always starts on a new line. An inline element
        does not start on a new line. A block-level element takes up full width
        available. An inline element takes up as much width as necessary.
        Block-level element such as p, div, section etc and inline element such
        as span, a, img etc.
      </p>
    </div>
  );
};

export default Blogs;
