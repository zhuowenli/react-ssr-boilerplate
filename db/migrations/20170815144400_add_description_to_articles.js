/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 14:44:28
 */

'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'articles',
            'description',
            Sequelize.STRING
        );
    },

    down(queryInterface) {
        return queryInterface.removeColumn('articles', 'description');
    },
};
