/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-17 11:55:17
 */

'use strict';

import sinon from 'sinon';
import { FETCH_ARTICLES } from './types';
import * as request from '../utils/request';
import { fetchArticles } from './home';

describe('Home Actions', ()=> {
    describe('fetchArticles()', ()=> {
        beforeEach(()=> {
            sinon.stub(request, 'fetch');
        });

        afterEach(()=> {
            request.fetch.restore();
        });

        it('returns an action with type FETCH_ARTICLES', () => {
            expect(fetchArticles()).to.have.property('type', FETCH_ARTICLES);
        });

        it('calls fetch with /api/articles/1', () => {
            fetchArticles();
            expect(request.fetch).to.have.been.calledWith('/api/articles/1');
        });

        it('resolves the promise from fetching /api/articles/1', async() => {
            const requestResolve = { some: 'data' };
            request.fetch.returns(Promise.resolve(requestResolve));

            expect(fetchArticles().payload.promise).to.eventually.eql(requestResolve);
        });
    });
});
