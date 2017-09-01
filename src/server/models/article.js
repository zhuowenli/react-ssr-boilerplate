/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 15:19:48
 */

'use strict';


export default function(sequelize, DataTypes) {
    const Article = sequelize.define('Article', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [ 1, 100 ],
            },
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        like_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        view_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [ 1, 250 ],
            },
        },
        release_at: {
            type: DataTypes.DATE,
        },
    },{
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'articles',
        getterMethods : {
            createdAt: function() {
                return this.created_at;
            },
        },
    });

    Article.associate = function(models) {
        Article.belongsTo(models.User, { foreignKey: 'user_id' });
    };

    return Article;
}


