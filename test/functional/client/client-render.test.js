/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-09-01 17:01:09
 */

'use strict';

import { Main, history } from 'app/main';
import fetchMock from 'fetch-mock';

describe('Client Render', function() {
    before(()=> {
        history.push('/');
    });

    const barResponse = [ 'some', 'test', 'response', 'data' ];
    const articles = {
        'data':[ { 'createdAt':'2017-08-16T07:33:20.264Z','id':1,'title':'Hello world!','description':'相关描述','content':'这是一条通过console插入的数据','created_at':'2017-08-16T07:33:20.264Z','User':{ 'id':1,'name':'张三' } } ],
        'metadata':{ 'page':1,'count':1,'pre_page':10 },
    };

    beforeEach((done) => {
        fetchMock.get('/api/bar', {
            status: 200,
            body: { bar: barResponse },
            headers:  {
                'Content-Type': 'application/json',
                'Content-Length': '1',
            },
        });

        fetchMock.get('/api/articles', {
            status: 200,
            body: articles,
            headers:  {
                'Content-Type': 'application/json',
                'Content-Length': '1',
            },
        });
        this.wrapper = mount(Main);
        defer(done);
    });

    afterEach(()=> {
        this.wrapper.unmount();
        fetchMock.restore();
    });

    it('should set the page title', ()=> {
        expect(document.title).to.eql('React SSR Boilerplate');
    });

    it('should set the meta description and chartset', () => {
        const metaCharset = document.querySelector('meta[charset]');
        expect(metaCharset.getAttribute('charset')).to.eql('utf-8');
        const metaDesc = document.querySelector('meta[name=description]');
        expect(metaDesc.getAttribute('content')).to.contain('React SSR Boilerplate');
    });

    describe('Routes', ()=> {
        describe('404', ()=> {
            beforeEach((done) => {
                history.push('/no-match-found');
                defer(done);
            });

            it('should render the 404 route when no match found', ()=> {
                expect(this.wrapper.find('.NotFoundRoute')).to.have.length(1);
            });
        });

        describe('/oops', ()=> {
            beforeEach((done) => {
                history.push('/oops');
                defer(done);
            });

            it('should render the .OopsRoute', ()=> {
                expect(this.wrapper.find('.OopsRoute')).to.have.length(1);
            });
        });

        describe('/bar', ()=> {
            beforeEach((done) => {
                history.push('/bar');
                defer(done);
            });

            it('should render the .BarRoute', ()=> {
                expect(this.wrapper.find('.BarRoute')).to.have.length(1);
            });

            it('should update the page title', ()=> {
                expect(document.title).to.eql('Bar | React SSR Boilerplate');
            });

            it('should render the response from /api/bar', ()=> {
                barResponse.forEach(item => {
                    const barItem = this.wrapper.find({ children: item });
                    expect(barItem).to.have.length(1);
                    expect(barItem.type()).to.eql('p');
                });
            });
        });
    });
});
