<template>
  <article>
    <section>
      <h1>Heading 1</h1>
      <p>text text text text text text text text text text</p>
      <h2>Heading 2</h2>
      <p>text text text text text text text text text text</p>
      <h3>Heading 3</h3>
      <p>text text text text text text text text text text</p>
      <h4>Heading 4</h4>
      <p>text text text text text text text text text text</p>
      <h5>Heading 5</h5>
      <p>text text text text text text text text text text</p>
      <h6>Heading 6</h6>
      <p>text text text text text text text text text text</p>
    </section>

    <section>
      <p><a href="#">link</a></p>
      <p><strong>bold</strong></p>
      <p><code>code</code></p>
      <p><em>emphasis</em></p>
      <p><em>italic</em></p>
      <p><strong>strong</strong></p>
    </section>

    <section>
      <h2>Ordered List</h2>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>
          Item 3
          <ol>
            <li>Item 3.1</li>
            <li>
              Item 3.2
              <ol>
                <li>Item 3.2.1</li>
                <li>Item 3.2.2</li>
              </ol>
            </li>
            <li>Item 3.3</li>
          </ol>
        </li>
        <li>Item 4</li>
      </ol>
    </section>

    <section>
      <h2>Unordered List</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>
          Item 3
          <ul>
            <li>Item 3.1</li>
            <li>
              Item 3.2
              <ul>
                <li>Item 3.2.1</li>
                <li>Item 3.2.2</li>
              </ul>
            </li>
            <li>Item 3.3</li>
          </ul>
        </li>
        <li>Item 4</li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'b-global-view',
}
</script>
