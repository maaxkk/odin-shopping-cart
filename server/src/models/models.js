const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const CartItem = sequelize.define('cartItem', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: {type: DataTypes.INTEGER},
    candleId: {type: DataTypes.INTEGER},
    amount: { type: DataTypes.INTEGER },
});

const Category = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
});

const Candle = sequelize.define('candle', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    categoryId: { type: DataTypes.INTEGER, references: { model: Category, key: 'id' } },
    title: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    imgSrc: { type: DataTypes.STRING, defaultValue: 'https://i.imgur.com/FBaxKY1.jpg' },
    amount: { type: DataTypes.INTEGER },
});

User.hasMany(CartItem, {foreignKey: 'userId'});
CartItem.belongsTo(User, {foreignKey: 'userId'});

Category.hasMany(Candle, { foreignKey: 'categoryId' });
Candle.belongsTo(Category, { foreignKey: 'categoryId' });

Candle.hasMany(CartItem, {foreignKey: 'candleId'});
CartItem.belongsTo(Candle, {foreignKey: 'candleId'});

module.exports = {
    User,
    Category,
    Candle,
    CartItem,
};
