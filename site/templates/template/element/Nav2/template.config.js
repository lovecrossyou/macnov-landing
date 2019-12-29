import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    isScrollLink: true,
    wrapper: {
      className: 'header2 home-page-wrapper',
    },
    page: {
      className: 'home-page',
    },
    logo: {
      className: 'header2-logo',
      children: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZkAAAA+CAMAAADOFZYeAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA8YAQE99SQ4lYCs6SuhjWTvhe2+3pwXstIG4+OnED/LOtn5qNa2Y2KKR3Y0nkx6gxBvUkHISXdOATBgQAAAk1SURBVHja7Z3pupowEIajoiirrCruC+7i7uH+r6xPW3vwJPkC1mJtH7+/AwHnzUwmQ05LpEHh9+VuFfJWTtLjh7Qgb+Wk/mNkPPJWTjo8RqZM3spJhTeZF9WbzKvqQTImeeunXo2MW/ypNnnrtcj8kkVSZNQbw6h8fVrB8S/2/Ma6s6tDXzVNNRqMl5UWSVdPah1bRon8v3o0Zs7fNYljItKuEbHP6fvhT8euLw6FWS02RZArja1adq2+VfCcaLSsSyRdUn051lXTMaNhddrsCa9V5nJtFQbhqtI+7Ul27RVFeRky13VGREbqRnA31CX7rsk1DTr80U5d3aKvPQymJTGWUD98LVzGMri0GYzVG59Ym2FjR1JV6izHvum5rudEi3P99AJkyj9/OSYz11zR/aoDTRPOxJa3FmBcxGxaWoH35C57R2eicl/ywxAm1srCo9KBHuA7lJIhKb2/TaZ1eWDsiM5SbT3G2lSA384WuqP7dd4HqiBp72EK++BOroJ2pBdGudYY65FZ9lyv7ET66BberjgZbYeD4WJcnFZ2Su5kAuuxwb+gKS1SLq9ys5MaY/nHxMENT5y2QXatwKDvV78ExonJHbdTafR1zkTVZp5kjEH8oNTbRFZOvXxEGNXFc2NNrqo5qaPbvIAcCWnObpMY4+lA1Fiu50mmEj8sLRltE6drcucrbPZXr4FwTENzUlNuqVHOR2/boyeGo7w4mbh53+eKOlUwZMt/inrPyyQy0sN4mlw9oW3DG8R95utKnmTq8eMafI7WzbS92n/xXFoj3bjWj7/XilJABgRRYwtytcwQ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',
    },
    LinkMenu: {
      className: 'header2-menu',
      children: [
        {
          name: 'linkNav',
          to: '当前页面 ID 地址，参考如上',
          children: '导航名称',
          className: 'menu-item',
        },
      ],
    },
    mobileMenu: {
      className: 'header2-mobile-menu',
    },
  },
};
