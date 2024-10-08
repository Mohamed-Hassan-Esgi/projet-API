const { DataTypes, Model } = require('sequelize');
const sequelize = require('../bdd/database');
const User = require('./User');
const Apartment = require('./Apartment'); 

class Reservation extends Model {}

Reservation.init({
    reservation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, 
            key: 'user_id'
        }
    },
    apartment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Apartment,
            key: 'apartment_id'
        }
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Reservation',
    tableName: 'Reservations',
    timestamps: false
});

module.exports = Reservation;
