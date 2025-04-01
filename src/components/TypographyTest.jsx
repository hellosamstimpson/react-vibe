function TypographyTest() {
    return (
        <div className="typography-test">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>

            <p>
                This is a standard paragraph. It includes <strong>bold text</strong>, <em>italic text</em>,
                <a href="#">a link</a>, and <code>inline code</code>.
            </p>

            <blockquote>
                This is a blockquote. It’s useful for quoting long passages.
            </blockquote>

            <ul>
                <li>Unordered list item 1</li>
                <li>Unordered list item 2</li>
                <li>Unordered list item 3</li>
            </ul>

            <ol>
                <li>Ordered list item 1</li>
                <li>Ordered list item 2</li>
                <li>Ordered list item 3</li>
            </ol>

            <pre>
                <code>
                    {`function helloWorld() {
  console.log("Hello, world!");
}`}
                </code>
            </pre>

            <hr />

            <small>This is small text.</small>
        </div>
    )
}

export default TypographyTest;