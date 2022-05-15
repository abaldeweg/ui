<template>
  <article>
    <b-table hover>
      <table aria-label="Test">
        <thead>
          <tr>
            <th scope="col">Header</th>
            <th scope="col">Header</th>
            <th scope="col">Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1</td>
            <td>Row 1</td>
            <td>Row 1</td>
          </tr>
          <tr>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
          </tr>
          <tr>
            <td>Row 3</td>
            <td>Row 3</td>
            <td>Row 3</td>
          </tr>
          <tr>
            <td colspan="3">Row 4</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="col">Footer</th>
            <th scope="col">Footer</th>
            <th scope="col">Footer</th>
          </tr>
        </tfoot>
      </table>
    </b-table>

    <br />
    <br />

    <b-table>
      <table class="table" aria-label="Test">
        <tbody>
          <tr>
            <th scope="row">Header</th>
            <td>Column</td>
          </tr>
          <tr>
            <th scope="row">Header</th>
            <td>Column</td>
          </tr>
          <tr>
            <th scope="row">Header</th>
            <td>Column</td>
          </tr>
        </tbody>
      </table>
    </b-table>
  </article>
</template>

<script>
import BTable from '../components/BTable/BTable.vue'

export default {
  name: 'b-table-view',
  components: {
    BTable,
  },
}
</script>
