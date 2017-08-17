/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 15:18:10
 */

'use strict';

import crypto from 'crypto';

export default function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [ 1, 50 ],
            },
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
            set(val) {
                this.setDataValue('email', val.toLowerCase());
            },
        },
        passwordDigest: {
            type: DataTypes.STRING,
            field: 'password_digest',
            validate: {
                notEmpty: true,
                len: [ 8, 128 ],
            },
        },
        password: {
            type: DataTypes.VIRTUAL,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [ 8, 128 ],
            },
        },
        passwordConfirmation: {
            type: DataTypes.VIRTUAL,
        },
    },{
        underscored: true,
        tableName: 'users',
    });

    User.associate = function(models) {
        User.hasMany(models.Article, { foreignKey: 'user_id' });
    };

    function hasSecurePassword(user) {
        if (user.password != user.passwordConfirmation) {
            return sequelize.Promise.reject(
                new Error('Password confirmation doesn\'t match Password')
            );
        }

        const salt = 'abcdefghijklmnopqrstuvwxyz';
        const hash = crypto.pbkdf2Sync(user.password, salt, 4096, 60);

        user.passwordDigest = hash.toString('hex');

        return sequelize.Promise.resolve(user);
    }

    User.beforeCreate((user) => {
        if (user.password) {
            return hasSecurePassword(user);
        }
    });

    User.beforeUpdate((user) => {
        if (user.password) {
            return hasSecurePassword(user);
        }
    });
    return User;
}
