/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 14:42:10
 */

'use strict';

module.exports = {
    up(queryInterface, DataTypes) {
        return queryInterface.createTable('users', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: '用户名',
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: '邮箱',
            },
            avatar_url: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: '用户头像',
            },
            password_digest: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: '密码',
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                comment: '状态',
            },
            created_at: {
                type: DataTypes.DATE,
                comment: '创建时间',
            },
            updated_at: {
                type: DataTypes.DATE,
                comment: '更新时间',
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('users');
    },
};
