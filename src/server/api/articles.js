/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 15:33:43
 */

'use strict';

import models from '../models';

export async function fetchArticles(query = {}) {
    let page = parseInt(query.page, 10) || 1;
    let limit = parseInt(query.pre_page, 10) || 10;

    page = page > 0 ? page : 1;
    limit = limit > 0 ? limit : 10;

    const articles_query = {
        include: [ {
            model: models.User,
            attributes: [ 'id', 'name' ],
        } ],
        attributes: [ 'id', 'title', 'description', 'content', 'created_at' ],
        order: [ [ 'created_at', 'DESC' ] ],
        offset: ( page - 1 ) * limit,
        limit: limit,
    };

    const [ articleCount, articles ] = await Promise.all([
        models.Article.count(),
        models.Article.findAll(articles_query),
    ]);

    return {
        data: articles,
        metadata: { page, count: articleCount, pre_page: limit },
    };
}

export async function fetchArticlesById(id) {
    const data = await models.Article.findOne({
        where: { id },
    });

    return data;
}
