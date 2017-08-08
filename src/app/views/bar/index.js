/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 15:14:03
 */

'use strict';

import { connect } from 'react-redux';
import DocumentMeta from 'react-helmet';
import styled from 'styled-components';
import * as barActions from '../../actions/bar.actions';
import { get } from 'app/utils';

const Block = styled.div`
    background-color: #ddd;
    border-radius: 5px;
    padding: 2px 10px;
`;

@connect(state => ({
    bar: get('bar.data')(state),
}), barActions)

export default class BarRoute extends React.Component {
  static defaultProps = {
      bar: [],
  };

  componentDidMount() {
      this.props.apiFetch();
  }

  render() {
      const { bar } = this.props;

      return (
          <section className='BarRoute'>
              <DocumentMeta>
                  <title>Bar</title>
              </DocumentMeta>
              <h3>Bar</h3>
              <p>This route is making an api request</p>
              <p>If you change the response from <code>server/api/bar</code> endpoint</p>
              <p>And then navigate away and back to this route, you'll see the changes immediately</p>
              <Block>
                  { bar.map((item, i) => <p key={i}>{item}</p>) }
              </Block>
          </section>
      );
  }
}
