define(function() {
    return function(tableId, url, columns) {
        return {
            rows: [
                {
                    id: tableId,
                    view: "datatable",
                    columns: columns,
                    url: url,
                    save: url,
                    autoheight: true,
                    autowidth: true,
                    pager: tableId + 'Pager',
                    datafetch: 5,


                },
                {
                    view: "pager",
                    id: tableId + 'Pager',
                    size: 5,
                    group: 5,
                    template: "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}"
                }
            ]
        }
    }
})