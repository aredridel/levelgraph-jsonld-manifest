module.exports = function addManifest(db) {
    if (!db.methods) db.methods = {
        search: { type: 'async' },
        searchStream: { type: 'readable' }
    }
     
    if (!db.methods.jsonld) db.methods.jsonld = {
        type: 'object',
        methods: {
            get: { type: 'async' },
            put: { type: 'async' }
        }
    }

    return db
}
