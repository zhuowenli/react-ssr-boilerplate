/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 14:43:23
 */

'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable('articles', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING,
            },
            content: {
                type: Sequelize.TEXT,
            },
            created_at: {
                type: Sequelize.DATE,
            },
            updated_at: {
                type: Sequelize.DATE,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
            },
        });
    },

    down(queryInterface) {
        return queryInterface.dropTable('articles');
    },
};
