module.exports = {
    dialect: 'sqlite',
    storage: 'src/database/todos.db',
    define: {
        timestamps: true,
        underscored: true
    }
}