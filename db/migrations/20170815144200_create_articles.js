/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 14:43:23
 */

'use strict';

module.exports = {
    up(queryInterface, DataTypes) {
        return queryInterface.createTable('articles', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                comment: '标题',
            },
            content: {
                type: DataTypes.TEXT,
                comment: '文章内容',
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                comment: '状态',
            },
            user_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                comment: '用户ID',
            },
            like_count: {
                type: DataTypes.INTEGER,
                comment: '喜欢数',
                defaultValue: 0,
            },
            view_count: {
                type: DataTypes.INTEGER,
                comment: '浏览数',
                defaultValue: 0,
            },
            release_at: {
                type: DataTypes.DATE,
                comment: '发表时间',
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
        return queryInterface.dropTable('articles');
    },
};
