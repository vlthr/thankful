<template lang="pug">
div
  v-data-table(:headers="headers", :items="donations", :pagination.sync='pagination', hide-actions)
    template(slot='items', slot-scope='props')
      td
        a(:href="'https://ropsten.etherscan.io/tx/' + props.item.transaction" target="_blank")
            | {{props.item.date.toLocaleDateString()}}
      td
        a(:href="props.item.url" target="_blank")
          | {{props.item.name}}
      td.text-xs-right 
        | ${{props.item.usdAmount | fixed(2)}}
</template>
<script>
export default {
  data: () => ({
    donations: [],
    headers: [
      { text: 'Date', value: 'date' },
      { text: 'Creator', value: 'name' },
      { text: 'Amount', value: 'usdAmount', align: 'right' },
    ],
    pagination: {
      sortBy: 'date',
      descending: 'false',
      rowsPerPage: -1,
    },
  }),
  props: {},
  methods: {
    refresh() {
      this.$db
        .getDonations()
        .then(ds => {
          this.donations = ds;
        })
        .catch(console.error);
    },
  },
  created() {
    this.refresh();
  },
};
</script>
